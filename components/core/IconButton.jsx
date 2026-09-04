import React from "react";

const sizes = { sm: 32, md: 40, lg: 48 };

export function IconButton({ children, label, variant = "outline", size = "md", disabled = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size] || sizes.md;
  const palette = {
    outline: { background: "transparent", color: "var(--olive-700)", borderColor: "var(--border-strong)" },
    solid: { background: "var(--olive-600)", color: "var(--sand-50)", borderColor: "var(--olive-600)" },
    ghost: { background: "transparent", color: "var(--text-muted)", borderColor: "transparent" },
    onDark: { background: "rgba(250,248,242,.06)", color: "var(--gold-300)", borderColor: "var(--border-inverse)" }
  }[variant];
  const hoverCss = {
    outline: { background: "var(--olive-50)", borderColor: "var(--olive-600)", color: "var(--olive-800)" },
    solid: { background: "var(--olive-800)", borderColor: "var(--olive-800)" },
    ghost: { background: "var(--sand-100)", color: "var(--olive-700)" },
    onDark: { background: "rgba(220,199,154,.14)", color: "var(--gold-200)" }
  }[variant];
  return (
    <button
      type="button" aria-label={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: "1px solid", borderRadius: "var(--radius-sm)", cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1, transition: "var(--transition-base)",
        ...palette, ...(hover && !disabled ? hoverCss : null), ...style
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
