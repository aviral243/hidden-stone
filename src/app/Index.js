import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/Theme.js";
import App from "./containers/App";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();
import "./styles/main.scss";
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
