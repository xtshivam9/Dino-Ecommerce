"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import SystemArchitecture from "../diagrams/SystemArchitecture";

/**
 * Chapter 1: Introduction
 * Content automatically wraps across pages via BookPageLayout.
 */
export default function Introduction() {
  return (
    <BookPageLayout chapterTitle="Introduction" chapterNum="01">
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
          Chapter 01
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
          Introduction
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

      <Text style={styles.h2}>1.1 Project Overview</Text>
      <Text style={styles.paragraphIndent}>
        In the contemporary digital landscape, e-commerce has transitioned from being a convenience to an absolute necessity. With consumer behavior shifting increasingly toward online shopping, businesses must establish a robust digital storefront to remain competitive. The complexity of managing inventory, processing secure payments, and providing a seamless user experience requires a sophisticated technological foundation.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Arowai Ecommerce 1.0</Text> is a state-of-the-art online shopping platform designed to address these requirements. It provides a comprehensive solution that bridges the gap between commercial necessity and technical capability, allowing businesses to showcase products, manage customer orders, and process transactions efficiently. By leveraging modern web frameworks, Arowai Ecommerce 1.0 delivers a fast, secure, and intuitive shopping experience.
      </Text>
      <Text style={styles.paragraph}>
        The platform empowers store administrators to easily manage product catalogs while providing customers with a frictionless journey from product discovery to checkout. Built on a highly reliable technology stack comprising{" "}
        <Text style={styles.bold}>Django 5.0, Python 3.10, and Stripe</Text>,
        the system ensures that security, scalability, and maintainability are built in from the ground up.
      </Text>

      <Text style={styles.h2}>1.2 Background</Text>
      <Text style={styles.paragraphIndent}>
        The retail industry has shifted significantly toward digital operations, with businesses requiring robust e-commerce infrastructure. However, many SMEs face challenges with existing solutions: enterprise platforms are prohibitively expensive, while generic SaaS builders lack customization flexibility. Arowai Ecommerce 1.0 bridges this "Platform Gap" by providing a scalable, Django-based foundation that balances capability with cost-effectiveness.
      </Text>

      <Text style={styles.h2}>1.3 Problem Statement</Text>
      <Text style={styles.paragraphIndent}>
        Current e-commerce solutions present three critical challenges: (1) <Text style={styles.bold}>Customization Barriers</Text> - hosted platforms restrict backend access, forcing reliance on costly plugins; (2) <Text style={styles.bold}>Data Ownership Risks</Text> - multi-tenant SaaS platforms compromise data sovereignty and compliance; (3) <Text style={styles.bold}>Payment Friction</Text> - clunky checkout processes increase cart abandonment. Arowai Ecommerce 1.0 addresses these through its open-source Django architecture with integrated Stripe payments.
      </Text>

      <Text style={styles.h2}>1.4 Motivation</Text>
      <Text style={styles.paragraphIndent}>
        Arowai Ecommerce 1.0 leverages Django's "batteries-included" philosophy to provide an adaptable, secure foundation for online retail. The Model-View-Template (MVT) architecture enables clean separation of concerns, while Stripe integration ensures PCI-compliant payment processing. This project demonstrates practical application of modern web frameworks to solve real-world e-commerce challenges.
      </Text>

      <Text style={styles.h2}>1.5 Project Objectives</Text>
      <View style={{ paddingLeft: 12, marginBottom: 12 }}>
        <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, marginBottom: 6 }}>
          • <Text style={styles.bold}>Secure Authentication:</Text> User registration/login via Django Allauth
        </Text>
        <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, marginBottom: 6 }}>
          • <Text style={styles.bold}>Product Catalog:</Text> Database-driven product showcase with categories
        </Text>
        <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, marginBottom: 6 }}>
          • <Text style={styles.bold}>Cart Management:</Text> Stateful shopping cart with discount support
        </Text>
        <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, marginBottom: 6 }}>
          • <Text style={styles.bold}>Payment Integration:</Text> Secure Stripe checkout processing
        </Text>
        <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, marginBottom: 6 }}>
          • <Text style={styles.bold}>Order Tracking:</Text> User dashboard for order history and status
        </Text>
        <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5 }}>
          • <Text style={styles.bold}>Admin Control:</Text> Django Admin for inventory and order management
        </Text>
      </View>

      <Text style={styles.h2}>1.6 Proposed Solution</Text>
      <Text style={styles.paragraphIndent}>
        The proposed solution, Arowai Ecommerce 1.0, is a full-stack web application engineered using the Django framework. The system architecture follows the Model-View-Template (MVT) design pattern, which inherently promotes modularity and maintainability.
      </Text>
      <Text style={styles.paragraph}>
        At the core, the application defines strict data models for Items, Orders, OrderItems, Payments, and BillingAddresses. The business logic, encapsulated within Django Views, handles complex operations such as checking inventory availability, calculating cart totals with applied promotional coupons, and orchestrating the checkout sequence. The presentation layer utilizes Django Templates enhanced with Bootstrap CSS to render dynamic, responsive HTML pages based on the context provided by the views.
      </Text>

      {/* System Architecture Diagram */}
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <SystemArchitecture />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 1.1: Django MVT System Architecture
        </Text>
      </View>

      <Text style={styles.h2}>1.7 Technology Stack</Text>
      <Text style={styles.paragraphIndent}>
        The selection of the technology stack is a critical decision that influences the performance, security, and scalability of the application. Arowai Ecommerce 1.0 leverages the following core technologies:
      </Text>

      {/* Technology Stack Table */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 6 }}>
          <Text style={{ width: "25%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Category</Text>
          <Text style={{ width: "35%", fontFamily: "Times-Bold", fontSize: 10 }}>Technology</Text>
          <Text style={{ width: "40%", fontFamily: "Times-Bold", fontSize: 10 }}>Primary Purpose</Text>
        </View>

        {[
          { cat: "Backend Framework", tech: "Django 5.0", desc: "Core business logic, routing, ORM" },
          { cat: "Programming Language", tech: "Python 3.10", desc: "Server-side execution and scripting" },
          { cat: "Frontend / UI", tech: "HTML5, CSS3, Bootstrap 4", desc: "Responsive layout and styling" },
          { cat: "Database", tech: "SQLite (Dev) / PostgreSQL (Prod)", desc: "Data persistence and relational mapping" },
          { cat: "Payment Processing", tech: "Stripe API", desc: "Secure handling of financial transactions" },
          { cat: "Authentication", tech: "Django Allauth", desc: "User identity and session management" },
          { cat: "Version Control", tech: "Git & GitHub", desc: "Source code management and collaboration" },
          { cat: "Deployment", tech: "Vercel / Heroku", desc: "Cloud hosting and CI/CD pipelines" }
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 6 }}>
            <Text style={{ width: "25%", fontFamily: "Times-Roman", fontSize: 10, paddingLeft: 8 }}>{row.cat}</Text>
            <Text style={{ width: "35%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.tech}</Text>
            <Text style={{ width: "40%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.desc}</Text>
          </View>
        ))}
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Table 1.1: Technology Stack
        </Text>
      </View>


      <Text style={styles.h2}>1.8 Scope of the Project</Text>
      <Text style={styles.paragraphIndent}>
        The project encompasses the complete e-commerce order lifecycle: user registration, product browsing, secure checkout, and order tracking. Administrative features include inventory and order management. Out of scope for v1.0: multi-vendor marketplace, AI recommendations, and multi-warehouse routing.
      </Text>

      <Text style={styles.h2}>1.9 Report Organization</Text>
      <Text style={styles.paragraphIndent}>
        This report covers: Problem Analysis (Ch. 2), Objectives (Ch. 3), Feasibility Study (Ch. 4), Project Estimation (Ch. 5), SDLC & Requirements (Ch. 6), System Design (Ch. 7), Implementation (Ch. 8), Testing (Ch. 9), User Manual (Ch. 10), Output Screens (Ch. 11), and Conclusions (Ch. 12).
      </Text>
    </BookPageLayout>
  );
}
