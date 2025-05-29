import { FC } from 'react';

import { StyledResultNumber } from '@/styles/diceResult.styles';

interface DiceResultProps {
  value: number | null;
}

const DiceResult: FC<DiceResultProps> = ({ value }) => (
  <StyledResultNumber variant="h3">{value ?? 0}</StyledResultNumber>
);

export default DiceResult;
