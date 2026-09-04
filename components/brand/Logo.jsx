import React from "react";

/** Type-set fallback wordmark — used when no image src is supplied. */
function TypeMark({ tagline, onDark, size }) {
  const scale = size / 220;
  return (
    <span style={{ display: "inline-block", textAlign: "center", lineHeight: 1 }}>
      <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26 * scale * 1.6, letterSpacing: ".06em", color: onDark ? "var(--gold-300)" : "var(--olive-700)" }}>
        Aline loiola
      </span>
      <span aria-hidden="true" style={{ display: "block", height: 1, margin: `${8 * scale * 1.6}px 0`, background: "var(--gradient-gold)" }} />
      {tagline && (
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: Math.max(7, 8 * scale * 1.6), fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: onDark ? "var(--olive-200)" : "var(--olive-500)" }}>
          Especialista em Vendas Consultivas
        </span>
      )}
    </span>
  );
}

export function Logo({ variant = "lockup", src, size = 180, onDark = false, tagline = true, style, ...rest }) {
  if (!src) return <TypeMark tagline={tagline && variant !== "mark"} onDark={onDark} size={size} />;
  const isMark = variant === "mark";
  return (
    <img
      src={src} alt="Aline Loiola — Especialista em Vendas Consultivas"
      style={{ display: "block", width: isMark ? size * 0.55 : size, height: "auto", ...style }}
      {...rest}
    />
  );
}
