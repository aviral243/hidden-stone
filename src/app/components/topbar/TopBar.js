import React, { Component } from "react";
class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="web">
          <div className="logo">
            <a href={"https://www.google.com"}>
              <img src={require("../../images/logo.svg")} />
            </a>
          </div>
        </div>
        <div className="contact">
          <div className="logo">
            <a href={"https://www.google.com"}>
              <img src={require("../../images/FB.svg")} />
            </a>
          </div>
          <div className="logo">
            <a href={"https://www.google.com"}>
              <img src={require("../../images/Insta.svg")} />
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
