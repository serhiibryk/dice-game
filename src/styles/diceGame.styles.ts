import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing(10),
  maxWidth: theme.spacing(75),
}));

export const StyledPaper = styled(Paper)(() => ({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
}));

export const InteractionPanellWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(40),
  minWidth: theme.spacing(40),
}));

export const NoHistoryTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  textAlign: 'center',
}));
