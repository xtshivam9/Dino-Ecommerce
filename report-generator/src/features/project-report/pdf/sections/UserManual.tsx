"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import UserJourneyDiagram from "../diagrams/UserJourneyDiagram";

/**
 * Chapter 10: User Manual
 * Aggressively condensed version.
 */
export default function UserManual() {
  return (
    <BookPageLayout chapterTitle="User Manual" chapterNum="10">
      <View style={{ alignItems: "center", marginBottom: 4 }}>
        <Text style={{ fontSize: 13, fontFamily: "Times-Bold", textTransform: "uppercase" }}>Chapter 10: User Manual</Text>
        <View style={{ width: 40, height: 2, backgroundColor: "#000000", marginTop: 2 }} />
      </View>


      <Text style={styles.paragraphIndent}>
        This guide provides concise instructions for AROWAI. Access the platform at https://arowai.app.
      </Text>

      <Text style={styles.h2}>10.1 Getting Started</Text>
      <View style={{ paddingLeft: 10, marginBottom: 2 }}>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Requirements:</Text> Modern browser (Chrome/Firefox), stable internet, 1280x720 min res.</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Registration:</Text> Sign up at /signup or use Google/GitHub OAuth. Verify email to activate.</Text>
      </View>

      <View wrap={false} style={{ alignItems: "center", marginBottom: 2, marginTop: 2 }}>
        <UserJourneyDiagram />
        <Text style={{ fontSize: 6.5, fontFamily: "Times-Italic", textAlign: "center" }}>Figure 10.1: User Journey Overview</Text>
      </View>


      <Text style={styles.h2}>10.2 Core Navigation & Workflow Editor</Text>
      <Text style={styles.paragraph}>The dashboard offers real-time metrics, recent logs, and quick-access triggers. The visual editor uses a drag-and-drop canvas for flow construction.</Text>
      
      <View style={{ paddingLeft: 10, marginBottom: 2 }}>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Adding Nodes:</Text> Drag from the sidebar palette or use the context menu.</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Connecting:</Text> Drag from output handles to input handles to define data flow.</Text>
        <Text style={styles.paragraph}>• <Text style={styles.bold}>Auto-Save:</Text> Changes persist automatically via debounced cloud sync.</Text>
      </View>

      <Text style={styles.h2}>10.3 Configuration & Integration</Text>
      <View wrap={false} style={{ marginBottom: 4, marginTop: 2 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderBottomWidth: 0.5 }}>
            <Text style={{ width: "25%", fontSize: 8, fontFamily: "Times-Bold", padding: 2, borderRightWidth: 0.5 }}>Category</Text>
            <Text style={{ width: "75%", fontSize: 8, fontFamily: "Times-Bold", padding: 2 }}>Models & Features</Text>
          </View>
          {[
            ["Triggers", "Manual, Webhook (unique URL), Schedule (Cron)"],
            ["Logic", "IF/Else branching, Switch routing, Loops, Merging"],
            ["AI/Cloud", "Text Generation, Data Analytics, Classification"],
            ["External", "Slack, Google Sheets, GitHub, Notion, Stripe, Twilio"],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 3 ? 0.5 : 0 }}>
              <Text style={{ width: "25%", fontSize: 7, padding: 1.5, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "75%", fontSize: 7, padding: 1.5 }}>{row[1]}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.h2}>10.4 Execution, Security & Teams</Text>
      <Text style={styles.paragraph}>Monitor runs via the Executions tab. Sensitive data (API keys) must be stored in the encrypted Credential Manager (AES-256-GCM).</Text>
      
      <View wrap={false} style={{ marginBottom: 4, marginTop: 2 }}>
        <View style={{ borderWidth: 0.5, borderColor: "#000000" }}>
          {[
            ["Owner", "Full admin & billing control"],
            ["Admin", "Manage members, flows, and credentials"],
            ["Member", "Create/Execute flows; view shared assets"],
            ["Viewer", "Read-only access to logs and designs"],
          ].map((row, i) => (
            <View key={i} style={{ flexDirection: "row", borderBottomWidth: i < 3 ? 0.5 : 0 }}>
              <Text style={{ width: "20%", fontSize: 7, fontFamily: "Times-Bold", padding: 1.5, borderRightWidth: 0.5 }}>{row[0]}</Text>
              <Text style={{ width: "80%", fontSize: 7, padding: 1.5 }}>{row[1]}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 7, fontFamily: "Times-Italic", textAlign: "center", marginTop: 2 }}>Table 10.1: RBAC Permission Matrix</Text>
      </View>

      <View wrap={false}>
        <Text style={styles.h3}>10.4.1 Versioning & Rollback</Text>
        <Text style={styles.paragraph}>AROWAI maintains a complete snapshot history. Access the 'History' panel to compare versions or perform an instant rollback to any previous state.</Text>
      </View>

    </BookPageLayout>
  );
}
