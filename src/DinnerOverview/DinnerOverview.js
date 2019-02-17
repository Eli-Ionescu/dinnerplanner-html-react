import React, { Component } from "react";
import "./DinnerOverview.css";
import {Link} from "react-router-dom";
import DinnerListOverview from "../DinnerListOverview/DinnerListOverview";
import TopBar from "../TopBar/TopBar";
import modelInstance from "../data/DinnerModel";

class DinnerOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="DishOverview">
                <div className="container">
                    <TopBar model={modelInstance} routePath="/search"/>
                </div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <DinnerListOverview/>
                    </div>
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
