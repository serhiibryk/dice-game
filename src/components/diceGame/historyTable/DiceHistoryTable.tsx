import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { IGameResult } from '@/types/game';

import DiceHistoryRow from './DiceHistoryRow';

interface DiceHistoryTableProps {
  history: IGameResult[];
}

const DiceHistoryTable: FC<DiceHistoryTableProps> = ({ history }) => (
  <Table sx={{ mt: 4 }}>
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
  </Table>
);

export default DiceHistoryTable;
