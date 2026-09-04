import React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "olive" | "gold" | "success" | "warning" | "danger" | "neutral" | "onDark";
  /** Filled instead of tinted — reserve for one status per view. */
  solid?: boolean;
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Small uppercase status marker (module state, turma aberta, lote, novo). */
export declare function Badge(props: BadgeProps): JSX.Element;
