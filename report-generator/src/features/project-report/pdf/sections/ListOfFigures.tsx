"use client";

import { Page, View, Text } from "@react-pdf/renderer";
import { toRoman, PAGE_MARGINS } from "../styles";

interface ListOfFiguresProps {
  startPage: number;
}

const figures = [
  { number: "1.1", title: "Django MVT System Architecture", page: "4" },
  { number: "1.2", title: "Project Directory Structure", page: "5" },
  {
    number: "2.1",
    title: "Indian E-commerce Market Growth (2022-2030)",
    page: "9",
  },
  {
    number: "2.2",
    title: "Feature Comparison Radar",
    page: "12",
  },
  {
    number: "4.1",
    title: "Technical Feasibility Radar Assessment",
    page: "20",
  },
  { number: "4.2", title: "Project Cost Breakdown", page: "22" },
  { number: "4.3", title: "Project Schedule Timeline", page: "23" },
  { number: "4.4", title: "SWOT Analysis Matrix", page: "24" },
  { number: "4.5", title: "Feasibility Assessment Scorecard", page: "25" },
  { number: "5.1", title: "Risk Assessment Matrix", page: "29" },
  { number: "5.2", title: "Project Timeline - Gantt Chart", page: "31" },
  { number: "6.1", title: "SDLC Phases Flow Diagram", page: "33" },
  { number: "6.2", title: "Agile Sprint Cycle", page: "34" },
  { number: "6.3", title: "User Requirements Questionnaire", page: "35" },
  { number: "7.1", title: "Context Diagram (Level 0 DFD)", page: "41" },
  { number: "7.2", title: "Level 1 Data Flow Diagram", page: "41" },
  {
    number: "7.3",
    title: "Level 2 DFD - Order Processing",
    page: "42",
  },
  { number: "7.4", title: "Use Case Diagram", page: "42" },
  { number: "7.5", title: "Entity-Relationship Diagram", page: "43" },
  { number: "7.6", title: "Component Hierarchy Diagram", page: "44" },
  { number: "7.7", title: "Checkout Flow Sequence Diagram", page: "44" },
  { number: "8.1", title: "Deployment Architecture", page: "51" },
  { number: "9.1", title: "Testing Pyramid", page: "53" },
  {
    number: "10.1",
    title: "User Journey Through Shopping Platform",
    page: "61",
  },
];

const PAGE_1_COUNT = 18;

/**
 * List of Figures - Split across 2 pages for readability
 */
export default function ListOfFigures({ startPage }: ListOfFiguresProps) {
  const page1Figures = figures.slice(0, PAGE_1_COUNT);
  const page2Figures = figures.slice(PAGE_1_COUNT);

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

  const renderHeader = (isContd: boolean = false) => (
    <View style={{ marginBottom: 36, marginTop: 0 }}>
      <Text
        style={{
          fontSize: 10,
          fontFamily: "Times-Roman",
          color: "#888888",
          letterSpacing: 4,
          textTransform: "uppercase" as const,
          marginBottom: 8,
          textAlign: "center" as const,
        }}
      >
        Figures
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Times-Bold",
          textAlign: "center" as const,
          letterSpacing: 1.5,
          textTransform: "uppercase" as const,
        }}
      >
        {isContd ? "List of Figures (continued)" : "List of Figures"}
      </Text>
      <View
        style={{
          width: 40,
          height: 1,
          backgroundColor: "#000000",
          alignSelf: "center" as const,
          marginTop: 16,
        }}
      />
    </View>
  );

  const renderFigureEntry = (
    fig: { number: string; title: string; page: string },
    index: number,
  ) => (
    <View
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 10,
      }}
    >
      {/* Figure Number */}
      <View style={{ width: 40 }}>
        <Text
          style={{
            fontFamily: "Times-Bold",
            fontSize: 12,
            color: "#888888",
          }}
        >
          {fig.number}
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
          {fig.title}
        </Text>

        <View
          style={{
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: "#f0f0f0",
            borderBottomStyle: "dotted" as const,
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
          textAlign: "right" as const,
        }}
      >
        {fig.page}
      </Text>
    </View>
  );

  const renderFooter = (pageNum: number) => (
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
        {toRoman(pageNum)}
      </Text>
    </View>
  );

  return (
    <>
      {/* Page 1 */}
      <Page size="A4" style={pageStyle}>
        {renderHeader()}
        <View>{page1Figures.map(renderFigureEntry)}</View>
        {renderFooter(startPage)}
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={pageStyle}>
        {renderHeader(true)}
        <View style={{ marginTop: 10 }}>
          {page2Figures.map((fig, i) =>
            renderFigureEntry(fig, i + PAGE_1_COUNT),
          )}
        </View>
        {renderFooter(startPage + 1)}
      </Page>
    </>
  );
}
