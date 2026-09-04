import React from "react";

export interface TagProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  /** Shows a × affordance and fires on click. */
  onRemove?: (e: React.MouseEvent) => void;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Pill-shaped filter or topic label — the only pill radius in the system. */
export declare function Tag(props: TagProps): JSX.Element;
