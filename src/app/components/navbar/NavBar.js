import React, { Component } from "react";
import { Facebook, Instagram } from "@material-ui/icons";

import { UFLogo } from "../core/Icons";
class NavBar extends Component {
  render() {
    return (
      <nav className="main-navbar-container">
        <div className="NavBarContainer" id="navbar">
          <div className="uf-logo-container">
            <a
              href={"https://utthanfoundation.co"}
              className="uf-logo-link-container"
            >
              <UFLogo className="uf-logo" />
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
              className="NavItemLinks js-scroll-trigger "
              id="nav-main"
            >
              HOME
            </a>
          </li>
          <li className="NavItem">
            <a
              href="/#aboutus"
              className="NavItemLinks js-scroll-trigger"
              id="nav-main"
            >
              WHO WE ARE
            </a>
          </li>
          <li className="NavItem">
            <a
              href="/#ourwork"
              className="NavItemLinks js-scroll-trigger"
              id="nav-main"
            >
              WHAT WE DO
            </a>
          </li>
          <li className="NavItem">
            <a
              href="/#donate"
              className="NavItemLinks js-scroll-trigger"
              id="nav-main"
            >
              JOIN THE JOURNEY
            </a>
          </li>
          <li className="NavItem">
            <a
              href="/#ourstory"
              className="NavItemLinks js-scroll-trigger "
              id="nav-main"
            >
              OUR STORY
            </a>
          </li>
          <li className="NavItem">
            <a
              href="/#ourteam"
              className="NavItemLinks js-scroll-trigger"
              id="nav-main"
            >
              OUR TEAM
            </a>
          </li>
          <li className="NavItem">
            <a className="NavItemLinks" href={"https://www.google.com"}>
              CONTACT
            </a>
          </li>
          <li className="NavItem">
            <a
              href="https://www.facebook.com/utthanfoundation140918/"
              className="NavItemLinks logo"
            >
              <Facebook />
            </a>
          </li>
          <li className="NavItem">
            <a
              href="https://www.instagram.com/utthanfoundation/"
              className="NavItemLinks logo"
            >
              <Instagram />
            </a>
          </li>
        </div>
      </nav>
    );
  }
}

export default NavBar;
