import { ImageResponse } from "next/og";

export const alt = "FormX Consultants — Architecture, Structure & Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0c0c0c",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 18,
            height: "100%",
            background: "#de3024",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -30,
            top: -90,
            fontSize: 520,
            fontWeight: 900,
            lineHeight: 1,
            color: "rgba(222,48,36,0.14)",
          }}
        >
          ×
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: "0 96px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 30,
            }}
          >
            <div style={{ width: 52, height: 4, background: "#de3024" }} />
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: "#de3024",
              }}
            >
              DESIGN · ENGINEERING
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 150,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            FORM<span style={{ color: "#de3024" }}>X</span>
          </div>

          <div
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: "rgba(255,255,255,0.65)",
              marginTop: 26,
            }}
          >
            Architecture · Structure · Infrastructure
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.38)",
              marginTop: 14,
            }}
          >
            CONSTRUCTION-READY INDUSTRIAL DESIGN
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
