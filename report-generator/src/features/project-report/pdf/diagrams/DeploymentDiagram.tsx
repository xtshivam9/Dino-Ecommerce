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
  const height = 520;

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

      {/* === CLIENT TIER === */}
      <SvgText x={8} y={42} style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}>CLIENT TIER</SvgText>
      <Line x1={8} y1={45} x2={487} y2={45} stroke="#dddddd" strokeWidth={0.5} />

      {/* === EDGE / CDN === */}
      <SvgText x={8} y={152} style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}>EDGE / CDN</SvgText>
      <Line x1={8} y1={155} x2={487} y2={155} stroke="#dddddd" strokeWidth={0.5} />

      {/* === APPLICATION TIER === */}
      <SvgText x={8} y={258} style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}>APPLICATION TIER</SvgText>
      <Line x1={8} y1={261} x2={487} y2={261} stroke="#dddddd" strokeWidth={0.5} />

      {/* === DATA / SERVICES TIER === */}
      <SvgText x={8} y={390} style={{ fontSize: 7, fontFamily: "Times-Bold", fill: colors.label }}>DATA / SERVICES TIER</SvgText>
      <Line x1={8} y1={393} x2={487} y2={393} stroke="#dddddd" strokeWidth={0.5} />

      {/* Client Tier boxes */}
      <Product x={40} y={55} w={120} h={70} fill={colors.client} stroke={colors.clientBorder} title="Web Browser" items={["HTML5 / CSS3", "Bootstrap 4 UI", "jQuery / AJAX"]} />
      <Product x={190} y={55} w={120} h={70} fill={colors.client} stroke={colors.clientBorder} title="Mobile Browser" items={["Responsive Layout", "Touch-optimized UI"]} />
      <Product x={340} y={55} w={120} h={70} fill={colors.client} stroke={colors.clientBorder} title="Payment Gateway" items={["Stripe Checkout", "Stripe Elements", "Card Validation"]} />

      {/* Edge / CDN boxes */}
      <Product x={90} y={165} w={150} h={70} fill={colors.cdn} stroke={colors.cdnBorder} title="Web Server (Gunicorn)" items={["WSGI Gateway", "Static File Serving", "SSL/TLS Termination"]} />
      <Product x={270} y={165} w={150} h={70} fill={colors.cdn} stroke={colors.cdnBorder} title="Nginx / CDN" items={["Reverse Proxy", "Static Assets", "WhiteNoise"]} />

      {/* Application Tier boxes */}
      <Product x={15} y={272} w={135} h={90} fill={colors.server} stroke={colors.serverBorder} title="Django App Server" items={["Django Views", "URL Dispatcher", "Allauth (Auth)", "Template Engine"]} />
      <Product x={175} y={272} w={135} h={90} fill={colors.server} stroke={colors.serverBorder} title="Order Processing" items={["Cart Management", "Stripe Charges", "Coupon Validation", "Refund Handler"]} />
      <Product x={335} y={272} w={145} h={90} fill={colors.server} stroke={colors.serverBorder} title="Background Tasks" items={["Email Notifications", "Inventory Updates", "Order Confirmations", "Admin Alerts"]} />

      {/* Data Tier boxes */}
      <Product x={10} y={403} w={110} h={70} fill={colors.db} stroke={colors.dbBorder} title="SQLite / PostgreSQL" items={["Primary Database", "Django ORM", "Migrations"]} />
      <Product x={138} y={403} w={110} h={70} fill={colors.db} stroke={colors.dbBorder} title="Media Storage" items={["Product Images", "User Uploads", "Static Assets"]} />
      <Product x={268} y={403} w={105} h={70} fill={colors.queue} stroke={colors.queueBorder} title="Stripe API" items={["Payment Intents", "Charge Objects", "Refund API"]} />
      <Product x={388} y={403} w={97} h={70} fill={colors.db} stroke={colors.dbBorder} title="Third-Party" items={["SMTP Email", "Allauth"]} />

      {/* Arrows - Client to Edge */}
      <Arrow x1={100} y1={125} x2={145} y2={165} label="HTTPS" labelX={110} labelY={146} />
      <Arrow x1={250} y1={125} x2={225} y2={165} label="HTTPS" labelX={250} labelY={146} />
      <Arrow x1={400} y1={125} x2={375} y2={165} label="Stripe JS" labelX={408} labelY={146} />

      {/* Edge to App */}
      <Arrow x1={155} y1={235} x2={100} y2={272} label="SSR/ISR" labelX={112} labelY={256} />
      <Arrow x1={205} y1={235} x2={245} y2={272} label="Events" labelX={238} labelY={256} />
      <Arrow x1={365} y1={235} x2={395} y2={272} label="Routes" labelX={398} labelY={256} />

      {/* App to Data */}
      <Arrow x1={82} y1={362} x2={65} y2={403} label="Django ORM" labelX={55} labelY={384} />
      <Arrow x1={245} y1={362} x2={193} y2={403} label="Files" labelX={228} labelY={384} />
      <Arrow x1={245} y1={362} x2={320} y2={403} label="Events" labelX={295} labelY={384} />
      <Arrow x1={407} y1={362} x2={437} y2={403} label="REST" labelX={435} labelY={384} />
    </Svg>
  );
}
