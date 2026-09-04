import React from "react";

export function Select({ label, hint, error, value, onChange, options = [], placeholder = "Selecione…", disabled = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <div style={{ width: "100%", ...style }}>
      {label && (
        <label htmlFor={uid} style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>{label}</label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={uid} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: "100%", appearance: "none", fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)",
            color: value ? "var(--text-title)" : "var(--text-subtle)", background: disabled ? "var(--sand-100)" : "var(--white)",
            border: `1px solid ${error ? "var(--danger-600)" : focus ? "var(--gold-600)" : "var(--sand-300)"}`,
            borderRadius: "var(--radius-sm)", padding: "12px 38px 12px 14px", outline: "none",
            boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none", transition: "var(--transition-base)", cursor: disabled ? "not-allowed" : "pointer"
          }}
          {...rest}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <span aria-hidden="true" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-60%) rotate(45deg)", width: 7, height: 7, borderRight: "1.5px solid var(--gold-700)", borderBottom: "1.5px solid var(--gold-700)", pointerEvents: "none" }} />
      </div>
      {(hint || error) && <p style={{ margin: "6px 0 0", fontSize: "var(--fs-caption)", color: error ? "var(--danger-600)" : "var(--text-muted)", maxWidth: "none" }}>{error || hint}</p>}
    </div>
  );
}
