import React from "react";

export function ArcoPillar({ letter, name, description, index, onDark = false, interactive = false, active = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && (hover || active);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", gap: "var(--space-5)", alignItems: "flex-start",
        padding: "var(--space-6)", borderRadius: "var(--radius-sm)",
        background: onDark ? (lift ? "rgba(220,199,154,.07)" : "transparent") : lift ? "var(--white)" : "var(--surface-gold)",
        border: `1px solid ${onDark ? "var(--border-inverse)" : active ? "var(--gold-600)" : "var(--border-hairline)"}`,
        boxShadow: lift && !onDark ? "var(--shadow-md)" : "none",
        cursor: interactive ? "pointer" : "default", transition: "var(--transition-base)", ...style
      }}
    >
      <span
        aria-hidden="true"
        style={{
          flex: "0 0 auto", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, lineHeight: .9,
          color: onDark ? "var(--gold-400)" : "var(--gold-600)"
        }}
      >
        {letter === "A" ? "A" : String(letter).toLowerCase()}
      </span>
      <div>
        {index != null && (
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: onDark ? "var(--olive-200)" : "var(--text-muted)", marginBottom: 6 }}>
            Pilar {index}
          </div>
        )}
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h4)", letterSpacing: "var(--ls-heading)", color: onDark ? "var(--sand-50)" : "var(--text-title)", marginBottom: 6 }}>{name}</div>
        <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)", maxWidth: "42ch" }}>{description}</p>
      </div>
    </div>
  );
}
