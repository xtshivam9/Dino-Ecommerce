# from audioop import reverse
from django.contrib.auth import authenticate, login,logout
from imaplib import _Authenticator
from django.urls import reverse
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import ContactForm
from core.forms import ContactForm
from django.conf import settings
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView, View
from django.shortcuts import redirect
from django.utils import timezone
from .forms import CheckoutForm, CouponForm, RefundForm
from .models import Item, OrderItem, Order, BillingAddress, Payment, Coupon, Refund, Category, USD_TO_INR
from django.http import HttpResponseRedirect, JsonResponse
from django.template import RequestContext
from django.shortcuts import render
from django.core.validators import EmailValidator
from .forms import ContactForm
from django.shortcuts import render, redirect


# Create your views here.
import random
import string
import stripe
from django.core.mail import send_mail

from core import forms
stripe.api_key = settings.STRIPE_SECRET_KEY


def _stripe_configured():
    key = (getattr(settings, 'STRIPE_SECRET_KEY', '') or '').strip()
    return bool(key) and key != 'YOUR_STRIPE_SECRET_KEY_HERE'


def send_contact_email(request):
    # Your email sending logic here
    return JsonResponse({'message': 'Email sent successfully'})


def create_ref_code():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=20))


class PaymentView(View):
    def get(self, *args, **kwargs):
        # order
        order = Order.objects.get(user=self.request.user, ordered=False)
        if order.billing_address:
            context = {
                'order': order,
                'DISPLAY_COUPON_FORM': False,
                'STRIPE_PUBLIC_KEY': settings.STRIPE_PUBLIC_KEY,
            }
            return render(self.request, "payment.html", context)
        else:
            messages.warning(
                self.request, "u have not added a billing address")
            return redirect("core:checkout")

    def post(self, *args, **kwargs):
        order = Order.objects.get(user=self.request.user, ordered=False)
        token = self.request.POST.get('stripeToken')
        amount = int(order.get_total() * 100)
        try:
            if not _stripe_configured():
                # Development fallback: process as dummy payment when Stripe secret is not configured.
                payment = Payment()
                payment.stripe_charge_id = "dummy_" + get_random_string(length=16)
                payment.user = self.request.user
                payment.amount = order.get_total()
                payment.save()

                order.ordered = True
                order.payment = payment
                order.ref_code = create_ref_code()
                order.save()

                messages.success(self.request, "Test payment successful (dummy mode).")
                if self.request.headers.get('x-requested-with') == 'XMLHttpRequest' or self.request.GET.get('ajax') == '1':
                    return JsonResponse({"status": "success", "message": "Dummy test payment successful"})
                return redirect("/my-orders/?payment_success=1")

            if not token:
                raise ValueError("Missing payment source (stripeToken). Please use the Recommended Dummy Payment for testing.")

            stripe.api_key = settings.STRIPE_SECRET_KEY
            charge = stripe.Charge.create(
                amount=amount,  # cents
                currency="inr",
                source=token
            )
            # create the payment
            payment = Payment()
            payment.stripe_charge_id = charge['id']
            payment.user = self.request.user
            payment.amount = order.get_total()
            payment.save()

            # assign the payment to the order
            order.ordered = True
            order.payment = payment
            # TODO : assign ref code
            order.ref_code = create_ref_code()
            order.save()

            messages.success(self.request, "Order was successful")
            if self.request.headers.get('x-requested-with') == 'XMLHttpRequest' or self.request.GET.get('ajax') == '1':
                return JsonResponse({"status": "success", "message": "Payment successful"})
            return redirect("/my-orders/?payment_success=1")

        except stripe.error.CardError as e:
            body = e.json_body
            err = body.get('error', {})
            if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({"status": "error", "message": err.get('message')})
            messages.error(self.request, f"{err.get('message')}")
            return redirect("/")
        except Exception as e:
            if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({"status": "error", "message": str(e)})
            messages.error(self.request, "An error occurred during payment.")
            return redirect("/")


