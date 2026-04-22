"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import ContextDFD from "../diagrams/ContextDFD";
import Level1DFD from "../diagrams/Level1DFD";
import Level2DFD from "../diagrams/Level2DFD";
import UseCaseDiagram from "../diagrams/UseCaseDiagram";
import ERDiagram from "../diagrams/ERDiagram";
import ComponentDiagram from "../diagrams/ComponentDiagram";
import SequenceDiagram from "../diagrams/SequenceDiagram";
import DatabaseSchemaSection from "../components/DatabaseSchemaSection";

/**
 * Chapter 6: System Design (6 pages)
 */
export default function DesignDiagrams() {
  return (
    <BookPageLayout chapterTitle="System Design" chapterNum="07">
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
          CHAPTER 7
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
            SYSTEM DESIGN
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

      <Text style={styles.h2}>7.1 Introduction</Text>
      <Text style={styles.paragraphIndent}>
        System design translates the requirements specification into a detailed
        technical blueprint. This chapter presents the design artifacts for
        AROWAI including Data Flow Diagrams, Use Case Diagrams,
        Entity-Relationship Diagrams, and System Architecture.
      </Text>

      <Text style={styles.h2}>7.2 Data Flow Diagrams</Text>
      <Text style={styles.paragraphIndent}>
        Data Flow Diagrams (DFD) represent how data moves through the system.
        They provide a visual representation of data inputs, transformations,
        and outputs at various levels of abstraction.
      </Text>

      <Text style={styles.h3}>7.2.1 Context Diagram (Level 0)</Text>
      <Text style={styles.paragraphIndent}>
        The context diagram shows dj-ecommerce as a single process interacting with
        external entities.
      </Text>

      <View style={{ marginBottom: 8, marginBottom: 4 }}>
        <ContextDFD />
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 2,
            marginBottom: 6,
          }}
        >
          Figure 7.1: Context Diagram (Level 0 DFD)
        </Text>
      </View>

      <View wrap={false}>
