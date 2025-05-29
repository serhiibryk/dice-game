import { DirectionEnum } from './constants';

export type Direction = DirectionEnum;

export interface IGameResult {
  time: string;
  guess: string;
  result: number;
  isWin: boolean;
}

export interface IRollResult {
  rolled: number;
  win: boolean;
  entry: IGameResult;
}

export interface IUseDiceGameReturn {
  threshold: number;
  direction: Direction;
  result: number | null;
  history: IGameResult[];
  setThreshold: React.Dispatch<React.SetStateAction<number>>;
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
  roll: () => IRollResult;
}
