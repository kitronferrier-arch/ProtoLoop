import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#080b12",
          color: "#e7ecfa",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ color: "#5b8cff", letterSpacing: "0.24em", fontSize: 24 }}>VENTURE SYSTEMS STUDIO</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700 }}>ProtoLoop</div>
          <div style={{ marginTop: 16, fontSize: 34, color: "#b6bed4" }}>
            Structured feedback loops for venture momentum.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
