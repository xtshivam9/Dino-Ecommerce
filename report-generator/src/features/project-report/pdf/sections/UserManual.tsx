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

      <Text style={styles.h2}>10.1 Getting Started</Text>
      <Text style={styles.paragraphIndent}>
        This user manual provides step-by-step instructions on how to navigate and utilize the Dino-Ecommerce platform, both from the perspective of a customer and an administrator.
      </Text>

      <Text style={styles.h2}>10.2 Customer Guide</Text>
      
      <Text style={styles.h3}>1. Registration & Login</Text>
      <Text style={styles.paragraph}>
        • Navigate to the <Text style={styles.bold}>Signup</Text> page via the top navigation bar.
        {"\n"}• Enter a valid email address, create a strong password, and submit.
        {"\n"}• Upon successful login, you will be redirected to the homepage.
      </Text>

      <Text style={styles.h3}>2. Browsing and Adding to Cart</Text>
      <Text style={styles.paragraph}>
        • The homepage displays a grid of featured products. Click on an item's title or image to view detailed specifications.
        {"\n"}• Click the <Text style={styles.bold}>"Add to Cart"</Text> button on the product page.
        {"\n"}• A success notification will appear at the top of the screen, and the cart icon counter in the navigation bar will increment.
      </Text>

      <Text style={styles.h3}>3. Cart Management</Text>
      <Text style={styles.paragraph}>
        • Click the <Text style={styles.bold}>Cart Icon</Text> to view your order summary.
        {"\n"}• Use the <Text style={styles.bold}>+</Text> and <Text style={styles.bold}>-</Text> buttons to adjust item quantities. 
        {"\n"}• To remove an item completely, click the trash can icon.
        {"\n"}• Click <Text style={styles.bold}>"Proceed to Checkout"</Text> when ready.
      </Text>

      <Text style={styles.h3}>4. Checkout Process</Text>
      <Text style={styles.paragraph}>
        • Fill in the shipping and billing address forms. You may check "Billing address is same as shipping address" to save time.
        {"\n"}• Optionally, check "Save this information for next time" to persist the address to your profile.
        {"\n"}• Enter your credit card details into the secure Stripe input field.
        {"\n"}• Click <Text style={styles.bold}>"Submit Payment"</Text>. Do not close the window while processing.
      </Text>

      <Text style={styles.h2}>10.3 Administrator Guide</Text>

      <Text style={styles.h3}>1. Accessing the Admin Dashboard</Text>
      <Text style={styles.paragraph}>
        • Navigate to <Text style={styles.bold}>/admin</Text> in your browser URL.
        {"\n"}• Log in using a superuser account product.
      </Text>

      <Text style={styles.h3}>2. Managing Products (Items)</Text>
      <Text style={styles.paragraph}>
        • Under the "Core" section, click on <Text style={styles.bold}>Items</Text>.
        {"\n"}• Click "Add Item" in the top right corner.
        {"\n"}• Fill in the Title, Price, Discount Price (optional), Category, and upload an Image.
        {"\n"}• Click <Text style={styles.bold}>Save</Text>. The product will immediately appear on the storefront.
      </Text>

      <Text style={styles.h3}>3. Managing Orders & Refunds</Text>
      <Text style={styles.paragraph}>
        • Click on <Text style={styles.bold}>Orders</Text>.
        {"\n"}• You can filter orders by status (e.g., Ordered, Being Delivered, Received) using the right sidebar.
        {"\n"}• To process a refund, navigate to <Text style={styles.bold}>Refunds</Text>, review the user's request reason, check the "Accepted" box, and save to approve.
      </Text>

      <Text style={styles.h2}>10.4 Troubleshooting Common Issues</Text>
      
      {/* Troubleshooting Table */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 6 }}>
          <Text style={{ width: "40%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Issue / Error Message</Text>
          <Text style={{ width: "60%", fontFamily: "Times-Bold", fontSize: 10 }}>Resolution</Text>
        </View>

        {[
          { issue: "\"Card was declined\"", res: "Verify funds and card number. Use Stripe test cards if in development." },
          { issue: "\"Invalid Coupon Code\"", res: "The code may be expired or typed incorrectly. Codes are case-sensitive." },
          { issue: "\"You do not have an active order\"", res: "Your cart is empty. Add items to cart before proceeding to checkout." },
          { issue: "Admin panel returns 403 Forbidden", res: "Your account lacks superuser or staff permissions." }
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 6 }}>
            <Text style={{ width: "40%", fontFamily: "Times-Roman", fontSize: 10, paddingLeft: 8 }}>{row.issue}</Text>
            <Text style={{ width: "60%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.res}</Text>
          </View>
        ))}
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Table 10.3: Common Issues & Resolutions
        </Text>
      </View>

    </BookPageLayout>
  );
}
