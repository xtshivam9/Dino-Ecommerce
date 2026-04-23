"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 1: Introduction
 * Radically condensed.
 */
export default function Introduction() {
  return (
    <BookPageLayout chapterTitle="Introduction" chapterNum="01">
      <View style={{ alignItems: "center", marginBottom: 15, marginTop: 5 }}>
        <Text style={{ fontSize: 14, fontFamily: "Times-Bold", textTransform: "uppercase" }}>Chapter 01: Introduction</Text>
        <View style={{ width: 40, height: 2, backgroundColor: "#000000", marginTop: 4 }} />
      </View>

      <Text style={styles.h2}>1.1 Project Overview</Text>
      <Text style={styles.paragraphIndent}>
        In today's digital era, operational agility is paramount. AROWAI is a state-of-the-art e-commerce platform designed to democratize automation by providing an intuitive, drag-and-drop interface for complex business logic. Built on <Text style={styles.bold}>Next.js 16, React Flow, and Inngest</Text>, it bridges the gap between technical capability and operational necessity.
      </Text>

      <Text style={styles.h2}>1.2 Problem Statement & Motivation</Text>
      <Text style={styles.paragraph}>
        Organizations face fragmentation ("SaaS Sprawl") where data is trapped in unconnected tools. Existing solutions are either high-barrier code-first platforms or rigid, linear automation tools. AROWAI addresses this through:
      </Text>
      <View style={{ paddingLeft: 10, marginBottom: 4 }}>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Democratization:</Text> Enabling non-technical users to build sophisticated orders.</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Durability:</Text> Implementing robust order state management for zero data loss.</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Extensibility:</Text> Allowing "low-code" escapes for developers via custom JS/TS.</Text>
      </View>

      <Text style={styles.h2}>1.3 Project Objectives</Text>
      <View wrap={false} style={{ marginBottom: 4, marginTop: 2 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "25%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Category</Text>
            <Text style={{ width: "75%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5 }}>Specific Goals</Text>
          </View>
          {[
            ["Primary", "Visual orchestration via React Flow; Durable execution via Inngest; Multi-tenant RBAC."],
            ["Secondary", "AI integration (LLMs); Encrypted credential storage (AES-256); Scalable edge deployment."],
            ["Technical", "Next.js 16 App Router; Prisma ORM with Neon DB; tRPC for E2E type-safety."],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 2 ? 0.5 : 0 }}>
              <Text style={{ width: "25%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "75%", fontSize: 6.5, padding: 1.2 }}>{row[1]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h2}>1.4 Technology Stack Justification</Text>
      <Text style={styles.paragraph}>
        Next.js 16 provides the SSR/ISR foundation for speed, while React Flow enables the complex visual canvas. Inngest handles the "durable execution" requirement, ensuring orders survive server crashes and API timeouts.
      </Text>

      <Text style={styles.h2}>1.5 Report Organization</Text>
      <Text style={styles.paragraph}>
        This report is structured into 12 chapters covering the entire SDLC, from initial feasibility and requirements to implementation details, testing results, and future enhancements.
      </Text>
    </BookPageLayout>
  );
}
