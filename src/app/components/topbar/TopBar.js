import React, { Component } from "react";
import Logo from "./Logo.js";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Contact from "./Contact";
class TopBar extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Facebook />
        <Instagram />
        <Contact />
      </div>
    );
  }
}

export default TopBar;
