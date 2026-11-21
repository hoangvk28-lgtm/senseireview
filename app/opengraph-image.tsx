export const dynamic = "force-static";

import { ImageResponse } from "next/og";

export const alt = "SenseiReview: independent product research and reviews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 88, background: "#F5F1E8", color: "#222A32" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ width: 140, height: 140, background: "#222A32", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <span style={{ color: "#F5F1E8", fontSize: 140, fontWeight: 900, marginRight: 16, marginTop: -6 }}>S</span>
            <div style={{ position: "absolute", right: 14, bottom: 22, width: 30, height: 30, borderRadius: 15, background: "#B94A3A" }} />
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>
            <span>Sensei</span>
            <span style={{ color: "#B94A3A" }}>Review</span>
          </div>
        </div>
        <div style={{ marginTop: 48, fontSize: 52, fontWeight: 700, letterSpacing: -1 }}>Know Better. Choose Better.</div>
        <div style={{ marginTop: 14, fontSize: 32, color: "#4F5861" }}>Independent product research and reviews.</div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 18, display: "flex", background: "#B94A3A" }} />
      </div>
    ),
    { ...size }
  );
}
