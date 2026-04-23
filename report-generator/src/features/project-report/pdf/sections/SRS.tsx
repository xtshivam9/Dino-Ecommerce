"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 6.4: Software Requirement Specification
 * Radical condensation into high-density tables.
 */
export default function SRS() {
  return (
    <BookPageLayout chapterTitle="SDLC" chapterNum="06">
      <Text style={styles.h2}>6.4 Software Requirement Specification (SRS)</Text>
      <Text style={styles.paragraph}>
        The SRS document provides a comprehensive description of the purpose and environment for AROWAI. It defines the functional and non-functional requirements essential for the system's performance and scalability.
      </Text>

      <Text style={styles.h3}>6.4.1 Functional Requirements (FR)</Text>
      <View wrap={false} style={{ marginBottom: 4 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "15%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>ID</Text>
            <Text style={{ width: "70%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Requirement Description</Text>
            <Text style={{ width: "15%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, textAlign: "center" }}>Priority</Text>
          </View>
          {[
            ["FR-1.1", "Intuitive storefront interface for product discovery and cart management", "Must"],
            ["FR-1.2", "Drag-and-drop cart additions with real-time total updates", "Must"],
            ["FR-1.3", "Dynamic product filtering by category, price, and attributes", "Must"],
            ["FR-1.4", "Secure checkout with Stripe integration and immediate success feedback", "Must"],
            ["FR-2.1", "User authentication via OAuth (Google/GitHub) and Email/Password", "Must"],
            ["FR-2.2", "RBAC membership system for team-based workspace management", "Must"],
            ["FR-3.1", "Durable execution for transactional operations via Inngest", "Should"],
            ["FR-3.2", "Encrypted credential management for third-party API keys (AES-256)", "Must"],
            ["FR-4.1", "Comprehensive analytics dashboard for sales and execution metrics", "Should"],
            ["FR-4.2", "Webhook triggers for automated transactional event handling", "Must"],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 9 ? 0.5 : 0 }}>
              <Text style={{ width: "15%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "70%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[1]}</Text>
              <Text style={{ width: "15%", fontSize: 6.5, padding: 1.2, textAlign: "center" }}>{row[2]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h3}>6.4.2 Non-Functional Requirements (NFR)</Text>
      <View wrap={false} style={{ marginBottom: 4 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "20%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Category</Text>
            <Text style={{ width: "80%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5 }}>Requirement Specification</Text>
          </View>
          {[
            ["Performance", "Server-side rendering (SSR) under 200ms; client interaction latency < 100ms"],
            ["Scalability", "Support for up to 10k concurrent users using serverless edge architecture"],
            ["Security", "End-to-end HTTPS, CSRF protection, and zero-knowledge credential encryption"],
            ["Availability", "99.9% uptime target through distributed Vercel Edge regions and Neon DB"],
            ["Maintainability", "90%+ TypeScript type coverage; modular feature-based architecture"],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 4 ? 0.5 : 0 }}>
              <Text style={{ width: "20%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "80%", fontSize: 6.5, padding: 1.2 }}>{row[1]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h3}>6.4.3 External Interface Requirements</Text>
      <Text style={styles.paragraph}>
        • <Text style={styles.bold}>User Interfaces:</Text> Responsive React-based UI (Next.js) supporting 1280px to 320px widths.
      </Text>
      <Text style={styles.paragraph}>
        • <Text style={styles.bold}>Software Interfaces:</Text> Prisma ORM for PostgreSQL connectivity; tRPC for E2E type-safe API communication.
      </Text>
      <Text style={styles.paragraph}>
        • <Text style={styles.bold}>Communication Protocols:</Text> Webhooks via HTTPS; SMTP for transactional emails (Resend).
      </Text>

      <Text style={styles.h3}>6.4.4 System Constraints & Risks</Text>
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Constraint:</Text> Must run entirely within browser-compatible environment (no native binaries).</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Risk:</Text> Dependence on third-party AI/Payment APIs (OpenAI, Stripe) - mitigated by retry queues.</Text>
      </View>
    </BookPageLayout>
  );
}
