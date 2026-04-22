import { StyleSheet, Font } from "@react-pdf/renderer";

// Standard standard fonts are used: Times-Roman, Times-Bold, Times-Italic

// A4 dimensions: 210mm x 297mm = 595pt x 842pt
// Premium report margins - consistent across ALL pages
export const PAGE_MARGINS = {
  top: 50,
  bottom: 50,
  left: 50,
  right: 50,
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
    fontSize: 8,
    lineHeight: 1.1,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  pageNoMargin: {
    fontFamily: "Times-Roman",
    fontSize: 8,
    lineHeight: 1.1,
    color: "#000000",
    backgroundColor: "#ffffff",
  },

  // Typography
  h1: {
    fontSize: 14,
    fontFamily: "Times-Bold",
    textAlign: "center",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1.0,
  },
  h2: {
    fontSize: 12,
    fontFamily: "Times-Bold",
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1.5,
    borderBottomColor: "#000000",
  },
  h3: {
    fontSize: 10,
    fontFamily: "Times-Bold",
    marginBottom: 2,
    marginTop: 2,
  },
  paragraph: {
    fontSize: 8,
    textAlign: "justify",
    marginBottom: 2,
    lineHeight: 1.1,
  },
  paragraphIndent: {
    fontSize: 8,
    textAlign: "justify",
    marginBottom: 2,
    lineHeight: 1.1,
    textIndent: 20,
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
    marginTop: 18,
    marginBottom: 18,
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
    marginTop: 2,
    marginBottom: 2,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#444444",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#000000",
    backgroundColor: "#f0f0f0",
    fontFamily: "Times-Bold",
    paddingTop: 4,
    paddingBottom: 4,
  },
  tableCell: {
    padding: 2,
    fontSize: 7,
    lineHeight: 1.0,
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
    borderWidth: 1.5,
    borderColor: "#000000",
    padding: 16,
  },

  // Signature section
  signatureBlock: {
    marginTop: 48,
    alignItems: "flex-end",
  },
  signatureLine: {
    width: 180,
    borderTopWidth: 1.5,
    borderTopColor: "#000000",
    marginBottom: 6,
  },
});
