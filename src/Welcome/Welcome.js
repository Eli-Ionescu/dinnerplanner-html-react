import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <h1 id="banner" >Dinner planner</h1>

        <div className="text-center" id="home">
          <p>Here you can plan your dinner</p>
          <Link to="/search">
            <button class="button">Start planning</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
