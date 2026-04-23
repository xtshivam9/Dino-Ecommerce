"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";



/**
 * Acknowledgement Page
 * Uses PreliminaryPageLayout for consistent margins
 */
export default function Acknowledgement() {
  return (
    <PreliminaryPageLayout>
      {/* Title */}
      <View style={styles.chapterHeader}>
        <Text style={styles.chapterTitle}>ACKNOWLEDGEMENT</Text>
        <View style={styles.underline} />
      </View>


      {/* Content */}
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15, textIndent: 30 }}>
          The success and final outcome of this project required a lot of
          guidance and assistance from many people, and we are extremely
          privileged to have got this all along the completion of our project.
          All that we have done is only due to such supervision and assistance,
          and we would not forget to thank them.
        </Text>

        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15 }}>
          We express our heartfelt gratitude to our project mentor{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>Amarbir Singh</Text> for his valuable
          guidance, constant encouragement, and constructive criticism
          throughout the development of this project. His expertise and
          insights have been instrumental in shaping this work.
        </Text>

        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15 }}>
          We would like to express our sincere thanks to the Head of Department,{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>Dr. Rama Sharma</Text>, PG Department of
          Computer Science & Applications, for providing this opportunity and
          for the necessary support and facilities during the project work.
        </Text>

        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15 }}>
          We are also thankful to the Principal,{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>Dr. Rakesh Kumar</Text>, Hindu College,
          Amritsar, for providing the required infrastructure and resources that
          made this project possible.
        </Text>

        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15 }}>
          Every effort has been made to present the information in a clear,
          well-organized manner while adhering to academic standards. We hope
          this report serves as both documentation of our learning journey and a
          useful reference for anyone interested in building similar full-stack
          applications.
        </Text>

        <Text style={{ fontSize: 12.5, lineHeight: 1.6, textAlign: "justify", marginBottom: 15 }}>
          Last but not least, we would like to express our deepest gratitude to our{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>families</Text> for their unconditional love,
          support, and encouragement. Their belief in us has been our greatest
          strength throughout this journey.
        </Text>
      </View>

      {/* Signatures */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40, marginBottom: 20 }}>
        <View style={{ alignItems: "center" }}>
          <View style={{ width: 160, borderTopWidth: 2, borderTopColor: "#000000", marginBottom: 5 }} />
          <Text style={{ fontSize: 12, fontFamily: "Times-Bold" }}>Rutashman Sharma</Text>
          <Text style={{ fontSize: 10, color: "#666666" }}>Roll No: 11792314708</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ width: 160, borderTopWidth: 2, borderTopColor: "#000000", marginBottom: 5 }} />
          <Text style={{ fontSize: 12, fontFamily: "Times-Bold" }}>Lovejinder Singh</Text>
          <Text style={{ fontSize: 10, color: "#666666" }}>Roll No: 11792314706</Text>
        </View>
      </View>
    </PreliminaryPageLayout>
  );
}
