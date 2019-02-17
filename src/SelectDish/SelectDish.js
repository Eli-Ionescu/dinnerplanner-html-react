import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import DishSearch from "../DishSearch/DishSearch"
import "./SelectDish.css";

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">
          <div className="container">
              <div className="row">
                {/* We pass the model as property to the Sidebar component */}
                <div className="col-md-3">
                    <Sidebar model={this.props.model} />
                </div>
                <div className="col-md-9">
                    <DishSearch />
                    <Dishes />
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default SelectDish;
