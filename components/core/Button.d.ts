import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual role. `primary` olive fill, `secondary` gold fill, `accent` orange for a single high-urgency CTA per screen, `onDark` for olive/dark sections. */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent" | "onDark";
  size?: "sm" | "md" | "lg";
  /** Renders an <a> instead of a <button>. */
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action control for Aline Loiola surfaces: uppercase Montserrat label, wide tracking, 4px radius.
 * @startingPoint section="Core" subtitle="Botões: primário, dourado, contorno, ghost e acento" viewport="700x220"
 */
export declare function Button(props: ButtonProps): JSX.Element;
