import React, { Component } from "react";
import { Sections, SubSections } from "./sections";
import TopBar from "../topbar/TopBar";
import NavBar from "../navbar/NavBar";
class Home extends Component {
  render() {
    return (
      <div className="HomeContainer">
        <TopBar />
        <div className="HomeSection">
          <Sections.Main />
          <Sections.AboutUs />
          <Sections.OurWork />
          <Sections.Donate />
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Home;
