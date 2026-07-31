type FormXOgCardProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

function truncate(s: string, max: number) {
  return s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s;
}

export function FormXOgCard({ eyebrow, title, subtitle }: FormXOgCardProps) {
  const titleSize =
    title.length > 44 ? 52 : title.length > 28 ? 60 : 72;

  return (
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
          maxWidth: 1140,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 52, height: 4, background: "#de3024" }} />
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.28em",
              color: "#de3024",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            fontSize: titleSize,
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          {title}
        </div>

        {subtitle ? (
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.6)",
              marginTop: 24,
              maxWidth: 980,
            }}
          >
            {truncate(subtitle, 110)}
          </div>
        ) : null}

        <div style={{ display: "flex", alignItems: "baseline", marginTop: 36 }}>
          <div style={{ fontSize: 30, fontWeight: 900, color: "#ffffff" }}>
            FORM
          </div>
          <div style={{ fontSize: 30, fontWeight: 900, color: "#de3024" }}>
            X
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              marginLeft: 16,
            }}
          >
            CONSULTANTS
          </div>
        </div>
      </div>
    </div>
  );
}
