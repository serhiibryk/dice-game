import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  minHeight: theme.spacing(5.25),
  fontSize: theme.spacing(1.875)
}));
