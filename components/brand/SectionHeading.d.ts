import React from "react";

export interface SectionHeadingProps {
  /** Uppercase gold kicker. */
  eyebrow?: string;
  title: React.ReactNode;
  /** One-sentence lead in light Montserrat. */
  lead?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  /** Gold hairline between title and lead. */
  rule?: boolean;
  level?: "h1" | "h2" | "h3";
  style?: React.CSSProperties;
}

/**
 * Standard section opener: gold eyebrow → Cinzel title → gold hairline → light lead.
 * @startingPoint section="Marca" subtitle="Abertura de seção: eyebrow, título, fio dourado e lead" viewport="700x300"
 */
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
