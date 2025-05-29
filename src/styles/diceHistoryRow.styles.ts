import { TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ColoredResultCell = styled(TableCell)<{ iswin: string }>(
  ({ iswin }) => ({
    color: iswin === 'true' ? 'green' : 'red',
  }),
);
