import React from "react";

export interface ArcoPillarProps {
  /** A, R, C or O — set in Cinzel Decorative gold. */
  letter: "A" | "R" | "C" | "O";
  name: string;
  description: string;
  /** 1–4; renders the "Pilar N" kicker. */
  index?: number;
  onDark?: boolean;
  interactive?: boolean;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * One pillar of the Arquitetura ARCO™ (Análise Estratégica da Lacuna™ · Reformulação da Percepção · Construção da Decisão · Organização do Processo).
 * @startingPoint section="Marca" subtitle="Bloco de pilar da Arquitetura ARCO™, letra em Cinzel Decorative" viewport="700x220"
 */
export declare function ArcoPillar(props: ArcoPillarProps): JSX.Element;
