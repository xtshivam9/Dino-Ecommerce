"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function Conclusions() {
  return (
    <BookPageLayout chapterTitle="Conclusions & Future Scope" chapterNum="12">
      <View style={{ marginBottom: 28, alignItems: "center", marginTop: 20 }}>
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Times-Roman",
            color: "#666666",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Chapter 12
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontFamily: "Times-Bold",
            textAlign: "center",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          Conclusions & Future Scope
        </Text>
        <View
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#000000",
            marginTop: 12,
          }}
        />
      </View>

      <Text style={styles.h2}>12.1 Project Summary</Text>
      <Text style={styles.paragraphIndent}>
        The development of Dino-Ecommerce successfully achieved its primary goal: establishing a secure, scalable, and fully functional online shopping platform from the ground up. By utilizing the robust architecture of the Django framework in conjunction with the Stripe payment gateway, the project demonstrates a pragmatic approach to modern web development that balances rapid implementation with enterprise-grade security.
      </Text>

      <Text style={styles.h2}>12.2 Key Achievements</Text>
      <Text style={styles.paragraphIndent}>
        Over the course of the Software Development Life Cycle, several critical milestones were accomplished:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>
          • <Text style={styles.bold}>Functional MVP Delivery:</Text> Successfully engineered the complete flow from product discovery and cart management to final payment processing.
        </Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>
          • <Text style={styles.bold}>Secure Transactions:</Text> Integrated Stripe Elements, ensuring that the application processes live transactions without exposing the local server to PCI compliance liabilities.
        </Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>
          • <Text style={styles.bold}>Architectural Integrity:</Text> Maintained strict adherence to the Model-View-Template (MVT) pattern, ensuring the codebase remains modular, readable, and highly extensible.
        </Text>
      </View>

      <Text style={styles.h2}>12.3 Current Limitations</Text>
      <Text style={styles.paragraphIndent}>
        While the platform functions effectively as designed, certain limitations exist in the current 1.0 release:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>
          • <Text style={styles.bold}>Single Vendor Architecture:</Text> The platform currently supports only one administrative entity (a single store) rather than a multi-vendor marketplace like Amazon.
        </Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>
          • <Text style={styles.bold}>Inventory Concurrency:</Text> While basic inventory exists, highly concurrent purchases of the exact same item could theoretically result in slight over-selling without more aggressive database locking mechanisms.
        </Text>
      </View>

      <Text style={styles.h2}>12.4 Future Scope</Text>
      <Text style={styles.paragraphIndent}>
        Software is never truly finished; it simply iterates. Based on the foundation established by Dino-Ecommerce, several significant enhancements are planned for future iterations:
      </Text>

      <Text style={styles.h3}>1. RESTful API Implementation</Text>
      <Text style={styles.paragraph}>
        Converting the backend data delivery from Django HTML Templates to a pure JSON REST API (using Django Rest Framework). This would allow the frontend to be completely decoupled, paving the way for a React/Next.js frontend or a dedicated mobile application (React Native / Flutter).
      </Text>

      <Text style={styles.h3}>2. Advanced Analytics Dashboard</Text>
      <Text style={styles.paragraph}>
        Integrating a more sophisticated admin dashboard utilizing Chart.js or D3.js to provide real-time metrics on sales volume, cart abandonment rates, and customer demographic data.
      </Text>

      <Text style={styles.h3}>3. AI-Powered Product Recommendations</Text>
      <Text style={styles.paragraph}>
        Implementing machine learning algorithms (such as collaborative filtering) to analyze a user's purchase history and provide personalized "You might also like..." product suggestions to increase average order value.
      </Text>

      <Text style={styles.h2}>12.5 Final Conclusion</Text>
      <Text style={styles.paragraphIndent}>
        In conclusion, Dino-Ecommerce stands as a testament to the power of Python and Django in solving real-world commercial challenges. The project not only met its academic and technical objectives but also provided an invaluable, hands-on learning experience in full-stack web engineering, database design, and third-party API integration.
      </Text>

    </BookPageLayout>
  );
}
