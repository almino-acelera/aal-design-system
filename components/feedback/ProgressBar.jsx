import React from "react";

export function ProgressBar({ value = 0, label, showValue = true, onDark = false, size = "md", style }) {
  const pct = Math.max(0, Math.min(100, value));
  const h = size === "sm" ? 4 : 8;
  return (
    <div style={{ width: "100%", ...style }}>
      {(label || showValue) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-2)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: onDark ? "var(--olive-200)" : "var(--text-muted)" }}>
          <span>{label}</span>
          {showValue && <span style={{ color: onDark ? "var(--gold-300)" : "var(--text-gold)" }}>{pct}%</span>}
        </div>
      )}
      <div role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}
        style={{ height: h, borderRadius: "var(--radius-pill)", background: onDark ? "rgba(250,248,242,.12)" : "var(--sand-200)", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: "var(--radius-pill)", background: "linear-gradient(90deg,var(--gold-700),var(--gold-500))", transition: "width var(--dur-slow) var(--ease-out)" }} />
      </div>
    </div>
  );
}
