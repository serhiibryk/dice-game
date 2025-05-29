'use client';

import { FC } from 'react';
import { Alert, Paper, Snackbar, Box } from '@mui/material';

import { useDiceGame } from '@/hooks/useDiceGame';
import { useSnackbar } from '@/hooks/useSnackbar';
import { DirectionFailHint } from '@/types/constants';

import DiceControls from './gameInteractionPanel/DiceControls';
import DiceResult from './gameInteractionPanel/DiceResult';
import DiceHistoryTable from './historyTable/DiceHistoryTable';

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

  const handlePlay = () => {
    const { win } = roll();
    showSnackbar(
      win ? 'You won' : `You lost — Number was ${DirectionFailHint[direction]}`,
      win,
    );
  };

  return (
    <Box maxWidth={600} mx="auto" p={4}>
      <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
        <DiceResult value={result} />
        <DiceControls
          threshold={threshold}
          direction={direction}
          setThreshold={setThreshold}
          setDirection={setDirection}
          onRoll={handlePlay}
        />
      </Paper>

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
    </Box>
  );
};

export default DiceGame;
