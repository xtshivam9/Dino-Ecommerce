"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function SDLCOverview() {
  return (
    <BookPageLayout chapterTitle="Software Development Life Cycle" chapterNum="06">
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
          Chapter 06
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
          Software Development Life Cycle
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

      <Text style={styles.h2}>6.1 Introduction to SDLC</Text>
      <Text style={styles.paragraphIndent}>
        The Software Development Life Cycle (SDLC) is a structured, methodological framework utilized by software engineering teams to design, develop, test, and deploy high-quality software applications. It provides a standardized sequence of phases that ensures the final product meets or exceeds client expectations, is completed within schedule and budget estimates, and possesses structural integrity.
      </Text>
      <Text style={styles.paragraph}>
        For the Arowai Ecommerce 1.0 project, adhering to a rigorous SDLC was imperative to manage the complexities of integrating payment gateways, securing user data, and managing state across sessions. The life cycle acted as a blueprint, guiding the transition from abstract business requirements to a fully functional Django web application.
      </Text>

      <Text style={styles.h2}>6.2 Importance of SDLC</Text>
      <Text style={styles.paragraphIndent}>
        Implementing a defined SDLC provided several critical advantages for the development of Arowai Ecommerce 1.0:
      </Text>
      <View style={{ paddingLeft: 16, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>1. <Text style={styles.bold}>Risk Mitigation:</Text> Early identification of potential security vulnerabilities in payment flows before implementation.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>2. <Text style={styles.bold}>Resource Allocation:</Text> Efficient distribution of tasks, ensuring database design was completed before view implementation.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>3. <Text style={styles.bold}>Quality Assurance:</Text> Structured testing phases ensured that critical bugs (e.g., cart desynchronization) were caught prior to deployment.</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginBottom: 4 }}>4. <Text style={styles.bold}>Documentation:</Text> Provided a clear paper trail of architectural decisions and system configurations.</Text>
      </View>

      <Text style={styles.h2}>6.3 SDLC Phases Overview</Text>
      <Text style={styles.paragraphIndent}>
        The development of Arowai Ecommerce 1.0 proceeded through the following standard SDLC phases:
      </Text>

      <Text style={styles.h3}>Phase 1: Requirement Gathering and Analysis</Text>
      <Text style={styles.paragraph}>
        This initial phase involved defining the precise scope of the e-commerce platform. We identified the need for user authentication, product catalogs, cart management, and secure checkout. The outputs of this phase were documented in a comprehensive Software Requirement Specification (SRS) document, establishing the functional and non-functional requirements.
      </Text>

      <Text style={styles.h3}>Phase 2: System Design</Text>
      <Text style={styles.paragraph}>
        During the design phase, the abstract requirements were translated into a technical blueprint. We adopted the Model-View-Template (MVT) architecture inherent to Django. Database schemas (Entity-Relationship diagrams) were drafted to model Users, Items, Orders, and Payments. UI/UX wireframes were sketched to plan the customer journey from the homepage to checkout.
      </Text>

      <Text style={styles.h3}>Phase 3: Implementation (Coding)</Text>
      <Text style={styles.paragraph}>
        This phase involved the actual translation of the system design into executable code. Python was used to define Django models and views. HTML templates were integrated with Bootstrap for styling. The Stripe API was integrated into the checkout view to handle payment processing securely.
      </Text>

      <Text style={styles.h3}>Phase 4: Testing</Text>
      <Text style={styles.paragraph}>
        Rigorous testing was conducted to ensure system stability. This included unit testing individual Django views, integration testing the connection to the Stripe API, and system-wide UI testing to ensure responsive behavior across different devices.
      </Text>

      <Text style={styles.h3}>Phase 5: Deployment</Text>
      <Text style={styles.paragraph}>
        Once testing concluded, the application was prepared for production. Static files were collected, database migrations were finalized, and the application was deployed using a cloud provider (e.g., Vercel or Heroku), making the Arowai Ecommerce 1.0 platform accessible to end-users via the internet.
      </Text>

      <Text style={styles.h3}>Phase 6: Maintenance</Text>
      <Text style={styles.paragraph}>
        The final phase involves ongoing monitoring of the deployed application, patching any discovered security vulnerabilities, updating dependencies (like Django and Stripe SDK versions), and potentially adding new features based on user feedback.
      </Text>

    </BookPageLayout>
  );
}
