'use client';

import { FC, useCallback } from 'react';

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
import SnackbarNotification from '../SnackbarNotification';

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

      <SnackbarNotification
        open={snackbar.open}
        message={snackbar.message}
        win={snackbar.win}
        onClose={closeSnackbar}
      />
    </Container>
  );
};

export default DiceGame;
