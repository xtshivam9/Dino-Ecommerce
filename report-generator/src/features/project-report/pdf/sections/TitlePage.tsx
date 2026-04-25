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
        paddingHorizontal: 48,
        paddingVertical: 30,
        fontFamily: "Times-Bold",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header Section */}
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#444444",
            marginBottom: 16,
          }}
        >
          A Project Report on
        </Text>

        {/* Title Box */}
        <View
          style={{
            paddingHorizontal: 40,
            paddingVertical: 20,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 31,
              fontFamily: "Times-Bold",
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            AROWAI 1.0
          </Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "Times-Italic",
            color: "#444444",
          }}
        >
          Online Shopping Platform
        </Text>

        {/* Project Logo */}
        <Image
          style={{
            width: 80,
            height: 80,
            marginTop: 30,
            objectFit: "contain",
            borderRadius: 12,
          }}
          src="/outputs/logo-file.png"
        />
      </View>

      {/* Submission Text */}
      <View
        style={{
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            padding: 16,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#333333",
            }}
          >
            Submitted in Partial Fulfillment for the Award of Degree of
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Times-Bold",
              fontWeight: "bold",
              marginTop: 8,
            }}
          >
            Bachelor of Computer Applications
          </Text>
          <Text style={{ fontSize: 12, color: "#666666", marginTop: 4 }}>
            (BCA)
          </Text>
        </View>
      </View>

      {/* Student & Guide Details */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          paddingHorizontal: 16,
        }}
      >
        {/* Students */}
        <View style={{ paddingLeft: 12 }}>
          <Text
            style={{
              fontSize: 8,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#666666",
              marginBottom: 8,
            }}
          >
            Submitted By
          </Text>
          
          {/* Student 1 */}
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 14, fontFamily: "Times-Bold", fontWeight: "bold" }}>
              Rutashman Sharma
            </Text>
            <Text style={{ fontSize: 11, color: "#444444" }}>
              Roll No: 11792314708
            </Text>
          </View>

          {/* Student 2 */}
          <View>
            <Text style={{ fontSize: 14, fontFamily: "Times-Bold", fontWeight: "bold" }}>
              Lovejinder Singh
            </Text>
            <Text style={{ fontSize: 11, color: "#444444" }}>
              Roll No: 11792314706
            </Text>
          </View>
        </View>

        {/* Guides */}
        <View style={{ paddingLeft: 12 }}>
          <Text
            style={{
              fontSize: 8,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#666666",
              marginBottom: 8,
            }}
          >
            Under the Guidance of
          </Text>
          <Text style={{ fontSize: 14, fontFamily: "Times-Bold", fontWeight: "bold" }}>
            Dr. Amarbir Singh
          </Text>
          <Text style={{ fontSize: 11, color: "#444444", marginTop: 2 }}>
            Project Mentor & HOD
          </Text>
        </View>
      </View>

      {/* College Details */}
      <View
        style={{
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <View
          style={{
            padding: 16,
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* GNDU Logo */}
          <Image
            style={{
              width: 140,
              height: 140,
              marginBottom: 12,
              objectFit: "contain",
            }}
            src="/gndu.png"
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Times-Bold",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Baba Budha Sahib College
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <View style={{ width: 48, height: 1, backgroundColor: "#999999" }} />
            <Text style={{ fontSize: 11, marginHorizontal: 12, color: "#444444" }}>
              Academic Year: 2025-2026
            </Text>
            <View style={{ width: 48, height: 1, backgroundColor: "#999999" }} />
          </View>
        </View>
      </View>
    </Page>
  );
}
