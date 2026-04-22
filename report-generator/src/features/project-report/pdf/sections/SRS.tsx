"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 5.4: Software Requirement Specification (10 pages)
 */
export default function SRS() {
  return (
    <BookPageLayout chapterTitle="SDLC" chapterNum="06">
      <Text style={styles.h2}>6.4 Software Requirement Specification</Text>
      <Text style={styles.paragraphIndent}>
        The Software Requirements Specification (SRS) document provides a
        comprehensive description of the intended purpose and environment for
        software under development. It fully describes what the software will do
        and how it will be expected to perform. This section presents the formal
        SRS for the dj-ecommerce e-commerce platform.
      </Text>

      <Text style={styles.h3}>6.4.1 Purpose and Scope</Text>
      <Text style={styles.paragraphIndent}>
        This SRS defines the functional and non-functional requirements for
        dj-ecommerce, a visual e-commerce platform. The document serves as
        the primary reference for technical and non-technical stakeholders
        throughout the development process.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Product Scope:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Visual order design and execution platform
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Cart management, order workflows, and Stripe payment processing
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Django-Anymail for transactional receipts
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • User authentication via Django AllAuth
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Admin dashboard for complete store management
        </Text>
      </View>

      <Text style={styles.h3}>6.4.2 Functional Requirements</Text>
      <Text style={styles.paragraphIndent}>
        Functional requirements specify the specific behaviors and functions the
        system must perform. These requirements are organized by feature area
        and prioritized based on criticality.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>FR-1: Shopping Cart & Checkout System</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "20%",
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
            "FR-1.1",
            "System shall provide a intuitive interface for product browsing and cart management",
            "Must",
          ],
          [
            "FR-1.2",
            "Users shall drag and drop products from the catalog into their shopping cart",
            "Must",
          ],
          [
            "FR-1.3",
            "Users shall connect products by drawing edges between ports",
            "Must",
          ],
          [
            "FR-1.4",
            "System shall validate connections based on port types",
            "Must",
          ],
          [
            "FR-1.5",
            "Users shall configure product properties through a side panel",
            "Must",
          ],
          [
            "FR-1.6",
            "System shall support canvas pan, zoom, and product positioning",
            "Must",
          ],
          [
            "FR-1.7",
            "Users shall save orders with name and description",
            "Must",
          ],
          [
            "FR-1.8",
            "System shall auto-save order drafts periodically",
            "Should",
          ],
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
                width: "65%",
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>FR-2: Payment Processing System</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "20%",
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
            "FR-2.1",
            "System shall support manual order triggering via UI",
            "Must",
          ],
          [
            "FR-2.2",
            "System shall generate unique checkout URLs for orders",
            "Must",
          ],
          [
            "FR-2.3",
            "Webhook triggers shall accept POST requests with JSON payload",
            "Must",
          ],
          [
            "FR-2.4",
            "System shall support cron expression for scheduled triggers",
            "Must",
          ],
          [
            "FR-2.5",
            "Scheduled triggers shall respect timezone configuration",
            "Should",
          ],
          [
            "FR-2.6",
            "Trigger payload shall be accessible to subsequent products",
            "Must",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 5 ? 1 : 0,
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
                width: "65%",
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>FR-3: Order State Management</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "20%",
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
            "FR-3.1",
            "System shall execute order products in topological order",
            "Must",
          ],
          [
            "FR-3.2",
            "System shall persist execution state between steps",
            "Must",
          ],
          [
            "FR-3.3",
            "System shall retry failed steps with exponential backoff",
            "Must",
          ],
          ["FR-3.4", "System shall handle rate limiting gracefully", "Should"],
          ["FR-3.5", "System shall timeout long-running executions", "Must"],
          [
            "FR-3.6",
            "System shall log execution details for each step",
            "Must",
          ],
          ["FR-3.7", "Users shall view real-time execution status", "Should"],
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
                width: "65%",
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>FR-4: Address & Shipping Management</Text>
      </Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 4,
          marginBottom: 4,
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
            ID
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "20%",
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
            "FR-4.1",
            "System shall support GET, POST, PUT, DELETE, PATCH methods",
            "Must",
          ],
          [
            "FR-4.2",
            "Users shall configure custom headers for requests",
            "Must",
          ],
          [
            "FR-4.3",
            "System shall support JSON and form-data body formats",
            "Must",
          ],
          [
            "FR-4.4",
            "System shall handle response parsing (JSON, text)",
            "Must",
          ],
          ["FR-4.5", "Users shall use credentials for authentication", "Must"],
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
                width: "65%",
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>FR-5: Discount & Coupon Engine</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "20%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Priority
          </Text>
        </View>
        {[
          ["FR-6.1", "System shall integrate with OpenAI GPT models", "Must"],
          [
            "FR-6.2",
            "System shall integrate with Anthropic Claude models",
            "Should",
          ],
          [
            "FR-6.3",
            "System shall integrate with Google Gemini models",
            "Should",
          ],
          [
            "FR-6.4",
            "Users shall configure system prompts and parameters",
            "Must",
          ],
          [
            "FR-6.5",
            "AI responses shall be accessible to subsequent products",
            "Must",
          ],
          ["FR-6.6", "System shall handle AI API rate limits", "Should"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 5 ? 1 : 0,
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
                width: "65%",
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>FR-6: User Registration & Profiles</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "20%",
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
            "FR-6.1",
            "System shall support email/password registration",
            "Must",
          ],
          [
            "FR-6.2",
            "System shall support Google Google OAuth2 via AllAuth",
            "Must",
          ],
          [
            "FR-6.3",
            "System shall support GitHub Google OAuth2 via AllAuth",
            "Should",
          ],
          ["FR-6.4", "Users shall create and manage teams", "Should"],
          ["FR-6.5", "Team owners shall invite members via email", "Should"],
          ["FR-6.6", "System shall enforce role-based permissions", "Should"],
          ["FR-6.7", "Roles: Owner, Admin, Member, Viewer", "Should"],
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
                width: "65%",
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>FR-7: Credential Management</Text>
      </Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 4,
          marginBottom: 4,
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
            ID
          </Text>
          <Text
            style={{
              width: "65%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "20%",
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
            "FR-7.1",
            "Users shall create and store credentials securely",
            "Must",
          ],
          ["FR-7.2", "Credentials shall be encrypted at rest", "Must"],
          ["FR-7.3", "Credentials shall be scoped to teams", "Should"],
          [
            "FR-7.4",
            "Users shall select credentials when configuring products",
            "Must",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 3 ? 1 : 0,
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
                width: "65%",
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.h3}>6.4.3 Non-Functional Requirements</Text>
      <Text style={styles.paragraphIndent}>
        Non-functional requirements define the quality attributes that the
        system must exhibit. These requirements ensure the system is performant,
        secure, reliable, and usable.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>NFR-1: Performance Requirements</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "50%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "35%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Target Metric
          </Text>
        </View>
        {[
          [
            "NFR-1.1",
            "Initial page load time",
            "< 3 seconds (90th percentile)",
          ],
          [
            "NFR-1.2",
            "Editor interaction latency",
            "< 100ms for product operations",
          ],
          ["NFR-1.3", "Workflow execution start", "< 500ms from trigger"],
          ["NFR-1.4", "API response time", "< 200ms for CRUD operations"],
          ["NFR-1.5", "Canvas rendering (100 products)", "60 FPS minimum"],
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
                width: "50%",
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

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>NFR-2: Security Requirements</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "55%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Implementation
          </Text>
        </View>
        {[
          ["NFR-2.1", "All data in transit encrypted", "HTTPS/TLS 1.3"],
          ["NFR-2.2", "Credentials encrypted at rest", "PBKDF2 password hashing"],
          ["NFR-2.3", "Session management", "HTTP-only secure cookies"],
          ["NFR-2.4", "CSRF protection", "Token-based verification"],
          ["NFR-2.5", "Input validation", "Django Form validation"],
          [
            "NFR-2.6",
            "SQL injection prevention",
            "Prisma parameterized queries",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 5 ? 1 : 0,
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
                width: "55%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "30%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>NFR-3: Reliability Requirements</Text>
      </Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 4,
          marginBottom: 4,
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
            ID
          </Text>
          <Text
            style={{
              width: "55%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Target
          </Text>
        </View>
        {[
          ["NFR-3.1", "System availability", "99.9% uptime"],
          [
            "NFR-3.2",
            "Workflow execution success rate",
            "> 99.9% for valid orders",
          ],
          ["NFR-3.3", "Data durability", "No data loss on failures"],
          ["NFR-3.4", "Recovery time objective", "< 15 minutes"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 3 ? 1 : 0,
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
                width: "55%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "30%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>NFR-4: Usability Requirements</Text>
      </Text>
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
            ID
          </Text>
          <Text
            style={{
              width: "55%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Target
          </Text>
        </View>
        {[
          ["NFR-4.1", "Time to first order", "< 15 minutes for new users"],
          ["NFR-4.2", "Learning curve", "Productive within 1 hour"],
          ["NFR-4.3", "Error messages", "Clear, actionable guidance"],
          ["NFR-4.4", "Responsive design", "Desktop and tablet support"],
          ["NFR-4.5", "Accessibility", "WCAG 2.1 Level AA"],
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
                width: "55%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "30%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.h3}>6.4.4 System Requirements</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Hardware Requirements (Server):</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • CPU: 2+ cores recommended
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • RAM: 4GB minimum, 8GB recommended
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Storage: 20GB minimum for application and logs
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Network: Stable internet connection for API calls
        </Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Software Requirements:</Text>
      </Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 4,
          marginBottom: 4,
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
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Component
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
            Required Version
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Purpose
          </Text>
        </View>
        {[
          ["Model.js", "20.x or later", "JavaScript runtime"],
          ["PostgreSQL", "14.x or later", "Primary database"],
          ["npm/pnpm", "Latest stable", "Package management"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 2 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "30%",
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
            <Text style={{ width: "40%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Browser Requirements (Client):</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Google Chrome 100+ (recommended)
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Mozilla Firefox 100+
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Apple Safari 15+
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Microsoft Edge 100+
        </Text>
      </View>

      <Text style={styles.h3}>6.4.5 Use Case Specifications</Text>
      <Text style={styles.paragraphIndent}>
        This section provides detailed specifications for key use cases
        identified during requirement gathering.
      </Text>

      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          backgroundColor: "#f9f9f9",
          padding: 5,
          marginBottom: 6,
          marginBottom: 6,
        }}
      >
        <Text
          style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}
        >
          UC-01: Create Workflow
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Actor:</Text> User
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Preconditions:</Text> User is authenticated
          and has team access
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Description:</Text> User creates a new
          order using the visual editor
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Basic Flow:</Text>
        </Text>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            1. User clicks "New Workflow" button
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            2. System displays empty canvas with product palette
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            3. User drags trigger product onto canvas
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            4. User adds and connects action products
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            5. User configures each product's properties
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            6. User saves order with name
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            7. System validates and stores order
          </Text>
        </View>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Postconditions:</Text> Workflow is saved and
          available for execution
        </Text>
      </View>

      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          backgroundColor: "#f9f9f9",
          padding: 5,
          marginBottom: 6,
        }}
      >
        <Text
          style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}
        >
          UC-02: Execute Workflow via Webhook
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Actor:</Text> External System
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Preconditions:</Text> Workflow is published
          with checkout trigger
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Description:</Text> External system triggers
          order via HTTP POST
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Basic Flow:</Text>
        </Text>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            1. External system sends POST request to checkout URL
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            2. System validates request and identifies order
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            3. System creates execution record
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            4. Execution engine processes products sequentially
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            5. System logs each step's result
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            6. System returns execution ID in response
          </Text>
        </View>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Postconditions:</Text> Execution completed,
          logs available
        </Text>
      </View>

      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          backgroundColor: "#f9f9f9",
          padding: 5,
          marginBottom: 4,
        }}
      >
        <Text
          style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}
        >
          UC-03: Manage Team Credentials
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Actor:</Text> Team Admin
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Preconditions:</Text> User has Admin role in
          team
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Description:</Text> Admin manages shared
          credentials for team orders
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Basic Flow:</Text>
        </Text>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            1. Admin navigates to Credentials page
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            2. Admin clicks "Add Credential"
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            3. Admin selects credential type (API Key, OAuth)
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            4. Admin enters credential details
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            5. System encrypts and stores credential
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            6. Credential is available for team orders
          </Text>
        </View>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Postconditions:</Text> Credential stored
          securely, accessible to team
        </Text>
      </View>

      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          backgroundColor: "#f9f9f9",
          padding: 5,
          marginBottom: 6,
        }}
      >
        <Text
          style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}
        >
          UC-04: Monitor Workflow Execution
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Actor:</Text> User
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Preconditions:</Text> User has access to
          order
        </Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>
          <Text style={styles.bold}>Basic Flow:</Text>
        </Text>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            1. User navigates to order executions
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            2. System displays list of executions with status
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            3. User clicks on specific execution
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            4. System shows step-by-step execution details
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            5. User views inputs/outputs for each product
          </Text>
          <Text style={{ fontSize: 8, marginBottom: 2 }}>
            6. If failed, user views error details
          </Text>
        </View>
      </View>

      <Text style={styles.h3}>6.4.6 Data Requirements</Text>
      <Text style={styles.paragraphIndent}>
        The system shall manage the following primary data entities:
      </Text>

      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 6,
          marginBottom: 4,
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
              width: "20%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Entity
          </Text>
          <Text
            style={{
              width: "50%",
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
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Key Attributes
          </Text>
        </View>
        {[
          ["User", "Registered platform user", "id, email, name, avatar"],
          ["Team", "Workspace for collaboration", "id, name, slug, ownerId"],
          ["TeamMember", "User's membership in team", "userId, teamId, role"],
          [
            "Workflow",
            "Automation order definition",
            "id, name, products, edges",
          ],
          [
            "Execution",
            "Single order run instance",
            "id, status, startedAt",
          ],
          [
            "ExecutionLog",
            "Per-product execution details",
            "productId, input, output",
          ],
          ["Credential", "Stored API credentials", "id, type, encryptedData"],
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
                width: "50%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "30%", padding: 2, fontSize: 8 }}>
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
        Table 6.12: Primary Data Entities
      </Text>

      <Text style={styles.h3}>6.4.7 Interface Requirements</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>User Interface:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Web-based single-page application (SPA)
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Dark/light theme support
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Keyboard shortcuts for power users
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Responsive layout for tablets
        </Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>External Interfaces:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • REST/tRPC API for internal communication
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Webhook endpoints for external triggers
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • OAuth 2.0 for authentication providers
        </Text>
      </View>

      <Text style={styles.h3}>6.4.8 Constraints</Text>
      <Text style={styles.paragraphIndent}>
        The following constraints apply to the system design and implementation:
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Technical Constraints:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Must use Next.js App Router architecture
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Database must be PostgreSQL-compatible
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Must support deployment on Netlify platform
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Must use Inngest for order execution
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • TypeScript required for type safety
        </Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Business Constraints:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Development timeline: 12 weeks
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Proprietary licensing with potential SaaS model
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Must operate within free tiers during development
        </Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Regulatory Constraints:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Credential storage must use encryption
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • User data handling must respect privacy
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Audit logging for sensitive operations
        </Text>
      </View>

      <Text style={styles.h3}>6.4.9 Assumptions and Dependencies</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Assumptions:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Users have stable internet connectivity
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • External APIs (OpenAI, Slack, etc.) remain available
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Users have basic understanding of orders
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Modern browser with JavaScript enabled
        </Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Dependencies:</Text>
      </Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 4,
          marginBottom: 4,
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
            Dependency
          </Text>
          <Text
            style={{
              width: "35%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Purpose
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Risk if Unavailable
          </Text>
        </View>
        {[
          ["Netlify", "Hosting platform", "Deploy to alternative (Vercel)"],
          ["Neon/PostgreSQL", "Database hosting", "Switch to Supabase"],
          ["Inngest", "Execution engine", "Critical - core feature"],
          ["OpenAI API", "AI capabilities", "Use alternative providers"],
          ["Better Auth", "Authentication", "Implement custom auth"],
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
                width: "35%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "40%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.h3}>6.4.10 Acceptance Criteria</Text>
      <Text style={styles.paragraphIndent}>
        The following acceptance criteria must be satisfied for the system to be
        considered complete:
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Functional Acceptance:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Users can create orders with 3+ connected products
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ All three trigger types (manual, checkout, schedule) work
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ HTTP Request product successfully calls external APIs
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ AI products return responses from configured providers
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Users can create teams and invite members
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Credentials are stored and used securely
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Execution history and logs are accessible
        </Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Non-Functional Acceptance:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Page load time under 3 seconds
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Editor remains responsive with 50+ products
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Authentication via Google and GitHub works
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ No security vulnerabilities in OWASP Top 10
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          ✓ Application deploys successfully on Netlify
        </Text>
      </View>

      <Text style={styles.h3}>6.4.11 Requirements Summary</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          marginBottom: 6,
          marginBottom: 4,
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
              width: "35%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Category
          </Text>
          <Text
            style={{
              width: "20%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Must
          </Text>
          <Text
            style={{
              width: "20%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Should
          </Text>
          <Text
            style={{
              width: "25%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Total
          </Text>
        </View>
        {[
          ["Visual Editor", "8", "2", "10"],
          ["Payment Processing System", "4", "2", "6"],
          ["Order State Management", "5", "2", "7"],
          ["Integrations", "10", "5", "15"],
          ["Team & Auth", "3", "5", "8"],
          ["Credentials", "3", "1", "4"],
          ["Non-Functional", "12", "6", "18"],
          ["TOTAL", "45", "23", "68"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 7 ? 1 : 0,
              borderBottomColor: "#cccccc",
              backgroundColor: i === 7 ? "#f0f0f0" : "transparent",
            }}
          >
            <Text
              style={{
                width: "35%",
                padding: 2,
                fontSize: 8,
                fontFamily: i === 7 ? "Times-Bold" : "Times-Roman",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text
              style={{
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
                fontFamily: i === 7 ? "Times-Bold" : "Times-Roman",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text
              style={{
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
                fontFamily: i === 7 ? "Times-Bold" : "Times-Roman",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[2]}
            </Text>
            <Text
              style={{
                width: "25%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
                fontFamily: i === 7 ? "Times-Bold" : "Times-Roman",
              }}
            >
              {row[3]}
            </Text>
          </View>
        ))}
      </View>
      <Text
        style={{
          fontSize: 9,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        Table 6.13: Requirements Summary by Category
      </Text>

      <Text style={styles.h3}>6.4.12 Requirements Traceability Matrix</Text>
      <Text style={styles.paragraphIndent}>
        The Requirements Traceability Matrix (RTM) maps each functional
        requirement to its corresponding design component, implementation
        module, and test case. This ensures complete coverage and bidirectional
        traceability from requirements through delivery.
      </Text>

      <View style={{ borderWidth: 1, borderColor: "#333333", marginBottom: 6 }}>
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
              width: "14%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Req. ID
          </Text>
          <Text
            style={{
              width: "22%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Requirement
          </Text>
          <Text
            style={{
              width: "22%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Design Component
          </Text>
          <Text
            style={{
              width: "22%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Implementation
          </Text>
          <Text
            style={{
              width: "20%",
              padding: 2,
              fontSize: 8,
              fontFamily: "Times-Bold",
            }}
          >
            Test Case
          </Text>
        </View>
        {[
          [
            "FR-1.1",
            "Visual Editor",
            "React Flow Canvas",
            "WorkflowEditor.tsx",
            "TC-01, TC-02",
          ],
          [
            "FR-1.2",
            "Drag-Drop Models",
            "Model Components",
            "ModelTypes/",
            "TC-03, TC-04",
          ],
          [
            "FR-1.3",
            "Model Configuration",
            "Config Panel",
            "ModelConfig.tsx",
            "TC-05",
          ],
          [
            "FR-2.1",
            "Manual Trigger",
            "Payment Processing System",
            "ExecutionEngine",
            "TC-10",
          ],
          [
            "FR-2.2",
            "Webhook Trigger",
            "Webhook Handler",
            "checkout/route.ts",
            "TC-11, TC-12",
          ],
          [
            "FR-2.3",
            "Scheduled Trigger",
            "Cron Scheduler",
            "schedules/",
            "TC-13",
          ],
          [
            "FR-3.1",
            "Order State Management",
            "Inngest Functions",
            "inngest/functions",
            "TC-20, TC-21",
          ],
          [
            "FR-3.2",
            "Error Handling",
            "Error Boundaries",
            "ErrorHandler.tsx",
            "TC-22",
          ],
          [
            "FR-4.1",
            "User Auth",
            "Auth Module",
            "auth.ts, Better Auth",
            "TC-30",
          ],
          [
            "FR-4.2",
            "OAuth Login",
            "OAuth Providers",
            "auth-client.ts",
            "TC-31",
          ],
          [
            "FR-6.1",
            "Team RBAC",
            "Permission System",
            "teams/router.ts",
            "TC-40, TC-41",
          ],
          ["FR-6.2", "Role Levels", "4-tier RBAC", "TeamService.ts", "TC-42"],
          [
            "FR-6.1",
            "Credential Store",
            "AES-256 Vault",
            "credentials/",
            "TC-50",
          ],
          [
            "FR-7.1",
            "Exec Monitoring",
            "Dashboard Views",
            "executions/",
            "TC-60",
          ],
          [
            "FR-7.2",
            "Audit Logs",
            "Log Aggregation",
            "ExecutionLog.tsx",
            "TC-61",
          ],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 14 ? 1 : 0,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "14%",
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
                width: "22%",
                padding: 2,
                fontSize: 7,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text
              style={{
                width: "22%",
                padding: 2,
                fontSize: 7,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[2]}
            </Text>
            <Text
              style={{
                width: "22%",
                padding: 2,
                fontSize: 7,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[3]}
            </Text>
            <Text style={{ width: "20%", padding: 2, fontSize: 7 }}>
              {row[4]}
            </Text>
          </View>
        ))}
      </View>
      <Text
        style={{
          fontSize: 9,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginBottom: 2,
          marginBottom: 6,
        }}
      >
        Table 6.14: Requirements Traceability Matrix
      </Text>

      <Text style={styles.h3}>6.4.13 Summary</Text>
      <Text style={styles.paragraphIndent}>
        This Software Requirements Specification document has provided a
        comprehensive definition of the dj-ecommerce e-commerce platform.
        The specification encompasses 68 total requirements across functional
        and non-functional categories, with 45 classified as "Must Have" for the
        initial release.
      </Text>
      <Text style={styles.paragraphIndent}>
        Key functional areas include the e-commerce storefront with
        AJAX-enabled cart interactions, a robust payment processing system supporting manual,
        checkout, and scheduled execution, a reliable order state management powered by
        Inngest, and comprehensive integration capabilities for HTTP, AI, and
        popular services.
      </Text>
      <Text style={styles.paragraphIndent}>
        Non-functional requirements ensure the platform meets performance
        targets (sub-3-second loads, sub-500ms checkout processing), security
        standards (PBKDF2 password hashing, Google OAuth2 via AllAuth), reliability goals
        (99.9% uptime), and usability objectives (15-minute
        time-to-first-order).
      </Text>
      <Text style={styles.paragraphIndent}>
        The specification includes detailed use case descriptions for the four
        primary user interactions: creating orders, executing via checkout,
        managing credentials, and monitoring executions. Data requirements
        define seven core entities that form the system's data model.
      </Text>
      <Text style={styles.paragraphIndent}>
        Constraints and dependencies have been documented to acknowledge the
        technical and business boundaries within which the system must operate.
        Acceptance criteria provide clear, measurable targets for validating
        that the completed system meets its requirements.
      </Text>
      <Text style={styles.paragraphIndent}>
        This SRS serves as the authoritative reference for the design and
        implementation phases. All design decisions and implementation choices
        should trace back to requirements documented herein. Any changes to
        requirements during development should be formally documented and
        approved before implementation.
      </Text>
    </BookPageLayout>
  );
}
