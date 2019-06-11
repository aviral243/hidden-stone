import React from "react";
import { render } from "react-dom";
import Home from "./components/home/Home";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();
import "./styles/main.scss";
class Index extends React.Component {
  render() {
    return <Home />;
  }
}

render(<Index />, window.document.getElementById("app"));
