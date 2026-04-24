"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function Annexures() {
  return (
    <BookPageLayout chapterTitle="Annexures" chapterNum="" isContinued={false}>
      <View style={{ marginBottom: 28, alignItems: "center", marginTop: 20 }}>
        <Text
          style={{
            fontSize: 26,
            fontFamily: "Times-Bold",
            textAlign: "center",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          Annexures
        </Text>
        <View
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#000000",
            marginTop: 12,
          }}
        />
      </View>

      <Text style={styles.paragraphIndent}>
        The annexures contain supplementary technical information, complete database schemas, and configuration files that, while critical to the project's operation, were too lengthy to include in the main body of the report.
      </Text>

      <Text style={[styles.h2, { marginTop: 24 }]}>Annexure A: Complete Django Database Schema (models.py)</Text>
      
      <View style={{ backgroundColor: "#f4f4f4", padding: 12, borderRadius: 4, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Courier", fontSize: 8, lineHeight: 1.3 }}>
{`from django.db import models
from django.conf import settings
from django.shortcuts import reverse

CATEGORY_CHOICES = (('S', 'Shirt'), ('SW', 'Sport wear'), ('OW', 'Outwear'))
LABEL_CHOICES = (('P', 'primary'), ('S', 'secondary'), ('D', 'danger'))

class Item(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
    label = models.CharField(choices=LABEL_CHOICES, max_length=1)
    slug = models.SlugField()
    description = models.TextField()
    image = models.ImageField()

    def __str__(self): return self.title
    def get_absolute_url(self):
        return reverse("core:product", kwargs={'slug': self.slug})

class OrderItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self): return f"{self.quantity} of {self.item.title}"
    def get_total_item_price(self): return self.quantity * self.item.price

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    ref_code = models.CharField(max_length=20, blank=True, null=True)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    shipping_address = models.ForeignKey('Address', on_delete=models.SET_NULL, blank=True, null=True)
    payment = models.ForeignKey('Payment', on_delete=models.SET_NULL, blank=True, null=True)
    coupon = models.ForeignKey('Coupon', on_delete=models.SET_NULL, blank=True, null=True)

class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=100)
    apartment_address = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    zip = models.CharField(max_length=100)
    default = models.BooleanField(default=False)

class Payment(models.Model):
    stripe_charge_id = models.CharField(max_length=50)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
    amount = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

class Coupon(models.Model):
    code = models.CharField(max_length=15)
    amount = models.FloatField()`}
        </Text>
      </View>

      <Text style={[styles.h2, { marginTop: 24 }]}>Annexure B: URL Routing Configuration (urls.py)</Text>

      <View style={{ backgroundColor: "#f4f4f4", padding: 12, borderRadius: 4, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Courier", fontSize: 8, lineHeight: 1.3 }}>
{`from django.urls import path
from .views import (
    ItemDetailView,
    CheckoutView,
    HomeView,
    OrderSummaryView,
    add_to_cart,
    remove_from_cart,
    remove_single_item_from_cart,
    PaymentView,
    AddCouponView,
    RequestRefundView
)

app_name = 'core'

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('checkout/', CheckoutView.as_view(), name='checkout'),
    path('order-summary/', OrderSummaryView.as_view(), name='order-summary'),
    path('product/<slug>/', ItemDetailView.as_view(), name='product'),
    path('add-to-cart/<slug>/', add_to_cart, name='add-to-cart'),
    path('add-coupon/', AddCouponView.as_view(), name='add-coupon'),
    path('remove-from-cart/<slug>/', remove_from_cart, name='remove-from-cart'),
    path('remove-item-from-cart/<slug>/', remove_single_item_from_cart,
         name='remove-single-item-from-cart'),
    path('payment/<payment_option>/', PaymentView.as_view(), name='payment'),
    path('request-refund/', RequestRefundView.as_view(), name='request-refund')
]`}
        </Text>
      </View>

      <Text style={[styles.h2, { marginTop: 24 }]}>Annexure C: Required Environment Variables</Text>
      
      <View style={{ backgroundColor: "#f4f4f4", padding: 12, borderRadius: 4, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Courier", fontSize: 8, lineHeight: 1.3 }}>
{`# Django Configuration
SECRET_KEY='django-insecure-your-secret-key-here'
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1,.vercel.app

# Stripe Configuration
STRIPE_PUBLIC_KEY='pk_test_your_public_key'
STRIPE_SECRET_KEY='sk_test_your_secret_key'

# Database (Production Only - defaults to sqlite3 locally)
DATABASE_URL='postgres://user:password@host:port/dbname'`}
        </Text>
      </View>
    </BookPageLayout>
  );
}
