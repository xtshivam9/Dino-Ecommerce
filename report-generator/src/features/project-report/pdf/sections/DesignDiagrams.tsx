"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import ContextDiagram from "../diagrams/ContextDFD";
import DFDLevel1 from "../diagrams/Level1DFD";
import DFDLevel2 from "../diagrams/Level2DFD";
import UseCaseDiagram from "../diagrams/UseCaseDiagram";
import ERDiagram from "../diagrams/ERDiagram";
import ComponentDiagram from "../diagrams/ComponentDiagram";
import SequenceDiagram from "../diagrams/SequenceDiagram";

export default function DesignDiagrams() {
  return (
    <BookPageLayout chapterTitle="System Design" chapterNum="07">
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
          Chapter 07
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
          System Design
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

      <Text style={styles.h2}>7.1 Introduction to System Design</Text>
      <Text style={styles.paragraphIndent}>
        System Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. For Arowai Ecommerce 1.0, this phase translates the SRS into a tangible blueprint using standard modeling techniques such as Data Flow Diagrams (DFD), Use Case Diagrams, and Entity-Relationship (ER) Diagrams.
      </Text>

      <Text style={styles.h2}>7.2 Data Flow Diagrams (DFD)</Text>
      <Text style={styles.paragraphIndent}>
        Data Flow Diagrams visually represent the flow of data through an information system. They show how data enters the system, how it is processed, and how it is stored.
      </Text>

      <Text style={styles.h3}>7.2.1 Context Diagram (Level 0 DFD)</Text>
      <Text style={styles.paragraph}>
        The Context Diagram provides a high-level overview, showing Arowai Ecommerce 1.0 as a single process interacting with external entities: Users (Customers), Administrators, and the Stripe Payment Gateway.
      </Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <ContextDiagram />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 7.1: Context Diagram (Level 0 DFD)
        </Text>
      </View>

      <Text style={styles.h3}>7.2.2 Level 1 DFD</Text>
      <Text style={styles.paragraph}>
        The Level 1 DFD breaks down the main system into its primary sub-processes: User Management, Product Cataloging, Cart Management, and Order Processing.
      </Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <DFDLevel1 />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 7.2: Level 1 Data Flow Diagram
        </Text>
      </View>

      <Text style={styles.h3}>7.2.3 Level 2 DFD (Order Processing)</Text>
      <Text style={styles.paragraph}>
        This detailed diagram focuses specifically on the most complex process: Order Processing. It illustrates the data flow from submitting the checkout form, verifying Stripe payment tokens, updating inventory, and finalizing the order state.
      </Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <DFDLevel2 />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 7.3: Level 2 DFD - Order Processing
        </Text>
      </View>

      <Text style={styles.h2}>7.3 Use Case Diagram</Text>
      <Text style={styles.paragraphIndent}>
        Use Case Diagrams depict the interactions between actors (Users, Admins) and the system. They define the functional boundaries of the application. Key use cases include "Add to Cart", "Apply Coupon", "Process Checkout", and the administrative "Manage Inventory".
      </Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <UseCaseDiagram />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 7.4: Use Case Diagram
        </Text>
      </View>

      <Text style={styles.h2}>7.4 Entity-Relationship (ER) Diagram</Text>
      <Text style={styles.paragraphIndent}>
        The ER diagram maps the database schema underlying the Django ORM. It highlights the relational links between critical entities. For instance, an `Order` has a foreign key to a `User` and a `BillingAddress`, while possessing a many-to-many relationship with `Item` through the `OrderItem` entity.
      </Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <ERDiagram />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 7.5: Entity-Relationship Diagram
        </Text>
      </View>

      <Text style={styles.h2}>7.5 Component Hierarchy Diagram</Text>
      <Text style={styles.paragraphIndent}>
        This diagram illustrates the structural organization of the Django application, showing how the `core` app houses models and views, while templates are divided into logical sections like `checkout.html`, `home.html`, and `product.html`.
      </Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <ComponentDiagram />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 7.6: Component Hierarchy Diagram
        </Text>
      </View>

      <View wrap={false}>
        <Text style={styles.h2}>7.6 Checkout Flow Sequence Diagram</Text>
        <Text style={styles.paragraphIndent}>
          Sequence diagrams illustrate how objects interact in a particular scenario. This specific diagram traces the temporal sequence of a customer submitting a payment, the server communicating with Stripe, and the subsequent rendering of the success or failure template.
        </Text>
      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <SequenceDiagram />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 7.7: Checkout Flow Sequence Diagram
        </Text>
      </View>

      <Text style={styles.h2} break>7.7 Design Summary</Text>
      <Text style={styles.paragraphIndent}>
        The system design phase for Arowai Ecommerce 1.0 has established a comprehensive and robust architectural framework that bridges the gap between conceptual requirements and technical implementation. By leveraging the Model-View-Template (MVT) pattern, we have ensured a clean separation of concerns, which is critical for maintaining a complex e-commerce ecosystem. The data models defined in the ER diagrams provide a normalized and efficient structure for handling products, orders, and user sessions, ensuring data integrity across all transactional operations.
      </Text>
      <Text style={styles.paragraph}>
        Furthermore, the behavioral modeling through sequence and use case diagrams has clarified the interaction patterns between the application and external services, specifically the Stripe payment gateway. This foresight has mitigated significant technical risks related to payment processing and security. The design artifacts serves as a living documentation that not only guided the initial build but also provides a scalable foundation for future enhancements, such as multi-vendor support and advanced analytics.
      </Text>
      <Text style={styles.paragraph}>
        In conclusion, the meticulous attention to system design has resulted in a blueprint that prioritizes security, scalability, and user experience. This strategic planning phase was instrumental in reducing development friction and ensuring that the final Arowai Ecommerce 1.0 platform is both reliable for administrators and intuitive for customers.
      </Text>
    </BookPageLayout>
  );
}
