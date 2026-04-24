"use client";

import { View, Text } from "@react-pdf/renderer";
import { styles } from "../styles";

// ── Helper: render a schema table ──────────────────────────────────────────
const SchemaTable = ({
  tableName,
  tableNum,
  fields,
}: {
  tableName: string;
  tableNum: string;
  fields: string[][];
}) => (
  <View style={{ marginBottom: 4 }}>
    <View
      wrap={false}
      style={{
        borderWidth: 1,
        borderColor: "#d1d5db",
        marginTop: 8,
        marginBottom: 4,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {/* Table name header */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#1e40af",
          borderBottomWidth: 1,
          borderBottomColor: "#1e3a8a",
        }}
      >
        <Text
          style={{
            width: "100%",
            padding: 5,
            fontSize: 9,
            fontFamily: "Times-Bold",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          {tableName}
        </Text>
      </View>
      {/* Column headers */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#eff6ff",
          borderBottomWidth: 1,
          borderBottomColor: "#bfdbfe",
        }}
      >
        <Text
          style={{
            width: "25%",
            padding: 4,
            fontSize: 9,
            fontFamily: "Times-Bold",
            borderRightWidth: 1,
            borderRightColor: "#bfdbfe",
            color: "#1e40af",
          }}
        >
          Field
        </Text>
        <Text
          style={{
            width: "25%",
            padding: 4,
            fontSize: 9,
            fontFamily: "Times-Bold",
            borderRightWidth: 1,
            borderRightColor: "#bfdbfe",
            color: "#1e40af",
          }}
        >
          Type
        </Text>
        <Text
          style={{
            width: "50%",
            padding: 4,
            fontSize: 9,
            fontFamily: "Times-Bold",
            color: "#1e40af",
          }}
        >
          Constraints
        </Text>
      </View>
      {/* Data rows */}
      {fields.map((row, i) => (
        <View
          key={i}
          style={{
            flexDirection: "row",
            borderBottomWidth: i < fields.length - 1 ? 1 : 0,
            borderBottomColor: "#e5e7eb",
            backgroundColor: i % 2 === 0 ? "#ffffff" : "#f9fafb",
          }}
        >
          <Text
            style={{
              width: "25%",
              padding: 3,
              fontSize: 7,
              fontFamily: "Courier",
              borderRightWidth: 1,
              borderRightColor: "#e5e7eb",
            }}
          >
            {row[0]}
          </Text>
          <Text
            style={{
              width: "25%",
              padding: 3,
              fontSize: 7,
              borderRightWidth: 1,
              borderRightColor: "#e5e7eb",
            }}
          >
            {row[1]}
          </Text>
          <Text style={{ width: "50%", padding: 3, fontSize: 7 }}>
            {row[2]}
          </Text>
        </View>
      ))}
    </View>
    <Text
      style={{
        fontSize: 9,
        fontFamily: "Times-Italic",
        textAlign: "center",
        marginBottom: 8,
      }}
    >
      Table {tableNum}: {tableName} Table Structure
    </Text>
  </View>
);

// ── Helper: render an enum/choices table ───────────────────────────────────
const EnumTable = ({
  enumName,
  tableNum,
  values,
}: {
  enumName: string;
  tableNum: string;
  values: string[][];
}) => (
  <View style={{ marginBottom: 4 }}>
    <View
      wrap={false}
      style={{
        borderWidth: 1,
        borderColor: "#d1d5db",
        marginTop: 8,
        marginBottom: 4,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#7c3aed",
          borderBottomWidth: 1,
          borderBottomColor: "#6d28d9",
        }}
      >
        <Text
          style={{
            width: "100%",
            padding: 5,
            fontSize: 9,
            fontFamily: "Times-Bold",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          {enumName}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f5f3ff",
          borderBottomWidth: 1,
          borderBottomColor: "#ddd6fe",
        }}
      >
        <Text
          style={{
            width: "30%",
            padding: 4,
            fontSize: 9,
            fontFamily: "Times-Bold",
            borderRightWidth: 1,
            borderRightColor: "#ddd6fe",
            color: "#6d28d9",
          }}
        >
          Value
        </Text>
        <Text
          style={{
            width: "70%",
            padding: 4,
            fontSize: 9,
            fontFamily: "Times-Bold",
            color: "#6d28d9",
          }}
        >
          Description
        </Text>
      </View>
      {values.map((row, i) => (
        <View
          key={i}
          style={{
            flexDirection: "row",
            borderBottomWidth: i < values.length - 1 ? 1 : 0,
            borderBottomColor: "#e5e7eb",
            backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf5ff",
          }}
        >
          <Text
            style={{
              width: "30%",
              padding: 3,
              fontSize: 7,
              fontFamily: "Courier",
              borderRightWidth: 1,
              borderRightColor: "#e5e7eb",
            }}
          >
            {row[0]}
          </Text>
          <Text style={{ width: "70%", padding: 3, fontSize: 7 }}>
            {row[1]}
          </Text>
        </View>
      ))}
    </View>
    <Text
      style={{
        fontSize: 9,
        fontFamily: "Times-Italic",
        textAlign: "center",
        marginBottom: 8,
      }}
    >
      Table {tableNum}: {enumName} Choice Values
    </Text>
  </View>
);

// ── Group heading ──────────────────────────────────────────────────────────
const GroupHeading = ({ children }: { children: string }) => (
  <Text
    style={{
      fontSize: 10,
      fontFamily: "Times-Bold",
      marginTop: 12,
      marginBottom: 4,
    }}
  >
    {children}
  </Text>
);

// ════════════════════════════════════════════════════════════════════════════
// Main component
// ════════════════════════════════════════════════════════════════════════════
export default function DatabaseSchemaSection() {
  return (
    <View>
      <Text style={styles.h3}>7.6.1 Complete Database Schema</Text>
      <Text style={styles.paragraphIndent}>
        The following tables define the complete database schema for the
        Dino-Ecommerce platform, organized by functional domain. Each table
        includes field names, data types, and constraints as specified in the
        Django models (models.py).
      </Text>

      {/* ─── A. Authentication Tables ───────────────────────────────── */}
      <GroupHeading>A. Authentication (Django Allauth / Auth)</GroupHeading>

      <SchemaTable
        tableName="User (auth_user)"
        tableNum="7.4"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["username", "CharField(150)", "Unique, Not Null"],
          ["email", "EmailField", "Not Null"],
          ["password", "CharField(128)", "Not Null, Hashed"],
          ["first_name", "CharField(150)", "Nullable"],
          ["last_name", "CharField(150)", "Nullable"],
          ["is_active", "BooleanField", "Default: True"],
          ["is_staff", "BooleanField", "Default: False"],
          ["date_joined", "DateTimeField", "Auto: now()"],
        ]}
      />

      <SchemaTable
        tableName="UserProfile"
        tableNum="7.5"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["user", "OneToOneField", "FK → User, Unique, CASCADE"],
          ["stripe_customer_id", "CharField(50)", "Nullable, Blank"],
          ["one_click_purchasing", "BooleanField", "Default: False"],
        ]}
      />

      {/* ─── B. Product Tables ─────────────────────────────────────── */}
      <GroupHeading>B. Product Catalog</GroupHeading>

      <SchemaTable
        tableName="Item"
        tableNum="7.6"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["title", "CharField(100)", "Not Null"],
          ["price", "FloatField", "Not Null"],
          ["discount_price", "FloatField", "Nullable, Blank"],
          ["category", "CharField(2)", "Choices: CATEGORY_CHOICES"],
          ["label", "CharField(1)", "Choices: LABEL_CHOICES"],
          ["slug", "SlugField", "Unique, Indexed"],
          ["description", "TextField", "Not Null"],
          ["image", "ImageField", "Not Null"],
        ]}
      />

      {/* ─── C. Order Tables ──────────────────────────────────────── */}
      <GroupHeading>C. Order Management</GroupHeading>

      <SchemaTable
        tableName="OrderItem"
        tableNum="7.7"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["user", "ForeignKey", "FK → User, CASCADE"],
          ["ordered", "BooleanField", "Default: False"],
          ["item", "ForeignKey", "FK → Item, CASCADE"],
          ["quantity", "IntegerField", "Default: 1"],
        ]}
      />

      <SchemaTable
        tableName="Order"
        tableNum="7.8"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["user", "ForeignKey", "FK → User, CASCADE"],
          ["ref_code", "CharField(20)", "Nullable, Blank"],
          ["items", "ManyToManyField", "M2M → OrderItem"],
          ["start_date", "DateTimeField", "Auto: now()"],
          ["ordered_date", "DateTimeField", "Not Null"],
          ["ordered", "BooleanField", "Default: False"],
          ["shipping_address", "ForeignKey", "FK → Address, SET_NULL"],
          ["billing_address", "ForeignKey", "FK → Address, SET_NULL"],
          ["payment", "ForeignKey", "FK → Payment, SET_NULL"],
          ["coupon", "ForeignKey", "FK → Coupon, SET_NULL"],
          ["being_delivered", "BooleanField", "Default: False"],
          ["received", "BooleanField", "Default: False"],
          ["refund_requested", "BooleanField", "Default: False"],
          ["refund_granted", "BooleanField", "Default: False"],
        ]}
      />

      {/* ─── D. Address & Payment Tables ─────────────────────────── */}
      <GroupHeading>D. Address & Payment</GroupHeading>

      <SchemaTable
        tableName="Address"
        tableNum="7.9"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["user", "ForeignKey", "FK → User, CASCADE"],
          ["street_address", "CharField(100)", "Not Null"],
          ["apartment_address", "CharField(100)", "Not Null"],
          ["country", "CountryField", "Not Null"],
          ["zip", "CharField(100)", "Not Null"],
          ["address_type", "CharField(1)", "Choices: S(hipping)/B(illing)"],
          ["default", "BooleanField", "Default: False"],
        ]}
      />

      <SchemaTable
        tableName="Payment"
        tableNum="7.10"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["stripe_charge_id", "CharField(50)", "Not Null"],
          ["user", "ForeignKey", "FK → User, SET_NULL"],
          ["amount", "FloatField", "Not Null"],
          ["timestamp", "DateTimeField", "Auto: now()"],
        ]}
      />

      <SchemaTable
        tableName="Coupon"
        tableNum="7.11"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["code", "CharField(15)", "Unique, Not Null"],
          ["amount", "FloatField", "Not Null"],
        ]}
      />

      <SchemaTable
        tableName="Refund"
        tableNum="7.12"
        fields={[
          ["id", "AutoField", "PK, Auto-increment"],
          ["order", "ForeignKey", "FK → Order, CASCADE"],
          ["reason", "TextField", "Not Null"],
          ["accepted", "BooleanField", "Default: False"],
          ["email", "EmailField", "Not Null"],
        ]}
      />

      {/* ─── 7.6.2 Choice Enumerations ────────────────────────────── */}
      <Text style={styles.h3}>7.6.2 Choice Enumerations</Text>
      <Text style={styles.paragraphIndent}>
        The following Django choice tuples define the valid values for key
        categorical fields in the database schema.
      </Text>

      <EnumTable
        enumName="CATEGORY_CHOICES"
        tableNum="7.13"
        values={[
          ["S", "Shirt"],
          ["SW", "Sport Wear"],
          ["OW", "Outwear"],
        ]}
      />

      <EnumTable
        enumName="LABEL_CHOICES"
        tableNum="7.14"
        values={[
          ["P", "Primary (Blue badge)"],
          ["S", "Secondary (Grey badge)"],
          ["D", "Danger (Red badge — Sale / Clearance)"],
        ]}
      />

      <EnumTable
        enumName="ADDRESS_CHOICES"
        tableNum="7.15"
        values={[
          ["B", "Billing Address"],
          ["S", "Shipping Address"],
        ]}
      />

      {/* ─── F. Entity Relationship Summary ─────────────────────────── */}
      <GroupHeading>E. Entity Relationship Summary</GroupHeading>
      <Text style={styles.paragraphIndent}>
        Table 7.16 provides a consolidated view of all foreign key relationships
        between database entities, including cardinality and referential
        integrity constraints configured in the Django models.
      </Text>

      <View style={{ marginBottom: 4 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#333333",
            marginTop: 8,
            marginBottom: 4,
          }}
        >
          {/* Header row */}
          <View
            wrap={false}
            style={{
              flexDirection: "row",
              backgroundColor: "#e8e8e8",
              borderBottomWidth: 1,
              borderBottomColor: "#333333",
            }}
          >
            <Text
              style={{
                width: "100%",
                padding: 4,
                fontSize: 9,
                fontFamily: "Times-Bold",
                textAlign: "center",
              }}
            >
              Entity Relationship Summary
            </Text>
          </View>
          {/* Column headers */}
          <View
            wrap={false}
            style={{
              flexDirection: "row",
              backgroundColor: "#f0f0f0",
              borderBottomWidth: 1,
              borderBottomColor: "#333333",
            }}
          >
            <Text
              style={{
                width: "18%",
                padding: 4,
                fontSize: 8,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#333333",
              }}
            >
              Parent
            </Text>
            <Text
              style={{
                width: "18%",
                padding: 4,
                fontSize: 8,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#333333",
              }}
            >
              Child
            </Text>
            <Text
              style={{
                width: "18%",
                padding: 4,
                fontSize: 8,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#333333",
              }}
            >
              FK Field
            </Text>
            <Text
              style={{
                width: "18%",
                padding: 4,
                fontSize: 8,
                fontFamily: "Times-Bold",
                borderRightWidth: 1,
                borderRightColor: "#333333",
              }}
            >
              Cardinality
            </Text>
            <Text
              style={{
                width: "28%",
                padding: 4,
                fontSize: 8,
                fontFamily: "Times-Bold",
              }}
            >
              On Delete
            </Text>
          </View>
          {/* Data rows */}
          {[
            ["User", "UserProfile", "user", "1 : 1", "Cascade"],
            ["User", "OrderItem", "user", "1 : N", "Cascade"],
            ["User", "Order", "user", "1 : N", "Cascade"],
            ["User", "Address", "user", "1 : N", "Cascade"],
            ["User", "Payment", "user", "1 : N", "Set Null"],
            ["Item", "OrderItem", "item", "1 : N", "Cascade"],
            ["Order", "OrderItem", "items (M2M)", "N : M", "—"],
            ["Order", "Address", "shipping_address", "N : 1", "Set Null"],
            ["Order", "Payment", "payment", "N : 1", "Set Null"],
            ["Order", "Coupon", "coupon", "N : 1", "Set Null"],
            ["Order", "Refund", "order", "1 : N", "Cascade"],
          ].map((row, i, arr) => (
            <View
              key={i}
              wrap={false}
              style={{
                flexDirection: "row",
                borderBottomWidth: i < arr.length - 1 ? 1 : 0,
                borderBottomColor: "#cccccc",
              }}
            >
              <Text
                style={{
                  width: "18%",
                  padding: 3,
                  fontSize: 7,
                  fontFamily: "Courier",
                  borderRightWidth: 1,
                  borderRightColor: "#cccccc",
                }}
              >
                {row[0]}
              </Text>
              <Text
                style={{
                  width: "18%",
                  padding: 3,
                  fontSize: 7,
                  fontFamily: "Courier",
                  borderRightWidth: 1,
                  borderRightColor: "#cccccc",
                }}
              >
                {row[1]}
              </Text>
              <Text
                style={{
                  width: "18%",
                  padding: 3,
                  fontSize: 7,
                  fontFamily: "Courier",
                  borderRightWidth: 1,
                  borderRightColor: "#cccccc",
                }}
              >
                {row[2]}
              </Text>
              <Text
                style={{
                  width: "18%",
                  padding: 3,
                  fontSize: 7,
                  borderRightWidth: 1,
                  borderRightColor: "#cccccc",
                }}
              >
                {row[3]}
              </Text>
              <Text style={{ width: "28%", padding: 3, fontSize: 7 }}>
                {row[4]}
              </Text>
            </View>
          ))}
        </View>
        <Text
          style={{
            fontSize: 9,
            fontFamily: "Times-Italic",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Table 7.16: Entity Relationship Summary
        </Text>
      </View>
    </View>
  );
}
