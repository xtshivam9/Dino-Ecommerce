"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";

interface AbstractProps {
  pageNumber: number;
}

/**
 * Abstract Page - Professional academic layout
 */
export default function Abstract({ pageNumber }: AbstractProps) {
  return (
    <PreliminaryPageLayout pageNumber={pageNumber}>
      {/* Title */}
      <View style={{ alignItems: "center", marginTop: 8, marginBottom: 20 }}>
        <Text style={styles.h1}>ABSTRACT</Text>
        <View
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#000000",
            marginTop: 8,
          }}
        />
      </View>

      {/* Content */}
      <View>
        <Text style={styles.paragraphIndent}>
          In the modern digital landscape, businesses face increasing pressure
          to establish a strong online presence to reach a wider audience and
          facilitate convenient shopping experiences. This project presents{" "}
          <Text style={styles.bold}>DINO-ECOMMERCE</Text>, a robust and
          user-friendly online shopping platform designed to streamline product
          browsing, cart management, and secure checkout processes.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 12 }]}>
          Dino-Ecommerce enables customers to effortlessly browse through various
          product categories, view detailed item descriptions, and manage their
          shopping carts. The platform incorporates a secure checkout flow with{" "}
          <Text style={styles.bold}>Stripe Payment Gateway</Text> integration,
          allowing for safe transactions. Key functionalities include a coupon
          system for promotional discounts, user authentication via Google OAuth
          using Django Allauth, and an intuitive order history and refund management
          system.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 12 }]}>
          The system architecture is built upon the Model-View-Template (MVT) pattern,
          leveraging modern technologies including the{" "}
          <Text style={styles.bold}>Django 5.0</Text> web framework for the
          backend logic, <Text style={styles.bold}>Python 3</Text> for core processing,{" "}
          <Text style={styles.bold}>SQLite</Text> for data persistence, and a responsive
          frontend designed with <Text style={styles.bold}>Bootstrap</Text>.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 12 }]}>
          The project addresses the growing demand for scalable e-commerce solutions
          that can be easily deployed and managed. It provides a comprehensive
          admin dashboard for inventory and order management, empowering store
          owners with full control over their operations. The application is
          designed with a focus on security, utilizing CSRF protection and secure
          session management.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 12 }]}>
          The project follows a structured development lifecycle emphasizing
          iterative development and continuous feedback. The source code is
          organized into modular Django apps, ensuring maintainable code
          architecture. The deployment strategy utilizes <Text style={styles.bold}>Vercel</Text>{" "}
          for scalable cloud hosting.
        </Text>

        {/* Highlighted Quote */}
        <View
          style={{
            borderLeftWidth: 4,
            borderLeftColor: "#000000",
            paddingLeft: 16,
            marginTop: 20,
            marginLeft: 8,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Times-Italic",
              lineHeight: 1.6,
            }}
          >
            "Dino-Ecommerce represents a comprehensive approach to building
            secure, scalable, and intuitive online shopping experiences using modern
            web frameworks."
          </Text>
        </View>

        {/* Keywords */}
        <View style={{ marginTop: 16 }}>
          <Text
            style={{ fontSize: 11, fontFamily: "Times-Bold", marginBottom: 6 }}
          >
            Keywords:
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Times-Italic",
              lineHeight: 1.5,
            }}
          >
            E-Commerce, Django, Python, Stripe, Online Shopping, Bootstrap,
            Model-View-Template, Authentication, Web Application, Vercel
          </Text>
        </View>
      </View>
    </PreliminaryPageLayout>
  );
}
