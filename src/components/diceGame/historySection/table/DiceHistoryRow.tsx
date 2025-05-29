'use client';

import { FC } from 'react';
import { TableCell } from '@mui/material';

import { IGameResult } from '@/types/game';
import {
  ColoredResultCell,
  StyledTableRow,
} from '@/styles/diceHistoryRow.styles';

interface DiceHistoryRowProps {
  entry: IGameResult;
}

const DiceHistoryRow: FC<DiceHistoryRowProps> = ({ entry }) => (
  <StyledTableRow>
    <TableCell>{entry.time}</TableCell>

    <TableCell>{entry.guess}</TableCell>
    <ColoredResultCell iswin={entry.isWin.toString()}>
      {entry.result}
    </ColoredResultCell>
  </StyledTableRow>
);

export default DiceHistoryRow;
