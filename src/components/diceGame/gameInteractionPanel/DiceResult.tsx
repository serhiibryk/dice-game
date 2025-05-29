import { FC } from 'react';

import { StyledResultNumber } from '@/styles/diceResult.styles';

interface DiceResultProps {
  value: number | null;
}

const DiceResult: FC<DiceResultProps> = ({ value }) => {
  if (value === null) return null;

  return <StyledResultNumber variant="h3">{value}</StyledResultNumber>;
};

export default DiceResult;
