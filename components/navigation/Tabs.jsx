import React from "react";

export function Tabs({ items = [], value, onChange, variant = "underline", style }) {
  const active = value ?? (items[0] && (items[0].value || items[0]));
  const norm = items.map((i) => (typeof i === "string" ? { value: i, label: i } : i));
  return (
    <div
      role="tablist"
      style={{
        display: "flex", gap: variant === "underline" ? "var(--space-6)" : "var(--space-2)",
        borderBottom: variant === "underline" ? "1px solid var(--border-soft)" : "none", ...style
      }}
    >
      {norm.map((t) => {
        const on = t.value === active;
        return (
          <button
            key={t.value} role="tab" aria-selected={on} type="button" onClick={() => onChange && onChange(t.value)}
            style={{
              border: 0, background: variant === "pill" ? (on ? "var(--olive-600)" : "transparent") : "transparent",
              color: on ? (variant === "pill" ? "var(--sand-50)" : "var(--olive-800)") : "var(--text-muted)",
              fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
              letterSpacing: "var(--ls-button)", textTransform: "uppercase", cursor: "pointer",
              padding: variant === "pill" ? "8px 16px" : "0 0 12px",
              borderRadius: variant === "pill" ? "var(--radius-sm)" : 0,
              borderBottom: variant === "underline" ? `2px solid ${on ? "var(--gold-600)" : "transparent"}` : "none",
              marginBottom: variant === "underline" ? -1 : 0, transition: "var(--transition-base)"
            }}
          >
            {t.label}
            {t.count != null && <span style={{ marginLeft: 6, opacity: .6, fontWeight: "var(--fw-regular)" }}>{t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
