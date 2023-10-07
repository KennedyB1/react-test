export interface ITeam {
  id: number;
  continent: string;
  nation: string;
  flag: string; 
  team: string;
  League: LeagueInfo; 
  chant: Record<string, ChantDetail[]>;
}

export interface LeagueInfo {
  name: string;
  tier: number;
}

export interface ChantDetail {
  translate: string;
  model: string;
  song: string;
  video: string;
}
