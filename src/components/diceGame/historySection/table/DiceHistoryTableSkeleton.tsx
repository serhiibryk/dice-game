'use client';

import { FC } from 'react';
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { MAX_HISTORY_LENGTH } from '@/types/constants';

const DiceHistoryTableSkeleton: FC = () => (
  <Table sx={{ mt: 4 }}>
    <TableHead>
      <TableRow>
        <TableCell>
          <Skeleton width={80} />
        </TableCell>
        <TableCell>
          <Skeleton width={80} />
        </TableCell>
        <TableCell>
          <Skeleton width={80} />
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {Array.from({ length: MAX_HISTORY_LENGTH }).map((_, idx) => (
        <TableRow key={idx}>
          <TableCell>
            <Skeleton />
          </TableCell>
          <TableCell>
            <Skeleton />
          </TableCell>
          <TableCell>
            <Skeleton />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default DiceHistoryTableSkeleton;
