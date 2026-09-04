import React from "react";

export function SectionHeading({ eyebrow, title, lead, align = "left", onDark = false, rule = true, level = "h2", style }) {
  const H = level;
  const center = align === "center";
  return (
    <div style={{ textAlign: align, maxWidth: center ? "var(--container-md)" : "none", marginInline: center ? "auto" : 0, ...style }}>
      {eyebrow && (
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: onDark ? "var(--gold-400)" : "var(--text-gold)", marginBottom: "var(--space-4)" }}>
          {eyebrow}
        </div>
      )}
      <H style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h2)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-heading)", lineHeight: "var(--lh-heading)", color: onDark ? "var(--sand-50)" : "var(--text-title)", margin: 0 }}>
        {title}
      </H>
      {rule && <div aria-hidden="true" style={{ height: 1, width: center ? 180 : 120, margin: center ? "var(--space-5) auto" : "var(--space-5) 0", background: onDark ? "linear-gradient(90deg,#a58647,rgba(165,134,71,0))" : "var(--gradient-gold)", backgroundPosition: center ? "center" : "left" }} />}
      {lead && (
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-lg)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)", maxWidth: "var(--measure)", marginInline: center ? "auto" : 0, marginBottom: 0 }}>
          {lead}
        </p>
      )}
    </div>
  );
}
