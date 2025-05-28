import { Box, Paper, Typography, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  padding: theme.spacing(4),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

export const ResultNumber = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  marginBottom: theme.spacing(2),
}));

export const StyledSlider = styled(Slider)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));