<View
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
              width: "25%",
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
              width: "35%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Data to System
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Data from System
          </Text>
        </View>
        {[
          [
            "User",
            "Workflow definitions, credentials",
            "Execution results, dashboards",
          ],
          [
            "External APIs",
            "API responses, checkouts",
            "HTTP requests, auth tokens",
          ],
          ["AI Providers", "AI model responses", "Prompts, parameters"],
          ["Database", "Stored data", "CRUD operations"],
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
<Text
        style={{
          fontSize: 9,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        Table 7.1: Context Diagram Data Flows
      </Text>
</View>

      <Text style={styles.h3}>7.2.2 Level 1 DFD</Text>
      <Text style={styles.paragraphIndent}>
        Level 1 decomposes the system into five major processes:
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • P1: Authentication Module - User login, registration, session
          management
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • P2: Workflow Editor - Visual design, product configuration, validation
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • P3: Order State Management - Workflow parsing, product execution, state
          management
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • P4: Team Management - Teams, members, roles, permissions
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • P5: Monitoring Dashboard - Execution history, logs, analytics
        </Text>
      </View>

      <View style={{ marginBottom: 8, marginBottom: 4 }}>
        <Level1DFD />
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 2,
            marginBottom: 6,
          }}
        >
          Figure 7.2: Level 1 Data Flow Diagram
        </Text>
      </View>

      <View style={{ marginBottom: 4, marginBottom: 4 }}>
        <Level2DFD />
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 2,
            marginBottom: 6,
          }}
        >
          Figure 7.3: Level 2 DFD - Workflow Order State Management
        </Text>
      </View>

      <Text style={styles.h2}>7.3 Use Case Diagrams</Text>
      <Text style={styles.paragraphIndent}>
        Use Case Diagrams illustrate interactions between actors and the system.
        Three primary actors interact with dj-ecommerce.
      </Text>

      <View style={{ marginBottom: 8, marginBottom: 4 }}>
        <UseCaseDiagram />
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 2,
            marginBottom: 6,
          }}
        >
          Figure 7.4: Use Case Diagram
        </Text>
      </View>

      <Text style={styles.h3}>7.3.1 Actor Descriptions</Text>
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
              width: "20%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Actor
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
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Key Use Cases
          </Text>
        </View>
        {[
          [
            "User",
            "Regular authenticated user",
            "Create/edit orders, execute, view logs",
          ],
          [
            "Team Admin",
            "User with admin role",
            "Manage members, credentials, permissions",
          ],
          [
            "System",
            "Automated processes",
            "Scheduled triggers, checkout handling",
          ],
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
                width: "40%",
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

      <Text style={styles.h3}>7.3.2 Use Case Specifications</Text>
      <View wrap={false}>
<View
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
              width: "12%",
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
              width: "23%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Use Case
          </Text>
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
            Actor
          </Text>
          <Text
            style={{
              width: "50%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Description
          </Text>
        </View>
        {[
          [
            "UC-01",
            "Register Account",
            "User",
            "Create new account with email or OAuth",
          ],
          [
            "UC-02",
            "Authenticate",
            "User",
            "Login with password or OAuth provider",
          ],
          [
            "UC-03",
            "Create Workflow",
            "User",
            "Design new order in visual editor",
          ],
          [
            "UC-04",
            "Configure Model",
            "User",
            "Set product properties and connections",
          ],
          [
            "UC-05",
            "Execute Workflow",
            "User/System",
            "Run order manually or via trigger",
          ],
          [
            "UC-06",
            "View Executions",
            "User",
            "Browse execution history and logs",
          ],
          [
            "UC-07",
            "Manage Team",
            "Admin",
            "Create team, invite/remove members",
          ],
          [
            "UC-08",
            "Manage Credentials",
            "User/Admin",
            "Store and use API credentials",
          ],
          [
            "UC-09",
            "Handle Webhook",
            "System",
            "Receive and process incoming checkout",
          ],
          [
            "UC-10",
            "Execute Schedule",
            "System",
            "Run scheduled order at cron time",
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
                width: "12%",
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
                width: "23%",
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
                width: "15%",
                padding: 2,
                fontSize: 7,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[2]}
            </Text>
            <Text style={{ width: "50%", padding: 2, fontSize: 7 }}>
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
          marginBottom: 6,
        }}
      >
        Table 7.2: Use Case Specifications
      </Text>
</View>

      <Text style={styles.h2}>7.4 Entity-Relationship Diagram</Text>
      <Text style={styles.paragraphIndent}>
        The ER Diagram represents the database schema including entities,
        attributes, and relationships.
      </Text>

      <View style={{ marginBottom: 8, marginBottom: 4 }}>
        <ERDiagram />
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 2,
            marginBottom: 6,
          }}
        >
          Figure 7.5: Entity-Relationship Diagram
        </Text>
      </View>

      <Text style={styles.h3}>7.4.1 Entity Descriptions</Text>
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
              width: "18%",
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
              width: "42%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Key Attributes
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Description
          </Text>
        </View>
        {[
          [
            "User",
            "id, email, name, avatar, createdAt",
            "Registered platform user",
          ],
          ["Team", "id, name, slug, ownerId", "Collaborative workspace"],
          ["TeamMember", "userId, teamId, role", "User membership in team"],
          [
            "Workflow",
            "id, name, teamId, products, edges",
            "Automation order definition",
          ],
          [
            "Execution",
            "id, orderId, status, startedAt",
            "Single order run",
          ],
          [
            "ExecutionLog",
            "id, executionId, productId, data",
            "Per-product execution details",
          ],
          [
            "Credential",
            "id, teamId, type, encryptedData",
            "Stored API credentials",
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
                width: "18%",
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
                width: "42%",
                padding: 2,
                fontSize: 7,
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

      <Text style={styles.h3}>7.4.2 Entity Relationships</Text>
      <View wrap={false}>
<View
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
            Relationship
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
            Cardinality
          </Text>
          <Text
            style={{
              width: "50%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Description
          </Text>
        </View>
        {[
          ["User → TeamMember", "1:M", "User can be member of multiple teams"],
          ["Team → TeamMember", "1:M", "Team has multiple members"],
          ["Team → Workflow", "1:M", "Team owns multiple orders"],
          ["Workflow → Execution", "1:M", "Workflow has many execution runs"],
          ["Execution → ExecutionLog", "1:M", "Execution has logs per product"],
          ["Team → Credential", "1:M", "Team stores multiple credentials"],
          ["User → Team (owner)", "1:M", "User can own multiple teams"],
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
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "50%", padding: 2, fontSize: 8 }}>
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
          marginBottom: 4,
        }}
      >
        Table 7.3: Entity Relationships
      </Text>
</View>

      <Text style={styles.h2}>7.5 System Architecture</Text>
      <Text style={styles.paragraphIndent}>
        dj-ecommerce follows a modern three-tier architecture with clear separation
        between presentation, business logic, and data layers.
      </Text>

      <Text style={styles.h3}>7.5.1 Architecture Layers</Text>
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
              width: "20%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Layer
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
            Technologies
          </Text>
          <Text
            style={{
              width: "45%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Responsibilities
          </Text>
        </View>
        {[
          [
            "Presentation",
            "React 19, Tailwind CSS",
            "UI components, visual editor, dashboards",
          ],
          [
            "Application",
            "Next.js 16, tRPC",
            "API routes, business logic, validation",
          ],
          ["Execution", "Inngest", "Workflow parsing, product execution, retries"],
          [
            "Data",
            "PostgreSQL, Prisma",
            "Data persistence, queries, migrations",
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
                width: "35%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "45%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.h3}>7.5.2 Component Diagram</Text>
      <Text style={styles.paragraphIndent}>
        The system consists of the following major components:
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Frontend Components:</Text>
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • WorkflowEditor - React Flow canvas and product palette
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • ModelConfigPanel - Property editor for selected products
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • ExecutionViewer - Execution history and log display
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 3 }}>
          • TeamDashboard - Team and credential management
        </Text>

        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Backend Components:</Text>
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • AuthService - Authentication and session management
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • WorkflowService - CRUD operations for orders
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • ExecutionService - Execution management and logging
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 3 }}>
          • TeamService - Team and member management
        </Text>

        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Execution Components:</Text>
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • WorkflowParser - Converts visual order to execution steps
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • ModelExecutors - Individual handlers for each product type
        </Text>
        <Text style={{ fontSize: 9, marginLeft: 12, marginBottom: 2 }}>
          • StateManager - Manages execution state between steps
        </Text>
      </View>
      <View style={{ marginBottom: 8, marginBottom: 4 }}>
        <ComponentDiagram />
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 4,
            marginBottom: 6,
          }}
        >
          Figure 7.6: Component Hierarchy Diagram
        </Text>
      </View>

      <Text style={styles.h2}>7.6 Database Schema</Text>
      <Text style={styles.paragraphIndent}>
        The database schema is implemented using Prisma ORM with PostgreSQL. Key
        tables and their structures are defined below.
      </Text>

      <DatabaseSchemaSection />

      <Text style={styles.h2}>7.7 Design Patterns</Text>
      <Text style={styles.paragraphIndent}>
        The system employs several design patterns to ensure maintainability and
        extensibility:
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Strategy Pattern:</Text> Model executors
          implement a common interface, allowing new product types to be added
          without modifying the order state management.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Factory Pattern:</Text> Model executor
          factory creates appropriate executor instances based on product type.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Observer Pattern:</Text> React Flow events
          notify the application of canvas changes.
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Repository Pattern:</Text> tRPC routers
          abstract database operations from business logic.
        </Text>
      </View>

      <Text style={styles.h2}>7.8 Security Design</Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Authentication:</Text> Session-based auth
          with HTTP-only cookies
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Authorization:</Text> RBAC with Owner,
          Admin, Member, Viewer roles
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Encryption:</Text> AES-256 for credentials
          at rest, TLS for transit
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          <Text style={styles.bold}>Input Validation:</Text> Zod schemas
          validate all API inputs
        </Text>
      </View>

      {/* Sequence Diagram */}
      <Text style={styles.h2} break>
        7.9 Interaction Design
      </Text>
      <Text style={styles.paragraph}>
        The following sequence diagram illustrates the complete order
        execution process, showing the interaction between system components
        from user trigger through BFS product execution to completion notification.
      </Text>
      <View style={{ marginBottom: 8, marginBottom: 4 }}>
        <SequenceDiagram />
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 4,
            marginBottom: 6,
          }}
        >
          Figure 7.7: Workflow Execution Sequence Diagram
        </Text>
      </View>

      <Text style={styles.h2}>7.10 Summary</Text>
      <Text style={styles.paragraphIndent}>
        This chapter presented the comprehensive system design for dj-ecommerce.
        Data Flow Diagrams illustrated how data moves through the system at
        context and decomposed levels. Use Case Diagrams documented 10 primary
        use cases across three actor types. The Entity-Relationship Diagram
        defined 7 core entities and their relationships.
      </Text>
      <Text style={styles.paragraphIndent}>
        The system architecture follows a modern three-tier pattern with clear
        separation of concerns. The database schema leverages Prisma ORM for
        type-safe database access. Design patterns ensure extensibility, and
        security measures protect user data and credentials throughout the
        system.
      </Text>
    </BookPageLayout>
  );
}
