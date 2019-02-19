import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";

class DinnerListOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING"
        };
    }

    render() {

        let selectedDishes = modelInstance.getSelectedDishes().map(dish => (
            <a>
                <img className="img-thumbnail" src={dish.image}/>
                <div className="caption" id="captionOverview">
                    <p>{dish.title} {dish.pricePerServing} SEK</p>
                </div>
            </a>
        ));

        return (
            <div className="DinnerListOverview">
                <div className="col-md-3">
                    {selectedDishes}
                </div>
            </div>
        );
    }
}

export default DinnerListOverview;
