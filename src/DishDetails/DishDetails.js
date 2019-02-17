import React, { Component } from "react";
import "./DishDetails.css";
import Sidebar from "../Sidebar/Sidebar";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import DetailsIngredients from "../DetailsIngredients/DetailsIngredients";
import Link from "react-router-dom/es/Link";

class DishDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING"
        };
        this.id = props.match.params.id;
    }

    render() {
        return (
            <div className="DishDetails">
                <div className="container">
                    <div className="row">
                        {/* We pass the model as property to the Sidebar component */}
                        <div className="col-md-3">
                            <Sidebar model={this.props.model} />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6">
                                    <DetailsInfo model={this.props.model} dishId={this.id}/>
                                    <Link to="/search">
                                        <button className="button" id="buttonBackToSearch">Back to search</button>
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    <DetailsIngredients model={this.props.model} dishId={this.id}/>
                                    <button className="button-add-to-menu" id="buttonAddToMenu">Add to menu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetails;
