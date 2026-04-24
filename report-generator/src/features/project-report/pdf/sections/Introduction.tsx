"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import SystemArchitecture from "../diagrams/SystemArchitecture";
import ProjectStructure from "../diagrams/ProjectStructure";

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
        <Text style={styles.bold}>Dino-Ecommerce</Text> is a state-of-the-art online shopping platform designed to address these requirements. It provides a comprehensive solution that bridges the gap between commercial necessity and technical capability, allowing businesses to showcase products, manage customer orders, and process transactions efficiently. By leveraging modern web frameworks, Dino-Ecommerce delivers a fast, secure, and intuitive shopping experience.
      </Text>
      <Text style={styles.paragraph}>
        The platform empowers store administrators to easily manage product catalogs while providing customers with a frictionless journey from product discovery to checkout. Built on a highly reliable technology stack comprising{" "}
        <Text style={styles.bold}>Django 5.0, Python 3.10, and Stripe</Text>,
        the system ensures that security, scalability, and maintainability are built in from the ground up.
      </Text>

      <Text style={styles.h2}>1.2 Background</Text>
      <Text style={styles.h3}>1.2.1 The Digital Retail Transformation</Text>
      <Text style={styles.paragraphIndent}>
        Over the past decade, the retail industry has witnessed a paradigm shift toward digital operations. Organizations of all sizes are investing heavily in e-commerce infrastructure to reach global audiences and provide 24/7 shopping accessibility. This transformation was significantly accelerated by recent global events that forced a shift from physical brick-and-mortar stores to online-first strategies.
      </Text>
      <Text style={styles.paragraph}>
        Despite this growth, many small to medium-sized enterprises (SMEs) struggle with the technical hurdles of establishing an online presence. Setting up secure payment gateways, maintaining real-time inventory synchronization, and ensuring data privacy across user sessions are complex challenges that require specialized technical expertise.
      </Text>

      <Text style={styles.h3}>1.2.2 The Platform Gap</Text>
      <Text style={styles.paragraphIndent}>
        To navigate these challenges, businesses traditionally rely on either expensive, monolithic enterprise solutions or fragmented, plug-and-play SaaS builders. Monolithic platforms are often cost-prohibitive and overly complex for growing businesses, requiring dedicated engineering teams to maintain. Conversely, generic website builders often lack the flexibility required to implement custom business logic or specific regional payment adaptations.
      </Text>
      <Text style={styles.paragraph}>
        This creates a "Platform Gap" where mid-market businesses find themselves outgrowing simple builders but unable to afford enterprise platforms. Dino-Ecommerce aims to close this gap by providing a scalable, customizable, and cost-effective Django-based foundation that can be easily tailored to specific business needs without the overhead of enterprise solutions.
      </Text>

      <Text style={styles.h2}>1.3 Problem Statement</Text>
      <Text style={styles.paragraphIndent}>
        Despite the proliferation of e-commerce tools, several critical problems persist in the current digital retail landscape:
      </Text>

      <Text style={styles.h3}>1. High Customization Barriers</Text>
      <Text style={styles.paragraph}>
        Many hosted e-commerce platforms operate as "black boxes" that restrict access to core backend logic. When a business requires a unique checkout flow or a specialized inventory management feature, they are often blocked by the limitations of the platform's proprietary architecture, forcing them to rely on costly third-party plugins that degrade performance.
      </Text>

      <Text style={styles.h3}>2. Security and Data Ownership</Text>
      <Text style={styles.paragraph}>
        Relying on multi-tenant SaaS platforms means surrendering direct control over customer data and order history. Businesses face significant risks regarding data portability, compliance with evolving privacy regulations (such as GDPR), and vulnerability to platform-wide security breaches. A self-hosted or dedicated application mitigates these risks by providing absolute data sovereignty.
      </Text>

      <Text style={styles.h3}>3. Suboptimal Payment Experiences</Text>
      <Text style={styles.paragraph}>
        Cart abandonment remains a critical issue for online retailers, often caused by clunky, multi-step payment processes or lack of trusted payment gateways. Implementing a secure, seamless, and compliant payment flow that handles various edge cases (like declined cards or insufficient funds) is notoriously difficult but essential for conversion optimization.
      </Text>

      <Text style={styles.h2}>1.4 Motivation</Text>
      <Text style={styles.paragraphIndent}>
        The motivation behind developing Dino-Ecommerce is rooted in the philosophy of providing a highly adaptable, secure, and performant foundation for online retail. We recognized that the Python ecosystem, specifically the Django framework, offers an unparalleled combination of rapid development and enterprise-grade security ("batteries included").
      </Text>
      <Text style={styles.paragraph}>
        By constructing the platform upon the Model-View-Template (MVT) architecture, we establish a clear separation of concerns that allows designers to work on frontend templates independently while developers implement complex backend business logic. Furthermore, the integration of industry-standard tools like Stripe ensures that financial transactions are handled with the highest level of security and reliability.
      </Text>
      <Text style={styles.paragraph}>
        Ultimately, this project serves as a comprehensive demonstration of how modern web frameworks can be utilized to build robust, scalable applications that solve real-world commercial problems, while also providing a tangible learning experience in full-stack software engineering.
      </Text>

      <Text style={styles.h2}>1.5 Project Objectives</Text>
      <Text style={styles.paragraph}>
        The primary and secondary objectives of this project are outlined below:
      </Text>

      <Text style={styles.h3}>1.5.1 Primary Objectives</Text>
      <View style={{ paddingLeft: 12, marginBottom: 12 }}>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Text style={{ fontSize: 14, marginRight: 8, marginTop: -3 }}>•</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            <Text style={styles.bold}>Secure Authentication:</Text> Implement a robust user registration and login system utilizing Django Allauth to support both standard email/password and potential social authentication methods.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Text style={{ fontSize: 14, marginRight: 8, marginTop: -3 }}>•</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            <Text style={styles.bold}>Dynamic Product Catalog:</Text> Develop a responsive, database-driven product showcase allowing users to view items, categories, and detailed product specifications.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Text style={{ fontSize: 14, marginRight: 8, marginTop: -3 }}>•</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            <Text style={styles.bold}>Stateful Cart Management:</Text> Create a reliable shopping cart mechanism that tracks user selections, calculates totals, applies discounts, and persists across user sessions.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Text style={{ fontSize: 14, marginRight: 8, marginTop: -3 }}>•</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            <Text style={styles.bold}>Payment Gateway Integration:</Text> Successfully integrate the Stripe API to process live/test payments securely without storing sensitive credit card data on local servers.
          </Text>
        </View>
      </View>

      <Text style={styles.h3}>1.5.2 Secondary Objectives</Text>
      <View style={{ paddingLeft: 12, marginBottom: 12 }}>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Text style={{ fontSize: 14, marginRight: 8, marginTop: -3 }}>•</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            <Text style={styles.bold}>Order Tracking & History:</Text> Provide users with a comprehensive dashboard to view past orders, current order status, and billing information.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Text style={{ fontSize: 14, marginRight: 8, marginTop: -3 }}>•</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            <Text style={styles.bold}>Administrative Control:</Text> Utilize the Django Admin interface to give store owners full CRUD (Create, Read, Update, Delete) capabilities over inventory and orders.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <Text style={{ fontSize: 14, marginRight: 8, marginTop: -3 }}>•</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            <Text style={styles.bold}>Responsive Design:</Text> Ensure the platform provides an optimal viewing and interaction experience across a wide range of devices, from mobile phones to desktop monitors, utilizing Bootstrap.
          </Text>
        </View>
      </View>

      <Text style={styles.h2}>1.6 Proposed Solution</Text>
      <Text style={styles.paragraphIndent}>
        The proposed solution, Dino-Ecommerce, is a full-stack web application engineered using the Django framework. The system architecture follows the Model-View-Template (MVT) design pattern, which inherently promotes modularity and maintainability.
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
        The selection of the technology stack is a critical decision that influences the performance, security, and scalability of the application. Dino-Ecommerce leverages the following core technologies:
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

      <Text style={styles.h2}>1.8 Technology Justification</Text>
      <Text style={styles.paragraphIndent}>
        The rationale behind selecting these specific technologies is based on several architectural and operational criteria:
      </Text>

      <View style={{ marginLeft: 16, marginTop: 12 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>1. Why Django and Python?</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 12 }}>
          Django follows the "batteries-included" philosophy, providing out-of-the-box solutions for common web development tasks such as authentication, content administration, URL routing, and database schema migrations. Python's readability and vast ecosystem of libraries accelerate development speed while maintaining high code quality.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>2. Why Stripe?</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 12 }}>
          Stripe is an industry leader in online payments. It provides excellent developer documentation, robust test environments, and handles PCI compliance natively by ensuring sensitive card data never touches our servers.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>3. Why Bootstrap?</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 12 }}>
          Bootstrap provides a comprehensive grid system and pre-styled components that ensure the application looks professional and functions seamlessly on mobile devices, minimizing the time required for custom CSS development.
        </Text>
      </View>

      <Text style={styles.h2}>1.9 Scope of the Project</Text>
      <Text style={styles.paragraphIndent}>
        The scope of Dino-Ecommerce is clearly defined to ensure focused development and timely delivery. The project encompasses the complete lifecycle of an online order, from user registration and product browsing to secure checkout and order status tracking. The administrative scope includes inventory management, order fulfillment tracking, and refund processing.
      </Text>
      <Text style={styles.paragraph}>
        Features explicitly out of scope for the current 1.0 release include multi-vendor marketplace capabilities, advanced AI-driven product recommendations, and complex multi-warehouse inventory routing. These elements are designated for future enhancements.
      </Text>

      {/* Project Structure Diagram */}
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <ProjectStructure />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 1.2: Project Directory Structure
        </Text>
      </View>

      <Text style={styles.h2}>1.10 Report Organization</Text>
      <Text style={styles.paragraphIndent}>
        The remainder of this report is organized to logically guide the reader through the project's lifecycle:
      </Text>
      <View style={{ paddingLeft: 12, marginTop: 8 }}>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 2 (Problem Statement):</Text> Analyzes the market needs and existing solutions.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 3 (Objectives):</Text> Details specific technical and operational goals.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 4 (Feasibility Study):</Text> Evaluates technical, economic, and operational viability.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 5 (Estimation):</Text> Utilizes the COCOMO model for project planning.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 6 (SDLC):</Text> Describes the Agile methodology and requirement gathering processes.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 7 (System Design):</Text> Presents DFDs, Use Cases, and Database ER Diagrams.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 8 (Implementation):</Text> Showcases critical code snippets and application structure.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 9 (Testing):</Text> Outlines testing methodologies and test case results.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 10 (User Manual):</Text> Provides operational instructions for end-users.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 11 (Output Screens):</Text> Displays the visual interfaces of the final application.</Text>
        <Text style={[styles.paragraph, { marginBottom: 4 }]}><Text style={styles.bold}>Chapter 12 (Conclusion):</Text> Summarizes achievements and discusses future scope.</Text>
      </View>
    </BookPageLayout>
  );
}
