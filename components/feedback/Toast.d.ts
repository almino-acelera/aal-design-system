import React from "react";

export interface ToastProps {
  title: string;
  description?: string;
  tone?: "success" | "info" | "warning" | "danger";
  /** 16px Lucide node. */
  icon?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}

/** Transient confirmation; 3px tone bar on the left edge, white card, medium shadow. */
export declare function Toast(props: ToastProps): JSX.Element;
