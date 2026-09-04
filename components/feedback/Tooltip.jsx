import React from "react";

export function Tooltip({ children, content, placement = "top", style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }
  }[placement];
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute", ...pos, zIndex: 40, pointerEvents: "none", whiteSpace: "nowrap",
          background: "var(--olive-900)", color: "var(--sand-100)", borderRadius: "var(--radius-xs)",
          padding: "6px 10px", fontFamily: "var(--font-sans)", fontSize: "var(--fs-micro)",
          letterSpacing: ".04em", boxShadow: "var(--shadow-sm)",
          opacity: show ? 1 : 0, transition: "opacity var(--dur-fast) var(--ease-standard)"
        }}
      >
        {content}
      </span>
    </span>
  );
}
