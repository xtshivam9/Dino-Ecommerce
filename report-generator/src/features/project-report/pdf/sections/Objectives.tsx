"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function Objectives() {
  return (
    <BookPageLayout chapterTitle="Objectives" chapterNum="03">
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
          Chapter 03
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
          Objectives
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

      <Text style={styles.h2}>3.1 Introduction</Text>
      <Text style={styles.paragraphIndent}>
        Clear and measurable objectives are the cornerstone of any successful software engineering project. They define the intended outcomes, guide architectural decisions, and provide a metric against which the final product can be evaluated. The objectives for Arowai Ecommerce 1.0 are categorized into Primary, Secondary, and Technical objectives to ensure a holistic approach to system development.
      </Text>

      <Text style={styles.h2}>3.2 Primary Objectives</Text>
      <Text style={styles.paragraphIndent}>
        The primary objectives encompass the core functionality required to operate a successful e-commerce platform. These are the non-negotiable features that define the minimum viable product (MVP).
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>1. Secure User Authentication & Management</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To develop a secure registration and login system utilizing Django Allauth, ensuring that user passwords are cryptographically hashed and session data is securely managed to prevent unauthorized access.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>2. Dynamic Product Cataloging</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To implement a robust database schema capable of storing detailed product information, including prices, descriptions, stock levels, and categorized product images, presented through a responsive user interface.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>3. Reliable Shopping Cart Mechanism</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To engineer a stateful shopping cart that accurately tracks user selections, calculates sub-totals, applies valid promotional discount codes, and maintains state across the user's active session.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>4. Secure Payment Processing</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To seamlessly integrate the Stripe payment gateway, facilitating secure credit card transactions without exposing sensitive financial data to the local server environment, ensuring PCI compliance.
        </Text>
      </View>

      <Text style={styles.h2}>3.3 Secondary Objectives</Text>
      <Text style={styles.paragraphIndent}>
        Secondary objectives focus on enhancing the user experience, providing administrative capabilities, and ensuring the platform is ready for real-world deployment.
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>1. Order History & Tracking</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To provide authenticated users with a personal dashboard where they can review past orders, check the status of active shipments, and request refunds if applicable.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>2. Comprehensive Administrative Control</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To leverage the built-in Django Admin interface, customizing it to allow store owners to effortlessly add new products, manage inventory levels, process refunds, and update order statuses.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>3. Cross-Device Responsiveness</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To utilize Bootstrap CSS to ensure the platform interface is fluid and highly usable across a wide spectrum of devices, from mobile smartphones to large desktop monitors.
        </Text>
      </View>

      <Text style={styles.h2}>3.4 Technical Objectives</Text>
      <Text style={styles.paragraphIndent}>
        These objectives relate to the underlying software architecture, code quality, and deployment strategies.
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>1. Model-View-Template (MVT) Architecture</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To strictly adhere to Django's MVT architectural pattern, ensuring a clean separation of concerns between database models, business logic views, and presentation templates.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>2. Relational Database Integrity</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To design a normalized SQLite/PostgreSQL database schema utilizing Django's Object-Relational Mapping (ORM) to enforce referential integrity and support complex queries efficiently.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>3. Scalable Cloud Deployment</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          To configure the application for successful deployment on modern cloud platforms (such as Vercel), properly managing static assets, environment variables, and WSGI configurations.
        </Text>
      </View>

      <Text style={styles.h2}>3.5 Expected Outcomes</Text>
      <Text style={styles.paragraphIndent}>
        Upon successful completion of the project, the expected outcome is a fully functional, highly secure, and visually appealing e-commerce application. The system will demonstrate the capability to handle a complete end-to-end user journey—from initial site visit and product discovery to final payment and order confirmation. 
      </Text>
      <Text style={styles.paragraph}>
        Furthermore, the source code will serve as a robust template that can be further extended or customized for various specific retail domains, fulfilling the project's goal of providing a scalable foundation for online businesses.
      </Text>

      <Text style={styles.h2}>3.6 Summary</Text>
      <Text style={styles.paragraphIndent}>
        The defined objectives establish a clear roadmap for the Arowai Ecommerce 1.0 project. By focusing on security, architectural integrity, and user experience, the project aims to deliver a high-quality software solution that addresses the specific challenges identified in the problem statement.
      </Text>

    </BookPageLayout>
  );
}
