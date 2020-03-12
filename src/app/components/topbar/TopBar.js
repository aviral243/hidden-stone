import React, { Component } from "react";
import UFlogo from "../../images/logo.svg";
import FBlogo from "../../images/FB.svg";
import Instalogo from "../../images/Insta.svg";
class TopBar extends Component {
  render() {
    return (
      <ul className="TopBarContainer" id="topbar">
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
        <li className="NavItem activeLink">
          <a
            href="#main"
            className="NavItemLinks js-scroll-trigger hover "
            id="nav-main"
          >
            HOME
          </a>
        </li>
        <li className="NavItem">
          <a
            href="#aboutus"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-main"
          >
            WHO WE ARE
          </a>
        </li>
        <li className="NavItem">
          <a
            href="#ourwork"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-main"
          >
            WHAT WE DO
          </a>
        </li>
        <li className="NavItem">
          <a
            href="#donate"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-main"
          >
            JOIN THE JOURNEY
          </a>
        </li>
        <li className="NavItem activeLink">
          <a
            href="#ourstory"
            className="NavItemLinks js-scroll-trigger hover "
            id="nav-sub-section"
          >
            OUR STORY
        </a>
        </li>
        <li className="NavItem">
          <a
            href="#ourteam"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-sub-section"
          >
            OUR TEAM
        </a>
        </li>
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
      </ul>
    );
  }
}

export default TopBar;
