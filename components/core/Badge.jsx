import React from "react";

const tones = {
  olive: { background: "var(--olive-50)", color: "var(--olive-700)", border: "var(--olive-200)" },
  gold: { background: "var(--gold-50)", color: "var(--gold-800)", border: "var(--gold-300)" },
  success: { background: "var(--success-100)", color: "var(--success-600)", border: "rgba(92,122,60,.3)" },
  warning: { background: "var(--warning-100)", color: "var(--warning-600)", border: "rgba(165,134,71,.35)" },
  danger: { background: "var(--danger-100)", color: "var(--danger-600)", border: "rgba(158,58,42,.28)" },
  neutral: { background: "var(--sand-100)", color: "var(--text-muted)", border: "var(--sand-300)" },
  onDark: { background: "rgba(220,199,154,.12)", color: "var(--gold-300)", border: "var(--border-inverse)" }
};

export function Badge({ children, tone = "olive", solid = false, dot = false, style, ...rest }) {
  const t = tones[tone] || tones.olive;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
        padding: "4px 10px", borderRadius: "var(--radius-xs)",
        fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", lineHeight: 1.5,
        background: solid ? t.color : t.background, color: solid ? "var(--sand-50)" : t.color,
        border: `1px solid ${solid ? "transparent" : t.border}`, ...style
      }}
      {...rest}
    >
      {dot && <span style={{ width: 5, height: 5, borderRadius: "var(--radius-pill)", background: "currentColor" }} />}
      {children}
    </span>
  );
}
