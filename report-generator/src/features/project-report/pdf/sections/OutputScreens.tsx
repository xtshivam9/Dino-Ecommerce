"use client";

import { View, Text, Image } from "@react-pdf/renderer";
import { styles, PAGE_MARGINS } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 11: Output & Screenshots
 * Describes each screen/page of the application with textual descriptions.
 */
export default function OutputScreens() {
  const CONTENT_WIDTH = 595 - PAGE_MARGINS.left - PAGE_MARGINS.right; // A4 width minus margins

  return (
    <BookPageLayout chapterTitle="Output & Screenshots" chapterNum="11">
      {/* Chapter Title */}
      <View style={{ alignItems: "center", marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Times-Roman",
            color: "#666666",
            letterSpacing: 3,
            marginBottom: 4,
          }}
        >
          CHAPTER 11
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Times-Bold",
            textAlign: "center",
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          OUTPUT & SCREENSHOTS
        </Text>
        <View style={{ width: 60, height: 3, backgroundColor: "#000000" }} />
      </View>

      <Text style={styles.paragraphIndent}>
        This chapter presents the key screens and outputs of the dj-ecommerce
        platform. The application is deployed and accessible at{" "}
        <Text style={styles.bold}>https://flowgent.app</Text>. Each screen is
        described with its purpose, layout, and key interactive elements. The
        application supports both <Text style={styles.bold}>Light</Text> and{" "}
        <Text style={styles.bold}>Dark</Text> themes.
      </Text>

      {/* Screen 1: Login */}
      <Text style={styles.h2}>11.1 Authentication Screens</Text>

      <Text style={styles.h3}>11.1.1 Login Page</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Login Page (URL: /login)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Layout:</Text> Centered card on a clean
          background. Left section displays the dj-ecommerce branding with an
          animated order visualizer showing products connecting in real-time.
          Right section contains the login form.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Elements:</Text> Email input field •
          Password input field with show/hide toggle • "Sign In" primary button
          • "Forgot Password?" link • Divider with "OR" • Social login buttons
          (Google, GitHub) with provider icons • "Don't have an account? Sign
          up" link at the bottom.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Behavior:</Text> Form validation with inline
          error messages. Loading spinner on submit. Redirects to dashboard on
          successful authentication.
        </Text>
      </View>

      {/* Full-size screenshot: Login */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        <Image src="/outputs/login.png" style={{ width: CONTENT_WIDTH }} />
      </View>

      <Text style={styles.h3}>11.1.2 Sign Up Page</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Sign Up Page (URL: /signup)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Elements:</Text> Full name input • Email
          input • Password input (with strength indicator) • Confirm password
          input • "Create Account" button • Social signup (Google, GitHub) •
          "Already have an account? Sign in" link.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Behavior:</Text> Auto sign-in after
          successful registration. Automatically creates a personal team
          workspace with OWNER role.
        </Text>
      </View>

      {/* Full-size screenshot: Sign Up */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        <Image src="/outputs/signup.png" style={{ width: CONTENT_WIDTH }} />
      </View>

      {/* Screen 2: Dashboard */}
      <Text style={styles.h2}>11.2 Dashboard</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Dashboard Home (URL: /dashboard)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Layout:</Text> Left sidebar navigation
          (collapsible) with links to Dashboard, Workflows, Executions,
          Credentials, Teams, and Settings. Top header with search bar,
          notification bell, theme toggle (sun/moon icon), and user avatar
          dropdown.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Stats Cards (Top Row):</Text> Four metric
          cards displaying — Total Workflows (count), Total Executions (count),
          Success Rate (percentage with green/red indicator), Active Schedules
          (count).
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Quick Actions:</Text> Three action buttons —
          "Create Workflow" (opens creation dialog), "Browse Templates" (opens
          template browser), "Manage Credentials" (navigates to credentials
          page).
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Recent Workflows:</Text> Grid/list of
          recently updated orders showing name, last modified date, execution
          status badge, and quick-action buttons (Edit, Run, Delete).
        </Text>
      </View>

      {/* Full-size screenshot: Dashboard */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        <Image src="/outputs/dashboard.png" style={{ width: CONTENT_WIDTH }} />
      </View>

      {/* Screen 3: Workflow Editor */}
      <Text style={styles.h2}>11.3 Shopping Cart & Checkout System</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Workflow Editor (URL: /orders/[id])
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Canvas Area (Center):</Text> Full-screen
          React Flow canvas with a dotted grid background. Supports zoom (scroll
          wheel), pan (click-drag on background), and selection (click-drag on
          products). MiniMap in the bottom-right corner shows a bird's eye view of
          the order. Controls panel in bottom-left provides zoom-in,
          zoom-out, fit-to-view, and lock buttons.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Model Palette (Left Panel):</Text>{" "}
          Collapsible panel with search input at the top. Models organized into
          categories: Triggers (Manual, Webhook, Schedule), Logic (IF, Switch,
          Loop, Filter, Merge), Data (Set, Sort, Code, Wait), HTTP (HTTP
          Request, Email), AI (OpenAI/Anthropic/Gemini), Integrations (Slack,
          Google Sheets, GitHub, Notion, Stripe, Twilio), Other (Sub-Workflow,
          Comment). Each product shows an icon, name, and can be dragged onto the
          canvas.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Model Configuration (Right Panel):</Text>{" "}
          When a product is selected, a side panel slides in showing the product's
          configuration form. Form fields are dynamic based on product type (e.g.,
          HTTP product shows URL, method, headers, body fields; AI product shows
          provider, model, prompt, temperature, max tokens fields). Credential
          selection dropdown for products requiring authentication.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Toolbar (Top):</Text> Workflow name
          (editable inline) • Save button (with auto-save indicator) • Execute
          button (triggers manual run) • Undo/Redo buttons • Version history
          button • Export/Import buttons • Error alert settings button •
          Active/Inactive toggle.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Models on Canvas:</Text> Each product displays
          as a rounded rectangle with — an icon (top-left), product type label,
          product name, connection handles (input on left, output on right), and a
          status indicator (green checkmark for success, red X for error,
          spinner for running). Edges between products are animated curved lines
          with directional arrows.
        </Text>
      </View>

      {/* Full-size screenshot: Workflow Editor */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        <Image
          src="/outputs/order_editor.png"
          style={{ width: CONTENT_WIDTH }}
        />
      </View>

      {/* Screen 4: Workflows List */}
      <Text style={styles.h2}>11.4 Workflows Management</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Workflows List (URL: /orders)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Elements:</Text> "Create Workflow" and
          "Browse Templates" buttons (top-right) • Search bar with full-text
          search across name, description, tags, folder • Filter by folder and
          tags • Sort by name, date, or status • Grid/list view toggle.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Workflow Cards:</Text> Each card shows —
          order name, description (truncated), creation date, last modified
          timestamp, active/inactive badge, execution count, favorite star
          toggle, folder tag, and action buttons (Edit, Duplicate, Export,
          Delete).
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Template Browser:</Text> Modal dialog
          displaying 5 built-in templates with category badges, description, and
          "Use Template" button. Each template shows the product types it uses.
        </Text>
      </View>

      {/* Full-size screenshot: Workflows List */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        <Image src="/outputs/orders.png" style={{ width: CONTENT_WIDTH }} />
      </View>

      {/* Screen 5: Execution History */}
      <Text style={styles.h2}>11.5 Execution History</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Executions List (URL: /executions)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Elements:</Text> Execution statistics
          summary bar (total, success, failed, running) • Filter by status
          (PENDING, RUNNING, SUCCESS, ERROR, CANCELLED) • Filter by order •
          Timeline view showing hourly execution breakdown • Cursor-based
          pagination.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Table Columns:</Text> Execution ID •
          Workflow Name • Status (color-coded badge) • Mode (Manual, Scheduled,
          Webhook) • Started At • Duration • Actions (View Detail, Retry,
          Cancel, Delete).
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Execution Detail View:</Text> Shows complete
          execution information — trigger data, product-by-product results in
          execution order, input/output data for each step, error messages with
          stack traces for failed products, execution timing breakdown, and retry
          information.
        </Text>
      </View>

      {/* Full-size screenshot: Execution / History placeholder */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        {/* Optional execution history screenshot omitted if not available */}
      </View>

      {/* Screen 6: Credentials */}
      <Text style={styles.h2}>11.6 Credential Management</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Credentials Page (URL: /credentials)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Elements:</Text> "Add Credential" button •
          List of stored credentials showing name, provider icon, type (API Key,
          OAuth, Bearer Token), created date, and expiry status • Action buttons
          (Edit, Delete) • OAuth "Connect" buttons for Slack, Google, GitHub,
          Notion that initiate the OAuth2 flow.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Add Credential Dialog:</Text> Form with
          credential name, type selector (API Key, Bearer Token, OAuth2,
          Custom), provider dropdown, and dynamic fields for the selected type
          (e.g., API Key shows a single key input field; custom shows key-value
          pairs).
        </Text>
      </View>

      {/* Full-size screenshot: Credentials */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        <Image
          src="/outputs/credentials.png"
          style={{ width: CONTENT_WIDTH }}
        />
      </View>

      {/* Screen 7: Teams */}
      <Text style={styles.h2}>11.7 Team Management</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Teams Page (URL: /teams)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>Elements:</Text> "Create Team" button • Team
          list showing team name, member count, order count, and plan badge •
          Team detail view with member list (avatar, name, email, role badge),
          "Invite Member" button, and role management dropdown (Owner, Admin,
          Member, Viewer).
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Invite Dialog:</Text> Email input field •
          Role selector • Send invitation button. Invitations are sent via email
          with a 7-day expiry token link.
        </Text>
      </View>

      {/* Full-size screenshot: Teams */}
      <View style={{ marginBottom: 4, marginBottom: 6, alignItems: "center" }}>
        <Image src="/outputs/team.png" style={{ width: CONTENT_WIDTH }} />
      </View>

      {/* Screen 8: Schedules */}
      <Text style={styles.h2}>11.8 Schedule Configuration</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Schedule Configuration (within Workflow Settings)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 2 }}>
          <Text style={styles.bold}>CronPicker Component:</Text> Visual cron
          expression builder with preset buttons (Every minute, Every 5 minutes,
          Every hour, Every day at midnight, etc.) • Custom cron expression
          input with validation • Human-readable description of the cron
          expression (e.g., "Runs every weekday at 9:00 AM") • Timezone selector
          • Next 5 run times preview.
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Schedule List:</Text> Active/inactive toggle
          for each schedule • Last run time and next run time display •
          Execution count.
        </Text>
      </View>

      {/* Screen 9: Version History */}
      <Text style={styles.h2}>11.9 Version History</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Version History Panel (within Workflow Editor)
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Elements:</Text> Slide-in panel from the
          right showing a chronological list of all order versions. Each
          entry shows version number, creation timestamp, change message (if
          any), and a "Rollback" button. Clicking rollback restores the order
          to that version's products, edges, and settings.
        </Text>
      </View>

      {/* Screen 10: Webhook Docs */}
      <Text style={styles.h2}>11.10 Webhook Documentation</Text>
      <View
        wrap={false}
        style={{
          borderWidth: 1,
          borderColor: "#333333",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 3 }}
        >
          Screen: Auto-generated Webhook API Documentation
        </Text>
        <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
          <Text style={styles.bold}>Elements:</Text> Displays the unique checkout
          URL for the order • HTTP method badge (GET, POST, PUT, DELETE) •
          Auto-generated cURL command example that can be copied to clipboard •
          IP allowlist configuration • Secret hash for checkout signature
          validation • Call count tracker.
        </Text>
      </View>

      {/* 11.11 Summary */}
      <Text style={styles.h2}>11.11 Summary</Text>
      <Text style={styles.paragraphIndent}>
        dj-ecommerce provides a comprehensive set of user interfaces covering
        all aspects of the e-commerce lifecycle — from authentication
        and dashboard overview, through shopping experience and
        configuration, to execution monitoring and team management. The
        application is live and accessible at{" "}
        <Text style={styles.bold}>https://flowgent.app</Text>, providing users
        with a modern, responsive interface that supports both light and dark
        themes across all screens.
      </Text>

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
            fontSize: 11,
            fontFamily: "Times-Bold",
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          Application Access
        </Text>
        <Text style={{ fontSize: 9, textAlign: "center", marginBottom: 2 }}>
          <Text style={styles.bold}>Production URL:</Text> https://flowgent.app
        </Text>
        <Text style={{ fontSize: 9, textAlign: "center", marginBottom: 2 }}>
          <Text style={styles.bold}>Source Code:</Text>{" "}
          https://github.com/kanishKumar11/flowgent
        </Text>
        <Text style={{ fontSize: 9, textAlign: "center" }}>
          <Text style={styles.bold}>Total Screens:</Text> 12+ unique pages and
          dialogs
        </Text>
      </View>
    </BookPageLayout>
  );
}
