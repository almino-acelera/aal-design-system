import React from "react";

export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Immediate on/off preference (autoplay, notificações). Not for form submission fields. */
export declare function Switch(props: SwitchProps): JSX.Element;
