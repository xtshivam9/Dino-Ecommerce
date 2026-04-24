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
        Before embarking on the development of a complex software system like an e-commerce platform, it is crucial to thoroughly analyze the existing landscape, understand the market demands, and clearly define the problems that the proposed system intends to solve. This chapter provides a comprehensive literature review of the current e-commerce ecosystem, analyzes competing solutions, and formally articulates the problem statement for the Dino-Ecommerce project.
      </Text>

      <Text style={styles.h2}>2.2 Problem Statement</Text>
      <View style={{ backgroundColor: "#f9f9f9", padding: 16, borderLeftWidth: 4, borderLeftColor: "#000000", marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 8 }}>Core Problem Definition:</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5 }}>
          "Small and medium enterprises (SMEs) face significant barriers to entry when attempting to establish a bespoke, highly customized online retail presence. Existing SaaS platforms enforce rigid templates and recurring fees that diminish profit margins, while custom enterprise development is prohibitively expensive. There is a distinct lack of a middle-ground solution: a lightweight, secure, and extensible open-source foundation that provides essential e-commerce capabilities (cart, checkout, payment integration) without architectural lock-in, enabling rapid deployment and absolute data sovereignty."
        </Text>
      </View>

      <Text style={styles.paragraph}>
        Specifically, businesses struggle with:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>1. <Text style={styles.bold}>Vendor Lock-in:</Text> Difficulty migrating data or customizing processes on proprietary platforms.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>2. <Text style={styles.bold}>Security Vulnerabilities:</Text> High risk of data breaches when relying on poorly maintained plugins.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>3. <Text style={styles.bold}>Complex Integrations:</Text> Challenges in connecting payment gateways reliably without affecting user experience.</Text>
      </View>

      <Text style={styles.h2}>2.3 Market Demand & Industry Trends</Text>
      <Text style={styles.paragraphIndent}>
        The global e-commerce market has experienced unprecedented growth. The shift in consumer behavior, preferring the convenience, variety, and competitive pricing of online shopping, has forced traditional brick-and-mortar retailers to adapt or perish.
      </Text>
      <Text style={styles.paragraph}>
        Recent industry reports indicate a continuous upward trajectory in digital sales volume, particularly in emerging markets like India. This growth necessitates scalable infrastructure capable of handling high transaction volumes securely. Furthermore, modern consumers demand a seamless user experience, mobile responsiveness, and instantaneous payment confirmation.
      </Text>

      {/* Market Growth Chart Diagram */}
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <MarketGrowthChart />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 2.1: Indian E-commerce Market Growth Projection
        </Text>
      </View>

      <Text style={styles.h2}>2.4 Analysis of Existing Solutions</Text>
      <Text style={styles.paragraphIndent}>
        To position Dino-Ecommerce effectively, we must evaluate the current market leaders and their respective strengths and weaknesses. The market is broadly divided into two categories: Hosted SaaS platforms and Self-Hosted Open Source systems.
      </Text>

      <Text style={styles.h3}>2.4.1 Hosted SaaS Platforms (e.g., Shopify, BigCommerce)</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Strengths:</Text> Extremely fast setup time, managed hosting, integrated CDN, and a vast marketplace of plugins and themes. They require zero server maintenance knowledge.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Weaknesses:</Text> Businesses do not own the underlying code or the database. Customizing the checkout process is often restricted to higher-tier enterprise plans. Recurring monthly fees plus transaction percentage fees significantly eat into revenue.
      </Text>

      <Text style={styles.h3}>2.4.2 Self-Hosted Solutions (e.g., WooCommerce, Magento)</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Strengths:</Text> Complete ownership of data and code. Highly customizable with thousands of available plugins. No mandatory transaction fees beyond the payment gateway provider's standard rates.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Weaknesses:</Text> Magento is notoriously resource-heavy and requires specialized developers. WooCommerce, being built on WordPress, often suffers from "plugin bloat" leading to severe performance degradation and frequent security vulnerabilities if not meticulously updated.
      </Text>

      <Text style={styles.h2}>2.5 Comparative Analysis</Text>

      {/* Comparison Table */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 6 }}>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Feature</Text>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 10 }}>Shopify</Text>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 10 }}>WooCommerce</Text>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 10 }}>Dino-Ecommerce</Text>
        </View>
        {[
          { feature: "Architecture", t1: "Proprietary SaaS", t2: "PHP/WordPress Plugin", t3: "Python/Django MVT" },
          { feature: "Data Ownership", t1: "Vendor Controlled", t2: "Self-Hosted (Full)", t3: "Self-Hosted (Full)" },
          { feature: "Customization", t1: "Limited (Liquid)", t2: "High (PHP)", t3: "Unlimited (Python)" },
          { feature: "Performance", t1: "High (Managed)", t2: "Variable (Plugin heavy)", t3: "High (Optimized DB)" },
          { feature: "Security", t1: "High (Managed)", t2: "Medium (Update dependent)", t3: "High (Django core)" }
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 6 }}>
            <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>{row.feature}</Text>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.t1}</Text>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.t2}</Text>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.t3}</Text>
          </View>
        ))}
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Table 2.1: Feature Comparison of E-commerce Platforms
        </Text>
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
        The comparative analysis highlights a distinct gap: the market lacks a lightweight, developer-friendly, Python-based framework tailored specifically for rapid e-commerce deployment. While excellent general-purpose frameworks exist (like Django itself), building the complex business logic for carts, orders, and Stripe integration from scratch every time is inefficient.
      </Text>
      <Text style={styles.paragraph}>
        Dino-Ecommerce bridges this gap by providing a pre-architected Django project that already contains the complex transactional logic, allowing developers and businesses to focus immediately on frontend customization and product catalog management rather than reinventing the wheel for payment processing.
      </Text>

      <Text style={styles.h2}>2.7 Proposed Solution Overview</Text>
      <Text style={styles.paragraphIndent}>
        Dino-Ecommerce addresses these challenges through a thoughtfully engineered architecture:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 8 }}>
          • <Text style={styles.bold}>Framework Choice:</Text> By utilizing Django, the platform inherits built-in protections against common vulnerabilities like SQL injection, XSS, and CSRF attacks.
        </Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 8 }}>
          • <Text style={styles.bold}>Data Model Design:</Text> A highly relational database schema ensures data integrity across Users, Orders, and Payments.
        </Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 8 }}>
          • <Text style={styles.bold}>Decoupled Payments:</Text> Integrating Stripe offloads the immense burden of PCI compliance while providing a world-class checkout experience.
        </Text>
      </View>

      <Text style={styles.h2}>2.8 Summary</Text>
      <Text style={styles.paragraphIndent}>
        In conclusion, while the e-commerce market is saturated with platforms, there remains a critical need for solutions that offer absolute data sovereignty, high security, and deep customizability without exorbitant enterprise costs. Dino-Ecommerce is positioned to fulfill this need, leveraging the robustness of Python and Django to deliver a secure, scalable, and highly adaptable online shopping foundation.
      </Text>
    </BookPageLayout>
  );
}
