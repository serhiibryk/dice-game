import { Table, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTable = styled(Table)(({ theme }) => ({
  marginTop: theme.spacing(4),
  maxWidth: theme.spacing(75),
  width: '100%',
}));

export const StyledTableHeadCell = styled(TableCell)(() => ({
  fontWeight: 600,
}));
