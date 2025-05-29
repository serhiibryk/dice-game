import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { CssBaseline } from '@mui/material';

import './globals.css';

export const metadata: Metadata = {
  title: 'Dice Game',
  description: 'Play the dice game and test your luck',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body suppressHydrationWarning={true}>
      <CssBaseline />

      {children}
    </body>
  </html>
);

export default RootLayout;
