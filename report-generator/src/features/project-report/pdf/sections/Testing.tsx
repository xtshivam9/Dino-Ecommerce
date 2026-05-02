"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

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

      <Text style={styles.h2}>9.1 Overview</Text>
      <Text style={styles.paragraphIndent}>
        Testing ensures the e-commerce platform meets requirements and handles financial transactions securely. This chapter covers unit, integration, and system testing with key test case results.
      </Text>

      <Text style={styles.h2}>9.2 Testing Strategy</Text>
      <Text style={styles.paragraphIndent}>
        Multi-tiered approach: Unit tests for model calculations, Integration tests for Stripe payment flows, and System tests for end-to-end user flows.
      </Text>

      <Text style={styles.h2}>9.3 Unit Testing</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Key Tests (All PASS):</Text> Order total calculations (with/without discount), cart sub-totals, URL formatting, and password hashing.
      </Text>

      <Text style={styles.h2}>9.4 Integration Testing</Text>
      <Text style={styles.paragraphIndent}>
        Stripe payment integration tested with official test cards: successful charges, declined cards (insufficient funds), and expired cards to verify CardError handling.
      </Text>

      <Text style={styles.h2}>9.5 System Testing</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Key Flows (All PASS):</Text> Guest checkout redirects to login, cart creates orders correctly, duplicate items increment quantity, invalid coupons show errors, and complete checkout flows mark orders as paid.
      </Text>

      <Text style={styles.h2}>9.6 UI/UX Testing</Text>
      <Text style={styles.paragraphIndent}>
        Bootstrap frontend tested across mobile (iPhone, Pixel) and tablet (iPad) viewports to ensure responsive navigation and product grid layouts.
      </Text>

      <Text style={styles.h2}>9.7 Summary</Text>
      <Text style={styles.paragraphIndent}>
        All critical test cases passed, validating the application's reliability for user flows, payment processing, and responsive design.
      </Text>
    </BookPageLayout>
  );
}
