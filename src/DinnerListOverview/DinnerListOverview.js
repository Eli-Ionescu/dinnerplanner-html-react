import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import "./DinnerListOverview.css"

class DinnerListOverview extends Component {
    render() {
        let selectedDishes = modelInstance.getSelectedDishes().map(dish => (
            <div className="col-md-3">
                <div>
                    <img className="img-thumbnail" src={dish.image} alt={dish.title}/>
                    <div className="caption" id="captionOverview">
                        <p>{dish.title} {dish.pricePerServing} SEK</p>
                    </div>
                </div>
            </div>
        ));

        let menuTotalPrice = modelInstance.getTotalMenuPrice();

        return (
            <div className="DinnerListOverview">
                <div className="row">
                    {selectedDishes}
                    <div className="col-md-2 vertical_line">
                        <p id="total_overview"> Total: <br/> {menuTotalPrice} SEK</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DinnerListOverview;
