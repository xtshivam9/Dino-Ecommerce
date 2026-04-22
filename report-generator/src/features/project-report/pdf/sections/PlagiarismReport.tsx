"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";



/**
 * Plagiarism Declaration Page
 * A formal declaration of originality placed in preliminary pages.
 */
export default function PlagiarismReport({
  pageNumber,
}: PlagiarismReportProps) {
  return (
    <PreliminaryPageLayout>
      {/* Title */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Text style={[styles.h1, { marginBottom: 10 }]}>CERTIFICATE OF ORIGINALITY</Text>
        <View
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#000000",
          }}
        />
      </View>

      {/* Content */}
      <View>
        <Text style={styles.paragraphIndent}>
          This is to certify that the project report entitled{" "}
          <Text style={styles.bold}>
            &quot;AROWAI 1.0 — Comprehensive E-Commerce Platform&quot;
          </Text>{" "}
          submitted by <Text style={styles.bold}>Rutashman Sharma</Text> (Roll No.:{" "}
          <Text style={styles.bold}>11792314708</Text>) and <Text style={styles.bold}>Lovejinder Singh</Text> (Roll No.:{" "}
          <Text style={styles.bold}>11792314706</Text>) to{" "}
          <Text style={styles.bold}>Hindu College, Amritsar</Text> for the
          partial fulfillment of the degree of{" "}
          <Text style={styles.bold}>
            Bachelor of Computer Applications (BCA)
          </Text>{" "}
          has been checked for plagiarism using standard plagiarism detection
          tools and is found to be within the acceptable limits of originality.
        </Text>

        <Text style={[styles.paragraph, { marginBottom: 8 }]}>
          The overall similarity index of the report is below the permissible
          threshold prescribed by the university guidelines. All referenced
          works, quotations, and citations have been duly acknowledged in the
          text and listed in the References section.
        </Text>

        <Text style={[styles.paragraph, { marginBottom: 8 }]}>
          The undersigned hereby confirms that the intellectual content of the
          project is the original work of the candidate and does not constitute
          plagiarism in any form.
        </Text>
      </View>

      {/* Plagiarism Report Summary Box */}
      <View
        style={{
          marginBottom: 14,
          borderWidth: 1,
          borderColor: "#000000",
          padding: 8,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Times-Bold",
            textAlign: "center",
            marginBottom: 6,
          }}
        >
          Plagiarism Check Summary
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text
            style={{ fontSize: 10.5, fontFamily: "Times-Bold", width: 180 }}
          >
            Software Used:
          </Text>
          <Text style={{ fontSize: 10.5, fontFamily: "Times-Roman" }}>
            Turnitin / University Portal
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text
            style={{ fontSize: 10.5, fontFamily: "Times-Bold", width: 180 }}
          >
            Similarity Index:
          </Text>
          <Text style={{ fontSize: 10.5, fontFamily: "Times-Roman" }}>
            __________ %
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text
            style={{ fontSize: 10.5, fontFamily: "Times-Bold", width: 180 }}
          >
            Acceptable Limit:
          </Text>
          <Text style={{ fontSize: 10.5, fontFamily: "Times-Roman" }}>
            Less than 25%
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text
            style={{ fontSize: 10.5, fontFamily: "Times-Bold", width: 180 }}
          >
            Date of Check:
          </Text>
          <Text style={{ fontSize: 10.5, fontFamily: "Times-Roman" }}>
            ____ / ____ / 2026
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ fontSize: 10.5, fontFamily: "Times-Bold", width: 180 }}
          >
            Status:
          </Text>
          <Text style={{ fontSize: 10.5, fontFamily: "Times-Bold" }}>
            WITHIN ACCEPTABLE LIMITS
          </Text>
        </View>
      </View>

      {/* Signature Section */}
      <View
        style={{
          flexDirection: "column",
          gap: 20,
          marginBottom: 30,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center", width: 180 }}>
            <View style={{ width: 140, height: 1, backgroundColor: "#000000", marginBottom: 3 }} />
            <Text style={{ fontSize: 10.5, fontFamily: "Times-Bold" }}>Rutashman Sharma</Text>
            <Text style={{ fontSize: 9.5, fontFamily: "Times-Roman" }}>(Student 1)</Text>
          </View>
          <View style={{ alignItems: "center", width: 180 }}>
            <View style={{ width: 140, height: 1, backgroundColor: "#000000", marginBottom: 3 }} />
            <Text style={{ fontSize: 10.5, fontFamily: "Times-Bold" }}>Lovejinder Singh</Text>
            <Text style={{ fontSize: 9.5, fontFamily: "Times-Roman" }}>(Student 2)</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <View style={{ width: 160, height: 1, backgroundColor: "#000000", marginBottom: 3 }} />
          <Text style={{ fontSize: 10.5, fontFamily: "Times-Bold" }}>Amarbir Singh</Text>
          <Text style={{ fontSize: 9.5, fontFamily: "Times-Roman" }}>(Project Mentor)</Text>
        </View>
      </View>

      {/* Note */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            color: "#555555",
          }}
        >
          Note: The detailed plagiarism report is available with the department
          for verification.
        </Text>
      </View>
    </PreliminaryPageLayout>
  );
}
