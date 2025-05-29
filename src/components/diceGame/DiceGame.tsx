'use client';

import { FC, useCallback } from 'react';
import { Alert, Snackbar } from '@mui/material';

import { DirectionFailHint } from '@/types/constants';
import { useDiceGame } from '@/hooks/useDiceGame';
import { useSnackbar } from '@/hooks/useSnackbar';
import {
  Container,
  InteractionPanellWrapper,
  StyledPaper,
} from '@/styles/diceGame.styles';

import DiceControls from './gameInteractionPanel/DiceControls';
import DiceResult from './gameInteractionPanel/DiceResult';
import DiceHistorySection from './historySection/DiceHistorySection';

const SHACKBAR_AUTO_HIDE_DURATION = 10000;

const DiceGame: FC = () => {
  const { snackbar, show: showSnackbar, close: closeSnackbar } = useSnackbar();
  const {
    threshold,
    direction,
    result,
    history,
    isInitialized,
    setThreshold,
    setDirection,
    roll,
  } = useDiceGame();

  const handlePlay = useCallback(() => {
    const { win } = roll();
    showSnackbar(
      win ? 'You won' : `You lost — Number was ${DirectionFailHint[direction]}`,
      win,
    );
  }, [direction, roll, showSnackbar]);

  return (
    <Container>
      <StyledPaper elevation={0}>
        <InteractionPanellWrapper>
          <DiceResult value={result} />
          <DiceControls
            threshold={threshold}
            direction={direction}
            setThreshold={setThreshold}
            setDirection={setDirection}
            onRoll={handlePlay}
          />
        </InteractionPanellWrapper>
      </StyledPaper>

      <DiceHistorySection isInitialized={isInitialized} history={history} />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={SHACKBAR_AUTO_HIDE_DURATION}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.win ? 'success' : 'error'}
          onClose={closeSnackbar}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default DiceGame;
