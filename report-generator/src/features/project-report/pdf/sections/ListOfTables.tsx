"use client";

import { Page, View, Text } from "@react-pdf/renderer";
import { toRoman, PAGE_MARGINS, FOOTER_BOTTOM } from "../styles";

interface ListOfTablesProps {
  startPage: number;
}

const tables = [
  // Chapter 1 - Introduction
  { number: "1.1", title: "Technology Stack", page: "2" },
  { number: "1.2", title: "Report Organization", page: "5" },

  // Chapter 2 - Problem Statement
  { number: "2.1", title: "Feature Comparison of E-commerce Platforms", page: "7" },
  { number: "2.2", title: "Detailed Feature Comparison — Arowai Ecommerce 1.0 vs Shopify", page: "8" },

  // Chapter 3 - Objectives
  { number: "3.1", title: "Technology Stack Selection and Justification", page: "11" },

  // Chapter 4 - Feasibility Study
  { number: "4.1", title: "Technology Stack Feasibility Assessment", page: "13" },
  { number: "4.2", title: "Technical Risk Analysis", page: "14" },
  { number: "4.3", title: "Infrastructure Cost Analysis", page: "14" },
  { number: "4.4", title: "Feasibility Summary", page: "15" },

  // Chapter 5 - Estimation & Planning
  { number: "5.1", title: "Lines of Code by Module", page: "16" },
  { number: "5.2", title: "Risk Analysis Matrix", page: "17" },

  // Chapter 6 - SDLC
  { number: "6.1", title: "SDLC Phases and Deliverables Overview", page: "18" },
  { number: "6.2", title: "Sprint Structure and Ceremonies", page: "20" },
  { number: "6.3", title: "Comparison of Development Methodologies", page: "21" },
  { number: "6.4", title: "Stakeholder Analysis", page: "24" },
  { number: "6.5", title: "Requirements Traceability Matrix", page: "25" },
  { number: "6.6", title: "Primary Data Entities", page: "26" },

  // Chapter 7 - System Design
  { number: "7.1", title: "Context Diagram Data Flows", page: "28" },
  { number: "7.2", title: "Use Case Specifications", page: "30" },
  { number: "7.3", title: "Entity Relationships", page: "32" },
  { number: "7.4", title: "User Table Schema", page: "33" },
  { number: "7.5", title: "Order Table Schema", page: "34" },
  { number: "7.6", title: "Payment Table Schema", page: "34" },
  { number: "7.7", title: "Entity Relationship Summary", page: "35" },

  // Chapter 8 - Implementation
  { number: "8.1", title: "Project Directory Structure", page: "37" },
  { number: "8.2", title: "Django Models Summary", page: "38" },
  { number: "8.3", title: "Django Views Implementation", page: "38" },
  { number: "8.4", title: "Stripe Payment Integration", page: "38" },

  // Chapter 9 - Testing
  { number: "9.1", title: "Unit Test Cases", page: "39" },
  { number: "9.2", title: "Integration Test Cases", page: "40" },
  { number: "9.3", title: "System Test Cases", page: "40" },

  // Chapter 10 - User Manual
  { number: "10.1", title: "Customer Guide Steps", page: "41" },
  { number: "10.2", title: "Admin Role Permissions Matrix", page: "41" },

  // Chapter 12 - Conclusions
  { number: "12.1", title: "Project Objectives Achievement", page: "46" },
  { number: "12.2", title: "Current Limitations", page: "47" },

  // Annexures
  { number: "A.1", title: "Complete Django Database Schema", page: "50" },
  { number: "B.1", title: "HTTP API Endpoints", page: "50" },
];

// Split items across pages
const ITEMS_PER_PAGE = 22;

const page1Items = tables.slice(0, ITEMS_PER_PAGE);
const page2Items = tables.slice(ITEMS_PER_PAGE, ITEMS_PER_PAGE * 2);
const page3Items = tables.slice(ITEMS_PER_PAGE * 2);

/**
 * List of Tables - Multi-page editorial design with consistent margins
 */
export default function ListOfTables({ startPage }: ListOfTablesProps) {
  const renderHeader = (isContd: boolean) => (
    <View style={{ marginBottom: isContd ? 28 : 36, marginTop: 0 }}>
      <Text
        style={{
          fontSize: 10,
          fontFamily: "Times-Roman",
          color: "#888888",
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        Tables
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Times-Bold",
          textAlign: "center",
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {isContd ? "List of Tables (Continued)" : "List of Tables"}
      </Text>
      <View
        style={{
          width: 40,
          height: 1,
          backgroundColor: "#000000",
          alignSelf: "center",
          marginTop: 16,
        }}
      />
    </View>
  );

  const renderTableItem = (tbl: (typeof tables)[0], index: number) => (
    <View
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 10,
      }}
    >
      {/* Table Number */}
      <View style={{ width: 40 }}>
        <Text
          style={{
            fontFamily: "Times-Bold",
            fontSize: 12,
            color: "#888888",
          }}
        >
          {tbl.number}
        </Text>
      </View>

      {/* Title & Dot Leader */}
      <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
        <Text
          style={{
            fontFamily: "Times-Bold",
            fontSize: 11,
            color: "#444444",
          }}
        >
          {tbl.title}
        </Text>

        <View
          style={{
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: "#f0f0f0",
            borderBottomStyle: "dotted",
            marginBottom: 2,
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </View>

      {/* Page Number */}
      <Text
        style={{
          fontFamily: "Times-Roman",
          fontSize: 11,
          color: "#444444",
          width: 20,
          textAlign: "right",
        }}
      >
        {tbl.page}
      </Text>
    </View>
  );

  const renderFooter = (pageOffset: number) => (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: "center",
      }}
      fixed
    >
      <Text
        style={{ fontSize: 10, fontFamily: "Times-Roman", color: "#444444" }}
      >
        {toRoman(startPage + pageOffset)}
      </Text>
    </View>
  );

  const pageStyle = {
    paddingTop: 50,
    paddingBottom: PAGE_MARGINS.bottom,
    paddingLeft: PAGE_MARGINS.left,
    paddingRight: PAGE_MARGINS.right,
    fontFamily: "Times-Roman" as const,
    fontSize: 12,
    lineHeight: 1.5,
    color: "#000000",
    backgroundColor: "#ffffff",
  };

  return (
    <>
      {/* Page 1 */}
      <Page size="A4" style={pageStyle}>
        {renderHeader(false)}
        <View>{page1Items.map(renderTableItem)}</View>
        {renderFooter(0)}
      </Page>

      {/* Page 2 */}
      {page2Items.length > 0 && (
        <Page size="A4" style={pageStyle}>
          {renderHeader(true)}
          <View>{page2Items.map(renderTableItem)}</View>
          {renderFooter(1)}
        </Page>
      )}

      {/* Page 3 */}
      {page3Items.length > 0 && (
        <Page size="A4" style={pageStyle}>
          {renderHeader(true)}
          <View>{page3Items.map(renderTableItem)}</View>
          {renderFooter(2)}
        </Page>
      )}
    </>
  );
}