class HomeView(ListView):
    template_name = "index.html"
    queryset = Item.objects.filter(is_active=True)
    context_object_name = 'items'


class OrderSummaryView(View):
    def get(self, *args, **kwargs):
        # Authenticated users: load DB order
        if self.request.user.is_authenticated:
            try:
                order = Order.objects.get(user=self.request.user, ordered=False)
                context = {'object': order}
            except ObjectDoesNotExist:
                context = {}
            return render(self.request, 'order_summary.html', context)

        # Guest users: build a cart from session
        cart = self.request.session.get('guest_cart', {})
        guest_items = []
        total = 0
        for slug, qty in cart.items():
            try:
                item = Item.objects.get(slug=slug, is_active=True)
                price = item.discount_price if item.discount_price else item.price
                price = round(price * USD_TO_INR, 2)
                subtotal = price * qty
                total += subtotal
                guest_items.append({
                    'item': item,
                    'quantity': qty,
                    'subtotal': subtotal,
                })
            except Item.DoesNotExist:
                pass
        context = {
            'guest_cart': guest_items,
            'guest_total': total,
        }
        return render(self.request, 'order_summary.html', context)


class ShopView(ListView):
    model = Item
    paginate_by = 6
    template_name = "shop.html"


class ItemDetailView(DetailView):
    model = Item
    template_name = "product-detail.html"


# class CategoryView(DetailView):
#     model = Category
#     template_name = "category.html"

class CategoryView(View):
    def get(self, *args, **kwargs):
        category = Category.objects.get(slug=self.kwargs['slug'])
        item = Item.objects.filter(category=category, is_active=True)
        context = {
            'object_list': item,
            'category_title': category,
            'category_description': category.description,
            'category_image': category.image
        }
        return render(self.request, "category.html", context)


# class CheckoutView(View):
#     def get(self, *args, **kwargs):
#         try:
#             order = Order.objects.get(user=self.request.user, ordered=False)
#             form = CheckoutForm()
#             context = {
#                 'form': form,
#                 'couponform': CouponForm(),
#                 'order': order,
#                 'DISPLAY_COUPON_FORM': True
#             }
#             return render(self.request, "checkout.html", context)

#         except ObjectDoesNotExist:
#             messages.info(self.request, "You do not have an active order")
#             return redirect("core:checkout")

#     def post(self, *args, **kwargs):
#         form = CheckoutForm(self.request.POST or None)
#         try:
#             order = Order.objects.get(user=self.request.user, ordered=False)
#             print(self.request.POST)
#             if form.is_valid():
#                 street_address = form.cleaned_data.get('street_address')
#                 apartment_address = form.cleaned_data.get('apartment_address')
#                 country = form.cleaned_data.get('country')
#                 zip = form.cleaned_data.get('zip')
#                 # add functionality for these fields
#                 # same_shipping_address = form.cleaned_data.get(
#                 #     'same_shipping_address')
#                 # save_info = form.cleaned_data.get('save_info')
#                 payment_option = form.cleaned_data.get('payment_option')
#                 billing_address = BillingAddress(
#                     user=self.request.user,
#                     street_address=street_address,
#                     apartment_address=apartment_address,
#                     country=country,
#                     zip=zip,
#                     address_type='B'
#                 )
#                 billing_address.save()
#                 order.billing_address = billing_address
#                 order.save()

#                 # add redirect to the selected payment option
#                 if payment_option == 'S':
#                     return redirect('core:payment', payment_option='stripe')
#                 elif payment_option == 'P':
#                     return redirect('core:payment', payment_option='paypal')
#                 else:
#                     messages.warning(
#                         self.request, "Invalid payment option select")
#                     return redirect('core:checkout')
#         except ObjectDoesNotExist:
#             messages.error(self.request, "You do not have an active order")
#             return redirect("core:order-summary")


