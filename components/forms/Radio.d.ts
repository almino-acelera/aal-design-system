import React from "react";

export interface RadioProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Single-choice control; share a `name` across the group. */
export declare function Radio(props: RadioProps): JSX.Element;
