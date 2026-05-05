"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function RequirementGathering() {
  return (
    <BookPageLayout chapterTitle="Requirement Gathering" chapterNum="06" isContinued>
      <Text style={styles.h2}>6.7 Requirement Gathering Process</Text>
      <Text style={styles.paragraphIndent}>
        Requirement gathering is the process of defining exactly what the software must do to satisfy the needs of its stakeholders. For an e-commerce platform, these stakeholders primarily include end-users (shoppers) and administrators (store owners). The goal of this phase was to identify both the explicit functional requirements and the implicit non-functional constraints that Arowai Ecommerce 1.0 needed to address.
      </Text>

      <Text style={styles.h3}>6.7.1 Methodology</Text>
      <Text style={styles.paragraphIndent}>
        Unlike bespoke enterprise software where requirements are gathered via extensive client interviews, a platform like Arowai Ecommerce 1.0 targets broad market needs. Therefore, requirement gathering was conducted through a combination of:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>1. <Text style={styles.bold}>Competitor Analysis:</Text> Analyzing platforms like Shopify and WooCommerce to identify baseline expectations for modern shopping carts.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>2. <Text style={styles.bold}>Persona Development:</Text> Creating hypothetical user profiles to trace the expected journey from product discovery to final purchase.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>3. <Text style={styles.bold}>Technical Constraint Analysis:</Text> Evaluating the limitations of the chosen framework (Django) and third-party APIs (Stripe) to define technical boundaries.</Text>
      </View>

      <Text style={styles.h3}>6.7.2 Key Findings & Identified Needs</Text>
      <Text style={styles.paragraphIndent}>
        The analysis yielded several critical insights that directly shaped the architecture of the application:
      </Text>
      
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Session Persistence is Paramount:</Text>
        {"\n"}A major pain point in poor e-commerce implementations is the loss of cart data when a user navigates away or refreshes the page. The system must utilize robust session management or database-backed cart instances (linked to the user) to ensure cart state survives session interruptions.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Frictionless Checkout:</Text>
        {"\n"}Every additional step in a checkout process increases cart abandonment rates. The requirement is to consolidate the checkout into a minimal-step process, capturing billing addresses and payment details securely without unnecessary redirects, which justified the use of Stripe Elements.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Transparent Order Tracking:</Text>
        {"\n"}Post-purchase anxiety is common. Users require immediate confirmation of their order and a persistent location (a profile dashboard) to track order status and request refunds if needed.
      </Text>

      <Text style={styles.h2}>6.8 Feasibility of Requirements</Text>
      <Text style={styles.paragraphIndent}>
        Once gathered, the requirements were cross-referenced against technical feasibility. For instance, while a feature like "Real-time AI product recommendations" was identified as desirable during competitor analysis, it was deemed out-of-scope due to time constraints and the complexity of training a recommendation engine, thus focusing the MVP strictly on core transactional reliability.
      </Text>

      {/* Stakeholder Table */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 6 }}>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Stakeholder Type</Text>
          <Text style={{ width: "35%", fontFamily: "Times-Bold", fontSize: 10 }}>Primary Goals</Text>
          <Text style={{ width: "40%", fontFamily: "Times-Bold", fontSize: 10 }}>Derived System Requirement</Text>
        </View>

        {[
          { type: "Customer (User)", goals: "Find products quickly, checkout securely", req: "Categorized views, Stripe integration, Cart logic" },
          { type: "Store Owner (Admin)", goals: "Manage inventory, process orders", req: "Django Admin configuration, Order status models" },
          { type: "Developer", goals: "Maintain code, deploy updates", req: "MVT architecture, clean templating, Vercel config" }
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 6 }}>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 10, paddingLeft: 8 }}>{row.type}</Text>
            <Text style={{ width: "35%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.goals}</Text>
            <Text style={{ width: "40%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.req}</Text>
          </View>
        ))}
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Table 6.10: Stakeholder Analysis & Derived Requirements
        </Text>
      </View>

    </BookPageLayout>
  );
}
