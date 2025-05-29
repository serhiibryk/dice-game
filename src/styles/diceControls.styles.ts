import { RadioGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));
