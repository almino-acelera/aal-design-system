import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** `default` white on sand, `gold` warm tinted, `raised` for floating panels, `flat` hairline-only, `inverse` for olive sections. */
  variant?: "default" | "gold" | "raised" | "flat" | "inverse";
  padding?: string;
  /** Adds pointer cursor plus a 2px lift on hover. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/**
 * Content container: 4px radius, hairline border, near-flat shadow.
 * @startingPoint section="Core" subtitle="Cartões: padrão, dourado, elevado, hairline e invertido" viewport="700x260"
 */
export declare function Card(props: CardProps): JSX.Element;
