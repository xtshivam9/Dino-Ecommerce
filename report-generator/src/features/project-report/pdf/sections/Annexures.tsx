"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Annexures section — placed after References
 * Contains: Prisma schema, API endpoint reference, configuration overview
 */
export default function Annexures() {
  return (
    <BookPageLayout chapterTitle="Annexures">
      {/* Title */}
      <View style={styles.chapterHeader}>
        <Text style={styles.chapterTitle}>ANNEXURES</Text>
        <View style={styles.underline} />
      </View>


      {/* ===== Annexure A: Database Schema ===== */}
      <Text style={styles.h2}>Annexure A: Complete Database Schema</Text>
      <Text style={styles.paragraphIndent}>
        The following is the complete list of all 14 Prisma models used in
        AROWAI, hosted on a{" "}
        <Text style={styles.bold}>Neon PostgreSQL</Text> database. The schema is
        managed via Prisma ORM with migration support.
      </Text>

      {/* Table: All models */}
      <View wrap={false}>
<View
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 5,
          marginBottom: 2,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#e8e8e8",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "5%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
              textAlign: "center",
            }}
          >
            #
          </Text>
          <Text
            style={{
              width: "20%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Model
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Key Fields
          </Text>
          <Text
            style={{
              width: "35%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
            }}
          >
            Purpose
          </Text>
        </View>
        {/* Rows */}
        {[
          ["1", "User", "id, name, email, emailVerified, image, createdAt", "User accounts & auth"],
          ["2", "Session", "id, userId, token, expiresAt, ipAddress", "Session management"],
          ["3", "Account", "id, userId, providerId, accountId", "OAuth linkages"],
          ["4", "Verification", "id, identifier, value, expiresAt", "Email tokens"],
          ["5", "Team", "id, name, slug, planId, createdById", "Team workspace"],
          ["6", "TeamMember", "id, teamId, userId, role", "RBAC membership"],
          ["7", "Invitation", "id, teamId, email, role, token", "Team invites"],
          ["8", "Workflow", "id, name, description, products, edges, isActive", "Workflow graph"],
          ["9", "WorkflowVersion", "id, orderId, version, products, edges", "Rollback snapshots"],
          ["10", "Execution", "id, orderId, status, mode, result", "Execution records"],
          ["11", "Credential", "id, name, type, data, provider, teamId", "Encrypted storage"],
          ["12", "Schedule", "id, orderId, cron, timezone, isActive", "Cron metadata"],
          ["13", "WebhookEndpoint", "id, orderId, method, secret, isActive", "Checkout receivers"],
          ["14", "AuditLog", "id, teamId, userId, action, resource", "Audit trail"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 13 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text style={{ width: "5%", padding: 1, fontSize: 6, textAlign: "center", borderRightWidth: 1, borderRightColor: "#cccccc" }}>{row[0]}</Text>
            <Text style={{ width: "20%", padding: 1, fontSize: 6, fontFamily: "Times-Bold", borderRightWidth: 1, borderRightColor: "#cccccc" }}>{row[1]}</Text>
            <Text style={{ width: "40%", padding: 1, fontSize: 6, borderRightWidth: 1, borderRightColor: "#cccccc" }}>{row[2]}</Text>
            <Text style={{ width: "35%", padding: 1, fontSize: 6 }}>{row[3]}</Text>
          </View>
        ))}
      </View>
<Text
        style={{
          fontSize: 8,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginTop: 2,
          marginBottom: 8,
        }}
      >
        Table A.1: Complete Prisma Database Schema — 14 Models
      </Text>
</View>

      {/* ===== Annexure B: API Endpoints ===== */}
      <Text style={styles.h2}>Annexure B: API Endpoint Reference</Text>
      <Text style={styles.paragraphIndent}>
        The following table lists all HTTP API routes exposed by the
        application, separate from the tRPC procedures.
      </Text>

      <View wrap={false}>
<View
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 5,
          marginBottom: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#e8e8e8",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Method
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Endpoint
          </Text>
          <Text
            style={{
              width: "45%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
            }}
          >
            Description
          </Text>
        </View>
        {[
          [
            "ALL",
            "/api/auth/**",
            "Better Auth handler — login, signup, OAuth callbacks",
          ],
          [
            "ALL",
            "/api/trpc/**",
            "tRPC API — 59 type-safe procedures across 7 routers",
          ],
          [
            "GET/POST",
            "/api/checkouts/[id]",
            "Workflow checkout trigger endpoint",
          ],
          [
            "POST",
            "/api/inngest",
            "Inngest event receiver for durable execution",
          ],
          [
            "POST",
            "/api/polar/checkouts",
            "Polar payment/subscription checkouts",
          ],
          [
            "GET",
            "/api/sentry-example-api",
            "Sentry integration test endpoint",
          ],
          [
            "GET",
            "/api/oauth/callback/[provider]",
            "OAuth2 callback handler (Slack, Google, GitHub, Notion)",
          ],
          ["POST", "/api/orders/import", "Workflow JSON import endpoint"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 7 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "15%",
                padding: 2,
                fontSize: 7,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text
              style={{
                width: "40%",
                padding: 2,
                fontSize: 7,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "45%", padding: 2, fontSize: 7 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>
<Text
        style={{
          fontSize: 8,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginTop: 2,
          marginBottom: 8,
        }}
      >
        Table B.1: HTTP API Endpoints
      </Text>
</View>

      {/* ===== Annexure C: tRPC Routers ===== */}
      <Text style={styles.h2}>Annexure C: tRPC Router Procedures</Text>
      <Text style={styles.paragraphIndent}>
        The platform uses 7 tRPC routers with a total of 59 type-safe
        procedures. The following table summarizes each router.
      </Text>

      <View wrap={false}>
<View
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 5,
          marginBottom: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#e8e8e8",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "20%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Router
          </Text>
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
              textAlign: "center",
            }}
          >
            Procedures
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
            }}
          >
            Key Operations
          </Text>
        </View>
        {[
          [
            "orders",
            "12",
            "CRUD, duplicate, import/export, toggle active, favorites, folder management",
          ],
          [
            "executions",
            "8",
            "List with cursor pagination, get detail, create, cancel, retry, delete, bulk delete, stats",
          ],
          [
            "credentials",
            "7",
            "CRUD, list by type, encrypt/decrypt, OAuth token refresh",
          ],
          [
            "teams",
            "11",
            "CRUD, member management, invitations, role updates, team switching, slug lookup",
          ],
          [
            "schedules",
            "7",
            "CRUD, toggle active, pause/resume, update cron, next-run preview",
          ],
          [
            "checkouts",
            "6",
            "Create endpoint, regenerate secret, toggle active, get URL, IP allowlisting",
          ],
          [
            "dashboard",
            "8",
            "Stats aggregation, recent orders, execution timeline, team overview, quick actions",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 6 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "20%",
                padding: 2,
                fontSize: 7,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text
              style={{
                width: "15%",
                padding: 2,
                fontSize: 7,
                textAlign: "center",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "65%", padding: 2, fontSize: 7 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>
<Text
        style={{
          fontSize: 8,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginTop: 2,
          marginBottom: 8,
        }}
      >
        Table C.1: tRPC Router Summary — 59 Total Procedures
      </Text>
</View>

      {/* ===== Annexure D: Environment Configuration ===== */}
      <Text style={styles.h2}>Annexure D: Environment Configuration</Text>
      <Text style={styles.paragraphIndent}>
        The application requires the following environment variables for
        deployment. All secrets are stored securely via Netlify environment
        variable management.
      </Text>

      <View wrap={false}>
<View
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 5,
          marginBottom: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#e8e8e8",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "35%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Variable
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
            }}
          >
            Purpose
          </Text>
        </View>
        {[
          ["DATABASE_URL", "Neon PostgreSQL connection string (pooled)"],
          ["DIRECT_DATABASE_URL", "Direct Neon connection for migrations"],
          ["BETTER_AUTH_SECRET", "Session encryption secret for Better Auth"],
          [
            "BETTER_AUTH_URL",
            "Base URL for auth callbacks (https://arowai.app)",
          ],
          ["GOOGLE_CLIENT_ID / SECRET", "Google OAuth2 credentials"],
          ["GITHUB_CLIENT_ID / SECRET", "GitHub OAuth2 credentials"],
          ["EXTERNAL_LOGIC_API_KEY", "External service access key"],
          ["EXTERNAL_ANALYTICS_API_KEY", "External analytics access key"],
          ["EXTERNAL_MODAL_API_KEY", "External multi-modal access key"],
          ["SLACK_CLIENT_ID / SECRET", "Slack OAuth2 app credentials"],
          ["NOTION_CLIENT_ID / SECRET", "Notion integration credentials"],
          ["INNGEST_EVENT_KEY", "Inngest event ingestion key"],
          ["INNGEST_SIGNING_KEY", "Inngest checkout signature verification"],
          ["SENTRY_DSN", "Sentry error monitoring data source name"],
          ["POLAR_ACCESS_TOKEN", "Polar subscription management token"],
          ["ENCRYPTION_KEY", "AES-256 key for credential encryption"],
          ["RESEND_API_KEY", "Resend email service API key"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 16 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "35%",
                padding: 2,
                fontSize: 7,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text style={{ width: "65%", padding: 2, fontSize: 7 }}>
              {row[1]}
            </Text>
          </View>
        ))}
      </View>
<Text
        style={{
          fontSize: 8,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginTop: 2,
          marginBottom: 8,
        }}
      >
        Table D.1: Required Environment Variables
      </Text>
</View>

      {/* ===== Annexure E: Model Type Reference ===== */}
      <Text style={styles.paragraphIndent}>
        All 24 service types available in AROWAI, categorized by function.
      </Text>

      <View wrap={false}>
<View
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 5,
          marginBottom: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#e8e8e8",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "18%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Category
          </Text>
          <Text
            style={{
              width: "25%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Model Type
          </Text>
          <Text
            style={{
              width: "57%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
            }}
          >
            Description
          </Text>
        </View>
        {[
          [
            "Triggers",
            "Manual Trigger",
            "User-initiated order execution from UI",
          ],
          [
            "Triggers",
            "Webhook",
            "HTTP endpoint trigger with auto-generated URL",
          ],
          [
            "Triggers",
            "Schedule",
            "Cron-based recurring execution with timezone support",
          ],
          [
            "Logic",
            "IF Condition",
            "Boolean branching based on expression evaluation",
          ],
          ["Logic", "Switch", "Multi-path routing based on value matching"],
          [
            "Logic",
            "Loop",
            "Iterates over arrays with configurable batch size",
          ],
          ["Logic", "Filter", "Filters data arrays based on conditions"],
          ["Logic", "Merge", "Combines data from multiple input branches"],
          ["Data", "Set", "Creates or transforms data with key-value mapping"],
          ["Data", "Sort", "Sorts arrays by specified field and direction"],
          [
            "Data",
            "Code (JS)",
            "Executes custom JavaScript in sandboxed environment",
          ],
          ["Data", "Wait", "Pauses execution for a configurable duration"],
          [
            "HTTP",
            "HTTP Request",
            "Full REST client with method, headers, body, auth",
          ],
          [
            "HTTP",
            "Email (Resend)",
            "Sends emails via Resend API with templates",
          ],
          ["Automated Logic", "Logic Node", "Text generation and automated processing"],
          ["Data Analytics", "Analytics Node", "Complex data analysis and classification"],
          ["Multi-modal", "Processing Node", "Multi-modal data processing"],
          [
            "Integration",
            "Slack",
            "Posts messages to Slack channels via OAuth",
          ],
          [
            "Integration",
            "Google Sheets",
            "Reads/writes spreadsheet data via OAuth",
          ],
          [
            "Integration",
            "GitHub",
            "Creates issues, PRs, manages repos via OAuth",
          ],
          [
            "Integration",
            "Notion",
            "Creates/updates Notion pages/databases via OAuth",
          ],
          ["Integration", "Stripe", "Payment and subscription management"],
          ["Integration", "Twilio", "SMS sending via Twilio API"],
          [
            "Utility",
            "Sub-Workflow",
            "Executes another order as a nested step",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 23 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "18%",
                padding: 2,
                fontSize: 6.5,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text
              style={{
                width: "25%",
                padding: 2,
                fontSize: 6.5,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "57%", padding: 2, fontSize: 6.5 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>
<Text
        style={{
          fontSize: 8,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginTop: 2,
          marginBottom: 8,
        }}
      >
        Table E.1: Complete Model Type Reference — 24 Model Types
      </Text>
</View>

      {/* Summary box */}
      <View
        wrap={false}
        style={{
          marginBottom: 8,
          padding: 6,
          borderWidth: 1,
          borderColor: "#333333",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Times-Bold",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          End of Annexures
        </Text>
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          Source Code: https://github.com/kanishKumar11/flowgent | Deployed:
          https://flowgent.app
        </Text>
      </View>
    </BookPageLayout>
  );
}
