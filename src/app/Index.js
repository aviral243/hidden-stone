import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
//import Home from "./components/home/Home";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();
import "./styles/main.scss";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/home/sections/Main";
import AboutUs from "./components/home/sections/AboutUs";
import OurWork from "./components/home/sections/OurWork";
import Donate from "./components/home/sections/Donate";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Main} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/ourwork" component={OurWork} />
        <Route path="/donate" component={Donate} />
      </BrowserRouter>
    );
  }
}

render(<Index />, window.document.getElementById("app"));
