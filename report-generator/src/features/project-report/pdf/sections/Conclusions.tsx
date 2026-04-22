"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 12: Conclusions & Future Scope (4 pages)
 */
export default function Conclusions() {
  return (
    <BookPageLayout chapterTitle="Conclusions" chapterNum="12">
      <View style={{ alignItems: "center", marginBottom: 40, marginTop: 10 }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Times-Roman",
            color: "#666666",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          CHAPTER 12
        </Text>
        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 32,
              fontFamily: "Times-Bold",
              textAlign: "center",
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#000000",
              lineHeight: 1.1,
            }}
          >
            CONCLUSIONS & FUTURE SCOPE
          </Text>
        </View>
        <View
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#000000",
          }}
        />
      </View>

      <Text style={styles.h2}>12.1 Project Summary</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>AROWAI</Text> has been successfully developed
        as a comprehensive visual workflow automation platform. The project
        achieved its primary objectives of creating an intuitive, accessible
        tool for process automation that bridges the gap between no-code
        simplicity and developer flexibility.
      </Text>
      <Text style={styles.paragraphIndent}>
        The platform enables users to visually design, execute, and monitor
        automated workflows through an intuitive drag-and-drop interface. By
        leveraging modern web technologies and cloud-native architecture,
        AROWAI provides a robust, scalable solution for personal and
        team-based automation.
      </Text>

      <Text style={styles.h2}>12.2 Key Achievements</Text>
      <View wrap={false}>
