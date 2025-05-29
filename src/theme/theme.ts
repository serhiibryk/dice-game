import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9C27B0',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 56,

          '&:not(:has(th))': {
            height: 32,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: theme.spacing(0.5),
          paddingBottom: theme.spacing(0.5),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(1),
          textTransform: 'none',
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          marginTop: theme.spacing(3),
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
  },
});

export default theme;
