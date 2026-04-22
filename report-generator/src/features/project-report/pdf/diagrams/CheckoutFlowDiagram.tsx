import {
  Svg,
  G,
  Rect,
  Text as SvgText,
  Line,
  Polygon,
  Circle,
} from "@react-pdf/renderer";

/**
 * Checkout Flow Diagram - E-Commerce Payment Processing
 * Shows the complete flow from cart to payment confirmation
 */
export default function CheckoutFlowDiagram() {
  const width = 495;
  const height = 380;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Background */}
      <Rect width={width} height={height} fill="#ffffff" stroke="#cccccc" strokeWidth={1} />

      {/* Title */}
      <SvgText
        x={width / 2}
        y={20}
        fontSize={12}
        fontFamily="Times-Bold"
        textAnchor="middle"
        fill="#000000"
      >
        Checkout & Payment Flow
      </SvgText>

      {/* Step 1: Shopping Cart */}
      <Rect x={30} y={50} width={100} height={50} fill="#e3f2fd" stroke="#1976d2" strokeWidth={2} rx={5} />
      <SvgText
        x={80}
        y={70}
        fontSize={10}
        fontFamily="Times-Bold"
        textAnchor="middle"
        fill="#000000"
      >
        Shopping
      </SvgText>
      <SvgText x={80} y={85} fontSize={10} fontFamily="Times-Bold" textAnchor="middle" fill="#000000">
        Cart
      </SvgText>

      {/* Arrow 1 */}
      <Line x1={130} y1={75} x2={170} y2={75} stroke="#333333" strokeWidth={2} />
      <Polygon
        points="170,75 165,72 165,78"
        fill="#333333"
      />

      {/* Step 2: Checkout Form */}
      <Rect x={170} y={50} width={100} height={50} fill="#f3e5f5" stroke="#7b1fa2" strokeWidth={2} rx={5} />
      <SvgText
        x={220}
        y={70}
        fontSize={10}
        fontFamily="Times-Bold"
        textAnchor="middle"
        fill="#000000"
      >
        Checkout
      </SvgText>
      <SvgText x={220} y={85} fontSize={10} fontFamily="Times-Bold" textAnchor="middle" fill="#000000">
        Address & Payment
      </SvgText>

      {/* Arrow 2 */}
      <Line x1={270} y1={75} x2={310} y2={75} stroke="#333333" strokeWidth={2} />
      <Polygon
        points="310,75 305,72 305,78"
        fill="#333333"
      />

      {/* Step 3: Stripe Payment */}
      <Rect x={310} y={50} width={100} height={50} fill="#fff3e0" stroke="#f57c00" strokeWidth={2} rx={5} />
      <SvgText
        x={360}
        y={70}
        fontSize={10}
        fontFamily="Times-Bold"
        textAnchor="middle"
        fill="#000000"
      >
        Stripe
      </SvgText>
      <SvgText x={360} y={85} fontSize={10} fontFamily="Times-Bold" textAnchor="middle" fill="#000000">
        Payment Gateway
      </SvgText>

      {/* Arrow down from Stripe */}
      <Line x1={360} y1={100} x2={360} y2={140} stroke="#333333" strokeWidth={2} />
      <Polygon
        points="360,140 357,135 363,135"
        fill="#333333"
      />

      {/* Decision: Payment Success? */}
      <Polygon
        points="360,140 410,170 360,200 310,170"
        fill="#fff9c4"
        stroke="#f9a825"
        strokeWidth={2}
      />
      <SvgText
        x={360}
        y={175}
        fontSize={9}
        fontFamily="Times-Bold"
        textAnchor="middle"
        fill="#000000"
      >
        Payment
      </SvgText>
      <SvgText x={360} y={187} fontSize={9} fontFamily="Times-Bold" textAnchor="middle" fill="#000000">
        Success?
      </SvgText>

      {/* Yes Path: Order Confirmation */}
      <Line x1={410} y1={170} x2={450} y2={170} stroke="#2e7d32" strokeWidth={2} />
      <SvgText x={425} y={165} fontSize={8} fontFamily="Times-Bold" fill="#2e7d32">
        Yes
      </SvgText>

      <Rect x={450} y={150} width={35} height={40} fill="#e8f5e9" stroke="#2e7d32" strokeWidth={2} rx={3} />
      <SvgText
        x={467}
        y={172}
        fontSize={9}
        fontFamily="Times-Bold"
        textAnchor="middle"
        fill="#2e7d32"
      >
        Order
      </SvgText>
      <SvgText x={467} y={183} fontSize={9} fontFamily="Times-Bold" textAnchor="middle" fill="#2e7d32">
        Created
      </SvgText>

      {/* No Path: Error */}
      <Line x1={360} y1={200} x2={360} y2={240} stroke="#d32f2f" strokeWidth={2} />
      <SvgText x={375} y={215} fontSize={8} fontFamily="Times-Bold" fill="#d32f2f">
        No
      </SvgText>

      <Rect x={310} y={240} width={100} height={40} fill="#ffebee" stroke="#d32f2f" strokeWidth={2} rx={3} />
      <SvgText
        x={360}
        y={260}
        fontSize={9}
        fontFamily="Times-Bold"
        textAnchor="middle"
        fill="#d32f2f"
      >
        Payment Failed
      </SvgText>
      <SvgText x={360} y={271} fontSize={9} fontFamily="Times-Bold" textAnchor="middle" fill="#d32f2f">
        Display Error
      </SvgText>

      {/* Bottom: Django Models Involved */}
      <SvgText
        x={20}
        y={330}
        fontSize={8}
        fontFamily="Times-Italic"
        fill="#666666"
      >
        Django Models: Order → OrderItem → BillingAddress → Payment
      </SvgText>

      {/* Payment Options */}
      <SvgText
        x={20}
        y={350}
        fontSize={8}
        fontFamily="Times-Italic"
        fill="#666666"
      >
        Stripe Live | Stripe Test | PayPal | Dummy Payment (Testing)
      </SvgText>

      {/* Refund Flow */}
      <SvgText
        x={20}
        y={370}
        fontSize={8}
        fontFamily="Times-Italic"
        fill="#666666"
      >
        Post-Order: Refund requests tracked via Refund model
      </SvgText>
    </Svg>
  );
}
