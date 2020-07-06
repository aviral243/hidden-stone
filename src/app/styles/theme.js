import { createMuiTheme, makeStyles } from "@material-ui/core";
import variables from "./partials/_variables.scss";

const fontFamilyArr = [];

export const theme = createMuiTheme({
  typography: {
    fontFamily: fontFamilyArr.join(",")
  },
  palette: {
    common: {
      black: variables.black,
      white: variables.white
    },
    primary: {
      main: variables.orange500,
      hover: variables.orange600,
      active: variables.orange600,
      disabled: variables.orange600
    },
    grey: {
      100: variables.grey100,
      200: variables.grey200,
      300: variables.grey300,
      400: variables.grey400,
      500: variables.grey500,
      600: variables.grey600,
      700: variables.grey700,
      800: variables.grey800,
      900: variables.grey900
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1370,
      xl: 1920
    }
  }
});

export const sectionUseStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(10)
  }
}));
