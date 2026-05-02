"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function UserManual() {
  return (
    <BookPageLayout chapterTitle="User Manual" chapterNum="10">
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
          Chapter 10
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
          User Manual
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

      <Text style={styles.h2}>10.1 Customer Guide</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Registration:</Text> Navigate to Signup, enter email/password, and submit.
        {"\n"}<Text style={styles.bold}>Shopping:</Text> Browse products, click "Add to Cart," adjust quantities in the cart, then proceed to checkout.
        {"\n"}<Text style={styles.bold}>Checkout:</Text> Fill shipping/billing details, enter Stripe card information, and submit payment.
      </Text>

      <Text style={styles.h2}>10.2 Administrator Guide</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Access:</Text> Navigate to <Text style={styles.bold}>/admin</Text> and login with superuser credentials.
        {"\n"}<Text style={styles.bold}>Products:</Text> Under "Core" → "Items," click "Add Item" to create products with title, price, category, and image.
        {"\n"}<Text style={styles.bold}>Orders:</Text> Filter by status in the Orders section. Process refunds via the Refunds section by checking "Accepted."
      </Text>

    </BookPageLayout>
  );
}
