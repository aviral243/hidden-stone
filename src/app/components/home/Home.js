import React, { Component } from "react";
import { Sections, SubSections } from "./sections/index";
class Home extends Component {
  render() {
    return (
      <div className="main">
        <Sections.Main />
        <Sections.OurWork />
        <Sections.AboutUs />
        <Sections.Donate />
        <SubSections.OurEndeavours />
        <SubSections.OurTeam />
        <SubSections.OurStory />
      </div>
    );
  }
}

export default Home;
