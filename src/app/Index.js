import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Home from "./components/home/Home";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();
import "./styles/main.scss";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/home/sections/Main";
import AboutUs from "./components/home/sections/AboutUs";
import OurWork from "./components/home/sections/OurWork";
import Donate from "./components/home/sections/Donate";
import Error404 from "./components/error404/Error404";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/ourwork" component={OurWork} />
          <Route path="/donate" component={Donate} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<Index />, window.document.getElementById("app"));
