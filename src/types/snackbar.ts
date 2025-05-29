export interface ISnackbarData {
  open: boolean;
  message: string;
  win: boolean;
}

export interface IUseSnackbarReturn {
  snackbar: ISnackbarData;
  show: (message: string, win: boolean) => void;
  close: () => void;
}
