import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kanav Modi — Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          fontFamily: "Inter, sans-serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            marginBottom: "20px",
            color: "#ffffff",
          }}
        >
          Kanav Modi
        </div>
        <div
          style={{
            fontSize: "40px",
            color: "#a3a3a3",
            fontWeight: 500,
          }}
        >
          Software Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
