import React, { Component } from "react";
import TopBar from "../TopBar/TopBar";
import modelInstance from "../data/DinnerModel";

class Printout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let dishesPrintout = modelInstance.getSelectedDishes().map(dish => (
            <div id="dinnerItem" className="row">
                <div className="col-md-2" id="imageContainer">
                    <img className="img-thumbnail" src={dish.image} alt={dish.title}/>
                </div>
                <div className="col-md-4" id="description">
                    <h2>{dish.title}</h2>
                    <p>{dish.instructions}</p>
                </div>
                <div className="col-md-6" id="preparation">
                    <h3>Preparation</h3>
                    <p>{dish.instructions}</p>
                </div>
            </div>
        ));

        return (
            <div className="Printout">
                <div className="container">
                    <TopBar model={modelInstance} routePath="/dishOverview"/>
                </div>
                <hr/>
                <div className="container" id="printoutList">
                    {dishesPrintout}
                </div>
            </div>
        );
    }
}

export default Printout;
