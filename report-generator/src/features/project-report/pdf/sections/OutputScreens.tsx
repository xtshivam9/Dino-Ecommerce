"use client";

import { View, Text, Image } from "@react-pdf/renderer";
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
        This chapter presents the visual output of the AROWAI 1.0 platform, illustrating the user interface from product discovery to checkout.
      </Text>

      {/* 11.1 Home Page */}
      <Text style={styles.h2}>11.1 Home Page</Text>
      <Text style={styles.paragraph}>
        The homepage features a hero banner, category navigation, and a responsive product grid showcasing the latest items.
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image
          style={{ width: 380, objectFit: "contain", borderWidth: 1, borderColor: "#dddddd" }}
          src="/outputs/home.png"
        />
        <Text style={{ fontSize: 9, fontFamily: "Times-Italic", color: "#666666", marginTop: 6 }}>
          Figure 11.1: AROWAI 1.0 Homepage
        </Text>
      </View>

      {/* 11.2 Product Catalog */}
      <Text style={styles.h2}>11.2 Product Catalog</Text>
      <Text style={styles.paragraph}>
        The shop page displays all available products in a clean grid layout with category filters and pagination.
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image
          style={{ width: 380, objectFit: "contain", borderWidth: 1, borderColor: "#dddddd" }}
          src="/outputs/products.png"
        />
        <Text style={{ fontSize: 9, fontFamily: "Times-Italic", color: "#666666", marginTop: 6 }}>
          Figure 11.2: Product Catalog Page
        </Text>
      </View>

      {/* 11.3 Single Product Detail */}
      <Text style={styles.h2}>11.3 Product Detail Page</Text>
      <Text style={styles.paragraph}>
        The detail view provides product imagery, pricing with discount badges, size/color selectors, and a quantity control with Add to Cart functionality.
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image
          style={{ width: 380, objectFit: "contain", borderWidth: 1, borderColor: "#dddddd" }}
          src="/outputs/s-product.png"
        />
        <Text style={{ fontSize: 9, fontFamily: "Times-Italic", color: "#666666", marginTop: 6 }}>
          Figure 11.3: Single Product Detail View
        </Text>
      </View>

      {/* 11.4 Shopping Cart */}
      <Text style={styles.h2}>11.4 Order Summary (Shopping Cart)</Text>
      <Text style={styles.paragraph}>
        The cart page shows selected items with quantity controls, unit pricing, and a live-updating order total summary sidebar.
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image
          style={{ width: 380, objectFit: "contain", borderWidth: 1, borderColor: "#dddddd" }}
          src="/outputs/cart.png"
        />
        <Text style={{ fontSize: 9, fontFamily: "Times-Italic", color: "#666666", marginTop: 6 }}>
          Figure 11.4: Shopping Cart / Order Summary
        </Text>
      </View>

      {/* 11.5 Checkout */}
      <Text style={styles.h2}>11.5 Secure Checkout</Text>
      <Text style={styles.paragraph}>
        The checkout page captures shipping/billing details and integrates Stripe Elements for PCI-compliant card input.
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image
          style={{ width: 380, objectFit: "contain", borderWidth: 1, borderColor: "#dddddd" }}
          src="/outputs/checkout.png"
        />
        <Text style={{ fontSize: 9, fontFamily: "Times-Italic", color: "#666666", marginTop: 6 }}>
          Figure 11.5: Secure Checkout Form
        </Text>
      </View>

      {/* 11.6 Payment Success */}
      <Text style={styles.h2}>11.6 Payment Confirmation</Text>
      <Text style={styles.paragraph}>
        After successful payment via Stripe, the user sees a confirmation modal with a link to view their order history.
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image
          style={{ width: 380, objectFit: "contain", borderWidth: 1, borderColor: "#dddddd" }}
          src="/outputs/payment.png"
        />
        <Text style={{ fontSize: 9, fontFamily: "Times-Italic", color: "#666666", marginTop: 6 }}>
          Figure 11.6: Payment Successful Confirmation
        </Text>
      </View>

    </BookPageLayout>
  );
}
