import { FC } from 'react';
import { Typography } from '@mui/material';

interface DiceResultProps {
  value: number | null;
}

const DiceResult: FC<DiceResultProps> = ({ value }) => {
  if (value === null) return null;

  return (
    <Typography variant="h3" sx={{ mb: 2 }}>
      {value}
    </Typography>
  );
};

export default DiceResult;
