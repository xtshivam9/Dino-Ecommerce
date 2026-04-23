"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 6.3: Requirement Gathering
 * Radical condensation into summary grids.
 */
export default function RequirementGathering() {
  return (
    <BookPageLayout chapterTitle="SDLC" chapterNum="06">
      <Text style={styles.h2}>6.3 Requirement Gathering Methodology</Text>
      <Text style={styles.paragraph}>
        AROWAI employed a multi-method approach combining questionnaires (47 respondents), stakeholder interviews (8 participants), and competitive analysis to define its core feature set.
      </Text>

      <Text style={styles.h3}>6.3.1 Key Findings & Priorities</Text>
      <View wrap={false} style={{ marginBottom: 4, marginTop: 2 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "25%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Metric</Text>
            <Text style={{ width: "15%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, textAlign: "center", borderRightWidth: 0.5 }}>Importance</Text>
            <Text style={{ width: "60%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5 }}>Observation</Text>
          </View>
          {[
            ["Visual Interface", "85%", "Strong preference for drag-and-drop over code-first automation."],
            ["API Integration", "70%", "Essential for connecting disparate SaaS tools via HTTP."],
            ["Team Collab", "80%", "Need for RBAC and shared workspaces in multi-tenant environments."],
            ["Monitoring", "90%", "Real-time execution logs and error alerts are non-negotiable."],
            ["AI Capability", "65%", "Growing demand for LLM integration for automated data processing."],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 4 ? 0.5 : 0 }}>
              <Text style={{ width: "25%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "15%", fontSize: 6.5, padding: 1.2, textAlign: "center", borderRightWidth: 0.5 }}>{row[1]}</Text>
              <Text style={{ width: "60%", fontSize: 6.5, padding: 1.2 }}>{row[2]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h3}>6.3.2 Use Case Matrix</Text>
      <View wrap={false} style={{ marginBottom: 4 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "10%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>UC#</Text>
            <Text style={{ width: "30%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Use Case</Text>
            <Text style={{ width: "60%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5 }}>Scenario Description</Text>
          </View>
          {[
            ["UC-01", "Order Creation", "User adds products to cart and connects them to define transactional logic."],
            ["UC-02", "Checkout Flow", "System executes order graph, processes payment, and syncs data to external APIs."],
            ["UC-03", "Auth / RBAC", "User registers, creates a team, and assigns roles (Admin, Member, Viewer)."],
            ["UC-04", "Integration", "Connecting third-party platforms (Slack, Sheets, GitHub) via OAuth2."],
            ["UC-05", "Monitoring", "Reviewing execution history and re-running failed steps via history panel."],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 4 ? 0.5 : 0 }}>
              <Text style={{ width: "10%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "30%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[1]}</Text>
              <Text style={{ width: "60%", fontSize: 6.5, padding: 1.2 }}>{row[2]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h3}>6.3.3 Competitive Advantage</Text>
      <Text style={styles.paragraph}>
        AROWAI differentiates itself from competitors (Zapier, Shopify, Integromat) by offering <Text style={styles.bold}>Durable Execution</Text> (zero-loss state) and <Text style={styles.bold}>Zero-Fee Scalability</Text> on edge networks.
      </Text>
    </BookPageLayout>
  );
}
