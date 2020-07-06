import React, { Component } from "react";
import { Sections } from "./sections";

class Home extends Component {
  render() {
    return (
      <div className="HomeContainer" id="home-container">
        <div className="HomeSection">
          <Sections.Main />
          <Sections.AboutUs />
          <Sections.OurWork />
          <Sections.Donate />
          <Sections.OurStory />
          <Sections.OurTeam />
        </div>
      </div>
    );
  }
}

export default Home;
