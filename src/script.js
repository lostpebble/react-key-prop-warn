import "./polyfills.js";

import React from "react";
import ReactDOM from "react-dom";

console.log("hi!");

class App extends React.Component {
  render() {
    return (
      <div className="full-page-content">
        <div className="landing-blurb">
          <div className="logo">
            Logo here
          </div>
          <div className="animation">
            Something here
          </div>
          <h1 ref="landingLabel" className="label">
            I'm looking for things to do in
          </h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));