import React from "react";

export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  /** Uppercase gold kicker above the title. */
  eyebrow?: string;
  children?: React.ReactNode;
  /** Action row, right-aligned — usually two Buttons. */
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}

/** Centered modal over a warm scrim; used for enrollment forms and confirmations. */
export declare function Dialog(props: DialogProps): JSX.Element | null;
