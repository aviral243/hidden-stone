import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./error404/Error404";
import Home from "./home/Home";
import Test from "./test/index";
import ComingSoon from "./coming-soon/ComingSoon";
import "../styles/main.scss";
class Index extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="*" component={Error404} />
      </Switch>
    );
  }
}

export default Index;
