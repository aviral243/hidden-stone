import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => (
  <div className="Error404Section">
    <h1>
      <span className="orangeText">Oops!!!</span> 404
    </h1>
    <p>
      Page not found.
      <br />
      You are probably in a wrong place.
    </p>
    <p>
      Go back to
      <span className="orangeText"> Home</span>.
    </p>
    <Link className="goHome" to="/">
      Home
    </Link>
  </div>
);
export default Error404;
