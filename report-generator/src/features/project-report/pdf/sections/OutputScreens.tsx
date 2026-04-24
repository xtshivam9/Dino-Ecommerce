"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function OutputScreens() {
  return (
    <BookPageLayout chapterTitle="Output & Screenshots" chapterNum="11">
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
          Chapter 11
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
          Output & Screenshots
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
        This chapter presents the visual output of the Dino-Ecommerce platform, illustrating the user interface and overall user experience from initial product discovery to final checkout. Note: Actual screenshot images are intended to be inserted here in the final compiled document.
      </Text>

      <Text style={styles.h2}>11.1 Home Page / Product Catalog</Text>
      <Text style={styles.paragraph}>
        The homepage acts as the primary storefront, featuring a responsive grid layout of available products built with Bootstrap 4 cards. It includes a promotional carousel banner at the top and category filtering options.
      </Text>
      <View style={{ height: 250, backgroundColor: "#f0f0f0", borderWidth: 1, borderColor: "#cccccc", borderStyle: "dashed", justifyContent: "center", alignItems: "center", marginBottom: 12, marginTop: 12 }}>
        <Text style={{ fontFamily: "Times-Italic", color: "#888888", fontSize: 10 }}>[ Placeholder: Screenshot of Homepage with Product Grid ]</Text>
      </View>

      <Text style={styles.h2}>11.2 Product Detail Page</Text>
      <Text style={styles.paragraph}>
        Clicking on a specific item opens the Product Detail page. This view provides high-resolution imagery, descriptive text, pricing (including strikethrough logic for discounted items), and the primary "Add to Cart" call-to-action button.
      </Text>
      <View style={{ height: 250, backgroundColor: "#f0f0f0", borderWidth: 1, borderColor: "#cccccc", borderStyle: "dashed", justifyContent: "center", alignItems: "center", marginBottom: 12, marginTop: 12 }}>
        <Text style={{ fontFamily: "Times-Italic", color: "#888888", fontSize: 10 }}>[ Placeholder: Screenshot of Single Product Detail View ]</Text>
      </View>

      <Text style={styles.h2}>11.3 Order Summary (Shopping Cart)</Text>
      <Text style={styles.paragraph}>
        The Cart view displays a tabular summary of selected items. It features interactive controls to increment, decrement, or delete items, with the subtotal updating dynamically.
      </Text>
      <View style={{ height: 200, backgroundColor: "#f0f0f0", borderWidth: 1, borderColor: "#cccccc", borderStyle: "dashed", justifyContent: "center", alignItems: "center", marginBottom: 12, marginTop: 12 }}>
        <Text style={{ fontFamily: "Times-Italic", color: "#888888", fontSize: 10 }}>[ Placeholder: Screenshot of Shopping Cart Table ]</Text>
      </View>

      <Text style={styles.h2}>11.4 Secure Checkout Form</Text>
      <Text style={styles.paragraph}>
        The checkout page is a streamlined form capturing shipping and billing details. It integrates Stripe Elements for secure credit card input, ensuring PCI compliance.
      </Text>
      <View style={{ height: 250, backgroundColor: "#f0f0f0", borderWidth: 1, borderColor: "#cccccc", borderStyle: "dashed", justifyContent: "center", alignItems: "center", marginBottom: 12, marginTop: 12 }}>
        <Text style={{ fontFamily: "Times-Italic", color: "#888888", fontSize: 10 }}>[ Placeholder: Screenshot of Checkout Form with Stripe Element ]</Text>
      </View>

      <Text style={styles.h2}>11.5 Django Administration Panel</Text>
      <Text style={styles.paragraph}>
        The backend administrative interface, accessible only to superusers. It provides complete CRUD access to Orders, Items, Users, and Coupons, featuring robust filtering and search capabilities.
      </Text>
      <View style={{ height: 200, backgroundColor: "#f0f0f0", borderWidth: 1, borderColor: "#cccccc", borderStyle: "dashed", justifyContent: "center", alignItems: "center", marginBottom: 12, marginTop: 12 }}>
        <Text style={{ fontFamily: "Times-Italic", color: "#888888", fontSize: 10 }}>[ Placeholder: Screenshot of Django Admin Dashboard ]</Text>
      </View>

    </BookPageLayout>
  );
}
