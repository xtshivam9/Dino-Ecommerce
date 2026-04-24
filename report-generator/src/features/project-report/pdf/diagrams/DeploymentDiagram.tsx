/**
 * Deployment Architecture Diagram
 * Shows cloud infrastructure and deployment topology
 * For Chapter 8 (Implementation) - Deployment section
 */
import {
  Svg,
  Rect,
  Text as SvgText,
  Line,
  G,
  Circle,
} from "@react-pdf/renderer";

export default function DeploymentDiagram() {
  const width = 495;
  const height = 420;

  // Colors
  const colors = {
    client: "#E3F2FD",
    clientBorder: "#1565C0",
    cdn: "#FFF3E0",
    cdnBorder: "#E65100",
    server: "#E8F5E9",
    serverBorder: "#2E7D32",
    db: "#F3E5F5",
    dbBorder: "#6A1B9A",
    queue: "#FFF8E1",
    queueBorder: "#F57F17",
    text: "#1a1a1a",
    label: "#666666",
    arrow: "#555555",
  };

  // Helper: draw a deployment product box
  const Product = ({
    x,
    y,
    w,
    h,
    fill,
    stroke,
    title,
    items,
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    fill: string;
    stroke: string;
    title: string;
    items: string[];
  }) => (
    <G>
      <Rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
      <Rect x={x} y={y} width={w} height={18} rx={4} fill={stroke} />
      <SvgText
        x={x + w / 2}
        y={y + 12}
        textAnchor="middle"
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: "#ffffff" }}
      >
        {title}
      </SvgText>
      {items.map((item, i) => (
        <SvgText
          key={i}
          x={x + w / 2}
          y={y + 30 + i * 12}
          textAnchor="middle"
          style={{
            fontSize: 6.5,
            fontFamily: "Times-Roman",
            fill: colors.text,
          }}
        >
          {item}
        </SvgText>
      ))}
    </G>
  );

  // Arrow helper
  const Arrow = ({
    x1,
    y1,
    x2,
    y2,
    label,
    labelX,
    labelY,
  }: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    label?: string;
    labelX?: number;
    labelY?: number;
  }) => (
    <G>
      <Line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={colors.arrow}
        strokeWidth={1}
        strokeDasharray="3,2"
      />
      {/* Arrowhead */}
      <Circle cx={x2} cy={y2} r={2} fill={colors.arrow} />
      {label && (
        <SvgText
          x={labelX || (x1 + x2) / 2}
          y={labelY || (y1 + y2) / 2 - 4}
          textAnchor="middle"
          style={{
            fontSize: 5.5,
            fontFamily: "Times-Italic",
            fill: colors.label,
          }}
        >
          {label}
        </SvgText>
      )}
    </G>
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
        Deployment Architecture
      </SvgText>

      {/* Layer Labels */}
      <SvgText
        x={8}
        y={42}
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}
      >
        CLIENT TIER
      </SvgText>
      <Line
        x1={8}
        y1={45}
        x2={487}
        y2={45}
        stroke="#dddddd"
        strokeWidth={0.5}
      />

      <SvgText
        x={8}
        y={132}
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}
      >
        EDGE / CDN
      </SvgText>
      <Line
        x1={8}
        y1={135}
        x2={487}
        y2={135}
        stroke="#dddddd"
        strokeWidth={0.5}
      />

      <SvgText
        x={8}
        y={222}
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}
      >
        APPLICATION TIER
      </SvgText>
      <Line
        x1={8}
        y1={225}
        x2={487}
        y2={225}
        stroke="#dddddd"
        strokeWidth={0.5}
      />

      <SvgText
        x={8}
        y={332}
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}
      >
        DATA / SERVICES TIER
      </SvgText>
      <Line
        x1={8}
        y1={335}
        x2={487}
        y2={335}
        stroke="#dddddd"
        strokeWidth={0.5}
      />

      {/* Client Tier */}
      <Product
        x={40}
        y={52}
        w={120}
        h={65}
        fill={colors.client}
        stroke={colors.clientBorder}
        title="Web Browser"
        items={["HTML5 / CSS3", "Bootstrap 4 UI", "jQuery / AJAX"]}
      />
      <Product
        x={190}
        y={52}
        w={120}
        h={65}
        fill={colors.client}
        stroke={colors.clientBorder}
        title="Mobile Browser"
        items={["Responsive Layout", "Touch-optimized UI"]}
      />
      <Product
        x={340}
        y={52}
        w={120}
        h={65}
        fill={colors.client}
        stroke={colors.clientBorder}
        title="Payment Gateway"
        items={["Stripe Checkout", "Stripe Elements", "Card Validation"]}
      />

      {/* Edge / CDN */}
      <Product
        x={100}
        y={142}
        w={150}
        h={65}
        fill={colors.cdn}
        stroke={colors.cdnBorder}
        title="Web Server (Gunicorn)"
        items={["WSGI Gateway", "Static File Serving", "SSL/TLS Termination"]}
      />
      <Product
        x={280}
        y={142}
        w={150}
        h={65}
        fill={colors.cdn}
        stroke={colors.cdnBorder}
        title="Nginx / CDN"
        items={["Reverse Proxy", "Static Assets", "WhiteNoise"]}
      />

      {/* Application Tier */}
      <Product
        x={20}
        y={235}
        w={130}
        h={80}
        fill={colors.server}
        stroke={colors.serverBorder}
        title="Django App Server"
        items={[
          "Django Views",
          "URL Dispatcher",
          "Allauth (Auth)",
          "Template Engine",
        ]}
      />
      <Product
        x={170}
        y={235}
        w={130}
        h={80}
        fill={colors.server}
        stroke={colors.serverBorder}
        title="Order Processing"
        items={[
          "Cart Management",
          "Stripe Charges",
          "Coupon Validation",
          "Refund Handler",
        ]}
      />
      <Product
        x={320}
        y={235}
        w={150}
        h={80}
        fill={colors.server}
        stroke={colors.serverBorder}
        title="Background Tasks"
        items={[
          "Email Notifications",
          "Inventory Updates",
          "Order Confirmations",
          "Admin Alerts",
        ]}
      />

      {/* Data Tier */}
      <Product
        x={20}
        y={345}
        w={110}
        h={60}
        fill={colors.db}
        stroke={colors.dbBorder}
        title="SQLite / PostgreSQL"
        items={["Primary Database", "Django ORM", "Migrations"]}
      />
      <Product
        x={150}
        y={345}
        w={110}
        h={60}
        fill={colors.db}
        stroke={colors.dbBorder}
        title="Media Storage"
        items={["Product Images", "User Uploads", "Static Assets"]}
      />
      <Product
        x={280}
        y={345}
        w={100}
        h={60}
        fill={colors.queue}
        stroke={colors.queueBorder}
        title="Stripe API"
        items={["Payment Intents", "Charge Objects", "Refund API"]}
      />
      <Product
        x={400}
        y={345}
        w={80}
        h={60}
        fill={colors.db}
        stroke={colors.dbBorder}
        title="Third-Party"
        items={["SMTP Email", "Allauth"]}
      />

      {/* Arrows - Client to Edge */}
      <Arrow
        x1={100}
        y1={117}
        x2={150}
        y2={142}
        label="HTTPS"
        labelX={110}
        labelY={130}
      />
      <Arrow
        x1={250}
        y1={117}
        x2={220}
        y2={142}
        label="HTTPS"
        labelX={250}
        labelY={130}
      />
      <Arrow
        x1={400}
        y1={117}
        x2={380}
        y2={142}
        label="Stripe JS"
        labelX={405}
        labelY={130}
      />

      {/* Edge to App */}
      <Arrow
        x1={155}
        y1={207}
        x2={100}
        y2={235}
        label="SSR/ISR"
        labelX={112}
        labelY={222}
      />
      <Arrow
        x1={200}
        y1={207}
        x2={235}
        y2={235}
        label="Events"
        labelX={230}
        labelY={222}
      />
      <Arrow
        x1={380}
        y1={207}
        x2={395}
        y2={235}
        label="Routes"
        labelX={400}
        labelY={222}
      />

      {/* App to Data */}
      <Arrow
        x1={85}
        y1={315}
        x2={75}
        y2={345}
        label="Django ORM"
        labelX={65}
        labelY={332}
      />
      <Arrow
        x1={235}
        y1={315}
        x2={205}
        y2={345}
        label="Files"
        labelX={230}
        labelY={332}
      />
      <Arrow
        x1={235}
        y1={315}
        x2={330}
        y2={345}
        label="Events"
        labelX={295}
        labelY={332}
      />
      <Arrow
        x1={395}
        y1={315}
        x2={440}
        y2={345}
        label="REST"
        labelX={430}
        labelY={332}
      />
    </Svg>
  );
}
