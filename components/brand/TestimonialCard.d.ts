import React from "react";

export interface TestimonialCardProps {
  quote: React.ReactNode;
  name: string;
  role?: string;
  /** Short outcome, uppercase gold: "R$ 14 mil em comissões". */
  result?: string;
  /** Photo URL — square crop; rendered as a 44px circle. */
  avatar?: string;
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Student proof: gold quote glyph, light-weight quote, hairline-separated attribution. */
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
