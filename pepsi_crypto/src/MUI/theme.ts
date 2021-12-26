import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#f5b342",
    },
    secondary: {
      main: "#af7209",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
