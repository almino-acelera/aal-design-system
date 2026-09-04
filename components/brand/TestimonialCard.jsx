import React from "react";

export function TestimonialCard({ quote, name, role, result, avatar, onDark = false, style }) {
  return (
    <figure
      style={{
        margin: 0, padding: "var(--space-8)", borderRadius: "var(--radius-sm)",
        background: onDark ? "var(--surface-inverse-alt)" : "var(--surface-card)",
        border: `1px solid ${onDark ? "var(--border-inverse)" : "var(--border-soft)"}`,
        boxShadow: onDark ? "none" : "var(--shadow-xs)", display: "flex", flexDirection: "column", gap: "var(--space-6)", ...style
      }}
    >
      <span aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: .6, color: onDark ? "var(--gold-500)" : "var(--gold-400)" }}>“</span>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--fs-body)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark)" : "var(--text-body)" }}>
        {quote}
      </blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", borderTop: `1px solid ${onDark ? "var(--border-inverse)" : "var(--border-soft)"}`, paddingTop: "var(--space-5)" }}>
        {avatar && <img src={avatar} alt="" style={{ width: 44, height: 44, borderRadius: "var(--radius-pill)", objectFit: "cover", filter: "saturate(.9)" }} />}
        <span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "var(--fs-body-sm)", letterSpacing: "var(--ls-heading)", color: onDark ? "var(--sand-50)" : "var(--text-title)" }}>{name}</span>
          {role && <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", color: onDark ? "var(--olive-200)" : "var(--text-muted)" }}>{role}</span>}
        </span>
        {result && (
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: onDark ? "var(--gold-300)" : "var(--text-gold)", textAlign: "right" }}>{result}</span>
        )}
      </figcaption>
    </figure>
  );
}
