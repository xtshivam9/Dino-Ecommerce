"use client";

import { Page, View, Text } from "@react-pdf/renderer";
import { styles, toRoman, PAGE_MARGINS, FOOTER_BOTTOM } from "../styles";

const tocItems = [
  // Front Matter
  { chapter: "", title: "Declaration", page: "i", type: "intro" },
  { chapter: "", title: "Certificate", page: "ii", type: "intro" },
  { chapter: "", title: "Acknowledgement", page: "iii", type: "intro" },
  { chapter: "", title: "Preface", page: "iv", type: "intro" },
  { chapter: "", title: "Abstract", page: "v", type: "intro" },
  { chapter: "", title: "Certificate of Originality", page: "vi", type: "intro" },
  { chapter: "", title: "List of Figures", page: "vii", type: "intro" },
  { chapter: "", title: "List of Tables", page: "viii", type: "intro" },
  { chapter: "", title: "List of Acronyms", page: "ix", type: "intro" },

  // Chapter 1 (Shifted)
  { chapter: "01", title: "INTRODUCTION", page: "1", type: "main" },
  { chapter: "", title: "1.1 Project Overview", page: "1", type: "sub" },
  { chapter: "", title: "1.2 Background", page: "1", type: "sub" },
  { chapter: "", title: "1.3 Problem Statement", page: "2", type: "sub" },
  { chapter: "", title: "1.4 Motivation", page: "2", type: "sub" },
  { chapter: "", title: "1.5 Project Objectives", page: "3", type: "sub" },
  { chapter: "02", title: "PROBLEM STATEMENT", page: "6", type: "main" },
  { chapter: "", title: "2.1 Introduction", page: "6", type: "sub" },
  { chapter: "", title: "2.2 Problem Statement", page: "7", type: "sub" },
  { chapter: "03", title: "OBJECTIVES", page: "12", type: "main" },
  { chapter: "04", title: "FEASIBILITY STUDY", page: "18", type: "main" },
  { chapter: "05", title: "ESTIMATION & PLANNING", page: "25", type: "main" },
  { chapter: "06", title: "SDLC OVERVIEW", page: "30", type: "main" },
  { chapter: "07", title: "SYSTEM DESIGN", page: "45", type: "main" },
  { chapter: "08", title: "IMPLEMENTATION", page: "60", type: "main" },
  { chapter: "09", title: "TESTING", page: "85", type: "main" },
  { chapter: "10", title: "USER MANUAL", page: "95", type: "main" },
  { chapter: "11", title: "OUTPUT & SCREENSHOTS", page: "105", type: "main" },
  { chapter: "12", title: "CONCLUSIONS", page: "115", type: "main" },
  { chapter: "", title: "REFERENCES", page: "118", type: "main", noNum: true },
  { chapter: "", title: "ANNEXURES", page: "120", type: "main", noNum: true },
];

const ITEMS_PER_PAGE = 65; 

export default function TableOfContents() {
  const renderTocItem = (item: any, index: number) => {
    const isMain = item.type === "main";
    const isIntro = item.type === "intro";
    return (
      <View key={index} style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 1, marginTop: isMain ? 3 : 0 }}>
        <View style={{ width: 25 }}>
          {item.chapter && <Text style={{ fontFamily: "Times-Bold", fontSize: 7 }}>{item.chapter}</Text>}
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={{ fontFamily: isMain || isIntro ? "Times-Bold" : "Times-Roman", fontSize: isMain || isIntro ? 8 : 7.5, textTransform: isMain ? "uppercase" : "none" }}>{item.title}</Text>
          <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: "#dddddd", borderBottomStyle: "dotted", marginBottom: 1, marginLeft: 4, marginRight: 4 }} />
        </View>
        <Text style={{ fontFamily: isMain || isIntro ? "Times-Bold" : "Times-Roman", fontSize: 7.5, width: 20, textAlign: "right" }}>{item.page}</Text>
      </View>
    );
  };

  const renderPage = (items: any[], romanPage: string) => (
    <Page size="A4" style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 30, paddingRight: 30, fontFamily: "Times-Roman" }}>
      <View style={{ marginBottom: 10, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontFamily: "Times-Bold", textTransform: "uppercase" }}>Table of Contents</Text>
        <View style={{ width: 40, height: 2, backgroundColor: "#000000", marginTop: 8 }} />

      </View>
      <View>{items.map(renderTocItem)}</View>
      <Text style={{ position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center", fontSize: 9 }}>{romanPage}</Text>
    </Page>
  );

  return (
    <>
      {renderPage(tocItems.slice(0, ITEMS_PER_PAGE), "vii")}
      {tocItems.length > ITEMS_PER_PAGE && renderPage(tocItems.slice(ITEMS_PER_PAGE), "viii")}
    </>
  );
}