def add_to_cart(request, slug):
    item = get_object_or_404(Item, slug=slug)

    if not request.user.is_authenticated:
        # ----- Guest: store in session -----
        cart = request.session.get('guest_cart', {})
        if slug in cart:
            cart[slug] += 1
        else:
            cart[slug] = 1
        request.session['guest_cart'] = cart
        request.session.modified = True
        messages.info(request, "Item was added to your cart.")
        return redirect("core:order-summary")

    # ----- Authenticated user: store in DB -----
    order_item, created = OrderItem.objects.get_or_create(
        item=item,
        user=request.user,
        ordered=False
    )
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug=item.slug).exists():
            order_item.quantity += 1
            order_item.save()
            messages.info(request, "Item qty was updated.")
        else:
            order.items.add(order_item)
            messages.info(request, "Item was added to your cart.")
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(
            user=request.user, ordered_date=ordered_date)
        order.items.add(order_item)
        messages.info(request, "Item was added to your cart.")
    return redirect("core:order-summary")


def remove_from_cart(request, slug):
    item = get_object_or_404(Item, slug=slug)

    if not request.user.is_authenticated:
        # ----- Guest -----
        cart = request.session.get('guest_cart', {})
        if slug in cart:
            del cart[slug]
            request.session['guest_cart'] = cart
            request.session.modified = True
            messages.info(request, "Item was removed from your cart.")
        else:
            messages.info(request, "Item was not in your cart.")
        return redirect("core:order-summary")

    # ----- Authenticated -----
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                item=item, user=request.user, ordered=False
            )[0]
            order.items.remove(order_item)
            messages.info(request, "Item was removed from your cart.")
            return redirect("core:order-summary")
        else:
            messages.info(request, "Item was not in your cart.")
            return redirect("core:product", slug=slug)
    else:
        messages.info(request, "You don't have an active order.")
        return redirect("core:product", slug=slug)


def remove_single_item_from_cart(request, slug):
    item = get_object_or_404(Item, slug=slug)

    if not request.user.is_authenticated:
        # ----- Guest -----
        cart = request.session.get('guest_cart', {})
        if slug in cart:
            if cart[slug] > 1:
                cart[slug] -= 1
            else:
                del cart[slug]
            request.session['guest_cart'] = cart
            request.session.modified = True
            messages.info(request, "Item qty was updated.")
        else:
            messages.info(request, "Item was not in your cart.")
        return redirect("core:order-summary")

    # ----- Authenticated -----
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                item=item, user=request.user, ordered=False
            )[0]
            if order_item.quantity > 1:
                order_item.quantity -= 1
                order_item.save()
            else:
                order.items.remove(order_item)
            messages.info(request, "Item qty was updated.")
            return redirect("core:order-summary")
        else:
            messages.info(request, "Item was not in your cart.")
            return redirect("core:product", slug=slug)
    else:
        messages.info(request, "You don't have an active order.")
        return redirect("core:product", slug=slug)


def get_coupon(request, code):
    try:
        coupon = Coupon.objects.get(code=code)
        return coupon
    except ObjectDoesNotExist:
        messages.info(request, "This coupon does not exist")
        return redirect("core:checkout")


class AddCouponView(View):
    def post(self, *args, **kwargs):
        form = CouponForm(self.request.POST or None)
        if form.is_valid():
            try:
                code = form.cleaned_data.get('code')
                order = Order.objects.get(
                    user=self.request.user, ordered=False)
                order.coupon = get_coupon(self.request, code)
                order.save()
                messages.success(self.request, "Successfully added coupon")
                return redirect("core:checkout")

            except ObjectDoesNotExist:
                messages.info(self.request, "You do not have an active order")
                return redirect("core:checkout")


class LoginView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "login.html")


