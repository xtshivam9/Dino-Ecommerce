"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import MarketGrowthChart from "../diagrams/MarketGrowthChart";
import FeatureComparisonRadar from "../diagrams/ComparisonRadar";

export default function ProblemStatement() {
  return (
    <BookPageLayout chapterTitle="Problem Statement & Literature Review" chapterNum="02">
      {/* Chapter Title Block */}
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
          Chapter 02
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
          Problem Statement
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Times-Roman",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#444444",
            marginTop: 4,
          }}
        >
          & Literature Review
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

      <Text style={styles.h2}>2.1 Introduction</Text>
      <Text style={styles.paragraphIndent}>
        This chapter analyzes the e-commerce landscape, competing solutions, and defines the problem statement for Arowai Ecommerce 1.0.
      </Text>

      <Text style={styles.h2}>2.2 Problem Statement</Text>
      <Text style={styles.paragraphIndent}>
        SMEs face barriers when establishing customized online retail: SaaS platforms enforce rigid templates with recurring fees, while enterprise solutions are prohibitively expensive. The market lacks a middle-ground solution providing essential e-commerce capabilities (cart, checkout, payment) without architectural lock-in. Key challenges include: (1) <Text style={styles.bold}>Vendor Lock-in</Text> - proprietary platforms restrict customization; (2) <Text style={styles.bold}>Security Risks</Text> - third-party plugins create vulnerabilities; (3) <Text style={styles.bold}>Integration Complexity</Text> - payment gateway implementation is technically demanding.
      </Text>

      <Text style={styles.h2}>2.3 Market Demand</Text>
      <Text style={styles.paragraphIndent}>
        The e-commerce market shows continuous growth, particularly in emerging markets like India. This necessitates scalable, secure infrastructure with seamless user experience and mobile responsiveness.
      </Text>

      {/* Market Growth Chart Diagram */}
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <MarketGrowthChart />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 2.1: Indian E-commerce Market Growth Projection
        </Text>
      </View>

      <Text style={styles.h2}>2.4 Existing Solutions</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Hosted SaaS (Shopify, BigCommerce):</Text> Fast setup with managed hosting, but restricted customization, vendor-controlled data, and recurring fees.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Self-Hosted (WooCommerce, Magento):</Text> Full data ownership and customization, but Magento is resource-heavy and WooCommerce suffers from plugin bloat and security issues.
      </Text>

      <Text style={styles.h2}>2.5 Comparative Analysis</Text>
      <Text style={styles.paragraphIndent}>
        The following comparison highlights Arowai Ecommerce 1.0's positioning against market leaders:
      </Text>

      {/* Comparison Table */}
      <View style={{ marginTop: 16, marginBottom: 20 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 5 }}>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 9, paddingLeft: 6 }}>Feature</Text>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 9 }}>Shopify</Text>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 9 }}>WooCommerce</Text>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 9 }}>Arowai Ecommerce 1.0</Text>
        </View>
        {[
          { feature: "Architecture", t1: "Proprietary SaaS", t2: "PHP/WordPress", t3: "Python/Django" },
          { feature: "Data Ownership", t1: "Vendor Controlled", t2: "Self-Hosted", t3: "Self-Hosted" },
          { feature: "Customization", t1: "Limited", t2: "High", t3: "Unlimited" },
          { feature: "Security", t1: "Managed", t2: "Plugin-dependent", t3: "Django Core" }
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 5 }}>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 9, paddingLeft: 6 }}>{row.feature}</Text>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 9 }}>{row.t1}</Text>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 9 }}>{row.t2}</Text>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 9 }}>{row.t3}</Text>
          </View>
        ))}
      </View>

      {/* Feature Radar Diagram */}
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <FeatureComparisonRadar />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 2.2: Feature Comparison Radar
        </Text>
      </View>

      <Text style={styles.h2}>2.6 Gap Analysis</Text>
      <Text style={styles.paragraphIndent}>
        The market lacks a lightweight, Python-based e-commerce framework with pre-built transactional logic. Arowai Ecommerce 1.0 bridges this gap by providing a pre-architected Django solution with integrated cart, order, and Stripe payment handling—enabling developers to focus on customization rather than rebuilding core e-commerce functionality.
      </Text>

      <Text style={styles.h2}>2.7 Proposed Solution</Text>
      <Text style={styles.paragraphIndent}>
        Arowai Ecommerce 1.0 leverages Django's built-in security (SQL injection, XSS, CSRF protection), a relational database schema for data integrity, and Stripe integration for PCI-compliant payment processing—providing a secure, customizable, and production-ready e-commerce foundation.
      </Text>

      <Text style={styles.h2}>2.8 Summary</Text>
      <Text style={styles.paragraphIndent}>
        Arowai Ecommerce 1.0 addresses the market need for a secure, customizable, and cost-effective Python-based e-commerce solution—providing data sovereignty and production-ready functionality without enterprise platform overhead.
      </Text>
    </BookPageLayout>
  );
}
