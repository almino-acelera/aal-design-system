import React from "react";

export interface AccordionItem { question?: string; title?: string; answer?: React.ReactNode; children?: React.ReactNode }

export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
  style?: React.CSSProperties;
}

/** Hairline-ruled FAQ / module list. One panel open at a time, gold + / × affordance. */
export declare function Accordion(props: AccordionProps): JSX.Element;
