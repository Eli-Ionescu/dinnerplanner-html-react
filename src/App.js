import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import "./App.css";
import DinnerOverview from "./DinnerOverview/DinnerOverview";
import DishDetails from "./DishDetails/DishDetails";
import Printout from "./Printout/Printout";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
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
                    <Route
                        path="/printout"
                        render={() => <Printout model={modelInstance} />}
                    />
                </header>
            </div>
        );
    }
}

export default App;
