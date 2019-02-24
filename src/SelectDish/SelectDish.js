import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DishSearch from "../DishSearch/DishSearch"

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
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default SelectDish;
