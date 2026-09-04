import React from "react";

export function Switch({ label, checked = false, onChange, disabled = false, id, style, ...rest }) {
  const uid = id || React.useId();
  return (
    <label htmlFor={uid} style={{ display: "inline-flex", gap: "var(--space-3)", alignItems: "center", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? .55 : 1, ...style }}>
      <input id={uid} type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        aria-hidden="true"
        style={{
          width: 42, height: 22, borderRadius: "var(--radius-pill)", padding: 2, display: "flex", alignItems: "center",
          background: checked ? "var(--olive-600)" : "var(--sand-300)", transition: "background var(--dur-base) var(--ease-standard)"
        }}
      >
        <span style={{ width: 18, height: 18, borderRadius: "var(--radius-pill)", background: "var(--white)", boxShadow: "var(--shadow-xs)", transform: `translateX(${checked ? 20 : 0}px)`, transition: "transform var(--dur-base) var(--ease-out)" }} />
      </span>
      {label && <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{label}</span>}
    </label>
  );
}
