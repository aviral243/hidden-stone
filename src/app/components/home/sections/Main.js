import React, { Component } from "react";
import { Link } from "react-router-dom";
class Main extends Component {
  render() {
    return (
      <section className="section MainSection" id="main">
        <div className="grad" />
        <h1>
          let’s build a <span className="orangeText">society</span> with skilled
          individuals
        </h1>
        <p>
          <span className="orangeText">Utthan</span> works to build this society
          of our dreams
        </p>
        <span>
          <Link to="/coming-soon">
            <button className="donate">Donate</button>
          </Link>

          <button className="learnmore">Learn More</button>
        </span>
      </section>
    );
  }
}

export default Main;
