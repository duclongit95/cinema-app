import { createMuiTheme } from "@material-ui/core";

const blueColor = "#0B72B9";
const redColor = "#fb4226";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blueColor}`,
      red: `${redColor}`,
    },
    primary: {
      main: `${blueColor}`,
    },
    secondary: {
      main: `${redColor}`,
    },
  },
});
