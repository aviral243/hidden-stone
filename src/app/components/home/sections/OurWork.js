import React, { Component } from "react";
import work from "../../../images/HomeBG.png";
import arrowRight from "../../../images/arrow-right.svg";

class OurWork extends Component {
  render() {
    return (
      <section className="OurWorkSection">
        <h1>
          <span className="orangeText">the</span> mission
        </h1>
        <p>
          <span className="orangeText">Utthan</span> strives to deliver
          facilites at the doorstep of these people. Our primary aim is to teach
          them different skills. Later we collaborate with different sectors to
          find them jobs. We also organise session to spread awareness and
          education
        </p>
        <div className="workContainer">
          <div className="imgMainContainer">
            <img src={work} />
            <span className="imgContent">
              <span className="imgHeading">Stiching workshop in Bareily</span>
              <span className="imgSubHeading"> March 2, 2019</span>
            </span>
          </div>
          <div className="imgContainer">
            <img src={work} />
          </div>
          <div className="imgContainer">
            <img src={work} />
          </div>
          <div className="imgContainer">
            <img src={work} />
          </div>
          <div className="imgContainer">
            <img src={work} />
          </div>
          <button className="viewMore">
            view more
            <img src={arrowRight} />
          </button>
        </div>
      </section>
    );
  }
}

export default OurWork;
