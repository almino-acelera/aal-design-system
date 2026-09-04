import React from "react";

export interface LogoProps {
  /** `lockup` mark + wordmark, `mark` bow & arrow only, `wordmark` type only. */
  variant?: "lockup" | "mark" | "wordmark";
  /** Path to the PNG in `assets/` (relative to the consuming page). Omit to render the type-set fallback wordmark. */
  src?: string;
  /** Rendered width in px (mark variants render at 55% of this). */
  size?: number;
  /** Pass the `-light` asset and set this inside olive/dark sections. */
  onDark?: boolean;
  tagline?: boolean;
  style?: React.CSSProperties;
}

/** The Aline Loiola identity: bow-and-arrow mark over the Cinzel wordmark. */
export declare function Logo(props: LogoProps): JSX.Element;
