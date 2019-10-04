import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";

import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();
render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById("app")
);
