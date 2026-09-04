import React from "react";

export interface TooltipProps {
  /** The trigger element. */
  children?: React.ReactNode;
  content: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  style?: React.CSSProperties;
}

/** Dark olive micro label on hover/focus — for icon-only controls and abbreviations. */
export declare function Tooltip(props: TooltipProps): JSX.Element;
