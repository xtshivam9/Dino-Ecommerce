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
        padding: 48,
        fontFamily: "Times-Bold",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header Section */}
      <View style={{ alignItems: "center", }}>
        <Text
          style={{
            fontSize: 12,
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
              fontSize: 28,
              fontFamily: "Times-Bold",
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            dj-ecommerce
          </Text>
        </View>

        {/* Underline */}
        <View
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#000000",
            marginBottom: 16,
          }}
        />

        <Text
          style={{
            fontSize: 14,
            fontFamily: "Times-Italic",
            color: "#444444",
          }}
        >
          Comprehensive Django E-Commerce Platform
        </Text>
      </View>

      {/* Project Logo */}
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Image
          src="/DNP.WA-64981705.png"
          style={{ height: 60, width: "auto" }}
        />
      </View>

      {/* Submission Text */}
      <View
        style={{
          alignItems: "center",
          marginBottom: 24,
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
              marginBottom: 8,
            }}
          >
            Bachelor of Computer Applications
          </Text>
          <Text style={{ fontSize: 12, color: "#666666", marginBottom: 2 }}>
            (BCA)
          </Text>
        </View>
      </View>

      {/* Student & Guide Details */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 24,
          paddingHorizontal: 16,
        }}
      >
        {/* Student */}
        <View style={{ paddingLeft: 12 }}>
          <Text
            style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#666666",
              marginBottom: 4,
            }}
          >
            Submitted By
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Times-Bold", fontWeight: "bold" }}>
            Kanish Kumar
          </Text>
          <Text style={{ fontSize: 11, color: "#444444" }}>
            Roll No: 11792312331
          </Text>
        </View>

        {/* Guides */}
        <View style={{ paddingLeft: 12 }}>
          <Text
            style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#666666",
              marginBottom: 4,
            }}
          >
            Under the Guidance of
          </Text>
          <Text style={{ fontSize: 14, fontFamily: "Times-Bold", fontWeight: "bold" }}>
            Mr. Anshuman Sharma
          </Text>
          <Text style={{ fontSize: 11, color: "#444444" }}>&</Text>
          <Text style={{ fontSize: 14, fontFamily: "Times-Bold", fontWeight: "bold" }}>
            Dr. Sunny Sharma
          </Text>
        </View>
      </View>

      {/* College Details */}
      <View
        style={{
          alignItems: "center",
          paddingTop: 32,
        }}
      >
        {/* GNDU Logo */}
        <Image
          src="/gndu.png"
          style={{ height: 100, width: "auto", marginBottom: 16 }}
        />

        <View
          style={{
            padding: 16,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Times-Bold",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Hindu College, Amritsar
          </Text>
          <Text style={{ fontSize: 10, color: "#666666", marginBottom: 4 }}>
            Dhab Khatikan, Amritsar - 143001, Punjab
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Times-Italic",
              color: "#444444",
              marginBottom: 8,
            }}
          >
            Affiliated to Guru Nanak Dev University, Amritsar
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
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
