/**
 * Component Hierarchy Diagram
 * Shows Django MVT component architecture for Arowai Ecommerce 1.0
 * For Chapter 6 (System Design) - Component section
 */
import {
  Svg,
  Rect,
  Text as SvgText,
  Line,
  G,
  Circle,
} from "@react-pdf/renderer";

export default function ComponentDiagram() {
  const width = 495;
  const height = 470;

  const colors = {
    text: "#1a1a1a",
    label: "#666666",
    page: "#1565C0",
    pageLight: "#E3F2FD",
    layout: "#2E7D32",
    layoutLight: "#E8F5E9",
    feature: "#E65100",
    featureLight: "#FFF3E0",
    ui: "#6A1B9A",
    uiLight: "#F3E5F5",
    hook: "#00695C",
    hookLight: "#E0F2F1",
    provider: "#C62828",
    providerLight: "#FFEBEE",
    connector: "#aaaaaa",
  };

  const Comp = ({
    x,
    y,
    w,
    h,
    label,
    sublabel,
    color,
    lightColor,
    stereotype,
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    label: string;
    sublabel?: string;
    color: string;
    lightColor: string;
    stereotype?: string;
  }) => (
    <G>
      <Rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={3}
        fill={lightColor}
        stroke={color}
        strokeWidth={1.2}
      />
      {stereotype && (
        <SvgText
          x={x + w / 2}
          y={y + 9}
          textAnchor="middle"
          style={{ fontSize: 5, fontFamily: "Times-Italic", fill: color }}
        >
          {"<<" + stereotype + ">>"}
        </SvgText>
      )}
      <SvgText
        x={x + w / 2}
        y={stereotype ? y + 19 : y + 12}
        textAnchor="middle"
        style={{ fontSize: 6.5, fontFamily: "Times-Bold", fill: color }}
      >
        {label}
      </SvgText>
      {sublabel && (
        <SvgText
          x={x + w / 2}
          y={stereotype ? y + 28 : y + 22}
          textAnchor="middle"
          style={{ fontSize: 5, fontFamily: "Times-Roman", fill: colors.label }}
        >
          {sublabel}
        </SvgText>
      )}
    </G>
  );

  const VLine = ({ x, y1, y2 }: { x: number; y1: number; y2: number }) => (
    <Line
      x1={x}
      y1={y1}
      x2={x}
      y2={y2}
      stroke={colors.connector}
      strokeWidth={0.8}
    />
  );

  const HLine = ({ x1, x2, y }: { x1: number; x2: number; y: number }) => (
    <Line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={colors.connector}
      strokeWidth={0.8}
    />
  );

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Title */}
      <SvgText
        x={width / 2}
        y={14}
        textAnchor="middle"
        style={{ fontSize: 10, fontFamily: "Times-Bold", fill: colors.text }}
      >
        Component Hierarchy Diagram
      </SvgText>

      {/* Level 0: Django Project */}
      <Comp
        x={190}
        y={30}
        w={115}
        h={30}
        label="Django Project"
        sublabel="djecom/settings.py"
        color={colors.layout}
        lightColor={colors.layoutLight}
        stereotype="project"
      />

      {/* Level 1: Django Apps */}
      <VLine x={247} y1={60} y2={75} />
      <HLine x1={80} x2={420} y={75} />

      <Comp
        x={30}
        y={80}
        w={100}
        h={28}
        label="core (App)"
        sublabel="models / views / urls"
        color={colors.provider}
        lightColor={colors.providerLight}
        stereotype="django-app"
      />
      <Comp
        x={150}
        y={80}
        w={100}
        h={28}
        label="allauth (App)"
        sublabel="django-allauth"
        color={colors.provider}
        lightColor={colors.providerLight}
        stereotype="django-app"
      />
      <Comp
        x={270}
        y={80}
        w={100}
        h={28}
        label="admin (App)"
        sublabel="django.contrib.admin"
        color={colors.provider}
        lightColor={colors.providerLight}
        stereotype="django-app"
      />
      <Comp
        x={390}
        y={80}
        w={100}
        h={28}
        label="static (App)"
        sublabel="staticfiles"
        color={colors.provider}
        lightColor={colors.providerLight}
        stereotype="django-app"
      />

      <VLine x={80} y1={75} y2={80} />
      <VLine x={200} y1={75} y2={80} />
      <VLine x={320} y1={75} y2={80} />
      <VLine x={440} y1={75} y2={80} />

      {/* Level 2: Models */}
      <VLine x={80} y1={108} y2={125} />
      <HLine x1={50} x2={450} y={125} />

      <Comp
        x={10}
        y={130}
        w={85}
        h={30}
        label="Item"
        sublabel="Product Catalog"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="model"
      />
      <Comp
        x={105}
        y={130}
        w={85}
        h={30}
        label="Order"
        sublabel="Order Management"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="model"
      />
      <Comp
        x={200}
        y={130}
        w={85}
        h={30}
        label="OrderItem"
        sublabel="Cart Line Item"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="model"
      />
      <Comp
        x={295}
        y={130}
        w={85}
        h={30}
        label="Payment"
        sublabel="Stripe Charges"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="model"
      />
      <Comp
        x={390}
        y={130}
        w={85}
        h={30}
        label="Address"
        sublabel="Shipping/Billing"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="model"
      />

      <VLine x={50} y1={125} y2={130} />
      <VLine x={147} y1={125} y2={130} />
      <VLine x={243} y1={125} y2={130} />
      <VLine x={337} y1={125} y2={130} />
      <VLine x={432} y1={125} y2={130} />

      {/* Level 3: Views */}
      <VLine x={247} y1={160} y2={175} />
      <HLine x1={60} x2={440} y={175} />

      <Comp
        x={10}
        y={180}
        w={100}
        h={28}
        label="HomeView"
        sublabel="Product Listing"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="view"
      />
      <Comp
        x={120}
        y={180}
        w={100}
        h={28}
        label="ItemDetailView"
        sublabel="Product Detail"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="view"
      />
      <Comp
        x={230}
        y={180}
        w={100}
        h={28}
        label="OrderSummaryView"
        sublabel="Cart / Checkout"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="view"
      />
      <Comp
        x={340}
        y={180}
        w={150}
        h={28}
        label="PaymentView"
        sublabel="Stripe Integration"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="view"
      />

      <VLine x={60} y1={175} y2={180} />
      <VLine x={170} y1={175} y2={180} />
      <VLine x={280} y1={175} y2={180} />
      <VLine x={415} y1={175} y2={180} />

      {/* Level 4: Templates */}
      <VLine x={247} y1={208} y2={225} />
      <HLine x1={50} x2={450} y={225} />

      <Comp
        x={10}
        y={230}
        w={85}
        h={32}
        label="base.html"
        sublabel="Base Template"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="template"
      />
      <Comp
        x={105}
        y={230}
        w={85}
        h={32}
        label="home.html"
        sublabel="Product Grid"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="template"
      />
      <Comp
        x={200}
        y={230}
        w={85}
        h={32}
        label="product.html"
        sublabel="Detail Page"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="template"
      />
      <Comp
        x={295}
        y={230}
        w={85}
        h={32}
        label="checkout.html"
        sublabel="Payment Form"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="template"
      />
      <Comp
        x={390}
        y={230}
        w={85}
        h={32}
        label="order_snippet.html"
        sublabel="Cart Summary"
        color={colors.page}
        lightColor={colors.pageLight}
        stereotype="template"
      />

      <VLine x={50} y1={225} y2={230} />
      <VLine x={147} y1={225} y2={230} />
      <VLine x={243} y1={225} y2={230} />
      <VLine x={337} y1={225} y2={230} />
      <VLine x={432} y1={225} y2={230} />

      {/* Level 5: Utility Modules */}
      <VLine x={243} y1={262} y2={278} />
      <HLine x1={80} x2={420} y={278} />

      <Comp
        x={30}
        y={282}
        w={100}
        h={32}
        label="stripe_utils.py"
        sublabel="Payment Processing"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="utility"
      />
      <Comp
        x={145}
        y={282}
        w={100}
        h={32}
        label="forms.py"
        sublabel="Checkout / Coupon Forms"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="utility"
      />
      <Comp
        x={260}
        y={282}
        w={100}
        h={32}
        label="admin.py"
        sublabel="Admin Configuration"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="utility"
      />
      <Comp
        x={375}
        y={282}
        w={100}
        h={32}
        label="context_processors.py"
        sublabel="Template Context"
        color={colors.feature}
        lightColor={colors.featureLight}
        stereotype="utility"
      />

      <VLine x={80} y1={278} y2={282} />
      <VLine x={195} y1={278} y2={282} />
      <VLine x={310} y1={278} y2={282} />
      <VLine x={425} y1={278} y2={282} />

      {/* UI Components */}
      <SvgText
        x={width / 2}
        y={335}
        textAnchor="middle"
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.ui }}
      >
        Frontend Component Library (Bootstrap 4 + Custom CSS)
      </SvgText>
      <Line
        x1={30}
        y1={340}
        x2={465}
        y2={340}
        stroke={colors.ui}
        strokeWidth={0.5}
        strokeDasharray="4,2"
      />

      {[
        "Navbar",
        "Footer",
        "Card",
        "Carousel",
        "Modal",
        "Badge",
        "Pagination",
        "Alert",
        "Forms",
        "Breadcrumb",
      ].map((name, i) => {
        const bx = 12 + i * 47;
        return (
          <G key={i}>
            <Rect
              x={bx}
              y={346}
              width={43}
              height={18}
              rx={2}
              fill={colors.uiLight}
              stroke={colors.ui}
              strokeWidth={0.5}
            />
            <SvgText
              x={bx + 21.5}
              y={357}
              textAnchor="middle"
              style={{
                fontSize: 5.5,
                fontFamily: "Times-Roman",
                fill: colors.ui,
              }}
            >
              {name}
            </SvgText>
          </G>
        );
      })}

      {/* Django Modules */}
      <SvgText
        x={width / 2}
        y={383}
        textAnchor="middle"
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.hook }}
      >
        Django Built-in Modules
      </SvgText>
      <Line
        x1={30}
        y1={388}
        x2={465}
        y2={388}
        stroke={colors.hook}
        strokeWidth={0.5}
        strokeDasharray="4,2"
      />

      {[
        "django.db",
        "django.auth",
        "django.forms",
        "django.urls",
        "django.views",
        "django.admin",
      ].map((name, i) => {
        const bx = 22 + i * 76;
        return (
          <G key={i}>
            <Rect
              x={bx}
              y={394}
              width={70}
              height={18}
              rx={2}
              fill={colors.hookLight}
              stroke={colors.hook}
              strokeWidth={0.5}
            />
            <SvgText
              x={bx + 35}
              y={405}
              textAnchor="middle"
              style={{
                fontSize: 5.5,
                fontFamily: "Times-Roman",
                fill: colors.hook,
              }}
            >
              {name}
            </SvgText>
          </G>
        );
      })}

      {/* Legend */}
      <SvgText
        x={15}
        y={450}
        style={{ fontSize: 5.5, fontFamily: "Times-Bold", fill: colors.label }}
      >
        Legend:
      </SvgText>
      {[
        { x: 45, color: colors.layout, label: "Project" },
        { x: 95, color: colors.provider, label: "App" },
        { x: 130, color: colors.page, label: "Model/Tmpl" },
        { x: 195, color: colors.feature, label: "View/Util" },
        { x: 260, color: colors.ui, label: "UI" },
        { x: 295, color: colors.hook, label: "Module" },
      ].map((item, i) => (
        <G key={i}>
          <Rect
            x={item.x}
            y={443}
            width={10}
            height={10}
            rx={1}
            fill="none"
            stroke={item.color}
            strokeWidth={1}
          />
          <SvgText
            x={item.x + 14}
            y={451}
            style={{
              fontSize: 5.5,
              fontFamily: "Times-Roman",
              fill: colors.label,
            }}
          >
            {item.label}
          </SvgText>
        </G>
      ))}
    </Svg>
  );
}
