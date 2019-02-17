import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import "./App.css";
import DinnerOverview from "./DinnerOverview/DinnerOverview";
import DishDetails from "./DishDetails/DishDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "Dinner Planner"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          {/* We rendered different component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            render={() => <SelectDish model={modelInstance} />}
          />
          <Route
              path="/dishOverview"
              render={() => <DinnerOverview model={modelInstance} />}
          />
          <Route
              path="/details/:id"
              render={(props) => <DishDetails {...props} model={modelInstance} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
