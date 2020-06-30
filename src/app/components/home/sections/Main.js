import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { Button } from "../../core";
class Main extends Component {
  render() {
    return (
      <Grid container className="section section-main-container" id="main">
        <div className="grad" />
        <Grid item xs={8}>
          <section className="section-main">
            <h1>
              let’s build a <span className="orange-text">society</span> with
              skilled individuals
            </h1>
            <p>
              <span className="orange-text">Utthan</span> works to build this
              society of our dreams
            </p>
            <span>
              <Link to="/coming-soon">
                <Button className="donate">Donate</Button>
              </Link>

              <button className="learn-more">Learn More</button>
            </span>
          </section>
        </Grid>
      </Grid>
    );
  }
}

export default Main;
