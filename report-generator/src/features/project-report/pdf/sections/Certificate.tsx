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
        <View style={{ alignItems: "center", marginBottom: 12 }}>
          <Text style={styles.h1}>CERTIFICATE</Text>
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
        <View>
          <Text style={styles.paragraph}>
            This is to certify that the project report entitled{" "}
            <Text style={styles.bold}>
              "FLOWGENT 1.0 - Django E-Commerce Platform"
            </Text>{" "}
            submitted by <Text style={styles.bold}>Kanish Kumar</Text> (Roll No:{" "}
            <Text style={styles.bold}>11792312331</Text>) is a bonafide work
            carried out by the candidate under our supervision and guidance.
          </Text>

          <Text style={[styles.paragraph, { marginBottom: 8 }]}>
            This project is submitted in partial fulfillment of the requirements
            for the award of the degree of{" "}
            <Text style={styles.bold}>
              Bachelor of Computer Applications (BCA)
            </Text>{" "}
            from <Text style={styles.bold}>Hindu College, Amritsar</Text>.
          </Text>

          <Text style={[styles.paragraph, { marginBottom: 8 }]}>
            To the best of our knowledge, the work presented in this project
            report is original and has not been submitted previously for any
            other degree or diploma.
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              padding: 6,
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 11, fontFamily: "Times-Italic" }}>
              We wish the candidate all the best for future endeavors.
            </Text>
          </View>
        </View>

        {/* Signatures - Row 1 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
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
              Mr. Anshuman Sharma
            </Text>
            <Text style={{ fontSize: 10, color: "#666666" }}>
              Project Guide
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
            <Text style={{ fontSize: 12, fontFamily: "Times-Bold" }}>
              Dr. Sunny Sharma
            </Text>
            <Text style={{ fontSize: 10, color: "#666666" }}>
              Project Guide
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
