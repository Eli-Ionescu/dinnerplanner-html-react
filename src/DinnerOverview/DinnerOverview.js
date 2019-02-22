import React, { Component } from "react";
import {Link} from "react-router-dom";
import DinnerListOverview from "../DinnerListOverview/DinnerListOverview";
import TopBar from "../TopBar/TopBar";
import modelInstance from "../data/DinnerModel";

class DinnerOverview extends Component {
    render() {
        return (
            <div className="DishOverview">
                <div className="container">
                    <TopBar model={modelInstance} routePath="/search"/>
                </div>
                <hr/>
                <div className="container">
                    <DinnerListOverview/>
                </div>
                <hr/>
                <div className="text-center">
                    <Link to="/printout">
                        <button id="buttonFullRecipe" className="button"> Print full recipe</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default DinnerOverview;