class RequestRefundView(View):
    def get(self, *args, **kwargs):
        form = RefundForm()
        context = {
            'form': form
        }
        return render(self.request, "request_refund.html", context)

    def post(self, *args, **kwargs):
        form = RefundForm(self.request.POST)
        if form.is_valid():
            ref_code = form.cleaned_data.get('ref_code')
            message = form.cleaned_data.get('message')
            email = form.cleaned_data.get('email')
            # edit the order
            try:
                order = Order.objects.get(ref_code=ref_code)
                order.refund_requested = True
                order.save()

                # store the refund
                refund = Refund()
                refund.order = order
                refund.reason = message
                refund.email = email
                refund.save()

                messages.info(self.request, "Your request was received")
                return redirect("core:request-refund")

            except ObjectDoesNotExist:
                messages.info(self.request, "This order does not exist")
                return redirect("core:request-refund")


def custom_404(request, exception):
    return render(request, '404.html', status=404)


# def contact(request):
#     if request.method == 'POST':
#         form = ContactForm(request.POST)
#         if form.is_valid():
#             # Process the form data
#             pass
#             return redirect('success')
#     else:
#         form = ContactForm()
#     return render(request, 'index.html', {'form': form})


def success(request):
   return HttpResponse('Success!')

def about_us(request):
    return render(request, 'about.html')

def contact_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        subject = 'Message from {}'.format(name)
        message = 'Sender Email: {}\n\n{}'.format(email, message)

        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            ['qasimzadasabuhi@mail.ru'],
            fail_silently=False,
        )

        return redirect('index.html')
    else:
        return render(request, 'contact_form.html')


def send_contact_message(request):
    if request.method == 'POST':
        # Formdan məlumatları al
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        # Burada məlumatları istədiyiniz yolla əlavə edə bilərsiniz,
        # məsələn, email göndərə bilərsiniz, bazaya yazıla bilərsiniz, kimi.

        # İstəyirsinizsə, burada bir e-poçt göndərə bilərsiniz
        # məsələn, Django'nun built-in e-poçt funksiyaları ilə:
        # from django.core.mail import send_mail
        # send_mail('Subject', 'Message', 'from@example.com', ['to@example.com'])
        
        send_mail(subject=name, from_email=settings.EMAIL_HOST_USER,message=message,recipient_list=[email], fail_silently=False)

        # İstəkə göndəriləndə, istifadəçini qeydiyyatdan keçirin və təşəkkür səhifəsinə yönləndirin
        return redirect('core:home')

    # POST metodunda olmayan digər bütün hallarda, sadəcə forma səhifəsini göstərin
    return render(request, 'index.html')


def login_view(request):
    next_url = request.GET.get('next', '') or request.POST.get('next', '')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # --- Merge guest session cart into DB order ---
            cart = request.session.get('guest_cart', {})
            if cart:
                order_qs = Order.objects.filter(user=user, ordered=False)
                if order_qs.exists():
                    order = order_qs[0]
                else:
                    order = Order.objects.create(
                        user=user, ordered_date=timezone.now()
                    )
                for slug, qty in cart.items():
                    try:
                        item = Item.objects.get(slug=slug)
                        order_item, created = OrderItem.objects.get_or_create(
                            item=item, user=user, ordered=False
                        )
                        if not created:
                            order_item.quantity += qty
                        else:
                            order_item.quantity = qty
                        order_item.save()
                        if not order.items.filter(item__slug=slug).exists():
                            order.items.add(order_item)
                    except Item.DoesNotExist:
                        pass
                del request.session['guest_cart']
                request.session.modified = True
            # Redirect to next URL or home
            if next_url:
                return redirect(next_url)
            return redirect('core:home')
        else:
            return render(request, 'login.html', {
                'error_message': 'Invalid username or password.',
                'next': next_url,
            })
    else:
        return render(request, 'login.html', {'next': next_url})


