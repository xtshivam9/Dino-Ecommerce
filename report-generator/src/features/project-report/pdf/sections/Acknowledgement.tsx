"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import PreliminaryPageLayout from "../components/PreliminaryPageLayout";

interface AcknowledgementProps {
  pageNumber: number;
}

/**
 * Acknowledgement Page
 * Uses PreliminaryPageLayout for consistent margins
 */
export default function Acknowledgement({ pageNumber }: AcknowledgementProps) {
  return (
    <PreliminaryPageLayout pageNumber={pageNumber}>
      {/* Title */}
      <View style={{ alignItems: "center", marginBottom: 28 }}>
        <Text style={styles.h1}>ACKNOWLEDGEMENT</Text>
        <View style={{ width: 80, height: 4, backgroundColor: "#000000" }} />
      </View>

      {/* Content */}
      <View>
        <Text style={styles.paragraphIndent}>
          The success and final outcome of this project required a lot of
          guidance and assistance from many people, and we are extremely
          privileged to have got this all along the completion of our project.
          All that we have done is only due to such supervision and assistance,
          and we would not forget to thank them.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 14 }]}>
          We express our heartfelt gratitude to our project guide and Head of Department,{" "}
          <Text style={styles.bold}>Dr. Amarbir Singh</Text>, for his valuable
          guidance, constant encouragement, and constructive criticism
          throughout the development of this project. His expertise and
          insights have been instrumental in shaping this work.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 14 }]}>
          We are also thankful to the Principal,{" "}
          <Text style={styles.bold}>Dr. Karanjit Singh</Text>, Baba Budha Sahib College,
          for providing the required infrastructure and resources that
          made this project possible.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 14 }]}>
          Special thanks to all the faculty members of the Department of
          Computer Applications for their support and encouragement. Their
          teaching and knowledge throughout the BCA program have laid the
          foundation for this project.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 14 }]}>
          We extend our appreciation to our classmates and friends for their
          cooperation, suggestions, and moral support during the entire project
          period.
        </Text>

        <Text style={[styles.paragraph, { marginTop: 14 }]}>
          Last but not least, we would like to express our deepest gratitude to our{" "}
          <Text style={styles.bold}>families</Text> for their unconditional love,
          support, and encouragement. Their belief in us has been our greatest
          strength throughout this journey.
        </Text>
      </View>

      {/* Signatures */}
      <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 40, gap: 40 }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 140,
              borderTopWidth: 2,
              borderTopColor: "#000000",
              marginBottom: 4,
            }}
          />
          <Text style={{ fontSize: 14, fontFamily: "Times-Bold" }}>
            Rutashman Sharma
          </Text>
          <Text style={{ fontSize: 11, color: "#666666" }}>
            Roll No: 11792314708
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 140,
              borderTopWidth: 2,
              borderTopColor: "#000000",
              marginBottom: 4,
            }}
          />
          <Text style={{ fontSize: 14, fontFamily: "Times-Bold" }}>
            Lovejinder Singh
          </Text>
          <Text style={{ fontSize: 11, color: "#666666" }}>
            Roll No: 11792314706
          </Text>
        </View>
      </View>
    </PreliminaryPageLayout>
  );
}
