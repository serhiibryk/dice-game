'use client';

import { FC } from 'react';
import { ButtonProps } from '@mui/material';

import { StyledPrimaryButton } from '@/styles/primaryButton.styles';

interface PrimaryButtonProps extends ButtonProps {
  label: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, ...props }) => (
  <StyledPrimaryButton variant="contained" fullWidth {...props}>
    {label}
  </StyledPrimaryButton>
);

export default PrimaryButton;
