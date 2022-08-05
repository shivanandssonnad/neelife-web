import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    active: {
      main: "#009761",
    },
    disabled: {
      main: "#D9D9D9",
    },
    danger: {
      main: "#F03E3E",
    },
    default: {
      main: "#DEE2E6",
    },
  },
  typography: {
    fontFamily: "'Lato','sans-serif'",
  },
});
