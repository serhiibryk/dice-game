import { Box, Paper, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  padding: theme.spacing(4),
}));

export const StyledPaper = styled(Paper)(() => ({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
}));

export const InteractionPanellWrapper = styled(Box)(() => ({
  maxWidth: 320,
  minWidth: 320,
}));

export const StyledSlider = styled(Slider)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const NoHistoryTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  textAlign: 'center',
}));
