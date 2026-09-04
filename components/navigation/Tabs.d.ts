import React from "react";

export interface TabItem { value: string; label: string; count?: number }

export interface TabsProps {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
  /** `underline` for page-level sections, `pill` for filters inside a panel. */
  variant?: "underline" | "pill";
  style?: React.CSSProperties;
}

/** Horizontal section switcher; active tab carries a 2px gold underline. */
export declare function Tabs(props: TabsProps): JSX.Element;
