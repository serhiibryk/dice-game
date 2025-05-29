'use client';

import { FC } from 'react';

import { NoHistoryTitle } from '@/styles/diceGame.styles';
import { IGameResult } from '@/types/game';

import DiceHistoryTableSkeleton from './table/DiceHistoryTableSkeleton';
import DiceHistoryTable from './table/DiceHistoryTable';

interface DiceHistorySectionProps {
  isInitialized: boolean;
  history: IGameResult[];
}

const DiceHistorySection: FC<DiceHistorySectionProps> = ({
  isInitialized,
  history,
}) => {
  if (!isInitialized) return <DiceHistoryTableSkeleton />;

  if (history.length === 0) {
    return (
      <NoHistoryTitle variant="body2" color="text.secondary">
        No games played yet. Try your luck!
      </NoHistoryTitle>
    );
  }

  return <DiceHistoryTable history={history} />;
};

export default DiceHistorySection;
