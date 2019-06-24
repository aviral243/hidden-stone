import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const navbr = () => {
  return (
    <ul className="Navbar">
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

export default navbr;
