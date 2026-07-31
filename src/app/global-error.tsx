"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          backgroundColor: "#0c0c0c",
          color: "#ffffff",
          fontFamily:
            "Arial, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.28em",
            fontWeight: 700,
            color: "#de3024",
          }}
        >
          ERROR
        </div>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            margin: "16px 0 8px",
            letterSpacing: "-0.02em",
          }}
        >
          Something went wrong
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 420,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          An unexpected error occurred while loading FormX. Please try again.
        </p>
        {error.digest ? (
          <p style={{ margin: "16px 0 0", fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            Ref: {error.digest}
          </p>
        ) : null}
        <button
          type="button"
          onClick={() => unstable_retry()}
          style={{
            marginTop: 28,
            background: "#de3024",
            border: "none",
            color: "#ffffff",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding: "12px 28px",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
