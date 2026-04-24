"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import TestingPyramid from "../diagrams/TestingPyramid";

export default function Testing() {
  return (
    <BookPageLayout chapterTitle="System Testing" chapterNum="09">
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
          Chapter 09
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
          System Testing
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

      <Text style={styles.h2}>9.1 Introduction</Text>
      <Text style={styles.paragraphIndent}>
        System testing is an integral part of the software development lifecycle, ensuring that the completed application meets the requirements specified in the SRS document and functions correctly under various conditions. For an e-commerce platform handling financial transactions, rigorous testing is not optional; it is essential to prevent data loss, security breaches, and revenue impact.
      </Text>

      <Text style={styles.h2}>9.2 Testing Strategy</Text>
      <Text style={styles.paragraphIndent}>
        Dino-Ecommerce employed a multi-tiered testing strategy based on the standard Testing Pyramid. This approach prioritizes a large base of fast, isolated unit tests, supported by integration tests for database/API communication, and capped with end-to-end (E2E) system tests.
      </Text>

      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <TestingPyramid />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 9.1: The Testing Pyramid
        </Text>
      </View>

      <Text style={styles.h2}>9.3 Unit Testing</Text>
      <Text style={styles.paragraphIndent}>
        Unit testing involves verifying the smallest testable parts of the application (functions and methods) in isolation. Django's built-in `TestCase` class was utilized extensively.
      </Text>

      {/* Unit Test Table */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 6 }}>
          <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Test ID</Text>
          <Text style={{ width: "40%", fontFamily: "Times-Bold", fontSize: 10 }}>Test Scenario</Text>
          <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10 }}>Expected</Text>
          <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10 }}>Status</Text>
        </View>

        {[
          { id: "UT-01", desc: "Calculate total for order item without discount", exp: "Price * Qty", status: "PASS" },
          { id: "UT-02", desc: "Calculate total for order item WITH discount", exp: "Discount * Qty", status: "PASS" },
          { id: "UT-03", desc: "Calculate overall Cart sub-total", exp: "Sum of items", status: "PASS" },
          { id: "UT-04", desc: "Verify Item.get_absolute_url() formatting", exp: "Valid URL string", status: "PASS" },
          { id: "UT-05", desc: "Test user password hashing on save", exp: "Encrypted hash", status: "PASS" }
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 6 }}>
            <Text style={{ width: "20%", fontFamily: "Times-Roman", fontSize: 10, paddingLeft: 8 }}>{row.id}</Text>
            <Text style={{ width: "40%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.desc}</Text>
            <Text style={{ width: "20%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.exp}</Text>
            <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10, color: "#2E7D32" }}>{row.status}</Text>
          </View>
        ))}
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Table 9.1: Sample Unit Test Cases
        </Text>
      </View>

      <Text style={styles.h2}>9.4 Integration Testing</Text>
      <Text style={styles.paragraphIndent}>
        Integration tests verify that different modules or services work together correctly. For this project, the most critical integration was the communication between the Django backend and the Stripe payment gateway.
      </Text>
      <Text style={styles.paragraph}>
        Testing was conducted using Stripe's official test credit card numbers. Scenarios tested included:
        {"\n"}• Successful charge using a valid test card.
        {"\n"}• Simulating card decline (e.g., insufficient funds error code).
        {"\n"}• Simulating expired cards to verify the `CardError` exception block in `views.py`.
      </Text>

      <Text style={styles.h2}>9.5 System / End-to-End Testing</Text>
      <Text style={styles.paragraphIndent}>
        System testing evaluates the fully integrated application as a whole. This was performed manually by navigating the application through standard web browsers (Chrome, Firefox).
      </Text>

      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 6 }}>
          <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Test ID</Text>
          <Text style={{ width: "40%", fontFamily: "Times-Bold", fontSize: 10 }}>Test Scenario</Text>
          <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10 }}>Expected Output</Text>
          <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10 }}>Status</Text>
        </View>

        {[
          { id: "ST-01", desc: "Guest tries to access checkout", exp: "Redirect to Login", status: "PASS" },
          { id: "ST-02", desc: "Add item to cart, check DB", exp: "Order created", status: "PASS" },
          { id: "ST-03", desc: "Add same item twice", exp: "Qty increments by 1", status: "PASS" },
          { id: "ST-04", desc: "Apply invalid coupon code", exp: "Error message shown", status: "PASS" },
          { id: "ST-05", desc: "Complete full checkout flow", exp: "Order marked paid", status: "PASS" }
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 6 }}>
            <Text style={{ width: "20%", fontFamily: "Times-Roman", fontSize: 10, paddingLeft: 8 }}>{row.id}</Text>
            <Text style={{ width: "40%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.desc}</Text>
            <Text style={{ width: "20%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.exp}</Text>
            <Text style={{ width: "20%", fontFamily: "Times-Bold", fontSize: 10, color: "#2E7D32" }}>{row.status}</Text>
          </View>
        ))}
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Table 9.2: System Level Test Cases
        </Text>
      </View>

      <Text style={styles.h2}>9.6 UI/UX & Cross-Browser Testing</Text>
      <Text style={styles.paragraphIndent}>
        Because e-commerce traffic is heavily mobile-skewed, the Bootstrap 4 frontend was tested across multiple viewport sizes. Chrome DevTools was utilized to simulate mobile (iPhone, Pixel) and tablet (iPad) screen dimensions to ensure the navigation bar collapses correctly and product grids stack vertically as intended.
      </Text>

      <Text style={styles.h2}>9.7 Conclusion</Text>
      <Text style={styles.paragraphIndent}>
        The comprehensive testing strategy validated the architectural decisions made during the design phase. Minor bugs, such as unhandled edge cases in the coupon application logic, were discovered and rectified during integration testing. The final application performs reliably under all expected user flows.
      </Text>
    </BookPageLayout>
  );
}
