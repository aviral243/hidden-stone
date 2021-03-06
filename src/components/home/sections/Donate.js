import React, { Component } from "react";
import rightArrowHead from "../../../images/chevron-right.svg";
import Schemes from "./schemes/Schemes";
import rupeeSymbol from "../../../images/rupee.svg";
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
      <section className="section DonateSection" id="donate">
        <h1>
          <span className="orange-text">help</span> us
        </h1>
        <div className="donateContainer">
          <div className="donateSchemesContainer">
            <p>by choosing one of the following schemes</p>
            <div className="donateSchemes">
              <hr />
              <Schemes />
            </div>
          </div>
          <div className="verticalLine" />
          <div className="donateAmountContainer">
            <p>Or donate an amount of your choice :)</p>
            <form className="donateAmount">
              <input
                type="number"
                min="0"
                max="99999999"
                className="donateInput"
                required
                pattern="[1-9]{1}"
              />
              <img src={rupeeSymbol} className="rupeeSymbol" />
              <button className="donate">Donate</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Donate;
