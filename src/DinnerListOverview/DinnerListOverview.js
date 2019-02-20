import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import "./DinnerListOverview.css"

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

        let menuTotalPrice = modelInstance.getTotalMenuPrice();

        return (
            <div className="DinnerListOverview">
                <div className="col-md-3">
                    {selectedDishes}
                </div>
                <div class="col-md-2 vertical_line">
                    <p id="total_overview"> Total: <br/> {menuTotalPrice} SEK</p>
                </div>
            </div>
        );
    }
}

export default DinnerListOverview;
