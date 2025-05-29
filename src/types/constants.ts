export enum DirectionEnum {
  Under = 'under',
  Over = 'over',
}

export const DirectionLabels: Record<DirectionEnum, string> = {
  [DirectionEnum.Under]: 'Under',
  [DirectionEnum.Over]: 'Over',
};

export const DirectionFailHint: Record<DirectionEnum, string> = {
  [DirectionEnum.Under]: 'lower',
  [DirectionEnum.Over]: 'higher',
};

export const DEFAULT_TRESHOLD = 20;
export const MAX_HISTORY_LENGTH = 10;
export const SHACKBAR_AUTO_HIDE_DURATION = 10000;
export const CUSTOM_SLIDER_MARKS = [
  { value: 0 },
  { value: 20 },
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100 },
];