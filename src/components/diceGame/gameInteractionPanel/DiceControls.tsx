import { FC } from 'react';
import { Radio, RadioGroup, FormControlLabel, Slider } from '@mui/material';

import PrimaryButton from '@/components/PrimaryButton';
import { Direction } from '@/types/game';
import { DirectionEnum, DirectionLabels } from '@/types/constants';

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
    <RadioGroup
      row
      value={direction}
      onChange={(e) => setDirection(e.target.value as Direction)}
      sx={{ justifyContent: 'center', mb: 2 }}
    >
      {Object.values(DirectionEnum).map((dir) => (
        <FormControlLabel
          key={dir}
          value={dir}
          control={<Radio />}
          label={DirectionLabels[dir]}
        />
      ))}
    </RadioGroup>

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

export default DiceControls;
