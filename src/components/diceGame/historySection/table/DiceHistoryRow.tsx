'use client';

import { FC } from 'react';

import {
  ColoredResultCell,
  StyledTableCell,
  StyledTableRow,
} from '@/styles/diceHistoryRow.styles';
import { IGameResult } from '@/types/game';

interface DiceHistoryRowProps {
  entry: IGameResult;
}

const DiceHistoryRow: FC<DiceHistoryRowProps> = ({ entry }) => (
  <StyledTableRow>
    <StyledTableCell>{entry.time}</StyledTableCell>

    <StyledTableCell>{entry.guess}</StyledTableCell>

    <ColoredResultCell iswin={entry.isWin.toString()}>
      {entry.result}
    </ColoredResultCell>
  </StyledTableRow>
);

export default DiceHistoryRow;
