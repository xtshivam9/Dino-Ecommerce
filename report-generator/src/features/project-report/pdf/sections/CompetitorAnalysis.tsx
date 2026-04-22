"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

/**
 * Chapter 1.5: Competitor Analysis
 */
export default function CompetitorAnalysis() {
  return (
    <BookPageLayout chapterTitle="Competitor Analysis" chapterNum="01">
      <Text style={styles.h2}>1.5 Competitor Analysis</Text>
      <Text style={styles.paragraphIndent}>
        The e-commerce market is highly competitive, dominated by large tech
        conglomerates and diverse SaaS platforms. Understanding the specific
        advantages and shortcomings of existing solutions provides a compelling
        argument for the unique value proposition of the dj-ecommerce platform.
        This comparative study evaluates our custom Django-based platform against
        industry titans such as Shopify, WooCommerce, Magento (Adobe Commerce),
        and Amazon marketplace.
      </Text>

      <Text style={styles.h3}>1.5.1 Shopify</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Overview: </Text>
        Shopify is a proprietary, closed-source SaaS e-commerce platform that allows
        anyone to set up an online store and sell their products.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Strengths: </Text>
        Shopify is incredibly user-friendly with a massive app ecosystem and
        built-in hosting, CDN, and high-performance infrastructure.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Weaknesses: </Text>
        It incurs significant cumulative costs due to base subscription
        fees, app fees, and an added transaction fee if the vendor opts out
        of Shopify Payments. Data sovereignty is entirely lost, as the business
        relies on a third-party proprietary server.
      </Text>

      <Text style={styles.h3}>1.5.2 WooCommerce (WordPress)</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Overview: </Text>
        WooCommerce is an open-source, customizable e-commerce plugin for WordPress.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Strengths: </Text>
        It is completely free to install and highly customizable due to its
        open-source nature, benefitting from the massive WordPress community.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Weaknesses: </Text>
        WooCommerce quickly becomes resource-heavy and sluggish. Technical debt
        accumulates as store owners rely on disjointed PHP plugins that
        frequently conflict and pose security vulnerabilities.
      </Text>

      <Text style={styles.h3}>1.5.3 Magento (Adobe Commerce)</Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Overview: </Text>
        Magento is a powerful enterprise-class open-source e-commerce platform
        written in PHP.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Strengths: </Text>
        It offers unprecedented scalability, complex B2B capabilities, and deep
        inventory management features.
      </Text>
      <Text style={styles.paragraphIndent}>
        <Text style={styles.bold}>Weaknesses: </Text>
        Magento is notoriously difficult to develop and maintain, often
        requiring a dedicated team of specialized PHP enterprise engineers.
        Hosting costs are astronomical compared to simpler stacks.
      </Text>

      <Text style={styles.h3}>1.5.4 Justification for dj-ecommerce</Text>
      <Text style={styles.paragraphIndent}>
        While SaaS platforms like Shopify offer rapid deployment, they strip
        the vendor of data ownership and impose recurring margin penalties.
        dj-ecommerce bridges the gap by providing an open-source, highly
        secure Model-Template-View (MTV) architecture via Django. Leveraging
        Python's mature ecosystem, dj-ecommerce achieves high data security,
        rapid custom development mapping specifically to the vendor's database
        needs, and cost-effective deployment capabilities (e.g., Heroku/Railway)
        without recurring transactional app fees.
      </Text>
    </BookPageLayout>
  );
}