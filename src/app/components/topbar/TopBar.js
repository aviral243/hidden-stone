import React, { Component } from "react";
import UFlogo from "../../images/logo.svg";
import FBlogo from "../../images/FB.svg";
import Instalogo from "../../images/Insta.svg";
class TopBar extends Component {
  render() {
    return (
      <div className="TopBarContainer">
        <div className="web">
          <div className="logo">
            <a href={"https://www.google.com"}>
              <img src={UFlogo} />
            </a>
          </div>
        </div>
        <div className="contact">
          <div className="logo">
            <a href={"https://www.google.com"}>
              <img src={FBlogo} />
            </a>
          </div>
          <div className="logo">
            <a href={"https://www.google.com"}>
              <img src={Instalogo} />
            </a>
          </div>
          <div className="logo">
            <a className="contactUs" href={"https://www.google.com"}>
              CONTACT
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
