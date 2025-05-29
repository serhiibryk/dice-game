import { FC } from 'react';

import {
  MainTitle,
  StyledAlert,
  StyledSnackbar,
  SubTitle,
} from '@/styles/diceSnackbarNotification.styles';

interface SnackbarNotificationProps {
  open: boolean;
  message: string;
  win: boolean;
  onClose: () => void;
  autoHideDuration?: number;
}

const SnackbarNotification: FC<SnackbarNotificationProps> = ({
  open,
  message,
  win,
  onClose,
  autoHideDuration = 10000,
}) => {
  const [title, ...descriptionParts] = message.split(' — ');
  const description = descriptionParts.join(' — ');

  return (
    <StyledSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <StyledAlert
        severity={win ? 'success' : 'error'}
        variant="filled"
      >
        <MainTitle isError={!win}>{title}</MainTitle>
        {description && <SubTitle>{description}</SubTitle>}
      </StyledAlert>
    </StyledSnackbar>
  );
};

export default SnackbarNotification;
