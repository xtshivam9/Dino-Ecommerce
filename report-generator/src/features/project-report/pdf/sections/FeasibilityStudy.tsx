"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import FeasibilityRadar from "../diagrams/TechFeasibilityRadar";
import CostBreakdownChart from "../diagrams/CostBreakdownChart";

export default function FeasibilityStudy() {
  return (
    <BookPageLayout chapterTitle="Feasibility Study" chapterNum="04">
      <View style={{ marginBottom: 28, alignItems: "center", marginTop: 20 }}>
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Times-Roman",
            color: "#666666",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Chapter 04
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontFamily: "Times-Bold",
            textAlign: "center",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          Feasibility Study
        </Text>
        <View
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#000000",
            marginTop: 12,
          }}
        />
      </View>

      <Text style={styles.h2}>4.1 Introduction</Text>
      <Text style={styles.paragraphIndent}>
        This feasibility study evaluates the technical, economic, and operational viability of Arowai Ecommerce 1.0 to ensure project success.
      </Text>

      <Text style={styles.h2}>4.2 Technical Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Assessment:</Text> The project is <Text style={styles.bold}>Highly Feasible</Text>. Django's mature ORM handles complex order/inventory queries, Stripe provides robust Python SDKs with comprehensive documentation, and Bootstrap enables rapid UI development without SPA framework complexity.
      </Text>

      {/* Technical Feasibility Radar */}
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <FeasibilityRadar />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 4.1: Technical Feasibility Radar Assessment
        </Text>
      </View>

      <Text style={styles.h2}>4.3 Economic Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Costs:</Text> Development: $0 (academic); Infrastructure: Django/SQLite (free), Vercel/Heroku ($0-7/month), Stripe (2.9% + 30¢/transaction). <Text style={styles.bold}>Conclusion:</Text> <Text style={styles.bold}>Highly Feasible</Text> with minimal upfront investment.
      </Text>

      {/* Cost Breakdown Diagram */}
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <CostBreakdownChart />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 4.2: Infrastructure Cost Analysis
        </Text>
      </View>

      <Text style={styles.h2}>4.4 Operational Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        Django Admin provides an intuitive dashboard for inventory management, while standard e-commerce UI conventions (cart icon, clear checkout flow) ensure minimal learning curve for users. <Text style={styles.bold}>Conclusion:</Text> <Text style={styles.bold}>Highly Feasible</Text>.
      </Text>

      <Text style={styles.h2}>4.5 Schedule Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        Django's "batteries-included" approach accelerates development. With Agile methodology and two-week sprints, the core MVP (catalog, cart, checkout) can be achieved within 8-10 weeks—feasible within one academic semester.
      </Text>

      <Text style={styles.h2}>4.6 Legal Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        All frameworks (Django, Python, Bootstrap) are open-source licensed. Stripe integration offloads PCI-DSS compliance by ensuring no credit card data touches local servers.
      </Text>

      <Text style={styles.h2}>4.7 Summary</Text>
      <Text style={styles.paragraphIndent}>
        Arowai Ecommerce 1.0 is viable across all feasibility dimensions—technical, economic, operational, schedule, and legal—ensuring successful execution within available constraints.
      </Text>
    </BookPageLayout>
  );
}
