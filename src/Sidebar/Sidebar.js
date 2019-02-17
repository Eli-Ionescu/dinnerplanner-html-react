import React, { Component } from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this);
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    });
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(e.target.value);
  };

  render() {
    return (
          <div className="Sidebar">
            <div id="row" id="sidebarHeader">
              <h3 className="col-xs-4">My Dinner</h3>
              <div id="button_collapse" className="hidden-sm-up col-xs-4">
                <i className="fa fa-bars fa-2x" aria-hidden="true" data-toggle="collapse" data-target="#innerSidebar"></i>
              </div>
            </div>
            <div className="hidden-xs sidebar" id="innerSidebar">
              <label htmlFor="numberPeople" className="people">People: </label>
              <input
                  type="number"
                  value={this.state.numberOfGuests}
                  onChange={this.onNumberOfGuestsChanged}
              />
              <table className="table">
                <thead>
                <tr>
                  <th scope="col">Dish Name</th>
                  <th scope="col">Cost</th>
                </tr>
                </thead>
                <tbody id="selectedDishTableBody">
                </tbody>
              </table>
              <p id="totalPrice"></p>
              <Link to="/dishOverview">
                <button align="middle" className="button" id="confirmDinner">Confirm Dinner</button>
              </Link>

            </div>
          </div>
    );
  }
}



export default Sidebar;
