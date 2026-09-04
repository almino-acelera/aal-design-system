import React from "react";

export interface TextareaProps {
  label?: string;
  hint?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Multi-line field for application questions ("Descreva seu momento comercial"). */
export declare function Textarea(props: TextareaProps): JSX.Element;
