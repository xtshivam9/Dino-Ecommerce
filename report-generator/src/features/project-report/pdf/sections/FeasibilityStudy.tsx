"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import FeasibilityRadar from "../diagrams/TechFeasibilityRadar";
import CostBreakdownChart from "../diagrams/CostBreakdownChart";
import ScheduleTimeline from "../diagrams/ScheduleTimeline";

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
        A feasibility study is a critical preliminary phase in the Software Development Life Cycle (SDLC). It objectively evaluates the practicality of the proposed project, ensuring that the necessary technical, economic, and operational resources are available and that the project is likely to succeed. For Dino-Ecommerce, this analysis justifies the investment of time and resources into developing a custom Django-based platform.
      </Text>

      <Text style={styles.h2}>4.2 Technical Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        Technical feasibility assesses whether the required technology exists to implement the proposed system and if the development team possesses the necessary skills.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>1. Framework Suitability:</Text> Django is a mature, highly documented Python framework explicitly designed for building database-driven applications. Its ORM (Object-Relational Mapping) easily handles complex queries required for order management and inventory tracking.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>2. Payment Integration:</Text> Stripe provides robust Python SDKs and comprehensive REST APIs. The technical risk of integrating payment processing is low, given Stripe's extensive documentation and testing environments.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>3. Frontend Implementation:</Text> Utilizing HTML5, CSS3, and Bootstrap 4 ensures rapid UI development without the overhead of learning complex single-page application (SPA) frameworks like React or Angular for this specific project scope.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Conclusion:</Text> The project is <Text style={styles.bold}>Highly Feasible</Text> technically. The chosen stack is proven, stable, and perfectly suited for e-commerce requirements.
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
        Economic feasibility, often called cost-benefit analysis, determines whether the financial costs of developing the system are justified by the expected benefits.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Development Costs:</Text> As an academic/open-source project, development labor costs are zero. 
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Infrastructure Costs:</Text> 
        {"\n"}• Framework: Django (Open Source - $0)
        {"\n"}• Database: SQLite/PostgreSQL (Open Source - $0)
        {"\n"}• Hosting: Vercel/Heroku Hobby Tier ($0 - $7/month)
        {"\n"}• Payments: Stripe (Pay-as-you-go, no setup fees, ~2.9% + 30¢ per transaction)
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Conclusion:</Text> The project is <Text style={styles.bold}>Highly Feasible</Text> economically. The utilization of open-source technologies and free-tier cloud hosting minimizes upfront capital expenditure.
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
        Operational feasibility measures how well the proposed system solves the problems identified and how easily it can be adopted by end-users and administrators.
      </Text>
      <Text style={styles.paragraph}>
        Dino-Ecommerce utilizes the built-in Django Admin interface, which provides a highly intuitive, pre-built dashboard for managing database records. This significantly reduces the training required for store owners to manage inventory. For end-users, the platform adheres to standard e-commerce UI conventions (cart icon in the top right, clear checkout buttons), ensuring a zero-learning-curve shopping experience.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Conclusion:</Text> The project is <Text style={styles.bold}>Highly Feasible</Text> operationally.
      </Text>

      <Text style={styles.h2}>4.5 Schedule Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        Schedule feasibility assesses whether the project can be completed within the allocated time frame (typically one academic semester).
      </Text>
      <Text style={styles.paragraph}>
        Given the "batteries-included" nature of Django, core features like authentication and database schema creation are accelerated. By adopting an Agile methodology with two-week sprints, the core MVP (catalog, cart, checkout) can realistically be achieved within 8-10 weeks, leaving ample time for testing and deployment.
      </Text>

      {/* Schedule Timeline Diagram */}
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <ScheduleTimeline />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 4.3: Project Schedule Timeline
        </Text>
      </View>

      <Text style={styles.h2}>4.6 Legal Feasibility</Text>
      <Text style={styles.paragraphIndent}>
        Legal feasibility evaluates potential conflicts with legal requirements, data protection laws, and software licensing.
      </Text>
      <Text style={styles.paragraph}>
        • All libraries and frameworks used (Django, Python, Bootstrap) are open-source and legally permissible for commercial or academic use.
        {"\n"}• By offloading payment processing to Stripe, the application avoids storing sensitive credit card data, thereby circumventing strict PCI-DSS compliance requirements for the local server.
        {"\n"}• Standard terms of service and privacy policy templates can be integrated easily.
      </Text>

      <Text style={styles.h2}>4.7 Feasibility Summary</Text>
      <Text style={styles.paragraphIndent}>
        The comprehensive feasibility study indicates that the Dino-Ecommerce project is viable across all dimensions. The combination of open-source tools, well-documented APIs, and manageable scope ensures that the project can be successfully executed within the available constraints.
      </Text>
    </BookPageLayout>
  );
}
