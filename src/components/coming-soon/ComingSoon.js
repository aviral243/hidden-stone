import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => (
  <div className="ComingSoonSection section-main">
    <h1>
      <span className="orange-text">Coming</span> Soon!!!
    </h1>
    <p>
      Stay Tuned.
      <br />
      Go back to
      <span className="orange-text"> Home</span>.
    </p>
    <Link to="/">
      <button className="goHome">Home</button>
    </Link>
  </div>
);
export default ComingSoon;
