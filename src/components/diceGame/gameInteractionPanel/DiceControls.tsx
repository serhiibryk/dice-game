import { FC, memo } from 'react';
import { Radio, FormControlLabel, Slider } from '@mui/material';

import { DirectionEnum, DirectionLabels } from '@/types/constants';
import { StyledRadioGroup } from '@/styles/diceControls.styles';
import PrimaryButton from '@/components/PrimaryButton';
import { Direction } from '@/types/game';

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
        />
      ))}
    </StyledRadioGroup>

    <Slider
      value={threshold}
      min={0}
      max={100}
      onChange={(_, val) => setThreshold(+val)}
      valueLabelDisplay="on"
    />

    <PrimaryButton
      label="play"
      onClick={onRoll}
      sx={{ textTransform: 'uppercase' }}
    />
  </>
);

export default memo(DiceControls);
