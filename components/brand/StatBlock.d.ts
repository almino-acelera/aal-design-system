import React from "react";

export interface StatBlockProps {
  /** The number, already formatted: "R$ 10 mil", "+2.400". */
  value: React.ReactNode;
  label: string;
  /** Small qualifier — source, period, sample. */
  note?: string;
  align?: "left" | "center";
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Single proof figure in Cinzel over an uppercase micro label. Use in rows of 3. */
export declare function StatBlock(props: StatBlockProps): JSX.Element;
