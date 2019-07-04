/* eslint-disable arrow-spacing */
/* eslint-disable no-console */
import React, { Component } from "react";
import PropTypes from "prop-types";
import rightArrowHead from "../../../../images/chevron-right.svg";
import { defaultSchemes } from "./defaultSchemes";
class Schemes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div>
        {defaultSchemes.map((schemeDetails, index) => (
          <span className="donateSchemeContainer" key={schemeDetails}>
            <input type="radio" id={index} name="scheme" />
            <label className="donateSchemeName" htmlFor={index}>
              <img src={rightArrowHead} />
              {schemeDetails.scheme}
            </label>
            <div className="donateSchemeContent">
              <button className="donate">Donate</button>
              <span>
                <span className="schemeContentAmount">Amount to be paid</span>
                {schemeDetails.amount}
              </span>
              <span>
                <span className="schemeContentDuration">Membership Tenure</span>
                {schemeDetails.duration}
              </span>
            </div>

            <hr />
          </span>
        ))}
      </div>
    );
  }
}
export default Schemes;
