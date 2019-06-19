import React, { Component } from "react";
class Facebook extends Component {
  render() {
    return (
      <div className="topbar">
        <a href={"https://www.google.com"}>
          <img
            src={require("/home/qroach/hidden-stone/src/app/images/FB.svg")}
          />
        </a>
      </div>
    );
  }
}

export default Facebook;