<View
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 6,
          marginBottom: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f0f0f0",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "25%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Objective
          </Text>
          <Text
            style={{
              width: "45%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Achievement
          </Text>
          <Text
            style={{
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Status
          </Text>
        </View>
        {[
          [
            "Visual Editor",
            "React Flow-based drag-and-drop canvas",
            "Completed",
          ],
          ["Order State Management", "Durable execution with Inngest", "Completed"],
          ["Discount & Coupon Engine", "OpenAI, Anthropic, Google Gemini", "Completed"],
          ["Team Collaboration", "RBAC with 4 role levels", "Completed"],
          ["Credential Security", "AES-256 encrypted storage", "Completed"],
          [
            "24 Service Types",
            "HTTP, Cloud Services, Slack, GitHub, Notion, Stripe, Twilio, logic nodes",
            "Completed",
          ],
          [
            "Version Control",
            "Workflow versioning with rollback support",
            "Completed",
          ],
          [
            "Scheduled Execution",
            "Cron-based scheduling with timezone support",
            "Completed",
          ],
          [
            "Webhook Triggers",
            "Auto-generated endpoints with secret validation",
            "Completed",
          ],
          ["Templates", "5 pre-built order templates", "Completed"],
          [
            "Monitoring",
            "Real-time execution logs & error alerting",
            "Completed",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 9 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "25%",
                padding: 2,
                fontSize: 8,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text
              style={{
                width: "45%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text
              style={{
                width: "30%",
                padding: 2,
                fontSize: 8,
                color: "#006600",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>
<Text
        style={{
          fontSize: 9,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        Table 12.1: Project Objectives Achievement
      </Text>
</View>

      <Text style={styles.h2}>12.3 Technical Accomplishments</Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Frontend:</Text> Modern React 19 with
          Next.js 16 App Router, TypeScript, Tailwind CSS
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Backend:</Text> Type-safe API with tRPC (7
          routers, 59 procedures), Prisma ORM, PostgreSQL
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Execution:</Text> Durable order execution
          with Inngest, BFS traversal, automatic retries
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Security:</Text> Better Auth with OAuth2
          (Google, GitHub), RBAC, AES-256 encrypted credentials
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Integrations:</Text> 24 service types including
          Slack, Google Sheets, GitHub, Notion, Stripe, Twilio, Cloud APIs
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Deployment:</Text> Netlify hosting, Neon
          PostgreSQL, Inngest Cloud, Sentry monitoring
        </Text>
      </View>

      <Text style={styles.h2}>12.4 Limitations</Text>
      <Text style={styles.paragraphIndent}>
        While dj-ecommerce successfully delivers core functionality, several
        limitations have been identified that represent opportunities for future
        development.
      </Text>

      <View wrap={false}>
<View
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 6,
          marginBottom: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f0f0f0",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "25%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Limitation
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              width: "35%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Impact
          </Text>
        </View>
        {[
          [
            "No Mobile App",
            "Web-only responsive interface",
            "Limited mobile order monitoring",
          ],
          [
            "Single Tenant",
            "Shared database architecture",
            "Not suitable for enterprise isolation",
          ],
          [
            "No Custom Models",
            "Fixed product type library (24 types)",
            "Cannot extend with user-created product types",
          ],
          [
            "Basic Analytics",
            "Execution history and stats only",
            "No advanced performance insights or dashboards",
          ],
          [
            "No On-Premise",
            "Cloud-hosted only (Netlify/Neon)",
            "Cannot self-host for data residency needs",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 4 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "25%",
                padding: 2,
                fontSize: 8,
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
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "35%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>
<Text
        style={{
          fontSize: 9,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        Table 12.2: Current Limitations
      </Text>
</View>

      <Text style={styles.h2}>12.5 Lessons Learned</Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Technology Selection:</Text> Choosing
          mature, well-documented frameworks (Next.js, Prisma) significantly
          reduced development friction.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Type Safety:</Text> TypeScript and tRPC's
          end-to-end type safety prevented numerous bugs during development.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Managed Services:</Text> Using Inngest for
          execution and Netlify for hosting eliminated infrastructure
          complexity.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Iterative Development:</Text> Agile sprints
          allowed for rapid iteration and early feedback incorporation.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Documentation:</Text> Maintaining inline
          documentation facilitated code understanding during refactoring.
        </Text>
      </View>

      <Text style={styles.h2}>12.6 Future Scope</Text>
      <Text style={styles.paragraphIndent}>
        The following enhancements are planned for future versions of dj-ecommerce
        to address current limitations and expand platform capabilities.
      </Text>

      <Text style={styles.h3}>12.6.1 Short-Term Roadmap (v1.1 - v1.5)</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 4,
          marginBottom: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f0f0f0",
            borderBottomWidth: 1,
            borderBottomColor: "#333333",
          }}
        >
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Version
          </Text>
          <Text
            style={{
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Feature
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Priority
          </Text>
        </View>
        {[
          [
            "1.1",
            "Database Models",
            "Direct PostgreSQL, MySQL, MongoDB query products",
            "High",
          ],
          [
            "1.2",
            "Custom Model SDK",
            "Allow users to create and publish custom products",
            "High",
          ],
          [
            "1.3",
            "Advanced Analytics",
            "Execution metrics, cost tracking, dashboards",
            "Medium",
          ],
          [
            "1.4",
            "Workflow Sharing",
            "Public template marketplace with community contributions",
            "Medium",
          ],
          [
            "1.5",
            "Multi-language Code",
            "Python and TypeScript code products alongside JavaScript",
            "Medium",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 4 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "15%",
                padding: 2,
                fontSize: 8,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text
              style={{
                width: "30%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text
              style={{
                width: "40%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[2]}
            </Text>
            <Text
              style={{
                width: "15%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[3]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.h3}>12.6.2 Long-Term Vision (v2.0+)</Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Natural Language Interface:</Text> Natural language
          to workflow generation using advanced language models. Users describe 
          automation in plain English and receive a complete workflow draft.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Integration Marketplace:</Text>{" "}
          Community-contributed custom nodes and templates with rating and
          review system.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Mobile Applications:</Text> Native iOS and
          Android apps for workflow monitoring, execution control, and push
          notifications.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>Enterprise Features:</Text> SSO integration,
          audit logging, compliance certifications (SOC 2, GDPR), and dedicated
          support.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 3 }}>
          <Text style={styles.bold}>On-Premise Deployment:</Text> Self-hosted
          option for organizations with strict data residency requirements.
        </Text>
      </View>

      <Text style={styles.h3}>12.6.3 Commercial Potential</Text>
      <Text style={styles.paragraphIndent}>
        dj-ecommerce has significant commercial potential in the growing order
        automation market. The freemium SaaS model with tiered pricing (Free,
        Pro, Enterprise) could provide sustainable revenue while maintaining
        accessibility for individual users and small teams.
      </Text>

      <Text style={styles.h2}>12.7 Conclusion</Text>
      <Text style={styles.paragraphIndent}>
        The development of AROWAI has been a comprehensive journey through
        modern full-stack web development, from requirements gathering through
        deployment. The project successfully demonstrates the feasibility of
        building accessible automation tools using open-source technologies that
        can compete with established commercial solutions.
      </Text>
      <Text style={styles.paragraphIndent}>
        Key takeaways from this project include the importance of selecting the
        right technology stack, implementing robust security measures from the
        start, and following established software engineering practices
        throughout the development lifecycle.
      </Text>
      <Text style={styles.paragraphIndent}>
        The comprehensive documentation, modular architecture, and extensive
        test coverage ensure that dj-ecommerce can continue to evolve beyond this
        initial release. The foundation laid by this project supports both
        continued academic exploration and potential commercial development.
      </Text>

      <View
        style={{
          marginBottom: 10,
          padding: 8,
          backgroundColor: "#f8f8f8",
          borderLeftWidth: 4,
          borderLeftColor: "#333333",
        }}
      >
        <Text
          style={{ fontSize: 11, fontFamily: "Times-Italic", lineHeight: 1.6 }}
        >
          "AROWAI represents not just an academic project submission, but a
          solid foundation for continued learning and potential commercial
          development in the automation space. The skills gained
          through this project—modern React development, cloud-native
          architecture, security implementation, and full-stack deployment—are
          directly applicable to industry positions."
        </Text>
      </View>



      <Text style={[styles.paragraphIndent, { marginBottom: 12 }]}>
        The authors extend gratitude to the project mentor, faculty members, and
        all who contributed to making this project a success. Special thanks to
        the open-source community whose tools and libraries made this project
        possible.
      </Text>
    </BookPageLayout>
  );
}
