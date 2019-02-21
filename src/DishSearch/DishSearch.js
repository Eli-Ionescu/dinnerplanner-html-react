import {Component} from "react";
import React from "react";
import modelInstance from "../data/DinnerModel";
import "./DishSearch.css"
import Dishes from "../Dishes/Dishes";

class DishSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "All",
            filter: "",
            dishes: [],
        }
    }

    // When the search button is pressed,
    // the type and the filter of this component changes
    // and everything is re-rendered
    updateSearch = () => {
        // get type
        let type = document.getElementById("dishType");
        let typeVal = type.options[type.selectedIndex].text;

        // get filter
        let filterVal = document.getElementById("keyWords").value;
        modelInstance.getAllDishes(typeVal, filterVal)
            .then(dishes => {
                this.setState({
                    type: typeVal,
                    filter: filterVal,
                    dishes: dishes.results,
                });
            }).catch(() => {
                this.setState({
                    status: "ERROR"
                });
        });
    };

    render() {
        let allOptions = modelInstance.getAllDishTypes().map(dishType => (
            <option key={dishType}>{dishType}</option>
        ));
        let type = this.state.type;
        let filter = this.state.filter;
        console.info(this.state);
        return (
            <div className="DishSearch">
                <div id="searchBar">
                    <h2>Find a dish</h2>
                    <input type="search" id="keyWords" placeholder="Enter key words"/>
                    <label htmlFor="dishType" className="type">Type</label>
                    <select id="dishType">
                        <option> All</option>
                        {allOptions}
                    </select>
                    <button id="dishSearchButton" className="button-search" onClick={this.updateSearch}>Search</button>
                    <hr/>
                </div>
                {/*Trigger state change*/}
                <Dishes type={type} filter={filter} dishes={this.state.dishes}/>
            </div>
        );
    }
}
export default DishSearch;
