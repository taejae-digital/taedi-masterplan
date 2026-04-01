export interface FlowNode {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  w: number;
  h?: number;
  color: string;
}

export interface FlowEdge {
  from: string;
  to: string;
  color: string;
}

export interface ColLabel {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  borderColor: string;
  dashed?: boolean;
}
