import React, { Component } from "react";
import UFlogo from "../../images/logo.svg";
import FBlogo from "../../images/FB.svg";
import { InstaLogo, FacebookLogo } from "../../images/SVGLogos.js";
class TopBar extends Component {
  render() {
    return (
      <ul className="NavBarContainer" id="navbar">
        <div className="uf-logo">
          <a href={"https://utthanfoundation.co"} id="UFlogo">
            <img src={UFlogo} />
            <div className="NavBarHeadingContainer">
              <span className="NavBarHeading">Utthan Foundation</span>
              <span className="TopBarSubHeading">
                Your success, our determination
              </span>
            </div>
          </a>
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
        <li className="NavItem">
          <a
            href="#ourstory"
            className="NavItemLinks js-scroll-trigger hover "
            id="nav-main"
          >
            OUR STORY
          </a>
        </li>
        <li className="NavItem">
          <a
            href="#ourteam"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-main"
          >
            OUR TEAM
          </a>
        </li>
        <li className="NavItem">
          <a className="NavItemLinks hover" href={"https://www.google.com"}>
            CONTACT
          </a>
        </li>
        <li className="NavItem logo">
          <a href={"https://www.google.com"} className="NavItemLinks  hover">
            <FacebookLogo />
          </a>
        </li>
        <li className="NavItem logo">
          <a href={"https://www.google.com"} className="NavItemLinks hover">
            <InstaLogo />
          </a>
        </li>
      </ul>
    );
  }
}

export default TopBar;
