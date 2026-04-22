"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";



/**
 * Declaration Page - Clean academic layout
 * Uses PreliminaryPageLayout for consistent margins
 */
export default function Declaration() {
  return (
    <PreliminaryPageLayout>
      {/* Title */}
      <View style={{ alignItems: "center", marginBottom: 35, marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontFamily: "Times-Bold", marginBottom: 12 }}>DECLARATION</Text>
        <View style={{ width: 120, height: 4, backgroundColor: "#000000" }} />
      </View>

      {/* Content */}
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15, textIndent: 30 }}>
          We hereby declare that this project report entitled{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>
            "AROWAI 1.0 - Comprehensive E-Commerce Platform"
          </Text>{" "}
          submitted by us to{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>Hindu College, Amritsar</Text> in partial
          fulfillment of the requirements for the award of the degree of{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>
            Bachelor of Computer Applications (BCA)
          </Text>{" "}
          is a bonafide record of work carried out by us under the supervision
          and guidance of <Text style={{ fontFamily: "Times-Bold" }}>Amarbir Singh</Text>.
        </Text>

        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15 }}>
          We further declare that this project work is the result of our own
          effort and that it has not been submitted anywhere else for any other
          degree or diploma. All the sources of information and help received
          during the work have been duly acknowledged.
        </Text>

        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15 }}>
          The work presented in this project report is original and has not been
          copied from any source without proper citation. We understand that any
          violation of this declaration may be treated as plagiarism.
        </Text>
      </View>

      {/* Signature Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 60,
          paddingTop: 40,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "#000000", marginBottom: 30 }}>
            Place: Amritsar
          </Text>
          <Text style={{ fontSize: 12, color: "#000000" }}>
            Date: ________________
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 40 }}>
          <View style={{ alignItems: "center" }}>
            <View style={{ width: 150, borderTopWidth: 1.5, borderTopColor: "#000000", marginBottom: 8 }} />
            <Text style={{ fontSize: 12, fontFamily: "Times-Bold" }}>Rutashman Sharma</Text>
            <Text style={{ fontSize: 10, color: "#444444", marginTop: 2 }}>Roll No: 11792314708</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ width: 150, borderTopWidth: 1.5, borderTopColor: "#000000", marginBottom: 8 }} />
            <Text style={{ fontSize: 12, fontFamily: "Times-Bold" }}>Lovejinder Singh</Text>
            <Text style={{ fontSize: 10, color: "#444444", marginTop: 2 }}>Roll No: 11792314706</Text>
          </View>
        </View>
      </View>
    </PreliminaryPageLayout>
  );
}
