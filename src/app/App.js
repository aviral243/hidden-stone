import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/Theme.js";

class App extends React {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>Hello World</div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, window.document.getElementById("app"));
