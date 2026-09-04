import React from "react";

export function Dialog({ open = true, onClose, title, eyebrow, children, footer, width = 520, style }) {
  if (!open) return null;
  return (
    <div
      role="dialog" aria-modal="true"
      style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-6)", background: "var(--overlay-scrim)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: width, background: "var(--surface-card)", borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-lg)", padding: "var(--space-8)",
          animation: "none", position: "relative", ...style
        }}
      >
        {onClose && (
          <button type="button" aria-label="Fechar" onClick={onClose}
            style={{ position: "absolute", top: 14, right: 16, border: 0, background: "transparent", color: "var(--text-subtle)", fontSize: 20, lineHeight: 1, cursor: "pointer" }}>×</button>
        )}
        {eyebrow && <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-gold)", marginBottom: "var(--space-3)" }}>{eyebrow}</div>}
        {title && <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-h3)", letterSpacing: "var(--ls-heading)", color: "var(--text-title)", margin: "0 0 var(--space-3)" }}>{title}</h3>}
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)", lineHeight: "var(--lh-body)" }}>{children}</div>
        {footer && <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "flex-end", marginTop: "var(--space-6)" }}>{footer}</div>}
      </div>
    </div>
  );
}
