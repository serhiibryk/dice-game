import { Snackbar, Alert, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  width: '100%',

  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1),
    width: '100%',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export const StyledAlert = styled(Alert)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2, 3),
  color: '#fff',

  '&.MuiAlert-filledSuccess': {
    backgroundColor: '#2E7D32',
  },
  '&.MuiAlert-filledError': {
    backgroundColor: '#D32F2F',
  },
}));

export const MainTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isError',
})<{ isError: boolean }>(({ isError, theme }) => ({
  fontSize: theme.spacing(isError ? 1.875 : 1.75),
  fontWeight: 600,
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.75),
  fontWeight: 500,
}));
