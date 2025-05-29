import { FC, useMemo } from 'react';
import { Slider as MuiSlider } from '@mui/material';

import { StyledSliderWrapper } from '@/styles/diceSlider.styles';

interface SliderProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider: FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const marks = useMemo(
    () =>
      Array.from({ length: (max - min) / 20 + 1 }, (_, i) => {
        const val = min + i * 20;
        return {
          value: val,
          label: val === min || val === max ? val.toString() : '',
        };
      }),
    [min, max],
  );

  return (
    <StyledSliderWrapper>
      <MuiSlider
        value={value}
        min={min}
        max={max}
        step={step}
        marks={marks}
        valueLabelDisplay="on"
        onChange={(_, val) => onChange(val as number)}
        aria-labelledby="labeled-slider"
      />
    </StyledSliderWrapper>
  );
};

export default Slider;
