import React from "react";

export function StatBlock({ value, label, note, align = "left", onDark = false, style }) {
  return (
    <div style={{ textAlign: align, ...style }}>
      <div style={{ fontFamily: "var(--font-serif)", fontWeight: "var(--fw-semibold)", fontSize: "clamp(2.25rem,3.4vw,3rem)", lineHeight: 1, letterSpacing: "var(--ls-display)", color: onDark ? "var(--gold-300)" : "var(--olive-700)" }}>
        {value}
      </div>
      <div style={{ marginTop: "var(--space-3)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: onDark ? "var(--olive-200)" : "var(--text-muted)" }}>
        {label}
      </div>
      {note && <div style={{ marginTop: 6, fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", color: onDark ? "var(--olive-300)" : "var(--text-subtle)" }}>{note}</div>}
    </div>
  );
}
