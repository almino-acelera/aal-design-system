import React from "react";

export function Textarea({ label, hint, error, value, onChange, placeholder, rows = 4, disabled = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <div style={{ width: "100%", ...style }}>
      {label && (
        <label htmlFor={uid} style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>{label}</label>
      )}
      <textarea
        id={uid} rows={rows} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: "100%", resize: "vertical", fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)",
          lineHeight: "var(--lh-body)", color: "var(--text-title)", background: disabled ? "var(--sand-100)" : "var(--white)",
          border: `1px solid ${error ? "var(--danger-600)" : focus ? "var(--gold-600)" : "var(--sand-300)"}`,
          borderRadius: "var(--radius-sm)", padding: "12px 14px", outline: "none",
          boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none", transition: "var(--transition-base)"
        }}
        {...rest}
      />
      {(hint || error) && <p style={{ margin: "6px 0 0", fontSize: "var(--fs-caption)", color: error ? "var(--danger-600)" : "var(--text-muted)", maxWidth: "none" }}>{error || hint}</p>}
    </div>
  );
}
