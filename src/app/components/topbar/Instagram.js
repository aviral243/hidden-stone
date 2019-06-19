import React, { Component } from "react";
class Instagram extends Component {
  render() {
    return (
      <div className="topbar">
        <a href={"https://www.google.com"}>
          <img
            src={require("/home/qroach/hidden-stone/src/app/images/Insta.svg")}
          />
        </a>
      </div>
    );
  }
}

export default Instagram;
