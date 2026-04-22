"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 3: Project Objectives (5 pages)
 */
export default function Objectives() {
  return (
    <BookPageLayout chapterTitle="Project Objectives" chapterNum="03">
      {/* Chapter Title */}
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Times-Roman",
            color: "#666666",
            letterSpacing: 3,
            marginBottom: 4,
          }}
        >
          CHAPTER 3
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Times-Bold",
            textAlign: "center",
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          PROJECT OBJECTIVES
        </Text>
        <View style={{ width: 60, height: 3, backgroundColor: "#000000" }} />
      </View>

      {/* 3.1 Introduction */}
      <Text style={styles.h2}>3.1 Introduction</Text>
      <Text style={styles.paragraphIndent}>
        The objectives of this project have been carefully formulated based on
        the comprehensive problem analysis presented in the previous chapter.
        These objectives serve as the guiding principles for all design
        decisions, implementation choices, and validation criteria throughout
        the software development lifecycle.
      </Text>
      <Text style={styles.paragraphIndent}>
        The objectives are organized into three categories: primary objectives
        that represent the core functionality and value proposition of the
        platform, secondary objectives that enhance usability and enterprise
        readiness, and technical objectives that ensure quality,
        maintainability, and scalability of the implementation.
      </Text>
      <Text style={styles.paragraphIndent}>
        Each objective has been evaluated against the SMART criteria—Specific,
        Measurable, Achievable, Relevant, and Time-bound—to ensure clarity and
        feasibility within the project timeline. Success criteria for each
        objective are defined to enable objective evaluation upon project
        completion.
      </Text>

      {/* 3.2 Primary Objectives */}
      <Text style={styles.h2}>3.2 Primary Objectives</Text>
      <Text style={styles.paragraphIndent}>
        The primary objectives define the essential capabilities that the
        dj-ecommerce platform must deliver to address the core problems identified
        in Chapter 2. These objectives directly address the automation
        accessibility gap, integration complexity, and reliability concerns.
      </Text>

      {/* Objective 1 */}
      <Text style={styles.h3}>3.2.1 Visual Workflow Design Interface</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Create an intuitive, visual
        drag-and-drop interface that enables users to design complex orders
        without writing code.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Rationale:</Text> The technical barrier to
        automation identified in Chapter 2 stems primarily from the programming
        requirements of traditional solutions. A visual interface democratizes
        e-commerce by allowing business users, not just developers, to
        create and manage automated processes.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Canvas-based editor supporting pan, zoom, and product positioning
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Drag-and-drop product palette with categorized product types
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Visual connection system with bezier curve edges
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Model configuration panels with form-based input
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Visual validation and error indication
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Workflow save, load, and version history
        </Text>
      </View>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Success Criteria:</Text> Users with no
        programming experience should be able to create a functional multi-step
        order within 15 minutes of first using the interface.
      </Text>

      {/* Objective 2 */}
      <Text style={styles.h3}>3.2.2 Reliable Order State Management</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Implement a durable
        order state management with built-in retry mechanisms, state persistence, and
        comprehensive error handling.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Rationale:</Text> Reliability concerns
        represent a critical limitation of many automation solutions. For
        business-critical orders, failures due to transient issues (network
        timeouts, rate limits, service outages) should not result in lost work
        or corrupted state.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Integration with Inngest for durable function execution
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Automatic retry with exponential backoff for transient failures
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • State checkpointing between order steps
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Graceful handling of rate limits and quotas
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Dead-letter queue for permanently failed executions
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Execution timeout configuration per order
        </Text>
      </View>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Success Criteria:</Text> Workflows should
        complete successfully in 99.9% of attempts when transient failures are
        the only cause of issues. Manual retry should be available for permanent
        failures.
      </Text>

      {/* Objective 3 */}
      <Text style={styles.h3}>3.2.3 Multi-Trigger Support</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Enable orders to be
        initiated through multiple trigger mechanisms including manual
        execution, checkouts, and scheduled cron expressions.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Rationale:</Text> Different automation
        scenarios require different initiation methods. Event-driven orders
        need checkout triggers, periodic tasks need scheduled triggers, and
        on-demand tasks need manual triggers. Supporting all three patterns
        maximizes the platform's flexibility.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Manual trigger product with "Run Now" functionality
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Webhook trigger with unique URL generation and security options
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Schedule trigger with cron expression support and timezone handling
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Trigger payload handling and variable access in subsequent products
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Trigger testing and simulation capabilities
        </Text>
      </View>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Success Criteria:</Text> All three trigger
        types should be fully functional with proper documentation and examples
        for each.
      </Text>

      {/* Objective 4 */}
      <Text style={styles.h3}>3.2.4 Service Integrations</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Provide ready-to-use
        integrations with popular services including HTTP APIs, Slack, Notion,
        and email services.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Rationale:</Text> Integration complexity was
        identified as a major barrier to automation adoption. Pre-built
        integrations eliminate the need for users to understand API details,
        authentication mechanisms, and data formats for common services.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • HTTP Request product supporting all methods (GET, POST, PUT, DELETE,
          PATCH)
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Slack integration for sending messages and notifications
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Notion integration for database CRUD operations
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Email sending capability via SMTP configuration
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Credential management for secure API key storage
        </Text>
      </View>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Success Criteria:</Text> Each integration
        should include example orders and documentation. Integration with
        each service should be achievable in under 5 minutes.
      </Text>

      {/* Objective 5 */}
      <Text style={styles.h3}>3.2.5 Discount & Coupon Engine Capabilities</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Integrate AI models from
        OpenAI, Anthropic, and Google for intelligent automation tasks including
        text generation, analysis, and decision-making.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Rationale:</Text> The AI integration gap
        identified in Chapter 2 represents a significant opportunity. Modern AI
        capabilities can transform orders from simple automation to
        intelligent processes that handle ambiguous inputs, generate content,
        and make nuanced decisions.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • OpenAI GPT product supporting GPT-4, GPT-4o, and GPT-3.5-Turbo models
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Anthropic Claude product supporting Claude 3.5 Sonnet, Claude 3 Opus,
          and Haiku
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Google Gemini product supporting Gemini 1.5 Pro and Flash models
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Configurable system prompts, temperature, and max tokens
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Context passing between AI products and other order steps
        </Text>
      </View>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Success Criteria:</Text> Users should be able
        to add AI capabilities to orders without understanding API details.
        Response quality should match direct API usage.
      </Text>

      {/* 3.3 Secondary Objectives */}
      <Text style={styles.h2}>3.3 Secondary Objectives</Text>
      <Text style={styles.paragraphIndent}>
        Secondary objectives enhance the platform's value for team environments
        and enterprise use cases. While not essential for basic functionality,
        these features significantly improve the platform's competitiveness and
        long-term viability.
      </Text>

      {/* Secondary Objective 1 */}
      <Text style={styles.h3}>
        3.3.1 Team Collaboration with Role-Based Access Control
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Implement comprehensive
        role-based access control enabling teams to collaborate on order
        development with appropriate permission boundaries.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Rationale:</Text> The team collaboration gap
        identified in the market analysis shows that RBAC features are typically
        reserved for expensive enterprise plans. By including these features in
        the base platform, dj-ecommerce addresses the needs of small and medium
        businesses that require team functionality.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Multi-team support with isolated workspaces
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Role hierarchy: Owner, Admin, Member, Viewer
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Permission-based access to orders, credentials, and settings
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Team member invitation and management
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Activity logging for audit purposes
        </Text>
      </View>

      {/* Secondary Objective 2 */}
      <Text style={styles.h3}>3.3.2 Secure Credential Management</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Securely store and manage
        API keys, OAuth tokens, and other credentials with encryption at rest
        and team-scoped access.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Encrypted credential storage in database
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Credential types for API keys, OAuth, and custom schemas
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Team-scoped credential sharing
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Credential usage tracking and rotation support
        </Text>
      </View>

      {/* Secondary Objective 3 */}
      <Text style={styles.h3}>3.3.3 Execution Monitoring and Debugging</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Provide comprehensive
        logging, execution history, and debugging capabilities for order
        troubleshooting and optimization.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Real-time execution status updates
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Per-product execution logs with input/output data
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Filterable execution history
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Error details with stack traces where applicable
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Execution replay for debugging
        </Text>
      </View>

      {/* Secondary Objective 4 */}
      <Text style={styles.h3}>3.3.4 Version Control for Workflows</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Enable order versioning
        with the ability to view history, compare versions, and rollback to
        previous versions.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Automatic version creation on save (publish)
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Version history view with timestamps and author
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Draft vs. published order states
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Rollback functionality to restore previous versions
        </Text>
      </View>

      {/* Secondary Objective 5 */}
      <Text style={styles.h3}>3.3.5 Audit Trail and Compliance</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Maintain detailed audit logs
        for security, compliance, and accountability purposes.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Key Deliverables:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Comprehensive logging of user actions (create, update, delete)
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Execution audit trail with timing and status
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Credential access logging
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Log export capability for compliance reporting
        </Text>
      </View>

      {/* 3.4 Technical Objectives */}
      <Text style={styles.h2}>3.4 Technical Objectives</Text>
      <Text style={styles.paragraphIndent}>
        Technical objectives define the quality attributes and architectural
        characteristics that the platform must exhibit. These objectives ensure
        that the implementation is maintainable, scalable, and follows industry
        best practices.
      </Text>

      {/* Technical Objective 1 */}
      <Text style={styles.h3}>3.4.1 Modern Web Technology Stack</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Utilize current,
        well-supported web technologies that provide excellent developer
        experience and performance.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Technology Choices:</Text>
      </Text>

      {/* Technology Stack Table */}
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
              width: "25%",
              padding: 3,
              fontSize: 10,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Layer
          </Text>
          <Text
            style={{
              width: "25%",
              padding: 3,
              fontSize: 10,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Technology
          </Text>
          <Text
            style={{
              width: "50%",
              padding: 3,
              fontSize: 10,
              fontFamily: "Times-Bold",
            }}
          >
            Justification
          </Text>
        </View>
        {[
          [
            "Framework",
            "Next.js 16",
            "App Router, Server Components, optimal performance",
          ],
          ["UI Library", "React 19", "Latest React with concurrent features"],
          [
            "Language",
            "TypeScript 5",
            "Type safety, better tooling, fewer bugs",
          ],
          [
            "Styling",
            "Tailwind CSS",
            "Utility-first, responsive, maintainable",
          ],
          ["Components", "Shadcn/UI", "Accessible, customizable components"],
          ["API Layer", "tRPC", "End-to-end type safety, RPC-style API"],
          ["Database", "PostgreSQL", "Reliable, feature-rich, scalable"],
          ["ORM", "Prisma", "Type-safe queries, migrations, excellent DX"],
          ["Execution", "Inngest", "Durable functions, retry, observability"],
          ["Auth", "Better Auth", "Modern auth with OAuth, session management"],
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
                fontSize: 9,
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
                fontSize: 9,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text style={{ width: "50%", padding: 2, fontSize: 9 }}>
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
        Table 3.1: Technology Stack Selection and Justification
      </Text>
</View>

      {/* Technical Objective 2 */}
      <Text style={styles.h3}>3.4.2 Type-Safe Architecture</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Implement end-to-end type
        safety from database to frontend to eliminate runtime type errors.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Implementation Approach:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Prisma generates TypeScript types from database schema
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • tRPC propagates types from server to client automatically
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Zod schemas validate runtime data at API boundaries
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Strict TypeScript configuration with no implicit any
        </Text>
      </View>

      {/* Technical Objective 3 */}
      <Text style={styles.h3}>3.4.3 Responsive and Accessible UI</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Create a responsive user
        interface that works across devices and follows accessibility best
        practices.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Requirements:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Responsive layout for desktop and tablet viewports
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Semantic HTML structure
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Keyboard navigation support
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • ARIA labels for screen reader compatibility
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Sufficient color contrast ratios
        </Text>
      </View>

      {/* Technical Objective 4 */}
      <Text style={styles.h3}>3.4.4 Security Best Practices</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Objective:</Text> Implement security measures
        to protect user data, credentials, and order integrity.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Security Measures:</Text>
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4 }}>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • OAuth 2.0 authentication via Google and GitHub
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Secure session management with HTTP-only cookies
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Credential encryption at rest
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • CSRF protection on all mutations
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Input validation and sanitization
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 2 }}>
          • Rate limiting on API endpoints
        </Text>
      </View>

      {/* 3.5 Expected Outcomes */}
      <Text style={styles.h2}>3.5 Expected Outcomes</Text>
      <Text style={styles.paragraphIndent}>
        Upon successful completion of the project, the following outcomes are
        expected:
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 11, marginBottom: 3, lineHeight: 1.5 }}>
          <Text style={styles.bold}>1. Functional Platform:</Text> A fully
          operational e-commerce platform deployed on cloud
          infrastructure, capable of creating, executing, and monitoring
          automated orders.
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 3, lineHeight: 1.5 }}>
          <Text style={styles.bold}>2. Comprehensive Documentation:</Text> User
          guides, API documentation, and deployment instructions enabling both
          end-users and administrators to effectively utilize the platform.
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 3, lineHeight: 1.5 }}>
          <Text style={styles.bold}>3. Validated Architecture:</Text> A proven
          architecture that balances simplicity with scalability, suitable for
          both individual users and team environments.
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 3, lineHeight: 1.5 }}>
          <Text style={styles.bold}>4. Production-Ready Codebase:</Text> A
          well-structured codebase built with modern best practices, designed
          for future scalability as a commercial SaaS product.
        </Text>
        <Text style={{ fontSize: 11, marginBottom: 3, lineHeight: 1.5 }}>
          <Text style={styles.bold}>5. Academic Demonstration:</Text> A
          comprehensive project demonstrating proficiency in modern web
          development, software engineering principles, and the full SDLC.
        </Text>
      </View>

      {/* 3.6 Summary */}
      <Text style={styles.h2}>3.6 Summary</Text>
      <Text style={styles.paragraphIndent}>
        This chapter has defined the comprehensive objectives for the dj-ecommerce
        e-commerce platform. The primary objectives address the core
        functionality including shopping experience, reliable execution,
        multiple trigger types, service integrations, and AI capabilities.
        Secondary objectives enhance the platform for team use with RBAC,
        credential management, monitoring, version control, and audit trails.
      </Text>
      <Text style={styles.paragraphIndent}>
        Technical objectives ensure a high-quality implementation using modern
        technologies, type-safe architecture, responsive design, and security
        best practices. These objectives collectively define a platform that
        addresses the market gaps identified in Chapter 2 while remaining
        achievable within the project timeline.
      </Text>
    </BookPageLayout>
  );
}
