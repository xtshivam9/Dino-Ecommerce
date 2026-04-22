"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import RiskMatrix from "../diagrams/RiskMatrix";
import GanttChart from "../diagrams/GanttChart";

/**
 * Chapter 7: COCOMO Estimation (5 pages)
 */
export default function COCOMOEstimation() {
  return (
    <BookPageLayout chapterTitle="Project Estimation" chapterNum="05">
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
          CHAPTER 5
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
            PROJECT ESTIMATION
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

      <Text style={styles.h2}>5.1 Introduction to COCOMO</Text>
      <Text style={styles.paragraphIndent}>
        The Constructive Cost Model (COCOMO) is a procedural software cost
        estimation model developed by Barry Boehm in 1981. This chapter uses
        COCOMO I (also known as COCOMO 81), specifically the Basic and
        Intermediate variants, to estimate AROWAI's development effort. COCOMO
        I uses a regression formula with parameters derived from historical
        project data and remains widely used in academic software engineering
        coursework.
      </Text>
      <Text style={styles.paragraphIndent}>
        AROWAI is classified as an Organic project - characterized by a small
        team with good experience working in a familiar environment with
        relatively relaxed requirements. This classification affects the model
        coefficients used in calculations.
      </Text>

      <Text style={styles.h2}>5.2 Lines of Code Estimation</Text>
      <Text style={styles.paragraphIndent}>
        LOC estimation forms the foundation of COCOMO calculations. The
        following table breaks down the estimated lines of code by module.
      </Text>

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
              width: "45%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Module
          </Text>
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              textAlign: "center",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            LOC
          </Text>
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              textAlign: "center",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            KLOC
          </Text>
          <Text
            style={{
              width: "25%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Language
          </Text>
        </View>
        {[
          ["Django Core Models", "1,200", "1.2", "Python/Django"],
          ["Django Views (CBV & FBV)", "2,800", "2.8", "Python/Django"],
          ["E-Commerce Templates", "4,500", "4.5", "HTML/Django"],
          ["Cart & Order Workflows", "1,500", "1.5", "Python"],
          ["Stripe Payment Integration", "800", "0.8", "Python"],
          ["Static Files & Styling", "3,500", "3.5", "CSS/JS"],
          ["Authentication & Users", "1,200", "1.2", "Python/Django"],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#cccccc",
            }}
          >
            <Text
              style={{
                width: "45%",
                padding: 2,
                fontSize: 8,
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
                fontSize: 8,
                textAlign: "right",
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
                fontSize: 8,
                textAlign: "right",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[2]}
            </Text>
            <Text style={{ width: "25%", padding: 2, fontSize: 8 }}>
              {row[3]}
            </Text>
          </View>
        ))}
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0" }}>
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
            Total
          </Text>
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              textAlign: "right",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            15,500
          </Text>
          <Text
            style={{
              width: "15%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              textAlign: "right",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            15.5
          </Text>
          <Text style={{ width: "25%", padding: 2, fontSize: 9 }}>-</Text>
        </View>
      </View>
<Text
        style={{
          fontSize: 9,
          fontFamily: "Times-Italic",
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        Table 5.1: Lines of Code by Module
      </Text>
</View>

      <Text style={styles.h2}>5.3 Basic COCOMO Model</Text>
      <Text style={styles.paragraphIndent}>
        The Basic COCOMO model computes effort as a function of program size
        expressed in KLOC.
      </Text>

      <Text style={styles.h3}>5.3.1 COCOMO Project Types</Text>
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
            Mode
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
            Characteristics
          </Text>
          <Text
            style={{
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Coefficients (a,b)
          </Text>
        </View>
        {[
          ["Organic", "Small team, familiar environment", "a=2.4, b=1.05"],
          ["Semi-detached", "Medium team, mixed experience", "a=3.0, b=1.12"],
          ["Embedded", "Tight constraints, complex systems", "a=3.6, b=1.20"],
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

      <Text style={styles.h3}>5.3.2 Effort Calculation</Text>
      <View
        style={{
          backgroundColor: "#f0f8ff",
          borderWidth: 1,
          borderColor: "#0066cc",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 4 }}
        >
          Basic COCOMO Formula (Organic Mode):
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          Effort (E) = a × (KLOC)^b
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          E = 2.4 × (15.5)^1.05
        </Text>
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", color: "#006600" }}
        >
          E = 42.6 person-months
        </Text>
      </View>

      <Text style={styles.h3}>5.3.3 Development Time Calculation</Text>
      <View
        style={{
          backgroundColor: "#f0f8ff",
          borderWidth: 1,
          borderColor: "#0066cc",
          padding: 6,
          marginBottom: 4,
          marginBottom: 6,
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 4 }}
        >
          Development Time Formula:
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>TDEV = c × (E)^d</Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          For Organic: c=2.5, d=0.38
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          TDEV = 2.5 × (42.6)^0.38
        </Text>
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", color: "#006600" }}
        >
          TDEV = 10.8 months
        </Text>
      </View>

      <Text style={styles.h3}>5.3.4 Team Size Calculation</Text>
      <View
        style={{
          backgroundColor: "#f0f8ff",
          borderWidth: 1,
          borderColor: "#0066cc",
          padding: 6,
          marginBottom: 4,
          marginBottom: 4,
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 4 }}
        >
          Average Staffing Formula:
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          Team Size = E / TDEV
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          Team Size = 52.3 / 10.8
        </Text>
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", color: "#006600" }}
        >
          {"Team Size = ~5 persons"}
        </Text>
      </View>

      <Text style={styles.h2}>5.4 Intermediate COCOMO Model</Text>
      <Text style={styles.paragraphIndent}>
        The Intermediate COCOMO model adds cost drivers to refine the effort
        estimate. Fifteen cost drivers are grouped into four categories.
      </Text>

      <Text style={styles.h3}>5.4.1 Cost Driver Ratings</Text>
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
              width: "35%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Cost Driver
          </Text>
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
            Rating
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
            Value
          </Text>
          <Text
            style={{
              width: "20%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            EAF
          </Text>
        </View>
        {[
          ["Product Attributes", "", "", ""],
          ["  RELY (Reliability)", "Nominal", "1.00", ""],
          ["  DATA (Database size)", "Low", "0.94", ""],
          ["  CPLX (Complexity)", "Nominal", "1.00", ""],
          ["Hardware Attributes", "", "", ""],
          ["  TIME (Execution time)", "Nominal", "1.00", ""],
          ["  STOR (Main storage)", "Nominal", "1.00", ""],
          ["Personnel Attributes", "", "", ""],
          ["  ACAP (Analyst capability)", "High", "0.86", ""],
          ["  PCAP (Programmer cap)", "High", "0.86", ""],
          ["  AEXP (App experience)", "Nominal", "1.00", ""],
          ["Project Attributes", "", "", ""],
          ["  MODP (Modern practices)", "High", "0.91", ""],
          ["  TOOL (Software tools)", "High", "0.91", ""],
        ].map((row, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderBottomWidth: i < 12 ? 1 : 0,
              borderBottomColor: "#cccccc",
              backgroundColor: row[1] === "" ? "#f9f9f9" : "transparent",
            }}
          >
            <Text
              style={{
                width: "35%",
                padding: 2,
                fontSize: 8,
                fontFamily: row[1] === "" ? "Times-Bold" : "Times-Roman",
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
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[2]}
            </Text>
            <Text
              style={{
                width: "20%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              {row[3]}
            </Text>
          </View>
        ))}
        <View style={{ flexDirection: "row", backgroundColor: "#f0f0f0" }}>
          <Text
            style={{
              width: "60%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Effort Adjustment Factor (EAF)
          </Text>
          <Text
            style={{
              width: "40%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              textAlign: "center",
            }}
          >
            0.58
          </Text>
        </View>
      </View>

      <Text style={styles.h3}>5.4.2 Adjusted Effort Calculation</Text>
      <View
        style={{
          backgroundColor: "#f0fff0",
          borderWidth: 1,
          borderColor: "#006600",
          padding: 6,
          marginBottom: 4,
          marginBottom: 4,
        }}
      >
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", marginBottom: 4 }}
        >
          Intermediate COCOMO Calculation:
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          E_adjusted = E_basic × EAF
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          E_adjusted = 52.3 × 0.58
        </Text>
        <Text
          style={{ fontSize: 10, fontFamily: "Times-Bold", color: "#006600" }}
        >
          E_adjusted = 30.3 person-months
        </Text>
      </View>

      <Text style={styles.h2}>5.5 Risk Analysis</Text>
      <Text style={styles.paragraphIndent}>
        Risk analysis identifies potential issues that could impact project
        success and defines mitigation strategies.
      </Text>

      <View style={{ marginBottom: 8, marginBottom: 4 }}>
        <RiskMatrix />
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 2,
            marginBottom: 6,
          }}
        >
          Figure 5.1: Risk Assessment Matrix
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
            Risk
          </Text>
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
            Prob
          </Text>
          <Text
            style={{
              width: "13%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Impact
          </Text>
          <Text
            style={{
              width: "50%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Mitigation Strategy
          </Text>
        </View>
        {[
          [
            "Technology changes",
            "Low",
            "Med",
            "Use stable LTS versions; limit dependency updates",
          ],
          [
            "Scope creep",
            "High",
            "High",
            "Fixed MVP scope; defer extras to future versions",
          ],
          [
            "Integration failures",
            "Med",
            "Med",
            "Mock testing; fallback mechanisms; API monitoring",
          ],
          [
            "Performance issues",
            "Med",
            "Med",
            "Profiling; optimization sprints; caching strategies",
          ],
          [
            "Security vulnerabilities",
            "Low",
            "High",
            "Regular audits; OWASP guidelines; encryption",
          ],
          [
            "Single point of failure",
            "Med",
            "High",
            "Documentation; code reviews; modular design",
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
                width: "25%",
                padding: 2,
                fontSize: 8,
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[0]}
            </Text>
            <Text
              style={{
                width: "12%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[1]}
            </Text>
            <Text
              style={{
                width: "13%",
                padding: 2,
                fontSize: 8,
                textAlign: "center",
                borderRightWidth: 1,
                borderRightColor: "#cccccc",
              }}
            >
              {row[2]}
            </Text>
            <Text
              style={{ width: "50%", padding: 2, fontSize: 7, lineHeight: 1.3 }}
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
          marginBottom: 6,
        }}
      >
        Table 5.2: Risk Analysis Matrix
      </Text>
</View>

      <Text style={styles.h2}>5.6 Actual vs Estimated Comparison</Text>
      <Text style={styles.paragraphIndent}>
        As a single-developer project, actual effort differs significantly from
        COCOMO predictions. The following factors contributed to reduced actual
        effort:
      </Text>

      <View style={{ marginBottom: 8, marginBottom: 6 }}>
        <GanttChart />
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 2,
            marginBottom: 6,
          }}
        >
          Figure 5.2: Project Timeline - Gantt Chart
        </Text>
      </View>

      <View style={{ marginLeft: 24, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Modern frameworks and libraries reduced boilerplate code
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • AI-assisted development accelerated implementation
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Reusable component libraries reduced frontend effort
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          • Inngest's managed infrastructure eliminated order state management
          complexity
        </Text>
      </View>

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
              width: "35%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
              borderRightWidth: 1,
              borderRightColor: "#333333",
            }}
          >
            Metric
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
            COCOMO Estimate
          </Text>
          <Text
            style={{
              width: "30%",
              padding: 2,
              fontSize: 9,
              fontFamily: "Times-Bold",
            }}
          >
            Actual
          </Text>
        </View>
        {[
          ["Effort", "30.3 person-months", "3 person-months"],
          ["Duration", "10.8 months", "2.5 months (Jan 6 – Mar 15, 2026)"],
          ["Team Size", "5 persons", "1 person"],
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
                width: "35%",
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
            <Text style={{ width: "30%", padding: 2, fontSize: 8 }}>
              {row[2]}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.h2}>5.7 Summary</Text>
      <Text style={styles.paragraphIndent}>
        This chapter applied COCOMO estimation models to the dj-ecommerce project.
        The Basic COCOMO model estimated 42.6 person-months of effort over 10.8
        months with a team of 5. The Intermediate COCOMO model, accounting for
        favorable cost drivers (high analyst/programmer capability, modern
        tools), reduced the estimate to 30.3 person-months.
      </Text>
      <Text style={styles.paragraphIndent}>
        The significant variance between COCOMO estimates and actual effort
        highlights limitations of traditional estimation models for modern web
        development projects that leverage:
      </Text>
      <View style={{ marginLeft: 24, marginBottom: 4, marginBottom: 6 }}>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          1. Comprehensive frameworks (Next.js) that provide routing, SSR, and
          API layers
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          2. Type-safe ORM tools (Prisma) that eliminate database boilerplate
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          3. Managed services (Inngest, Netlify) that handle infrastructure
          complexity
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          4. AI-assisted development tools that accelerate coding and debugging
        </Text>
        <Text style={{ fontSize: 10, marginBottom: 2 }}>
          5. Rich component ecosystems (Radix, Tailwind) that reduce UI
          development time
        </Text>
      </View>

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
          Key Estimation Findings
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%", paddingRight: 8 }}>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>
              <Text style={styles.bold}>Basic COCOMO:</Text>
            </Text>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>
              • Effort: 52.3 PM
            </Text>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>
              • Time: 10.8 months
            </Text>
            <Text style={{ fontSize: 9 }}>• Team: 5 persons</Text>
          </View>
          <View style={{ width: "50%", paddingLeft: 8 }}>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>
              <Text style={styles.bold}>Intermediate COCOMO:</Text>
            </Text>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>• EAF: 0.58</Text>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>
              • Adjusted Effort: 30.3 PM
            </Text>
            <Text style={{ fontSize: 9 }}>• Reduction: 42%</Text>
          </View>
        </View>
      </View>

      <Text style={styles.paragraphIndent}>
        Future estimation for similar projects should consider adjusted models
        that account for modern development practices, managed cloud services,
        and AI-assisted tooling. The productivity multiplier in such
        environments can be 10x or higher compared to traditional development
        approaches.
      </Text>
      <Text style={styles.h2}>5.6 Cost Estimation (CAPEX & OPEX)</Text>
      <Text style={styles.paragraphIndent}>
        In addition to the development effort modeled by COCOMO, the long-term
        financial viability of dj-ecommerce depends on its operational and structural
        hosting costs.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>CAPEX (Capital Expenditure): </Text>
        Zero. By utilizing open-source frameworks (Django, React) and cloud-agnostic
        deployment, structural upfront software licensing costs are avoided.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>OPEX (Operational Expenditure): </Text>
        Estimated at $25/month for continuous hosting:
        - Railway PostgreSQL Database: ~/month
        - Vercel (Next.js Report App): Free tier
        - Heroku/Render (Django App hosting): ~0/month
        - Stripe Transaction Fees: 2.9% + /usr/bin/bash.30 per successful card charge
      </Text>
      <Text style={styles.paragraphIndent}>
        This cost model scales linearly, avoiding the massive monthly base subscription
        fees of platforms like Shopify while maintaining similar transactional overhead.
      </Text>

    </BookPageLayout>
  );
}
