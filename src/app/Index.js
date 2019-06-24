import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import Navbr from "./components/navbar/Navbar";
OfflinePluginRuntime.install();
import "./styles/main.scss";
class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
        <Navbr />
      </BrowserRouter>
    );
  }
}

render(<Index />, window.document.getElementById("app"));
