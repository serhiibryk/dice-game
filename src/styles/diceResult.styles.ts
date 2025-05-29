import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledResultNumber = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
  minHeight: theme.spacing(25),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  fontSize: theme.typography.pxToRem(96),
  fontWeight: 300,
}));
