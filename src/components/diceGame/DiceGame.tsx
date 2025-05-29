'use client';

import { FC, useCallback } from 'react';
import { Alert, Snackbar } from '@mui/material';

import { Container, StyledPaper } from '@/styles/diceGame.styles';
import { DirectionFailHint } from '@/types/constants';
import { useDiceGame } from '@/hooks/useDiceGame';
import { useSnackbar } from '@/hooks/useSnackbar';

import DiceControls from './gameInteractionPanel/DiceControls';
import DiceHistoryTable from './historyTable/DiceHistoryTable';
import DiceResult from './gameInteractionPanel/DiceResult';

const SHACKBAR_AUTO_HIDE_DURATION = 10000;

const DiceGame: FC = () => {
  const { snackbar, show: showSnackbar, close: closeSnackbar } = useSnackbar();
  const {
    threshold,
    direction,
    result,
    history,
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
      <StyledPaper elevation={2}>
        <DiceResult value={result} />
        <DiceControls
          threshold={threshold}
          direction={direction}
          setThreshold={setThreshold}
          setDirection={setDirection}
          onRoll={handlePlay}
        />
      </StyledPaper>

      <DiceHistoryTable history={history} />

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
