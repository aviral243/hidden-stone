import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => (
  <div className="Error404Section section-main">
    <h1>
      <span className="orange-text">Oops!!!</span> 404
    </h1>
    <p>
      Page not found.
      <br />
      You are probably in a wrong place.
    </p>
    <p>
      Go back to
      <span className="orange-text"> Home</span>.
    </p>
    <button className="goHome">
      <a href="/">Home</a>
    </button>
  </div>
);
export default Error404;
