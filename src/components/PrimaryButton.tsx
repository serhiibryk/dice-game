import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

interface PrimaryButtonProps extends ButtonProps {
  label: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, ...props }) => (
  <Button variant="contained" fullWidth sx={{ mt: 3 }} {...props}>
    {label}
  </Button>
);

export default PrimaryButton;
