import {
  Svg,
  G,
  Rect,
  Text as SvgText,
  Line,
  Circle,
} from "@react-pdf/renderer";

/**
 * Arowai Ecommerce 1.0 vs Competitors Comparison Radar
 * Used in Chapter 2 Problem Statement
 */
export default function ComparisonRadar() {
  const width = 460;
  const height = 310;
  const cx = width / 2;
  const cy = 155;
  const maxR = 100;

  const dimensions = [
    { label: "Ease of Use", dino: 8, competitor: 5 },
    { label: "Payment Integration", dino: 9, competitor: 5 },
    { label: "Customization", dino: 9, competitor: 6 },
    { label: "Security", dino: 8, competitor: 7 },
    { label: "Performance", dino: 8, competitor: 6 },
  ];

  const n = dimensions.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  const getPoint = (index: number, value: number) => {
    const angle = startAngle + index * angleStep;
    const r = (value / 10) * maxR;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const rings = [2, 4, 6, 8, 10];

  const dinoPoints = dimensions.map((d, i) => getPoint(i, d.dino));
  const competitorPoints = dimensions.map((d, i) => getPoint(i, d.competitor));

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Title */}
      <SvgText
        x={cx}
        y={16}
        textAnchor="middle"
        style={{ fontSize: 10, fontFamily: "Times-Bold", fill: "#333" }}
      >
        Feature Comparison Radar: Arowai Ecommerce 1.0 vs Shopify/WooCommerce
      </SvgText>

      {/* Grid rings */}
      {rings.map((level) => {
        const pts = Array.from({ length: n }, (_, i) => getPoint(i, level));
        return (
          <G key={`ring-${level}`}>
            {pts.map((p, i) => {
              const next = pts[(i + 1) % n];
              return (
                <Line
                  key={`rline-${level}-${i}`}
                  x1={p.x}
                  y1={p.y}
                  x2={next.x}
                  y2={next.y}
                  stroke={level === 10 ? "#cbd5e1" : "#e2e8f0"}
                  strokeWidth={level === 10 ? 1 : 0.5}
                />
              );
            })}
          </G>
        );
      })}

      {/* Axis lines */}
      {dimensions.map((_, i) => {
        const outer = getPoint(i, 10);
        return (
          <Line
            key={`axis-${i}`}
            x1={cx}
            y1={cy}
            x2={outer.x}
            y2={outer.y}
            stroke="#cbd5e1"
            strokeWidth={0.5}
          />
        );
      })}

      {/* Competitor polygon (draw first so Dino overlays) */}
      {competitorPoints.map((p, i) => {
        const next = competitorPoints[(i + 1) % n];
        return (
          <Line
            key={`comp-line-${i}`}
            x1={p.x}
            y1={p.y}
            x2={next.x}
            y2={next.y}
            stroke="#f59e0b"
            strokeWidth={1.5}
            strokeDasharray="4,3"
          />
        );
      })}

      {/* Arowai Ecommerce 1.0 polygon */}
      {dinoPoints.map((p, i) => {
        const next = dinoPoints[(i + 1) % n];
        return (
          <Line
            key={`dino-line-${i}`}
            x1={p.x}
            y1={p.y}
            x2={next.x}
            y2={next.y}
            stroke="#3b82f6"
            strokeWidth={1.5}
          />
        );
      })}

      {/* Data points — Competitor */}
      {competitorPoints.map((p, i) => (
        <G key={`comp-pt-${i}`}>
          <Circle cx={p.x} cy={p.y} r={3} fill="#f59e0b" />
        </G>
      ))}

      {/* Data points — Arowai Ecommerce 1.0 */}
      {dinoPoints.map((p, i) => (
        <G key={`dino-pt-${i}`}>
          <Circle cx={p.x} cy={p.y} r={3.5} fill="#3b82f6" />
          <Circle cx={p.x} cy={p.y} r={2} fill="#ffffff" />
        </G>
      ))}

      {/* Dimension labels */}
      {dimensions.map((d, i) => {
        const labelPt = getPoint(i, 12);
        return (
          <SvgText
            key={`lbl-${i}`}
            x={labelPt.x}
            y={labelPt.y + 3}
            textAnchor="middle"
            style={{ fontSize: 7, fontFamily: "Times-Bold", fill: "#374151" }}
          >
            {d.label}
          </SvgText>
        );
      })}

      {/* Legend */}
      <Rect x={cx - 80} y={height - 25} width={10} height={3} fill="#3b82f6" />
      <SvgText
        x={cx - 66}
        y={height - 20}
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: "#3b82f6" }}
      >
        Arowai Ecommerce 1.0
      </SvgText>
      <Line
        x1={cx + 10}
        y1={height - 23}
        x2={cx + 20}
        y2={height - 23}
        stroke="#f59e0b"
        strokeWidth={1.5}
        strokeDasharray="4,3"
      />
      <SvgText
        x={cx + 24}
        y={height - 20}
        style={{ fontSize: 7, fontFamily: "Times-Bold", fill: "#f59e0b" }}
      >
        Competitors
      </SvgText>
      <SvgText
        x={cx}
        y={height - 8}
        textAnchor="middle"
        style={{ fontSize: 6.5, fill: "#999" }}
      >
        Scale: 1 (Poor) — 10 (Excellent)
      </SvgText>
    </Svg>
  );
}
