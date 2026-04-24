import { Svg, G, Rect, Text as SvgText, Line } from "@react-pdf/renderer";

/**
 * SWOT Analysis Diagram - 2x2 matrix with clear headers
 * Fixed: No center overlap, proper INTERNAL/EXTERNAL column headers
 */
export default function SWOTDiagram() {
  const width = 495;
  const height = 370;
  const cx = width / 2;

  const quadW = 210;
  const quadH = 140;
  const gap = 4;
  const startX = 55;
  const startY = 50;

  const quadrants = [
    {
      title: "STRENGTHS",
      color: "#059669",
      bgColor: "#f0fdf4",
      x: startX,
      y: startY,
      items: [
        "Modern tech stack (Django 5.0, Bootstrap 4)",
        "Secure payment via Stripe integration",
        "Built-in Django Admin for management",
        "Django's robust security (CSRF, XSS, SQL Inj.)",
        "Open-source with full data ownership",
        "Responsive mobile-friendly design",
      ],
    },
    {
      title: "WEAKNESSES",
      color: "#d97706",
      bgColor: "#fffbeb",
      x: startX + quadW + gap,
      y: startY,
      items: [
        "Single-vendor architecture initially",
        "No dedicated mobile application",
        "Limited to single developer resources",
        "No real-time inventory sync",
        "Basic search (no Elasticsearch)",
      ],
    },
    {
      title: "OPPORTUNITIES",
      color: "#2563eb",
      bgColor: "#eff6ff",
      x: startX,
      y: startY + quadH + gap,
      items: [
        "Growing Indian e-commerce market ($325B by 2030)",
        "SME digital adoption rapidly accelerating",
        "REST API expansion for mobile apps",
        "Multi-vendor marketplace extension",
        "ML-based product recommendation engine",
      ],
    },
    {
      title: "THREATS",
      color: "#dc2626",
      bgColor: "#fef2f2",
      x: startX + quadW + gap,
      y: startY + quadH + gap,
      items: [
        "Established competitors (Shopify, WooCommerce)",
        "Rapid technology changes in frontend",
        "Stripe API pricing / policy changes",
        "PCI-DSS compliance complexities",
        "Market saturation in e-commerce platforms",
      ],
    },
  ];

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Column headers */}
      <SvgText
        x={startX + quadW / 2}
        y={20}
        textAnchor="middle"
        style={{ fontSize: 8, fontFamily: "Times-Bold", fill: "#666" }}
      >
        INTERNAL
      </SvgText>
      <SvgText
        x={startX + quadW + gap + quadW / 2}
        y={20}
        textAnchor="middle"
        style={{ fontSize: 8, fontFamily: "Times-Bold", fill: "#666" }}
      >
        EXTERNAL
      </SvgText>

      {/* Row labels */}
      <SvgText
        x={startX - 8}
        y={startY + quadH / 2}
        textAnchor="end"
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: "#059669" }}
      >
        POSITIVE
      </SvgText>
      <SvgText
        x={startX - 8}
        y={startY + quadH + gap + quadH / 2}
        textAnchor="end"
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: "#dc2626" }}
      >
        NEGATIVE
      </SvgText>

      {/* Separator lines */}
      <Line
        x1={startX}
        y1={30}
        x2={startX + 2 * quadW + gap}
        y2={30}
        stroke="#ddd"
        strokeWidth={0.5}
      />

      {/* Quadrants */}
      {quadrants.map((q, i) => (
        <G key={i}>
          {/* Background */}
          <Rect
            x={q.x}
            y={q.y}
            width={quadW}
            height={quadH}
            rx={5}
            fill={q.bgColor}
            stroke={q.color}
            strokeWidth={1.5}
          />
          {/* Title */}
          <SvgText
            x={q.x + 10}
            y={q.y + 16}
            style={{
              fontSize: 9,
              fontFamily: "Times-Bold",
              fill: q.color,
            }}
          >
            {q.title}
          </SvgText>
          {/* Divider */}
          <Line
            x1={q.x + 8}
            y1={q.y + 22}
            x2={q.x + quadW - 8}
            y2={q.y + 22}
            stroke={q.color}
            strokeWidth={0.5}
            opacity={0.4}
          />
          {/* Items */}
          {q.items.map((item, j) => (
            <G key={`item-${j}`}>
              <Rect
                x={q.x + 12}
                y={q.y + 29 + j * 17}
                width={5}
                height={5}
                rx={1}
                fill={q.color}
              />
              <SvgText
                x={q.x + 22}
                y={q.y + 34 + j * 17}
                style={{
                  fontSize: 7,
                  fontFamily: "Times-Roman",
                  fill: "#333",
                }}
              >
                {item}
              </SvgText>
            </G>
          ))}
        </G>
      ))}

      {/* Caption */}
      <SvgText
        x={cx}
        y={height - 10}
        textAnchor="middle"
        style={{ fontSize: 10, fontFamily: "Times-Bold", fill: "#333" }}
      >
        Figure: SWOT Analysis — Dino-Ecommerce Project
      </SvgText>
    </Svg>
  );
}
