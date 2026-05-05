"use client";

import { Page, View, Text } from "@react-pdf/renderer";
import { toRoman, PAGE_MARGINS } from "../styles";

interface TableOfContentsProps {
  startPage: number;
}

const tocItems = [
  // Front Matter
  { chapter: "", title: "Declaration", page: "i", type: "intro" },
  { chapter: "", title: "Certificate", page: "ii", type: "intro" },
  { chapter: "", title: "Acknowledgement", page: "iii", type: "intro" },
  { chapter: "", title: "Preface", page: "iv", type: "intro" },
  { chapter: "", title: "Abstract", page: "v", type: "intro" },
  { chapter: "", title: "Table of Contents", page: "vi", type: "intro" },
  { chapter: "", title: "List of Figures", page: "vii", type: "intro" },
  { chapter: "", title: "List of Tables", page: "ix", type: "intro" },
  { chapter: "", title: "List of Acronyms", page: "xi", type: "intro" },

  // Content Chapters
  { chapter: "01", title: "INTRODUCTION", page: "1", type: "main" },
  { chapter: "02", title: "PROBLEM STATEMENT & LITERATURE REVIEW", page: "6", type: "main" },
  { chapter: "03", title: "OBJECTIVES", page: "10", type: "main" },
  { chapter: "04", title: "FEASIBILITY STUDY", page: "12", type: "main" },
  { chapter: "05", title: "PROJECT ESTIMATION & PLANNING", page: "15", type: "main" },
  { chapter: "06", title: "SOFTWARE DEVELOPMENT LIFE CYCLE", page: "17", type: "main" },
  { chapter: "07", title: "SYSTEM DESIGN", page: "26", type: "main" },
  { chapter: "08", title: "IMPLEMENTATION", page: "35", type: "main" },
  { chapter: "09", title: "TESTING", page: "37", type: "main" },
  { chapter: "10", title: "USER MANUAL", page: "39", type: "main" },
  { chapter: "11", title: "OUTPUT & SCREENSHOTS", page: "40", type: "main" },
  { chapter: "12", title: "CONCLUSIONS & FUTURE SCOPE", page: "46", type: "main" },

  // Back Matter
  { chapter: "", title: "REFERENCES", page: "49", type: "back" },
  { chapter: "", title: "ANNEXURES", page: "50", type: "back" },
];

export default function TableOfContents({ startPage }: TableOfContentsProps) {
  const renderTocItem = (item: (typeof tocItems)[0], index: number) => {
    const isMain = item.type === "main";
    const isIntro = item.type === "intro";
    const isBack = item.type === "back";
    const isFirstChapter = item.title === "INTRODUCTION";

    return (
      <View
        key={index}
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          marginBottom: isMain || isIntro || isBack ? 11 : 6,
          marginTop: isFirstChapter ? 20 : isMain && !isFirstChapter ? 6 : 0,
          borderTopWidth: isFirstChapter ? 1 : 0,
          borderTopColor: "#dddddd",
          paddingTop: isFirstChapter ? 14 : 0,
        }}
      >
        {/* Chapter Number */}
        <View style={{ width: 40 }}>
          {item.chapter ? (
            <Text
              style={{
                fontFamily: "Times-Bold",
                fontSize: 12,
                color: "#888888",
              }}
            >
              {item.chapter}
            </Text>
          ) : null}
        </View>

        {/* Title + Dot Leader */}
        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
          <Text
            style={{
              fontFamily: isMain || isBack ? "Times-Bold" : "Times-Roman",
              fontSize: isMain || isBack ? 11 : 10,
              color: isMain || isBack ? "#111111" : "#333333",
              letterSpacing: isMain ? 0.8 : 0,
              textTransform: isMain || isBack ? "uppercase" : "none",
            }}
          >
            {item.title}
          </Text>

          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#e8e8e8",
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
            fontFamily: isMain || isBack ? "Times-Bold" : "Times-Roman",
            fontSize: isMain || isBack ? 11 : 10,
            color: isMain || isBack ? "#111111" : "#333333",
            width: 30,
            textAlign: "right",
          }}
        >
          {item.page}
        </Text>
      </View>
    );
  };

  return (
    <Page
      size="A4"
      style={{
        paddingTop: 50,
        paddingBottom: PAGE_MARGINS.bottom,
        paddingLeft: PAGE_MARGINS.left,
        paddingRight: PAGE_MARGINS.right,
        fontFamily: "Times-Roman",
        fontSize: 12,
        lineHeight: 1.5,
        color: "#000000",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header */}
      <View style={{ marginBottom: 36, marginTop: 0 }}>
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
          Contents
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
          Table of Contents
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

      {/* TOC Items */}
      <View>{tocItems.map(renderTocItem)}</View>

      {/* Footer */}
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
          style={{
            fontSize: 10,
            fontFamily: "Times-Roman",
            color: "#444444",
          }}
        >
          {toRoman(startPage)}
        </Text>
      </View>
    </Page>
  );
}
