import React from "react";

export function Tag({ children, icon, onRemove, active = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
        padding: "6px 12px", borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)", fontWeight: "var(--fw-medium)",
        letterSpacing: ".02em", cursor: interactive ? "pointer" : "default",
        background: active ? "var(--olive-600)" : hover && interactive ? "var(--sand-100)" : "transparent",
        color: active ? "var(--sand-50)" : "var(--text-body)",
        border: `1px solid ${active ? "var(--olive-600)" : "var(--border-hairline)"}`,
        transition: "var(--transition-base)", ...style
      }}
      {...rest}
    >
      {icon}
      {children}
      {onRemove && (
        <button
          type="button" aria-label="Remover" onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ border: 0, background: "transparent", color: "inherit", cursor: "pointer", padding: 0, lineHeight: 1, fontSize: 14, opacity: .7 }}
        >×</button>
      )}
    </span>
  );
}
