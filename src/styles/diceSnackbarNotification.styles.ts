import { Snackbar, Alert, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  width: '100%',

  '& .MuiPaper-root': {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    maxWidth: theme.spacing(75),
    borderRadius: theme.spacing(1),

    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
  },
}));

export const StyledAlert = styled(Alert)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  borderRadius: theme.spacing(1),
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
