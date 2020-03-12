import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      jqueryEaseReady: false,
      dataScroll: 0,
      isHovered: false
    };
  }

  render() {
    return (
      <ul className="NavBarContainer" id="navbar">
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
      </ul>
    );
  }
}
export default NavBar;
