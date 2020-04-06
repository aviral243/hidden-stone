import React, { Component } from "react";
import { InstaLogo, FacebookLogo, UFLogo } from "../../images/SVGLogos.js";
class NavBar extends Component {
  render() {
    return (
      <ul className="NavBarContainer" id="navbar">
        <div className="uf-logo">
          <a href={"https://utthanfoundation.co"} id="UFlogo">
            <UFLogo />
            <div className="NavBarHeadingContainer">
              <span className="NavBarHeading">Utthan Foundation</span>
              <span className="NavBarSubHeading">
                Your success, our determination
              </span>
            </div>
          </a>
        </div>
        <li className="NavItem activeLink">
          <a
            href="/#main"
            className="NavItemLinks js-scroll-trigger hover "
            id="nav-main"
          >
            HOME
          </a>
        </li>
        <li className="NavItem">
          <a
            href="/#aboutus"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-main"
          >
            WHO WE ARE
          </a>
        </li>
        <li className="NavItem">
          <a
            href="/#ourwork"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-main"
          >
            WHAT WE DO
          </a>
        </li>
        <li className="NavItem">
          <a
            href="/#donate"
            className="NavItemLinks js-scroll-trigger hover"
            id="nav-main"
          >
            JOIN THE JOURNEY
          </a>
        </li>
        <li className="NavItem">
          <a
            href="/#ourstory"
            className="NavItemLinks js-scroll-trigger hover "
            id="nav-main"
          >
            OUR STORY
          </a>
        </li>
        <li className="NavItem">
          <a
            href="/#ourteam"
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
          <a
            href="https://www.facebook.com/utthanfoundation140918/"
            className="NavItemLinks  hover"
          >
            <FacebookLogo />
          </a>
        </li>
        <li className="NavItem logo">
          <a
            href="https://www.instagram.com/utthanfoundation/"
            className="NavItemLinks hover"
          >
            <InstaLogo />
          </a>
        </li>
      </ul>
    );
  }
}

export default NavBar;
