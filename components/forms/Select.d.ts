import React from "react";

export interface SelectOption { value: string; label: string }

export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Strings or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Native select with a gold chevron; matches Input metrics exactly. */
export declare function Select(props: SelectProps): JSX.Element;
