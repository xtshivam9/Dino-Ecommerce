"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import DeploymentArchitecture from "../diagrams/DeploymentDiagram";

export default function Implementation() {
  return (
    <BookPageLayout chapterTitle="Implementation" chapterNum="08">
      <View style={{ marginBottom: 28, alignItems: "center", marginTop: 20 }}>
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Times-Roman",
            color: "#666666",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Chapter 08
        </Text>
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
          Implementation
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

      <Text style={styles.h2}>8.1 Overview</Text>
      <Text style={styles.paragraphIndent}>
        This chapter highlights critical code sections demonstrating Arowai Ecommerce 1.0's core functionality: Django models, Stripe payment integration, and deployment architecture.
      </Text>

      <Text style={styles.h2}>8.2 Core Models</Text>
      <Text style={styles.paragraphIndent}>
        The Order model demonstrates relational database mapping using ForeignKey and ManyToManyField for linking users to their cart and payment history:
      </Text>
      <View style={{ backgroundColor: "#f4f4f4", padding: 10, borderRadius: 4, marginBottom: 12 }}>
        <Text style={{ fontFamily: "Courier", fontSize: 8, lineHeight: 1.3 }}>
          {`class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    ordered = models.BooleanField(default=False)
    shipping_address = models.ForeignKey('Address', ...)
    payment = models.ForeignKey('Payment', ...)
    coupon = models.ForeignKey('Coupon', ...)`}
        </Text>
      </View>

      <Text style={styles.h2}>8.3 Payment Integration</Text>
      <Text style={styles.paragraphIndent}>
        The PaymentView handles Stripe checkout with error handling for declined cards:
      </Text>
      <View style={{ backgroundColor: "#f4f4f4", padding: 10, borderRadius: 4, marginBottom: 12 }}>
        <Text style={{ fontFamily: "Courier", fontSize: 8, lineHeight: 1.3 }}>
          {`class PaymentView(View):
    def post(self, request, *args, **kwargs):
        order = Order.objects.get(user=self.request.user, ordered=False)
        token = request.POST.get('stripeToken')
        amount = int(order.get_total() * 100)
        try:
            charge = stripe.Charge.create(
                amount=amount, currency="usd", source=token)
            payment = Payment(stripe_charge_id=charge['id'], ...)
            payment.save()
            order.ordered = True
            order.save()
        except stripe.error.CardError as e:
            messages.warning(self.request, f"Card Error: {e}")`}
        </Text>
      </View>


      <Text style={styles.h2}>8.4 Deployment</Text>
      <Text style={styles.paragraphIndent}>
        Local development uses SQLite; production deployment uses Gunicorn with WhiteNoise for static assets. Environment variables (SECRET_KEY, STRIPE_SECRET_KEY) ensure secure cross-environment configuration.
      </Text>

      {/* Deployment Diagram */}
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <DeploymentArchitecture />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 8.1: Typical Production Deployment Architecture
        </Text>
      </View>

    </BookPageLayout>
  );
}
