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
        <li className="NavItem">
          <a
            href="#main"
            className="NavItemLinks js-scroll-trigger hover activeLink"
            id="nav-main"
          >
            HOME
          </a>
        </li>
        <li className="NavItem">
          <a href="#aboutus" className="NavItemLinks js-scroll-trigger hover">
            WHO WE ARE
          </a>
        </li>
        <li className="NavItem">
          <a href="#ourwork" className="NavItemLinks js-scroll-trigger hover">
            WHAT WE DO
          </a>
        </li>
        <li className="NavItem">
          <a href="#donate" className="NavItemLinks js-scroll-trigger hover">
            JOIN THE JOURNEY
          </a>
        </li>
      </ul>
    );
  }
}
export default NavBar;
