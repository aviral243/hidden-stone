import React from "react";

const Navbr = props => (
  <header className="toolbar">
    <nav className="navigation">
      <div className="items">
        <div className="verticalLine">
          <ul>
            <li>
              <a href="/">HOME</a>{" "}
            </li>
            <li>
              <a href="/">WHO WE ARE</a>{" "}
            </li>
            <li>
              <a href="/">WHAT WE DO</a>{" "}
            </li>
            <li>
              <a href="/">JOIN THE JOURNEY</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbr;