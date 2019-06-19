import React, { Component } from "react";
import TopBar from "../topbar/TopBar.js";
class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <section>
          <img id="bg1" src={require("../../images/HomeBG.png")} />
        </section>
        <section>
          <img id="bg1" src={require("../../images/HomeBG.png")} />
        </section>
      </div>
    );
  }
}

export default Home;
