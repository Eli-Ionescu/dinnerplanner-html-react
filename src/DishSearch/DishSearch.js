import {Component} from "react";
import React from "react";
import modelInstance from "../data/DinnerModel";
import "./DishSearch.css"

class DishSearch extends Component {
    render() {
        let allOptions = modelInstance.getAllDishTypes().map(dishType => (
            <option>{dishType}</option>
        ));
        return (
            <div className="DishSearch">
                <h2>Find a dish</h2>
                <input type="search" id="keyWords" placeholder="Enter key words"/>
                <label htmlFor="dishType" className="type">Type</label>
                <select id="dishType">
                    <option> All</option>
                    {allOptions}
                </select>
                <button id="dishSearchButton" className="button-search">Search</button>
                <hr/>
            </div>
        );
    }
}
export default DishSearch;
