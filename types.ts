export interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface StrategyResult {
  psychology: string;
  angle: string;
  potential: string;
  sources?: GroundingSource[];
}