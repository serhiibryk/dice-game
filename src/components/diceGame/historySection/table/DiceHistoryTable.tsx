'use client';

import { FC } from 'react';
import { TableBody, TableHead, TableRow } from '@mui/material';

import { StyledTable, StyledTableHeadCell } from '@/styles/diceHistoryTable.styles';
import { IGameResult } from '@/types/game';

import DiceHistoryRow from './DiceHistoryRow';

interface DiceHistoryTableProps {
  history: IGameResult[];
}

const DiceHistoryTable: FC<DiceHistoryTableProps> = ({ history }) => (
  <StyledTable>
    <TableHead>
      <TableRow>
        <StyledTableHeadCell>Time</StyledTableHeadCell>

        <StyledTableHeadCell>Guess</StyledTableHeadCell>

        <StyledTableHeadCell>Result</StyledTableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {history.map((entry, idx) => (
        <DiceHistoryRow entry={entry} key={idx} />
      ))}
    </TableBody>
  </StyledTable>
);

export default DiceHistoryTable;
