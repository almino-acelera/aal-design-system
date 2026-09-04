import React from "react";

const base = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
  fontFamily: "var(--font-sans)", fontWeight: "var(--fw-semibold)", textTransform: "uppercase",
  letterSpacing: "var(--ls-button)", border: "1px solid transparent", borderRadius: "var(--radius-sm)",
  cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap",
  transition: "background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)"
};

const sizes = {
  sm: { padding: "8px 16px", fontSize: "var(--fs-micro)" },
  md: { padding: "13px 26px", fontSize: "var(--fs-caption)" },
  lg: { padding: "17px 38px", fontSize: "var(--fs-body-sm)" }
};

const variants = {
  primary: {
    rest: { background: "var(--olive-600)", color: "var(--sand-50)", borderColor: "var(--olive-600)", boxShadow: "var(--shadow-sm)" },
    hover: { background: "var(--olive-800)", borderColor: "var(--olive-800)", boxShadow: "var(--shadow-md)" }
  },
  secondary: {
    rest: { background: "var(--gold-600)", color: "var(--olive-900)", borderColor: "var(--gold-600)", boxShadow: "var(--shadow-sm)" },
    hover: { background: "var(--gold-700)", color: "var(--sand-50)", borderColor: "var(--gold-700)", boxShadow: "var(--shadow-md)" }
  },
  outline: {
    rest: { background: "transparent", color: "var(--olive-700)", borderColor: "var(--border-strong)" },
    hover: { background: "var(--olive-50)", color: "var(--olive-800)", borderColor: "var(--olive-600)" }
  },
  ghost: {
    rest: { background: "transparent", color: "var(--text-gold)", borderColor: "transparent" },
    hover: { background: "var(--gold-50)", color: "var(--gold-800)" }
  },
  accent: {
    rest: { background: "var(--orange-600)", color: "var(--white)", borderColor: "var(--orange-600)", boxShadow: "var(--shadow-sm)" },
    hover: { background: "var(--orange-700)", borderColor: "var(--orange-700)", boxShadow: "var(--shadow-md)" }
  },
  onDark: {
    rest: { background: "transparent", color: "var(--gold-300)", borderColor: "var(--border-inverse)" },
    hover: { background: "rgba(220,199,154,.1)", color: "var(--gold-200)", borderColor: "var(--gold-400)" }
  }
};

export function Button({
  children, variant = "primary", size = "md", href, disabled = false, fullWidth = false,
  iconLeft, iconRight, type = "button", onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const css = {
    ...base, ...sizes[size], ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? { transform: "translateY(1px)", boxShadow: "var(--shadow-xs)" } : null),
    ...(disabled ? { opacity: 0.45, cursor: "not-allowed", boxShadow: "none" } : null),
    ...(fullWidth ? { width: "100%" } : null),
    ...style
  };
  const Tag = href && !disabled ? "a" : "button";
  return (
    <Tag
      href={href} type={Tag === "button" ? type : undefined} disabled={Tag === "button" ? disabled : undefined}
      onClick={disabled ? undefined : onClick} style={css}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </Tag>
  );
}
