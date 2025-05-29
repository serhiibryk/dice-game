import { FC, memo } from 'react';
import { Radio, FormControlLabel } from '@mui/material';

import { DirectionEnum, DirectionLabels } from '@/types/constants';
import { StyledRadioGroup } from '@/styles/diceControls.styles';
import PrimaryButton from '@/components/PrimaryButton';
import { Direction } from '@/types/game';
import Slider from '@/components/Slider';

interface DiceControlsProps {
  direction: Direction;
  threshold: number;
  setDirection: (dir: Direction) => void;
  setThreshold: (n: number) => void;
  onRoll: () => void;
}

const DiceControls: FC<DiceControlsProps> = ({
  direction,
  threshold,
  setDirection,
  setThreshold,
  onRoll,
}) => (
  <>
    <StyledRadioGroup
      row
      value={direction}
      onChange={(e) => setDirection(e.target.value as Direction)}
    >
      {Object.values(DirectionEnum).map((dir) => (
        <FormControlLabel
          key={dir}
          value={dir}
          control={<Radio />}
          label={DirectionLabels[dir]}
          labelPlacement="start"
        />
      ))}
    </StyledRadioGroup>
    <Slider value={threshold} onChange={setThreshold} />
    <PrimaryButton
      label="play"
      onClick={onRoll}
      sx={{ textTransform: 'uppercase' }}
    />
  </>
);

export default memo(DiceControls);
