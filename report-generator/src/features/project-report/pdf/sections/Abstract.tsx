"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";



/**
 * Abstract Page - Professional academic layout
 */
export default function Abstract() {
  return (
    <PreliminaryPageLayout>
      {/* Title */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <View style={{ marginBottom: 12 }}>
          <Text style={[styles.h1, { marginBottom: 0 }]}>ABSTRACT</Text>
        </View>
        <View
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#000000",
          }}
        />
      </View>

      {/* Content */}
      <View>
        <Text style={styles.paragraphIndent}>
          In the modern digital landscape, businesses face increasing pressure
          to automate repetitive tasks, integrate disparate systems, and
          streamline operational workflows. Traditional automation solutions
          often require significant technical expertise, creating barriers for
          non-technical users and small organizations. This project presents{" "}
          <Text style={styles.bold}>AROWAI</Text>, a visual workflow
          automation platform that democratizes process automation through an
          intuitive, no-code interface.
        </Text>

        <Text style={[styles.paragraph, { marginBottom: 6 }]}>
          AROWAI enables users to design, execute, and monitor complex
          automation workflows using a drag-and-drop visual editor built with{" "}
          <Text style={styles.bold}>React Flow</Text>. The platform supports
          various trigger types including webhooks, scheduled (cron-based)
          execution, and manual triggers. It features a comprehensive integration
          system with 24 node types spanning HTTP operations, cloud services,
          data transformation, conditional logic, and third-party service
          connections (Slack, Google Sheets, GitHub, Notion, Stripe, Twilio).
        </Text>

        <Text style={[styles.paragraph, { marginBottom: 6 }]}>
          The system architecture leverages modern technologies including{" "}
          <Text style={styles.bold}>Next.js 16</Text> with React 19 for the
          frontend, <Text style={styles.bold}>tRPC</Text> for type-safe APIs,{" "}
          <Text style={styles.bold}>PostgreSQL</Text> with Prisma ORM for data
          persistence, <Text style={styles.bold}>Inngest</Text> for durable
          workflow execution, and <Text style={styles.bold}>Better Auth</Text>{" "}
          for authentication with OAuth support.
        </Text>

        <Text style={[styles.paragraph, { marginBottom: 6 }]}>
          Key features include{" "}
          <Text style={styles.bold}>team collaboration</Text> with role-based
          access control (Owner, Admin, Member, Viewer),{" "}
          <Text style={styles.bold}>credential management</Text> with encrypted
          storage, <Text style={styles.bold}>advanced automation logic</Text>{" "}
          through integrations with various cloud-based APIs, and{" "}
          <Text style={styles.bold}>execution monitoring</Text> with detailed
          logs and analytics.
        </Text>

        <Text style={[styles.paragraph, { marginBottom: 6 }]}>
          The project follows the{" "}
          <Text style={styles.bold}>Agile methodology</Text> with one-week
          sprints over the period January 2026 to March 15, 2026, emphasizing
          iterative development and continuous feedback. The application is
          deployed at <Text style={styles.bold}>https://arowai.app</Text> and
          the source code is available at
          https://github.com/Rutashman/arowai. The system was designed
          with scalability in mind, utilizing industry-standard practices for
          security, performance optimization, and maintainable code
          architecture.
        </Text>

        {/* Highlighted Quote */}
        <View
          style={{
            borderLeftWidth: 4,
            borderLeftColor: "#000000",
            paddingLeft: 16,
            marginBottom: 10,
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
            "AROWAI represents a significant step toward making process
            automation accessible to all users, regardless of their technical
            background."
          </Text>
        </View>

        {/* Keywords */}
        <View style={{ marginBottom: 8 }}>
          <Text
            style={{ fontSize: 11, fontFamily: "Times-Bold", marginBottom: 3 }}
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
            Workflow Automation, No-Code Platform, React Flow, Inngest, tRPC,
            Next.js 16, Visual Programming, Enterprise Integration, Advanced
            Cloud Logic, Durable Execution, Netlify, Neon PostgreSQL
          </Text>
        </View>
      </View>
    </PreliminaryPageLayout>
  );
}
