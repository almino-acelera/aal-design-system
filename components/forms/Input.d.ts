import React from "react";

export interface InputProps {
  label?: string;
  hint?: string;
  /** Replaces `hint` and turns the field red. */
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  /** Use inside olive/dark sections. */
  onDark?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Single-line text field with uppercase micro label and gold focus ring. */
export declare function Input(props: InputProps): JSX.Element;
