import React, { Component } from 'react';
import { render } from "react-dom";
class App extends Component {
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

render(<App/>,window.document.getElementById('app'))