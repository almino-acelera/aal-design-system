import React from "react";

export function Card({ children, variant = "default", padding = "var(--space-6)", interactive = false, as = "div", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: { background: "var(--surface-card)", border: "1px solid var(--border-soft)", boxShadow: "var(--shadow-xs)" },
    gold: { background: "var(--surface-gold)", border: "1px solid var(--border-hairline)", boxShadow: "none" },
    raised: { background: "var(--surface-card)", border: "1px solid var(--border-soft)", boxShadow: "var(--shadow-md)" },
    flat: { background: "transparent", border: "1px solid var(--border-hairline)", boxShadow: "none" },
    inverse: { background: "var(--surface-inverse-alt)", border: "1px solid var(--border-inverse)", boxShadow: "none", color: "var(--text-on-dark)" }
  };
  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: "var(--radius-sm)", padding, transition: "var(--transition-base)",
        ...variants[variant],
        ...(interactive ? { cursor: "pointer" } : null),
        ...(interactive && hover ? { boxShadow: "var(--shadow-md)", borderColor: "var(--border-hairline)", transform: "translateY(-2px)" } : null),
        ...style
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
