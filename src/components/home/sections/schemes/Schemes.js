import React from "react";
import rightArrowHead from "../../../../images/chevron-right.svg";
import rupeeSymbol from "../../../../images/rupee.svg";
import { defaultSchemes } from "./defaultSchemes";
const Schemes = () => (
  <div>
    {defaultSchemes.map((schemeDetails, index) => (
      <span className="donateSchemeContainer" key={index}>
        <input
          type="radio"
          id={index}
          name="scheme"
          value={index}
          defaultChecked={schemeDetails.selected}
        />
        <span className="donateSchemeContainerContent">
          <label className="donateSchemeName" htmlFor={index}>
            <img src={rightArrowHead} />
            {schemeDetails.scheme}
          </label>
          <div className="donateSchemeContent">
            <span>
              <label className="schemeContentAmount">Amount to be paid</label>
              <label>
                <img src={rupeeSymbol} />
                {schemeDetails.amount}
              </label>
            </span>
            <span>
              <label className="schemeContentDuration">Membership Tenure</label>
              {schemeDetails.duration}
            </span>
            <button className="donate">Donate</button>
          </div>
        </span>
        <hr />
      </span>
    ))}
  </div>
);
export default Schemes;
