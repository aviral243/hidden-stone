import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => (
  <div className="ComingSoonSection">
    <h1>
      <span className="orangeText">Coming</span> Soon!!!
    </h1>
    <p>
      Stay Tuned.
      <br />
      Go back to
      <span className="orangeText"> Home</span>.
    </p>
    <Link to="/">
      <button className="goHome">Home</button>
    </Link>
  </div>
);
export default ComingSoon;
