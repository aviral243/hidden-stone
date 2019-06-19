import React, { Component } from "react";
class Logo extends Component {
  render() {
    return (
      <div className="topbar">
        <a href={"https://www.google.com"}>
          <img
            src={require("/home/qroach/hidden-stone/src/app/images/logo.svg")}
          />
        </a>
      </div>
    );
  }
}

export default Logo;
