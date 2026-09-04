import React from "react";

export function Accordion({ items = [], defaultOpen = 0, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderTop: "1px solid var(--border-soft)", ...style }}>
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--border-soft)" }}>
            <button
              type="button" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)",
                background: "transparent", border: 0, cursor: "pointer", textAlign: "left", padding: "var(--space-5) 0",
                fontFamily: "var(--font-serif)", fontSize: "var(--fs-h4)", letterSpacing: "var(--ls-heading)",
                color: on ? "var(--olive-800)" : "var(--text-body)", transition: "var(--transition-base)"
              }}
            >
              <span>{it.question || it.title}</span>
              <span aria-hidden="true" style={{ flex: "0 0 auto", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-700)", fontSize: 18, transform: on ? "rotate(45deg)" : "none", transition: "transform var(--dur-base) var(--ease-standard)" }}>+</span>
            </button>
            <div style={{ maxHeight: on ? 320 : 0, overflow: "hidden", transition: "max-height var(--dur-slow) var(--ease-standard)" }}>
              <div style={{ padding: "0 0 var(--space-5)", fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-body)", maxWidth: "var(--measure)" }}>
                {it.answer || it.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
