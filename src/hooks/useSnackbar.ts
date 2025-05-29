import { useCallback, useRef, useState } from 'react';

import { ISnackbarData, IUseSnackbarReturn } from '@/types/snackbar';

export const useSnackbar = (): IUseSnackbarReturn => {
  const [snackbarData, setSnackbarData] = useState<ISnackbarData>({
    open: false,
    message: '',
    win: false,
  });

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((message: string, win: boolean) => {
    setSnackbarData((prev) => {
      if (prev.open) {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
          setSnackbarData({ open: true, message, win });
        }, 100);

        return { ...prev, open: false };
      }

      return { open: true, message, win };
    });
  }, []);

  const close = useCallback(() => {
    setSnackbarData((prev) => ({ ...prev, open: false }));
  }, []);

  return { snackbar: snackbarData, show, close };
};
