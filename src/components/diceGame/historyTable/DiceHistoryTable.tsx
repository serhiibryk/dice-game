import { FC } from 'react';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { StyledTable } from '@/styles/diceHistoryTable.styles';
import { IGameResult } from '@/types/game';

import DiceHistoryRow from './DiceHistoryRow';

interface DiceHistoryTableProps {
  history: IGameResult[];
}

const DiceHistoryTable: FC<DiceHistoryTableProps> = ({ history }) => (
  <StyledTable>
    <TableHead>
      <TableRow>
        <TableCell>Time</TableCell>

        <TableCell>Guess</TableCell>

        <TableCell>Result</TableCell>
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
