import React from "react";
import { NavLink } from "react-router-dom";

const SubSectionNavBar = () => {
  return (
    <ul className="SubSectionNavBarContainer">
      <li className="NavItem">
        <NavLink to="/ourstory" exact>
          Our Story
        </NavLink>
      </li>
      <li className="NavItem">
        <NavLink to="/ourteam" exact>
          Our Team
        </NavLink>
      </li>
    </ul>
  );
};

export default SubSectionNavBar;
