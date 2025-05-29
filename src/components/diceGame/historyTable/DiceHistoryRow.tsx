import { FC } from 'react';
import { TableRow, TableCell } from '@mui/material';

import { ColoredResultCell } from '@/styles/diceHistoryRow.styles';
import { IGameResult } from '@/types/game';

interface DiceHistoryRowProps {
  entry: IGameResult;
}

const DiceHistoryRow: FC<DiceHistoryRowProps> = ({ entry }) => (
  <TableRow>
    <TableCell>{entry.time}</TableCell>

    <TableCell>{entry.guess}</TableCell>

    <ColoredResultCell iswin={entry.isWin.toString()}>
      {entry.result}
    </ColoredResultCell>
  </TableRow>
);

export default DiceHistoryRow;
