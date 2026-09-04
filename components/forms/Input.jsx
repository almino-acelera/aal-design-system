import React from "react";

const labelCss = {
  display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)",
  letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--space-2)"
};

export function Input({ label, hint, error, value, onChange, placeholder, type = "text", disabled = false, iconLeft, onDark = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const borderColor = error ? "var(--danger-600)" : focus ? "var(--gold-600)" : onDark ? "var(--border-inverse)" : "var(--sand-300)";
  return (
    <div style={{ width: "100%", ...style }}>
      {label && <label htmlFor={uid} style={{ ...labelCss, color: onDark ? "var(--text-on-dark-muted)" : labelCss.color }}>{label}</label>}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {iconLeft && <span style={{ position: "absolute", left: 12, display: "flex", color: "var(--text-subtle)" }}>{iconLeft}</span>}
        <input
          id={uid} type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: "100%", fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: onDark ? "var(--text-on-dark)" : "var(--text-title)",
            background: disabled ? "var(--sand-100)" : onDark ? "rgba(250,248,242,.05)" : "var(--white)",
            border: `1px solid ${borderColor}`, borderRadius: "var(--radius-sm)",
            padding: iconLeft ? "12px 14px 12px 38px" : "12px 14px", outline: "none",
            boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
            transition: "var(--transition-base)", opacity: disabled ? .6 : 1
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <p style={{ margin: "6px 0 0", fontSize: "var(--fs-caption)", color: error ? "var(--danger-600)" : "var(--text-muted)", maxWidth: "none" }}>
          {error || hint}
        </p>
      )}
    </div>
  );
}
