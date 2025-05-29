import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: theme.spacing(4),
  minHeight: theme.spacing(4),
  maxHeight: theme.spacing(4),
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  minHeight: theme.spacing(4),
  height: theme.spacing(4),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  lineHeight: 1.2,
}));

export const ColoredResultCell = styled(TableCell)<{ iswin: string }>(
  ({ iswin }) => ({
    color: iswin === 'true' ? 'green' : 'red',
  }),
);
