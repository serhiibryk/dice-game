import { FC } from 'react';
import { TableRow, TableCell } from '@mui/material';

import { IGameResult } from '@/types/game';

interface DiceHistoryRowProps {
  entry: IGameResult;
}

const DiceHistoryRow: FC<DiceHistoryRowProps> = ({ entry }) => (
  <TableRow>
    <TableCell>{entry.time}</TableCell>

    <TableCell>{entry.guess}</TableCell>

    <TableCell sx={{ color: entry.isWin ? 'green' : 'red' }}>
      {entry.result}
    </TableCell>
  </TableRow>
);

export default DiceHistoryRow;
