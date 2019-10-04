import React, { Component } from "react";
import UFlogo from "../../images/logo.svg";
import FBlogo from "../../images/FB.svg";
import Instalogo from "../../images/Insta.svg";
class TopBar extends Component {
  render() {
    return (
      <div className="TopBarContainer" id="topbar">
        <div className="web">
          <div className="logo">
            <a href={"https://utthanfoundation.co"} id="UFlogo">
              <img src={UFlogo} />
              <div className="TopBarHeadingContainer">
                <span className="TopBarHeading">Utthan Foundation</span>
                <span className="TopBarSubHeading">
                  Your success, our determination
                </span>
              </div>
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
              <img src={Instalogo} id="instaLogo" />
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
