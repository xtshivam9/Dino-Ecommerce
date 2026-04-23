"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 9: Testing
 * Radical condensation into summary tables.
 */
export default function Testing() {
  return (
    <BookPageLayout chapterTitle="Testing" chapterNum="09">
      <Text style={styles.h2}>9.1 Testing Strategy & Principles</Text>
      <Text style={styles.paragraph}>
        AROWAI follows a multi-layered testing strategy combining SOLID engineering principles with a comprehensive Testing Pyramid. This ensures robust component isolation and reliable cross-service integration.
      </Text>

      <View wrap={false} style={{ marginBottom: 4, marginTop: 2 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "20%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Level</Text>
            <Text style={{ width: "40%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Scope</Text>
            <Text style={{ width: "20%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Tools</Text>
            <Text style={{ width: "20%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, textAlign: "center" }}>Coverage</Text>
          </View>
          {[
            ["Unit", "Logic, Utility functions, React primitives", "Vitest, RTL", "85%"],
            ["Integration", "tRPC API, Prisma DB operations", "Vitest, tRPC", "75%"],
            ["E2E", "User checkout & payment flows", "Playwright", "60%"],
            ["Acceptance", "Business requirement validation", "Manual", "100%"],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 3 ? 0.5 : 0 }}>
              <Text style={{ width: "20%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "40%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[1]}</Text>
              <Text style={{ width: "20%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[2]}</Text>
              <Text style={{ width: "20%", fontSize: 6.5, padding: 1.2, textAlign: "center" }}>{row[3]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h3}>9.2 Unit & Integration Test Cases</Text>
      <View wrap={false} style={{ marginBottom: 4 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "10%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>ID</Text>
            <Text style={{ width: "25%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Module</Text>
            <Text style={{ width: "50%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>Test Description</Text>
            <Text style={{ width: "15%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, textAlign: "center" }}>Status</Text>
          </View>
          {[
            ["UT-01", "AuthService", "Verify password hashing & OAuth verification", "Pass"],
            ["UT-02", "CartLogic", "Verify dynamic total calculation with tax/discount", "Pass"],
            ["UT-03", "OrderExecution", "Validate Inngest job trigger & state update", "Pass"],
            ["IT-01", "tRPC Checkout", "End-to-end checkout with mock Stripe token", "Pass"],
            ["IT-02", "Prisma Sync", "Verify atomic transaction on multi-model update", "Pass"],
            ["IT-03", "Auth Integration", "Session persistence across subdomain redirect", "Pass"],
            ["ST-01", "Security", "Verify CSRF & Rate limiting on sensitive routes", "Pass"],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 6 ? 0.5 : 0 }}>
              <Text style={{ width: "10%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "25%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[1]}</Text>
              <Text style={{ width: "50%", fontSize: 6.5, padding: 1.2, borderRightWidth: 0.5 }}>{row[2]}</Text>
              <Text style={{ width: "15%", fontSize: 6.5, padding: 1.2, textAlign: "center", color: "#006600" }}>{row[3]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h3}>9.3 Code Quality & Performance Benchmarks</Text>
      <Text style={styles.paragraph}>
        Automated CI/CD pipelines enforce linting (ESLint), type safety (TSC), and security auditing (NPM Audit) before every deployment.
      </Text>
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Lighthouse Score:</Text> 98+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO.</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Bundle Size:</Text> Managed under 150kB (Gzip) for core checkout routes.</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Error Tracking:</Text> Real-time monitoring via Sentry with 0% unhandled exception tolerance.</Text>
      </View>
    </BookPageLayout>
  );
}
