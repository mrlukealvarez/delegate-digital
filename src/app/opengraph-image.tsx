import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Delegate Digital — Black Hills Consortium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #162440 50%, #0a1628 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "bold", color: "#0a1628" }}>D</div>
          <div style={{ fontSize: "48px", fontWeight: "bold", color: "#e2e8f0" }}>Delegate Digital</div>
        </div>
        <div style={{ fontSize: "20px", color: "#94a3b8", marginBottom: "32px" }}>AI-Native Digital Marketing Agency</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#22c55e" }}>
          <span>Black Hills Consortium</span>
          <span style={{ color: "#475569" }}>•</span>
          <span style={{ color: "#64748b" }}>13-Entity Holding Company</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
