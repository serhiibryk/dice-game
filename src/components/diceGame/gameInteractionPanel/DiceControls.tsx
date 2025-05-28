import { FC } from 'react';
import { Radio, RadioGroup, FormControlLabel, Slider } from '@mui/material';

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
    <RadioGroup
      row
      value={direction}
      onChange={(e) => setDirection(e.target.value as Direction)}
      sx={{ justifyContent: 'center', mb: 2 }}
    >
      <FormControlLabel value="under" control={<Radio />} label="Under" />

      <FormControlLabel value="over" control={<Radio />} label="Over" />
    </RadioGroup>

    <Slider
      value={threshold}
      min={0}
      max={100}
      onChange={(_, val) => setThreshold(+val)}
      valueLabelDisplay="on"
    />

    <PrimaryButton label="PLAY" onClick={onRoll} />
  </>
);

export default DiceControls;
