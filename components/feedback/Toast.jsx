import React from "react";

const tones = {
  success: { accent: "var(--success-600)", bg: "var(--success-100)" },
  info: { accent: "var(--olive-600)", bg: "var(--olive-50)" },
  warning: { accent: "var(--gold-700)", bg: "var(--gold-50)" },
  danger: { accent: "var(--danger-600)", bg: "var(--danger-100)" }
};

export function Toast({ title, description, tone = "info", icon, onClose, style }) {
  const t = tones[tone] || tones.info;
  return (
    <div
      role="status"
      style={{
        display: "flex", gap: "var(--space-3)", alignItems: "flex-start", minWidth: 300, maxWidth: 420,
        background: "var(--surface-card)", border: "1px solid var(--border-soft)", borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-md)", padding: "var(--space-4)", position: "relative", overflow: "hidden", ...style
      }}
    >
      <span aria-hidden="true" style={{ position: "absolute", inset: "0 auto 0 0", width: 3, background: t.accent }} />
      <span style={{ flex: "0 0 auto", width: 28, height: 28, borderRadius: "var(--radius-xs)", background: t.bg, color: t.accent, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 3 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-title)" }}>{title}</div>
        {description && <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", color: "var(--text-muted)", marginTop: 2, lineHeight: 1.5 }}>{description}</div>}
      </div>
      {onClose && <button type="button" aria-label="Fechar" onClick={onClose} style={{ border: 0, background: "transparent", color: "var(--text-subtle)", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>×</button>}
    </div>
  );
}
