import { useEffect, useState } from 'react';
import {
  IUseDiceGameReturn,
  Direction,
  IGameResult,
  IRollResult,
} from '@/types/game';

const HISTORY_KEY = 'dice_game_history';
const DEFAULT_TRESHOLD = 20;

export const useDiceGame = (): IUseDiceGameReturn => {
  const [threshold, setThreshold] = useState(DEFAULT_TRESHOLD);
  const [direction, setDirection] = useState<Direction>('under');
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<IGameResult[]>([]);

  const roll = (): IRollResult => {
    const isUnderDir = direction === 'under';
    const rolled = Math.floor(Math.random() * 100) + 1;
    const win = isUnderDir ? rolled < threshold : rolled > threshold;
    const now = new Date().toLocaleTimeString();
    const entry: IGameResult = {
      time: now,
      guess: `${isUnderDir ? 'Under' : 'Over'} ${threshold}`,
      result: rolled,
      isWin: win,
    };

    setResult(rolled);
    setHistory((prev) => [entry, ...prev.slice(0, 9)]);

    return { rolled, win, entry };
  };

  useEffect(() => {
    const stored = localStorage.getItem(HISTORY_KEY);

    if (stored) setHistory(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  return {
    threshold,
    direction,
    result,
    history,
    setThreshold,
    setDirection,
    roll,
  };
};
