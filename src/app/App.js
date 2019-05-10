import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/Theme.js";
import Home from "./components/home/Home.jsx";
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    );
  }
}

render(<App />, window.document.getElementById("app"));
