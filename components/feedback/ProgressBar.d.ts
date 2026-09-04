import React from "react";

export interface ProgressBarProps {
  /** 0–100. */
  value?: number;
  label?: string;
  showValue?: boolean;
  onDark?: boolean;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

/** Course/module completion. Gold fill on sand track; the only gradient fill in the system. */
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
