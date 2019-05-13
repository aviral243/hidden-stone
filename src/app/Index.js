import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/Theme.js";
import App from "./containers/App";
class Index extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    );
  }
}

render(<Index />, window.document.getElementById("app"));
