import React, { Component } from "react";
import {Link} from "react-router-dom";
import DinnerListOverview from "../DinnerListOverview/DinnerListOverview";

class DishOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // status: "LOADING"
        };
    }

    render() {
        return (
            <div className="DishOverview">
                <div className="container">
                    <div className="row">
                        <h3 className="text-left col-md-6" id="numberPeopleOverview"></h3>
                        <div className="text-right col-md-6">
                            <Link to="/search">
                                <button className="button button-back" type="button" id="buttonGoBackEditDinner">Go back and
                                    edit dinner
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <DinnerListOverview/>
                    </div>
                </div>
                <hr/>
                <div className="text-center">
                    <Link to="/printFullRecipe">
                        <button id="buttonFullRecipe" className="button"> Print full recipe</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default DishOverview;
