"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";
import AgileSprintDiagram from "../diagrams/AgileSprintDiagram";

export default function ProcessModel() {
  return (
    <BookPageLayout chapterTitle="Software Process Model" chapterNum="06" isContinued>
      <Text style={styles.h2}>6.4 Selected Process Model: Agile Methodology</Text>
      <Text style={styles.paragraphIndent}>
        Choosing the right software development methodology is paramount to project success. Given the dynamic nature of web development and the need for continuous integration of complex components like payment gateways, the traditional Waterfall model was deemed too rigid. Instead, the <Text style={styles.bold}>Agile Methodology</Text> was selected for the development of Dino-Ecommerce.
      </Text>
      
      <Text style={styles.h3}>6.4.1 Justification for Agile</Text>
      <Text style={styles.paragraphIndent}>
        Agile development is characterized by iterative progress, frequent reassessment of requirements, and high adaptability. This model was perfectly suited for Dino-Ecommerce for several reasons:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 8 }}>
          • <Text style={styles.bold}>Iterative Prototyping:</Text> UI components (like the cart and checkout pages) often require visual tweaking based on immediate feedback. Agile allows for rapid UI iterations without disrupting the backend architecture.
        </Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 8 }}>
          • <Text style={styles.bold}>Modular Integration:</Text> Django's app-based structure aligns well with Agile sprints. For example, the authentication app could be built and tested in Sprint 1, while the payment integration app could be developed independently in Sprint 3.
        </Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 8 }}>
          • <Text style={styles.bold}>Risk Management:</Text> By implementing high-risk features (like Stripe checkout) early in an iterative cycle, technical blockers were identified and resolved long before the final release deadline.
        </Text>
      </View>

      <Text style={styles.h2}>6.5 Agile Sprint Structure</Text>
      <Text style={styles.paragraphIndent}>
        The development process was divided into distinct time-boxed iterations known as Sprints, each lasting approximately two weeks. At the end of each sprint, a working, tested increment of the software was produced.
      </Text>

      {/* Agile Sprint Diagram */}
      <View style={{ marginTop: 24, marginBottom: 24 }}>
        <AgileSprintDiagram />
        <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "Times-Italic", marginTop: 8, color: "#666666" }}>
          Figure 6.2: Agile Sprint Cycle
        </Text>
      </View>

      <Text style={styles.h3}>6.5.1 Sprint Breakdown</Text>
      
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>Sprint 1: Foundation & Modeling</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          Focus: Setup the Django project, configure SQLite database, and define core models (Items, Orders). Establish user authentication using Django Allauth.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>Sprint 2: Views & Templates</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          Focus: Implement class-based and function-based views for listing products and displaying details. Integrate Bootstrap for responsive frontend design.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>Sprint 3: Cart Mechanics</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          Focus: Develop logic to add/remove items from the cart, update quantities, calculate sub-totals, and manage active order sessions for logged-in users.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>Sprint 4: Checkout & Payments</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          Focus: Construct the checkout form, capture billing addresses, and integrate the Stripe API for processing credit card payments securely.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 12, marginBottom: 4 }}>Sprint 5: Refinement & Deployment</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>
          Focus: Implement coupon logic, refund requests, polish UI elements, conduct system testing, and deploy the application to a production environment.
        </Text>
      </View>

      <Text style={styles.h2}>6.6 Summary</Text>
      <Text style={styles.paragraphIndent}>
        The adoption of the Agile methodology provided the flexibility necessary to adapt to technical challenges dynamically. By breaking the complex e-commerce system down into manageable sprints, continuous progress was maintained, ensuring the successful delivery of a robust Django application.
      </Text>
    </BookPageLayout>
  );
}
