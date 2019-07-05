import React from "react";
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
    <button className="goHome">Home</button>
  </div>
);
export default Error404;
