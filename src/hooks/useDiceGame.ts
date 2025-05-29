import { useEffect, useState } from 'react';

import {
  DEFAULT_TRESHOLD,
  DirectionEnum,
  DirectionLabels,
  MAX_HISTORY_LENGTH,
} from '@/types/constants';
import {
  IUseDiceGameReturn,
  Direction,
  IGameResult,
  IRollResult,
} from '@/types/game';

const HISTORY_KEY = 'dice_game_history';

export const useDiceGame = (): IUseDiceGameReturn => {
  const [threshold, setThreshold] = useState<number>(DEFAULT_TRESHOLD);
  const [direction, setDirection] = useState<Direction>(DirectionEnum.Under);
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<IGameResult[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const roll = (): IRollResult => {
    const isUnderDir = direction === DirectionEnum.Under;
    const rolled = Math.floor(Math.random() * 100) + 1;
    const win = isUnderDir ? rolled < threshold : rolled > threshold;
    const entry: IGameResult = {
      time: new Date().toLocaleTimeString(),
      guess: `${DirectionLabels[direction]} ${threshold}`,
      result: rolled,
      isWin: win,
    };

    setResult(rolled);
    setHistory((prev) => [entry, ...prev.slice(0, MAX_HISTORY_LENGTH - 1)]);

    return { rolled, win, entry };
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setHistory(parsed as IGameResult[]);
      }
    } catch (err) {
      console.error('Failed to parse dice game history:', err);
      localStorage.removeItem(HISTORY_KEY);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }
  }, [history, isInitialized]);

  return {
    threshold,
    direction,
    result,
    history,
    isInitialized,
    setThreshold,
    setDirection,
    roll,
  };
};
