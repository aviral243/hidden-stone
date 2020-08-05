import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { Button, FlexBox } from "../../core";
import { sectionUseStyles } from "../../../styles/theme";

const Main = () => {
  const sectionStyles = sectionUseStyles();

  return (
    <Grid container className="section section-main-container" id="main">
      <div className="grad" />
      <Grid item xs={8} classes={sectionStyles}>
        <FlexBox.Col justifyContent="center" className="section-main">
          <h1>
            let’s build a <span className="orange-text">society</span> with
            skilled individuals
          </h1>
          <p>
            <span className="orange-text">Utthan</span> works to build this
            society of our dreams
          </p>
          <FlexBox.Row mt={2}>
            <Link to="/coming-soon">
              <Button className="donate" label="Donate" />
            </Link>
            <Button
              className="learn-more"
              label="Learn More"
              variant="text"
              color="white"
            />
          </FlexBox.Row>
        </FlexBox.Col>
      </Grid>
    </Grid>
  );
};

export default Main;
