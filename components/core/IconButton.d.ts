import React from "react";

export interface IconButtonProps {
  /** A single 16–20px icon node (Lucide stroke 1.5). */
  children?: React.ReactNode;
  /** Required accessible name — the button has no visible text. */
  label: string;
  variant?: "outline" | "solid" | "ghost" | "onDark";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Square icon-only action (player controls, close, pagination, toolbar). */
export declare function IconButton(props: IconButtonProps): JSX.Element;
