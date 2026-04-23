"use client";

import { View, Text, Image } from "@react-pdf/renderer";
import { styles, PAGE_MARGINS } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 11: Output & Screenshots
 * Updated to use actual screenshots provided by the user.
 */
export default function OutputScreens() {
  const CONTENT_WIDTH = 595 - PAGE_MARGINS.left - PAGE_MARGINS.right;
  
  const ScreenshotBox = ({ title, src }: { title: string; src: string }) => (
    <View wrap={false} style={{ marginBottom: 6, marginTop: 4 }}>
      <View style={{ 
        width: CONTENT_WIDTH, 
        borderWidth: 1, 
        borderColor: "#333333", 
        backgroundColor: "#ffffff",
        overflow: "hidden"
      }}>
        <Image src={src} style={{ width: "100%" }} />
      </View>
      <Text style={{ fontSize: 7, fontFamily: "Times-Italic", textAlign: "center", marginTop: 2 }}>
        Figure 11.x: {title} View
      </Text>
    </View>
  );

  const ScreenDescription = ({ title, url, layout, elements }: any) => (
    <View wrap={false} style={{ marginBottom: 3, padding: 3, backgroundColor: "#f9f9f9", borderWidth: 0.5, borderColor: "#dddddd" }}>
      <Text style={{ fontSize: 8, fontFamily: "Times-Bold" }}>{title} ({url})</Text>
      <Text style={{ fontSize: 7, lineHeight: 1.1 }}>
        <Text style={styles.bold}>Layout:</Text> {layout}
      </Text>
      <Text style={{ fontSize: 7, lineHeight: 1.1 }}>
        <Text style={styles.bold}>Elements:</Text> {elements}
      </Text>
    </View>
  );

  return (
    <BookPageLayout chapterTitle="Output & Screenshots" chapterNum="11">
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Text style={{ fontSize: 14, fontFamily: "Times-Bold", textTransform: "uppercase" }}>Chapter 11: Output & Screenshots</Text>
        <View style={{ width: 40, height: 2, backgroundColor: "#000000", marginTop: 4 }} />
      </View>

      <Text style={styles.paragraph}>
        This chapter presents the actual output screens of the AROWAI platform. The following screenshots demonstrate the user interface for the core shopping and transaction flows.
      </Text>

      {/* 11.1 Storefront */}
      <Text style={styles.h2}>11.1 Storefront & Product Listing</Text>
      
      <ScreenDescription 
        title="Home Screen" 
        url="/" 
        layout="Hero-centric landing page with categorized navigation and featured collections."
        elements="AROWAI Branding, Global Search, Hero Banner, Dynamic Category Links."
      />
      <ScreenshotBox title="Home Page" src="/outputs/home.png" />

      <ScreenDescription 
        title="Product Listing" 
        url="/shop" 
        layout="Responsive grid layout with advanced filtering and sorting capabilities."
        elements="Category sidebar, Price range filter, Color swatches, Product cards with ratings."
      />
      <ScreenshotBox title="Product Listing Page" src="/outputs/product.png" />

      {/* 11.2 Transactional Flow */}
      <Text style={styles.h2}>11.2 Shopping Cart & Checkout</Text>

      <ScreenDescription 
        title="Shopping Cart" 
        url="/cart" 
        layout="Tabular summary of selected items with real-time quantity adjustments and total calculation."
        elements="Product thumbnails, Price breakdown, Quantity toggles, Checkout CTA."
      />
      <ScreenshotBox title="Cart Page" src="/outputs/cart.png" />

      <ScreenDescription 
        title="Checkout Page" 
        url="/checkout" 
        layout="Clean multi-section form for shipping details and order confirmation."
        elements="Address fields, Order summary sidebar, Promo code input, Secure completion button."
      />
      <ScreenshotBox title="Checkout Page" src="/outputs/checkout.png" />

      <View wrap={false} style={{ marginTop: 10, padding: 5, backgroundColor: "#f0f0f0", borderLeftWidth: 3, borderLeftColor: "#000000" }}>
        <Text style={{ fontSize: 8, fontFamily: "Times-Bold" }}>Deployment Summary</Text>
        <Text style={{ fontSize: 7 }}>Production: https://arowai.app | Status: Live | Coverage: Full Responsive</Text>
      </View>
    </BookPageLayout>
  );
}
