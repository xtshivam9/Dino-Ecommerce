"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";
import BookPageLayout from "../components/BookPageLayout";

export default function References() {
  return (
    <BookPageLayout chapterTitle="References" chapterNum="" isContinued={false}>
      <View style={{ marginBottom: 28, alignItems: "center", marginTop: 20 }}>
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
          References
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

      <Text style={styles.paragraphIndent}>
        The development of the Dino-Ecommerce platform was heavily reliant on the following official documentation, technical literature, and open-source resources:
      </Text>

      <View style={{ marginTop: 16 }}>
        <Text style={[styles.h3, { marginBottom: 8 }]}>Official Documentation</Text>
        
        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[1]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            Django Software Foundation. (2023). <Text style={{ fontFamily: "Times-Italic" }}>Django Documentation (Version 5.0)</Text>. Retrieved from https://docs.djangoproject.com/
          </Text>
        </View>
        
        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[2]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            Stripe, Inc. (2024). <Text style={{ fontFamily: "Times-Italic" }}>Stripe API Reference and Custom Checkout Documentation</Text>. Retrieved from https://stripe.com/docs/api
          </Text>
        </View>

        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[3]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            Bootstrap Core Team. (2023). <Text style={{ fontFamily: "Times-Italic" }}>Bootstrap 4.6 Documentation</Text>. Retrieved from https://getbootstrap.com/docs/4.6/
          </Text>
        </View>

        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[4]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            Penners, R. (2023). <Text style={{ fontFamily: "Times-Italic" }}>Django Allauth Documentation</Text>. Retrieved from https://django-allauth.readthedocs.io/
          </Text>
        </View>

        <Text style={[styles.h3, { marginTop: 16, marginBottom: 8 }]}>Books & Academic Literature</Text>
        
        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[5]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            Vincent, W. S. (2022). <Text style={{ fontFamily: "Times-Italic" }}>Django for Professionals: Production websites with Python & Django</Text>. Leanpub.
          </Text>
        </View>

        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[6]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            Sommerville, I. (2015). <Text style={{ fontFamily: "Times-Italic" }}>Software Engineering</Text> (10th Edition). Pearson. (Used for SDLC and System Design principles).
          </Text>
        </View>

        <Text style={[styles.h3, { marginTop: 16, marginBottom: 8 }]}>Online Resources & Articles</Text>

        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[7]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            JustDjango. (2021). <Text style={{ fontFamily: "Times-Italic" }}>Building an E-Commerce Website with Django and Stripe</Text>. YouTube / JustDjango Learn.
          </Text>
        </View>

        <View style={{ paddingLeft: 12, marginBottom: 8, flexDirection: "row" }}>
          <Text style={{ fontSize: 11, marginRight: 6 }}>[8]</Text>
          <Text style={{ fontSize: 11, fontFamily: "Times-Roman", lineHeight: 1.5, flex: 1 }}>
            Vercel. (2023). <Text style={{ fontFamily: "Times-Italic" }}>Deploying Python WSGI Applications</Text>. Retrieved from https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python
          </Text>
        </View>
      </View>
    </BookPageLayout>
  );
}
