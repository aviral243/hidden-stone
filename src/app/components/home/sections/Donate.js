import React, { Component } from "react";
import rightArrowHead from "../../../images/chevron-right.svg";
import Schemes from "./schemes/Schemes";
class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      scheme: ""
    };
  }

  render() {
    return (
      <section className="DonateSection">
        <h1>
          <span className="orangeText">help</span> us
        </h1>
        <div className="donateContainer">
          <div className="donateSchemesContainer">
            <p>by choosing one of the following schemes</p>
            <div className="donateSchemes">
              <hr />
              <Schemes />
            </div>
          </div>

          <div className="vertical-line" />
          <div className="donateAmountContainer">
            <p>Or donate an amount of your choice :)</p>
            <form className="donateAmount">
              <input type="text" />
              <button className="donate">Donate</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Donate;
