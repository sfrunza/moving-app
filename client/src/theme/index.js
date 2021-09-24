import { createTheme } from "@material-ui/core/styles";
import typography from "./typography";
import palette from "./palette";

// A custom theme for this app
const theme = createTheme({
  typography,
  palette,
  overrides: {},
});

export default theme;
