import {
  Svg,
  G,
  Rect,
  Text as SvgText,
  Line,
  Polygon,
} from "@react-pdf/renderer";

/**
 * System Architecture Diagram - 5-Layer architecture for Dino-Ecommerce
 * Django MVT e-commerce platform with Stripe integration
 */
export default function SystemArchitecture() {
  const width = 495;
  const height = 440;

  const layerX = 10;
  const layerW = 310;
  const layerH = 52;
  const layerGap = 18;
  const labelW = 90;
  const compW = 64;
  const compGap = 5;
  const compStartX = layerX + labelW + 5;

  const extX = 345;
  const extW = 140;
  const extH = 38;

  const layers = [
    {
      label: "Client Layer",
      color: "#2563eb",
      bgColor: "#eff6ff",
      components: ["Web Browser", "HTML/CSS/JS", "Bootstrap 4"],
    },
    {
      label: "Presentation",
      color: "#7c3aed",
      bgColor: "#f5f3ff",
      components: ["Django Templates", "Template Tags", "Static Files"],
    },
    {
      label: "URL Routing",
      color: "#0891b2",
      bgColor: "#ecfeff",
      components: ["URL Dispatcher", "View Functions", "Middleware"],
    },
    {
      label: "Business Logic",
      color: "#059669",
      bgColor: "#f0fdf4",
      components: ["Cart Manager", "Order Processor", "Coupon Engine"],
    },
    {
      label: "Data Layer",
      color: "#d97706",
      bgColor: "#fffbeb",
      components: ["Django ORM", "SQLite / PostgreSQL", "Migrations"],
    },
  ];

  const externals = [
    { label: "Stripe Payment Gateway", color: "#6366f1", yIdx: 1 },
    { label: "Django Allauth (Auth)", color: "#059669", yIdx: 2 },
    { label: "Pillow (Image Processing)", color: "#d97706", yIdx: 3 },
    { label: "Email (SMTP / Console)", color: "#dc2626", yIdx: 4 },
  ];

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* External Services header */}
      <SvgText
        x={extX + extW / 2}
        y={18}
        textAnchor="middle"
        style={{ fontSize: 8, fontFamily: "Times-Bold", fill: "#555" }}
      >
        External Services
      </SvgText>
      <Line
        x1={extX + 15}
        y1={22}
        x2={extX + extW - 15}
        y2={22}
        stroke="#ddd"
        strokeWidth={0.5}
      />

      {/* Layers */}
      {layers.map((layer, i) => {
        const y = 30 + i * (layerH + layerGap);
        return (
          <G key={i}>
            <Rect
              x={layerX}
              y={y}
              width={layerW}
              height={layerH}
              rx={5}
              fill={layer.bgColor}
              stroke={layer.color}
              strokeWidth={1.5}
            />
            <Rect
              x={layerX}
              y={y}
              width={labelW}
              height={layerH}
              rx={5}
              fill={layer.color}
            />
            <Rect
              x={layerX + labelW - 5}
              y={y}
              width={5}
              height={layerH}
              fill={layer.color}
            />
            <SvgText
              x={layerX + labelW / 2}
              y={y + layerH / 2 + 3}
              textAnchor="middle"
              style={{
                fontSize: 7.5,
                fontFamily: "Times-Bold",
                fill: "white",
              }}
            >
              {layer.label}
            </SvgText>
            {layer.components.map((comp, j) => {
              const cx = compStartX + j * (compW + compGap);
              return (
                <G key={j}>
                  <Rect
                    x={cx}
                    y={y + 8}
                    width={compW}
                    height={layerH - 16}
                    rx={3}
                    fill="white"
                    stroke={layer.color}
                    strokeWidth={0.7}
                  />
                  <SvgText
                    x={cx + compW / 2}
                    y={y + layerH / 2 + 3}
                    textAnchor="middle"
                    style={{
                      fontSize: 6,
                      fontFamily: "Times-Roman",
                      fill: "#333",
                    }}
                  >
                    {comp}
                  </SvgText>
                </G>
              );
            })}
            {i < layers.length - 1 && (
              <G>
                <Line
                  x1={layerX + layerW / 2}
                  y1={y + layerH}
                  x2={layerX + layerW / 2}
                  y2={y + layerH + layerGap - 3}
                  stroke="#999"
                  strokeWidth={1.2}
                />
                <Polygon
                  points={`${layerX + layerW / 2 - 4},${y + layerH + layerGap - 7} ${layerX + layerW / 2},${y + layerH + layerGap - 2} ${layerX + layerW / 2 + 4},${y + layerH + layerGap - 7}`}
                  fill="#999"
                />
              </G>
            )}
          </G>
        );
      })}

      {/* External service boxes */}
      {externals.map((ext, i) => {
        const layerY = 30 + ext.yIdx * (layerH + layerGap);
        const ey = layerY + (layerH - extH) / 2;
        return (
          <G key={`ext-${i}`}>
            <Rect
              x={extX}
              y={ey}
              width={extW}
              height={extH}
              rx={4}
              fill="white"
              stroke={ext.color}
              strokeWidth={1}
            />
            <SvgText
              x={extX + extW / 2}
              y={ey + extH / 2 + 3}
              textAnchor="middle"
              style={{
                fontSize: 6.5,
                fontFamily: "Times-Bold",
                fill: ext.color,
              }}
            >
              {ext.label}
            </SvgText>
            <Line
              x1={layerX + layerW + 2}
              y1={layerY + layerH / 2}
              x2={extX - 3}
              y2={ey + extH / 2}
              stroke="#ccc"
              strokeWidth={1}
              strokeDasharray="4,3"
            />
            <Polygon
              points={`${extX - 3},${ey + extH / 2} ${extX - 8},${ey + extH / 2 - 3} ${extX - 8},${ey + extH / 2 + 3}`}
              fill="#ccc"
            />
          </G>
        );
      })}

      {/* Caption */}
      <SvgText
        x={width / 2}
        y={height - 10}
        textAnchor="middle"
        style={{ fontSize: 10, fontFamily: "Times-Bold", fill: "#333" }}
      >
        Figure: System Architecture — Django MVT Layered Design
      </SvgText>
    </Svg>
  );
}
