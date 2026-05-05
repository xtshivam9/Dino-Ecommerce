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

      <Text style={styles.h2}>5.1 Project Estimation Overview</Text>
      <Text style={styles.paragraphIndent}>
        The Constructive Cost Model (COCOMO) provides algorithmic software cost estimation based on historical project data. For Arowai Ecommerce 1.0 (estimated ~5.0 KLOC), we apply the Basic COCOMO Organic mode model suitable for small teams with familiar technology stacks.
      </Text>

      <Text style={styles.h2}>5.2 COCOMO Calculation</Text>
      <Text style={styles.paragraphIndent}>
        Using the Basic COCOMO formulas with Organic mode constants (a=2.4, b=1.05, c=2.5, d=0.38):
      </Text>

      <View style={{ paddingLeft: 24, marginVertical: 16 }}>
        <Text style={{ fontFamily: "Times-Italic", fontSize: 11, marginBottom: 4 }}>Effort (E) = 2.4 × (5.0)^1.05 ≈ 13 Person-Months</Text>
        <Text style={{ fontFamily: "Times-Italic", fontSize: 11, marginBottom: 4 }}>Development Time = 2.5 × (13)^0.38 ≈ 6.5 Months</Text>
        <Text style={{ fontFamily: "Times-Italic", fontSize: 11 }}>Team Size = 13 / 6.5 ≈ 2 Developers</Text>
      </View>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Summary:</Text> The COCOMO model estimates approximately 13 person-months of effort over 6.5 months for a 2-developer team. However, leveraging Django's "batteries-included" framework and Bootstrap significantly accelerates development, compressing the actual timeline to 3-4 months for an academic semester project.
      </Text>

      {/* Gantt Chart Diagram */}
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <GanttChart />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 5.1: Project Timeline - Gantt Chart
        </Text>
      </View>
    </BookPageLayout>
  );
}
