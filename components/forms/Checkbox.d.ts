import React from "react";

export interface CheckboxProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Square 18px checkbox, olive when checked. Used for consent and multi-select. */
export declare function Checkbox(props: CheckboxProps): JSX.Element;
