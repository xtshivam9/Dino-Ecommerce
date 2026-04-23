import { StyleSheet, Font } from "@react-pdf/renderer";

// Standard standard fonts are used: Times-Roman, Times-Bold, Times-Italic

// A4 dimensions: 210mm x 297mm = 595pt x 842pt
// Premium report margins - consistent across ALL pages
export const PAGE_MARGINS = {
  top: 45,
  bottom: 45,
  left: 40, // Increased for binding
  right: 35,
};

// Header/Footer positioning
export const HEADER_TOP = 25;
export const FOOTER_BOTTOM = 25;


// Roman numeral converter
export const toRoman = (num: number): string => {
  const romanNumerals: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";
  for (const [value, numeral] of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result.toLowerCase();
};

// Base styles shared across all pages
export const styles = StyleSheet.create({
  // Page layouts
  page: {
    paddingTop: PAGE_MARGINS.top,
    paddingBottom: PAGE_MARGINS.bottom,
    paddingLeft: PAGE_MARGINS.left,
    paddingRight: PAGE_MARGINS.right,
    fontFamily: "Times-Roman",
    fontSize: 9, // Increased from 7.5
    lineHeight: 1.3, // Increased from 1.0 to fix overlapping
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  pageNoMargin: {
    fontFamily: "Times-Roman",
    fontSize: 9,
    lineHeight: 1.3,
    color: "#000000",
    backgroundColor: "#ffffff",
  },

  // Typography
  h1: {
    fontSize: 12,
    fontFamily: "Times-Bold",
    marginTop: 6,
    marginBottom: 4,
    lineHeight: 1.2,
    textTransform: "uppercase",
    textAlign: "center",
  },
  h2: {
    fontSize: 10.5,
    fontFamily: "Times-Bold",
    marginTop: 5,
    marginBottom: 2,
    lineHeight: 1.2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
  },
  h3: {
    fontSize: 9.5,
    fontFamily: "Times-Bold",
    marginTop: 4,
    marginBottom: 2,
    lineHeight: 1.2,
  },
  paragraph: {
    fontSize: 8.5, // Increased from 7
    fontFamily: "Times-Roman",
    lineHeight: 1.35, // Increased from 1.0 to fix overlapping
    marginBottom: 3,
    textAlign: "justify",
  },
  paragraphIndent: {
    fontSize: 8.5,
    fontFamily: "Times-Roman",
    lineHeight: 1.35,
    marginBottom: 3,
    textIndent: 12,
    textAlign: "justify",
  },

  // Layout utilities
  flexRow: {
    flexDirection: "row",
  },
  flexCol: {
    flexDirection: "column",
  },
  flexBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textJustify: {
    textAlign: "justify",
  },

  // Spacing
  mt4: { marginTop: 2 },
  mt8: { marginTop: 4 },
  mt12: { marginTop: 6 },
  mb4: { marginBottom: 2 },
  mb8: { marginBottom: 4 },
  mb12: { marginBottom: 6 },
  py4: { paddingTop: 2, paddingBottom: 2 },
  px4: { paddingLeft: 2, paddingRight: 2 },

  // Decorative elements
  underline: {
    width: 60,
    height: 3,
    backgroundColor: "#000000",
    marginTop: 6,
    marginBottom: 12,
    alignSelf: "center",
  },
  divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#444444",
    marginTop: 10,
    marginBottom: 10,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: FOOTER_BOTTOM,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Times-Roman",
    color: "#444444",
  },

  // Tables
  table: {
    width: "100%",
    marginTop: 4,
    marginBottom: 4,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#444444",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1.2,
    borderBottomColor: "#000000",
    backgroundColor: "#f0f0f0",
    fontFamily: "Times-Bold",
    paddingTop: 3,
    paddingBottom: 3,
  },
  tableCell: {
    padding: 2.5,
    fontSize: 7.5,
    lineHeight: 1.25,
  },

  // Bold text
  bold: {
    fontFamily: "Times-Bold",
  },
  italic: {
    fontFamily: "Times-Italic",
  },

  // Border box
  borderBox: {
    borderWidth: 1.2,
    borderColor: "#000000",
    padding: 10,
  },

  // Chapter Headings
  chapterHeader: {
    alignItems: "center",
    marginBottom: 25,
    marginTop: 10,
  },
  chapterTitle: {
    fontSize: 24,
    fontFamily: "Times-Bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  underline: {
    width: 60,
    height: 3,
    backgroundColor: "#000000",
    marginTop: 8,
    alignSelf: "center",
  },
});

