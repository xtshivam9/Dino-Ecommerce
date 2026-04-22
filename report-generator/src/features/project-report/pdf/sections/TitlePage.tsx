"use client";

import { Page, View, Text, Image } from "@react-pdf/renderer";
import { styles } from "../styles";

/**
 * Title Page - No page number, custom layout
 */
export default function TitlePage() {
  return (
    <Page
      size="A4"
      style={{
        padding: 60,
        fontFamily: "Times-Bold",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* TOP SECTION: Project Title */}
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text
          style={{
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 4,
            color: "#666666",
            marginBottom: 15,
          }}
        >
          A Project Report on
        </Text>

        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 48,
              fontFamily: "Times-Bold",
              letterSpacing: 8,
              color: "#000000",
            }}
          >
            AROWAI
          </Text>
        </View>

        <View
          style={{
            width: 120,
            height: 4,
            backgroundColor: "#000000",
            marginVertical: 15,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontFamily: "Times-Italic",
            color: "#444444",
          }}
        >
          Comprehensive E-Commerce Platform
        </Text>
      </View>

      {/* MIDDLE SECTION: Brand Logo */}
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          src="/brand-logo.png"
          style={{ height: 140, width: "auto" }}
        />
      </View>

      {/* SUBMISSION INFO */}
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: "#333333",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Submitted in Partial Fulfillment for the Award of Degree of
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontFamily: "Times-Bold",
            marginBottom: 5,
            textAlign: "center",
          }}
        >
          Bachelor of Computer Applications
        </Text>
        <Text style={{ fontSize: 14, color: "#666666" }}>(BCA)</Text>
      </View>

      {/* DETAILS SECTION: Student & Guide */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#666666",
              marginBottom: 5,
            }}
          >
            Submitted By
          </Text>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 16, fontFamily: "Times-Bold" }}>
              Rutashman Sharma
            </Text>
            <Text style={{ fontSize: 11, color: "#444444" }}>
              Roll No: 11792314708
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Times-Bold" }}>
              Lovejinder Singh
            </Text>
            <Text style={{ fontSize: 11, color: "#444444" }}>
              Roll No: 11792314706
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#666666",
              marginBottom: 5,
            }}
          >
            Under the Guidance of
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Times-Bold" }}>
            Amarbir Singh
          </Text>
          <Text style={{ fontSize: 11, color: "#444444" }}>
            Project Mentor
          </Text>
        </View>
      </View>

      {/* BOTTOM SECTION: College & University */}
      <View style={{ alignItems: "center", width: "100%" }}>
        <Image
          src="/gndu.png"
          style={{ height: 80, width: "auto", marginBottom: 15 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Times-Bold",
            textTransform: "uppercase",
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Hindu College, Amritsar
        </Text>
        <Text style={{ fontSize: 11, color: "#666666", marginTop: 5 }}>
          Affiliated to Guru Nanak Dev University, Amritsar
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <View style={{ width: 60, height: 1, backgroundColor: "#cccccc" }} />
          <Text
            style={{
              fontSize: 12,
              marginHorizontal: 15,
              color: "#444444",
            }}
          >
            Academic Year: 2025-2026
          </Text>
          <View style={{ width: 60, height: 1, backgroundColor: "#cccccc" }} />
        </View>
      </View>
    </Page>
  );
}
