import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: theme.spacing(4),
  minHeight: theme.spacing(4),
  maxHeight: theme.spacing(4),
}));

export const ColoredResultCell = styled(TableCell)<{ iswin: string }>(
  ({ iswin }) => ({
    color: iswin === 'true' ? 'green' : 'red',
  }),
);
