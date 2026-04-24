"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";

interface PrefaceProps {
  pageNumber: number;
}

/**
 * Preface Page
 * Uses PreliminaryPageLayout for consistent margins
 */
export default function Preface({ pageNumber }: PrefaceProps) {
  return (
    <PreliminaryPageLayout pageNumber={pageNumber}>
      {/* Title */}
      <View style={{ alignItems: "center", marginBottom: 28 }}>
        <Text style={styles.h1}>PREFACE</Text>
        <View style={{ width: 80, height: 4, backgroundColor: "#000000" }} />
      </View>

      {/* Content */}
      <View>
        <Text style={styles.paragraphIndent}>
          This project report presents the development of{" "}
          <Text style={styles.bold}>DINO-ECOMMERCE</Text>, a comprehensive
          online shopping platform designed to provide a seamless and secure
          e-commerce experience. The project was
          undertaken as part of the academic requirements for the degree of{" "}
          <Text style={styles.bold}>
            Bachelor of Computer Applications (BCA)
          </Text>{" "}
          at Baba Budha Sahib College.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 12 }]}>
          The report is structured to provide a comprehensive understanding of
          the project from conception to completion. It begins with an
          introduction to the problem domain and motivation, followed by a
          detailed analysis of existing solutions and their limitations.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 12 }]}>
          The subsequent chapters cover the complete{" "}
          <Text style={styles.bold}>
            Software Development Life Cycle (SDLC)
          </Text>
          , including requirement gathering, system design with DFD, Use Case,
          and ER diagrams, and project estimation using the COCOMO model.
        </Text>

        {/* Technologies Box */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#999999",
            padding: 14,
            marginTop: 14,
            marginBottom: 14,
          }}
        >
          <Text style={{ fontFamily: "Times-Bold", marginBottom: 8 }}>
            Technologies Explored:
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • Django 5.0 (Python Web Framework)
            </Text>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • Python 3.10
            </Text>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • SQLite Database
            </Text>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • Stripe Payment Gateway
            </Text>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • Django Allauth (Authentication)
            </Text>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • HTML5, CSS3, JavaScript
            </Text>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • Bootstrap 4
            </Text>
            <Text style={{ fontSize: 10, width: "50%", marginBottom: 3 }}>
              • Vercel Hosting
            </Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          The implementation chapter includes carefully selected code snippets
          that demonstrate key concepts, covering the full technology stack from
          frontend templates to backend views and Stripe integration. The testing chapter provides comprehensive
          test cases and methodology. The output chapter describes all
          application screens and interfaces. The report concludes with an
          honest assessment of the project&apos;s limitations and a roadmap for
          future enhancements.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 12 }]}>
          Every effort has been made to present the information in a clear,
          well-organized manner while adhering to academic standards. We hope
          this report serves as both documentation of our learning journey and a
          useful reference for anyone interested in building similar
          applications.
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#cccccc",
            padding: 10,
            marginTop: 14,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 10, fontFamily: "Times-Italic" }}>
            Your feedback and suggestions are welcome to help improve this work.
          </Text>
        </View>
      </View>
    </PreliminaryPageLayout>
  );
}
