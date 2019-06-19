import React, { Component } from "react";
class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <span>
          <div className="logo">
            <a href={"https://www.google.com"}>
              <img src={require("../../images/logo.svg")} />
            </a>
          </div>
        </span>
        <span>
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
            <a href={"https://www.google.com"}>Contact</a>
          </div>
        </span>
      </div>
    );
  }
}

export default TopBar;
