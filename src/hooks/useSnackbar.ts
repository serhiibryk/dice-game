import { useCallback, useState } from 'react';

import { ISnackbarData, IUseSnackbarReturn } from '@/types/snackbar';

export const useSnackbar = (): IUseSnackbarReturn => {
  const [snackbarData, setSnackbarData] = useState<ISnackbarData>({
    open: false,
    message: '',
    win: false,
  });

  const show = useCallback((message: string, win: boolean) => {
    setSnackbarData({ open: true, message, win });
  }, []);

  const close = useCallback(() => {
    setSnackbarData((prev) => ({ ...prev, open: false }));
  }, []);

  return { snackbar: snackbarData, show, close };
};
