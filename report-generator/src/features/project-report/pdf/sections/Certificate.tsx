"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";



/**
 * Certificate Page with double border frame
 * Uses PreliminaryPageLayout for consistent margins
 */
export default function Certificate() {
  return (
    <PreliminaryPageLayout>
      {/* Content Container */}
      <View style={{ flex: 1 }}>
        {/* Title */}
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <Text style={[styles.h1, { marginBottom: 10 }]}>CERTIFICATE</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ width: 64, height: 2, backgroundColor: "#000000" }}
            />
            <Text style={{ marginHorizontal: 16 }}>*</Text>
            <View
              style={{ width: 64, height: 2, backgroundColor: "#000000" }}
            />
          </View>
        </View>

        {/* Certificate Text */}
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 13, lineHeight: 1.8, textAlign: "justify", marginBottom: 20 }}>
            This is to certify that the project report entitled{" "}
            <Text style={{ fontFamily: "Times-Bold" }}>
              "AROWAI 1.0 - Comprehensive E-Commerce Platform"
            </Text>{" "}
            submitted by <Text style={{ fontFamily: "Times-Bold" }}>Rutashman Sharma</Text> (Roll No:{" "}
            <Text style={{ fontFamily: "Times-Bold" }}>11792314708</Text>) and <Text style={{ fontFamily: "Times-Bold" }}>Lovejinder Singh</Text> (Roll No:{" "}
            <Text style={{ fontFamily: "Times-Bold" }}>11792314706</Text>) is a bonafide work
            carried out by the candidates under our supervision and guidance.
          </Text>

          <Text style={{ fontSize: 13, lineHeight: 1.8, textAlign: "justify", marginBottom: 20 }}>
            This project is submitted in partial fulfillment of the requirements
            for the award of the degree of{" "}
            <Text style={{ fontFamily: "Times-Bold" }}>
              Bachelor of Computer Applications (BCA)
            </Text>{" "}
            from <Text style={{ fontFamily: "Times-Bold" }}>Hindu College, Amritsar</Text>.
          </Text>

          <Text style={{ fontSize: 13, lineHeight: 1.8, textAlign: "justify", marginBottom: 20 }}>
            To the best of our knowledge, the work presented in this project
            report is original and has not been submitted previously for any
            other degree or diploma.
          </Text>

          <View
            style={{
              borderWidth: 1.5,
              borderColor: "#000000",
              padding: 10,
              marginBottom: 20,
              alignItems: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Text style={{ fontSize: 12, fontFamily: "Times-Italic" }}>
              We wish the candidates all the best for future endeavors.
            </Text>
          </View>
        </View>

        {/* Signatures - Row 1 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 200,
                borderTopWidth: 2,
                borderTopColor: "#000000",
                marginBottom: 2,
              }}
            />
            <Text style={{ fontSize: 14, fontFamily: "Times-Bold" }}>
              Amarbir Singh
            </Text>
            <Text style={{ fontSize: 11, color: "#666666" }}>
              Project Mentor
            </Text>
          </View>
        </View>

        {/* Signatures - Row 2 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 16,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 140,
                borderTopWidth: 2,
                borderTopColor: "#000000",
                marginBottom: 2,
              }}
            />
            <Text style={{ fontSize: 12, fontFamily: "Times-Bold" }}>
              Dr. Rama Sharma
            </Text>
            <Text style={{ fontSize: 10, color: "#666666" }}>
              Head of Department
            </Text>
            <Text style={{ fontSize: 9, color: "#888888" }}>
              PG Department of Computer Science & Applications
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 140,
                borderTopWidth: 2,
                borderTopColor: "#000000",
                marginBottom: 2,
              }}
            />
            <Text
              style={{ fontSize: 12, fontFamily: "Times-Bold", marginBottom: 8 }}
            >
              External Examiner
            </Text>
          </View>
        </View>

        {/* Seal Placeholder */}
        <View style={{ alignItems: "center", marginBottom: 12 }}>
          <View
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              borderWidth: 2,
              borderColor: "#cccccc",
              borderStyle: "dashed",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 8, color: "#999999", textAlign: "center" }}
            >
              College{"\n"}Seal
            </Text>
          </View>
        </View>
      </View>
    </PreliminaryPageLayout>
  );
}
