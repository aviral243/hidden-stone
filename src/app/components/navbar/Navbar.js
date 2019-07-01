import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="NavBarContainer">
      <li className="NavItem">
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      <li className="NavItem">
        <NavLink to="/aboutus" exact>
          WHO WE ARE
        </NavLink>
      </li>
      <li className="NavItem">
        <NavLink to="/ourwork" exact>
          WHAT WE DO
        </NavLink>
      </li>
      <li className="NavItem">
        <NavLink to="/join" exact>
          JOIN THE JOURNEY
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
