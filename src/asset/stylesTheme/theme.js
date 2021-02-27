import { createMuiTheme } from "@material-ui/core";

const blueColor = "#0B72B9";
const orangeColor = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blueColor}`,
      orange: `${orangeColor}`,
    },
    primary: {
      main: `${blueColor}`,
    },
    secondary: {
      main: `${orangeColor}`,
    },
  },
});
