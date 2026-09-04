import React from "react";

export function Checkbox({ label, description, checked = false, onChange, disabled = false, id, style, ...rest }) {
  const uid = id || React.useId();
  return (
    <label
      htmlFor={uid}
      style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? .55 : 1, ...style }}
    >
      <input id={uid} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        aria-hidden="true"
        style={{
          flex: "0 0 auto", width: 18, height: 18, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: "var(--radius-xs)", border: `1px solid ${checked ? "var(--olive-600)" : "var(--sand-300)"}`,
          background: checked ? "var(--olive-600)" : "var(--white)", transition: "var(--transition-base)"
        }}
      >
        {checked && <span style={{ width: 9, height: 5, borderLeft: "2px solid var(--sand-50)", borderBottom: "2px solid var(--sand-50)", transform: "rotate(-45deg) translateY(-1px)" }} />}
      </span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)", lineHeight: 1.45 }}>
        {label}
        {description && <span style={{ display: "block", fontSize: "var(--fs-caption)", color: "var(--text-muted)", marginTop: 2 }}>{description}</span>}
      </span>
    </label>
  );
}
