import { FC, memo } from 'react';
import { Radio, FormControlLabel } from '@mui/material';

import { CUSTOM_SLIDER_MARKS, DirectionEnum, DirectionLabels } from '@/types/constants';
import { StyledRadioGroup } from '@/styles/diceControls.styles';
import { StyledSlider } from '@/styles/diceGame.styles';
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
          labelPlacement="start"
        />
      ))}
    </StyledRadioGroup>

    <StyledSlider
      value={threshold}
      min={0}
      max={100}
      step={1}
      onChange={(_, val) => setThreshold(+val)}
      valueLabelDisplay="on"
      marks={CUSTOM_SLIDER_MARKS}
      color="primary" 
    />

    <PrimaryButton
      label="play"
      onClick={onRoll}
      sx={{ textTransform: 'uppercase' }}
    />
  </>
);

export default memo(DiceControls);
