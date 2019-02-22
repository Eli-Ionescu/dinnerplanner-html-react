import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="text-center" id="home">
          <p>Here you can plan your dinner</p>
          <Link to="/search">
            <button className="button">Start planning</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
