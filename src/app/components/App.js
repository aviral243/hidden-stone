import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error404 from "./error404/Error404";
import Home from "./home/Home";
import Test from "./test/index";
import ComingSoon from "./coming-soon/ComingSoon";
import NavBar from "./navbar/NavBar";
import { theme } from "../styles/theme";
import "../styles/main.scss";

class Index extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/coming-soon" component={ComingSoon} />
              <Route path="*" component={Error404} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