class CheckoutView(View):
    def get(self, *args, **kwargs):
        # Require login — redirect guests to login with ?next=/checkout/
        if not self.request.user.is_authenticated:
            messages.info(self.request, "Please log in to proceed to checkout.")
            return redirect(f"/login/?next=/checkout/")

        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            form = CheckoutForm()
            context = {
                'form': form,
                'couponform': CouponForm(),
                'order': order,
                'DISPLAY_COUPON_FORM': True,
                'STRIPE_PUBLIC_KEY': settings.STRIPE_PUBLIC_KEY,
            }
            return render(self.request, "checkout.html", context)

        except ObjectDoesNotExist:
            messages.info(self.request, "You do not have an active order")
            return redirect("core:checkout")

    def post(self, *args, **kwargs):
        form = CheckoutForm(self.request.POST or None)
        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            print(self.request.POST)
            if form.is_valid():
                street_address = form.cleaned_data.get('street_address')
                apartment_address = form.cleaned_data.get('apartment_address')
                country = form.cleaned_data.get('country')
                zip = form.cleaned_data.get('zip')
                # add functionality for these fields
                # same_shipping_address = form.cleaned_data.get(
                #     'same_shipping_address')
                # save_info = form.cleaned_data.get('save_info')
                payment_option = form.cleaned_data.get('payment_option')
                billing_address = BillingAddress(
                    user=self.request.user,
                    street_address=street_address,
                    apartment_address=apartment_address,
                    country=country,
                    zip=zip,
                    address_type='B'
                )
                billing_address.save()
                order.billing_address = billing_address
                order.save()

                # add redirect to the selected payment option
                if payment_option == 'S':
                    return redirect('core:payment', payment_option='stripe')
                elif payment_option == 'P':
                    return redirect('core:payment', payment_option='paypal')
                elif payment_option == 'D':
                    return redirect('core:dummy-payment')
                else:
                    messages.warning(
                        self.request, "Invalid payment option select")
                    return redirect('core:checkout')
            else:
                messages.error(self.request, "Please complete all required fields correctly.")
                context = {
                    'form': form,
                    'couponform': CouponForm(),
                    'order': order,
                    'DISPLAY_COUPON_FORM': True,
                    'STRIPE_PUBLIC_KEY': settings.STRIPE_PUBLIC_KEY,
                }
                return render(self.request, "checkout.html", context)

        except ObjectDoesNotExist:
            messages.error(self.request, "You do not have an active order")
            return redirect("core:order-summary")

        messages.error(self.request, "An error occurred. Please try again.")
        return redirect("core:checkout")
    
def logout_view(request):
    logout(request)
    return redirect('core:login')


@login_required
def profile_view(request):
    return render(request, 'profile.html')

class MyOrdersView(LoginRequiredMixin, View):
    def get(self, *args, **kwargs):
        orders = Order.objects.filter(
            user=self.request.user,
            ordered=True
        ).order_by('-ordered_date')
        context = {
            'orders': orders
        }
        return render(self.request, 'my_orders.html', context)

from django.utils.crypto import get_random_string

class DummyPaymentView(View):
    def post(self, *args, **kwargs):
        return self.get(*args, **kwargs)

    def get(self, *args, **kwargs):
        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            
            payment = Payment()
            payment.stripe_charge_id = "dummy_" + get_random_string(length=16)
            payment.user = self.request.user
            payment.amount = order.get_total()
            payment.save()

            # assign the payment to the order
            order_items = order.items.all()
            order_items.update(ordered=True)
            for item in order_items:
                item.save()

            order.ordered = True
            order.payment = payment
            order.ref_code = create_ref_code()
            order.save()

            messages.success(self.request, "Dummy testing order was successful!")
            if self.request.headers.get('x-requested-with') == 'XMLHttpRequest' or self.request.GET.get('ajax') == '1':
                return JsonResponse({"status": "success", "message": "Dummy payment successful"})
            return redirect("/my-orders/?payment_success=1")
            
        except ObjectDoesNotExist:
            if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({"status": "error", "message": "You do not have an active order."})
            messages.error(self.request, "You do not have an active order")
            return redirect("core:order-summary")
        except Exception as e:
            if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({"status": "error", "message": str(e)})
            messages.error(self.request, "An error occurred during dummy payment.")
            return redirect("/")
