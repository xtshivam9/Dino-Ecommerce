"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import GanttChart from "../diagrams/GanttChart";

export default function COCOMOEstimation() {
  return (
    <BookPageLayout chapterTitle="Project Estimation & Planning" chapterNum="05">
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
          Chapter 05
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
          Estimation & Planning
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

      <Text style={styles.h2}>5.1 Introduction to COCOMO</Text>
      <Text style={styles.paragraphIndent}>
        Effective project planning requires accurate estimation of effort, cost, and schedule. The Constructive Cost Model (COCOMO), developed by Barry Boehm, is an algorithmic software cost estimation model that uses a basic regression formula based on historical project data.
      </Text>
      <Text style={styles.paragraph}>
        For Dino-Ecommerce, we utilize the Basic COCOMO model to estimate the effort and development time required. The model categorizes software projects into three classes: Organic, Semi-detached, and Embedded. Given the small team size, familiar technology stack (Django/Python), and relatively flexible requirements, this project is classified under the <Text style={styles.bold}>Organic Mode</Text>.
      </Text>

      <Text style={styles.h2}>5.2 Lines of Code Estimation</Text>
      <Text style={styles.paragraphIndent}>
        The primary input for the COCOMO model is the estimated size of the software, measured in Kilo Lines of Code (KLOC). The estimation for Dino-Ecommerce was performed by breaking down the system into core Django modules (apps) and estimating the size of models, views, and templates.
      </Text>

      {/* LOC Estimation Table */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#000000", paddingVertical: 6 }}>
          <Text style={{ width: "40%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Django Module / Component</Text>
          <Text style={{ width: "30%", fontFamily: "Times-Bold", fontSize: 10 }}>Estimated LOC</Text>
          <Text style={{ width: "30%", fontFamily: "Times-Bold", fontSize: 10 }}>% of Total</Text>
        </View>

        {[
          { mod: "Core App (Models/Views/URLs)", loc: "1,200", pct: "24%" },
          { mod: "Authentication (Allauth Config)", loc: "500", pct: "10%" },
          { mod: "HTML/CSS Templates (Bootstrap)", loc: "2,000", pct: "40%" },
          { mod: "Stripe Integration Logic", loc: "800", pct: "16%" },
          { mod: "Configuration & Static Files", loc: "500", pct: "10%" },
        ].map((row, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#eeeeee", paddingVertical: 6 }}>
            <Text style={{ width: "40%", fontFamily: "Times-Roman", fontSize: 10, paddingLeft: 8 }}>{row.mod}</Text>
            <Text style={{ width: "30%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.loc}</Text>
            <Text style={{ width: "30%", fontFamily: "Times-Roman", fontSize: 10 }}>{row.pct}</Text>
          </View>
        ))}
        
        <View style={{ flexDirection: "row", borderBottomWidth: 2, borderColor: "#000000", paddingVertical: 6, backgroundColor: "#f9f9f9" }}>
          <Text style={{ width: "40%", fontFamily: "Times-Bold", fontSize: 10, paddingLeft: 8 }}>Total Estimated KLOC</Text>
          <Text style={{ width: "30%", fontFamily: "Times-Bold", fontSize: 10 }}>5.0 KLOC</Text>
          <Text style={{ width: "30%", fontFamily: "Times-Bold", fontSize: 10 }}>100%</Text>
        </View>
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Table 5.1: Lines of Code by Module
        </Text>
      </View>

      <Text style={styles.h2}>5.3 Basic COCOMO Calculation</Text>
      <Text style={styles.paragraphIndent}>
        The formulas for the Basic COCOMO Organic mode are:
      </Text>
      <View style={{ paddingLeft: 24, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Italic", fontSize: 11, marginBottom: 4 }}>Effort (E) = a × (KLOC)^b [in Person-Months]</Text>
        <Text style={{ fontFamily: "Times-Italic", fontSize: 11, marginBottom: 4 }}>Development Time (Tdev) = c × (E)^d [in Months]</Text>
        <Text style={{ fontFamily: "Times-Italic", fontSize: 11, marginBottom: 4 }}>Average Staffing (S) = E / Tdev [in Persons]</Text>
      </View>

      <Text style={styles.paragraph}>
        For the <Text style={styles.bold}>Organic mode</Text>, the constants are defined as:
        {"\n"}a = 2.4, b = 1.05, c = 2.5, d = 0.38
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>1. Effort Estimation:</Text>
        {"\n"}E = 2.4 × (5.0)^1.05
        {"\n"}E = 2.4 × 5.41
        {"\n"}E ≈ <Text style={styles.bold}>12.98 Person-Months</Text>
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>2. Development Time Estimation:</Text>
        {"\n"}Tdev = 2.5 × (12.98)^0.38
        {"\n"}Tdev = 2.5 × 2.62
        {"\n"}Tdev ≈ <Text style={styles.bold}>6.55 Months</Text>
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>3. Average Staffing Estimation:</Text>
        {"\n"}S = E / Tdev
        {"\n"}S = 12.98 / 6.55
        {"\n"}S ≈ <Text style={styles.bold}>1.98 Persons (~2 Developers)</Text>
      </Text>

      <Text style={styles.h2}>5.4 Intermediate COCOMO Adjustments</Text>
      <Text style={styles.paragraphIndent}>
        While the Basic model provides a rough estimate, Intermediate COCOMO applies Effort Multipliers (Cost Drivers) to refine the estimate based on specific project attributes. For Dino-Ecommerce, the following key cost drivers were identified:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>• <Text style={styles.bold}>High Product Complexity (CPLX = 1.15):</Text> Due to secure payment integration.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>• <Text style={styles.bold}>High Analyst Capability (ACAP = 0.86):</Text> Team is highly familiar with Python.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>• <Text style={styles.bold}>High Platform Experience (PEXP = 0.91):</Text> Prior experience with Django.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>• <Text style={styles.bold}>Use of Modern Tools (TOOL = 0.91):</Text> Utilizing modern IDEs, Git, and automated testing.</Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Effort Adjustment Factor (EAF)</Text> = 1.15 × 0.86 × 0.91 × 0.91 ≈ <Text style={styles.bold}>0.81</Text>
      </Text>
      
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Adjusted Effort</Text> = E × EAF = 12.98 × 0.81 ≈ <Text style={styles.bold}>10.51 Person-Months</Text>
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Adjusted Time</Text> = 2.5 × (10.51)^0.38 ≈ <Text style={styles.bold}>6.0 Months</Text>
      </Text>

      <Text style={styles.h2}>5.5 Summary and Real-World Application</Text>
      <Text style={styles.paragraphIndent}>
        The COCOMO estimation indicates that Dino-Ecommerce, sized at approximately 5,000 lines of code, requires around 10.5 person-months of effort and a 6-month development schedule for a two-person team. 
      </Text>
      <Text style={styles.paragraph}>
        However, in practice, the utilization of high-level frameworks like Django and pre-built styling libraries like Bootstrap significantly accelerates development. By leveraging these existing abstractions rather than writing everything from scratch, the actual timeline can be compressed into a single academic semester (approximately 3-4 months) without sacrificing quality or scope.
      </Text>

      {/* Gantt Chart Diagram */}
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <GanttChart />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 5.2: Project Timeline - Gantt Chart
        </Text>
      </View>
    </BookPageLayout>
  );
}
