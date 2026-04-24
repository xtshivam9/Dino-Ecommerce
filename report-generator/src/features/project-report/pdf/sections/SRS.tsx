"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function SRS() {
  return (
    <BookPageLayout chapterTitle="Software Requirement Specification" chapterNum="06" isContinued>
      <Text style={styles.h2}>6.9 Software Requirement Specification (SRS)</Text>
      <Text style={styles.paragraphIndent}>
        The Software Requirement Specification (SRS) is a formal document that dictates the functional and non-functional requirements of the system. It serves as the definitive contract guiding the technical design phase.
      </Text>

      <Text style={styles.h3}>6.9.1 Functional Requirements</Text>
      <Text style={styles.paragraphIndent}>
        Functional requirements define specific behaviors, interactions, and operations the system must perform.
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>FR-1: User Authentication & Profile Management</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          1.1 The system shall allow users to register an account using a valid email address and password via Django Allauth.
          {"\n"}1.2 The system shall permit users to log in and securely maintain session state.
          {"\n"}1.3 Authenticated users shall be able to view their profile, past order history, and saved billing addresses.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>FR-2: Product Catalog & Browsing</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          2.1 The system shall display a catalog of items retrieved dynamically from the SQLite/PostgreSQL database.
          {"\n"}2.2 The system shall allow items to be grouped by Categories (e.g., Shirts, Outwear, Sport wear).
          {"\n"}2.3 Each product page shall display item details, pricing, discount prices (if applicable), and imagery.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>FR-3: Shopping Cart Operations</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          3.1 Users shall be able to add products to their active cart.
          {"\n"}3.2 Users shall be able to increment, decrement, or remove item quantities from the cart view.
          {"\n"}3.3 The system shall calculate the sub-total dynamically based on item quantities and applicable discount prices.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>FR-4: Checkout & Payment</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          4.1 The system shall provide a checkout form to capture shipping and billing addresses.
          {"\n"}4.2 The system shall integrate with the Stripe API to securely capture credit card details and process payments.
          {"\n"}4.3 The system shall support the application of promotional coupon codes to reduce the order total.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>FR-5: Administrative Functions</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          5.1 Administrators shall access a secure dashboard (Django Admin) to manage Items, Orders, and Users.
          {"\n"}5.2 Administrators shall be able to mark orders as 'Being Delivered' or 'Received'.
          {"\n"}5.3 Administrators shall have the capability to approve or deny requested refunds.
        </Text>
      </View>

      <Text style={styles.h3}>6.9.2 Non-Functional Requirements</Text>
      <Text style={styles.paragraphIndent}>
        Non-functional requirements specify the quality attributes, performance goals, and security standards of the system.
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>NFR-1: Security & Compliance</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          • Passwords must be hashed using PBKDF2 (Django default).
          {"\n"}• All forms modifying state must implement Cross-Site Request Forgery (CSRF) protection.
          {"\n"}• The system shall not store raw credit card numbers locally; all such data must be tokenized via Stripe.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>NFR-2: Performance & Scalability</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          • Page load times for the product catalog should ideally remain under 2 seconds.
          {"\n"}• The database architecture (using Django ORM) must be capable of migrating from SQLite (development) to PostgreSQL (production) without logic rewrites.
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>NFR-3: Usability & Accessibility</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 6 }}>
          • The UI must be fully responsive, utilizing Bootstrap 4 grids to ensure usability on mobile, tablet, and desktop screens.
          {"\n"}• Error messages (e.g., invalid card, empty cart) must be clearly communicated to the user via Django's messaging framework.
        </Text>
      </View>

      <Text style={styles.h3}>6.9.3 Hardware & Software Requirements</Text>
      
      <View style={{ marginTop: 8, marginBottom: 16 }}>
        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>Development Environment:</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12, marginBottom: 8 }}>
          • OS: Windows 10/11, macOS, or Linux
          {"\n"}• Runtime: Python 3.10+
          {"\n"}• IDE: VS Code or PyCharm
          {"\n"}• Browser: Chrome / Firefox / Safari (latest versions)
        </Text>

        <Text style={{ fontFamily: "Times-Bold", fontSize: 11, marginBottom: 4 }}>Production Environment (Server):</Text>
        <Text style={{ fontFamily: "Times-Roman", fontSize: 11, marginLeft: 12 }}>
          • Platform: Vercel, Heroku, or standard Linux VPS (Ubuntu)
          {"\n"}• Web Server: Gunicorn (WSGI)
          {"\n"}• Database: PostgreSQL
        </Text>
      </View>

    </BookPageLayout>
  );
}
