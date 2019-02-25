import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import "./DinnerListOverview.css"

class DinnerListOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDishes: modelInstance.getSelectedDishes(),
            localStorage: window.localStorage
        }
    }
    update() {
        this.state.localStorage.setItem("selectedDishes", JSON.stringify(modelInstance.getSelectedDishes()));
        this.setState({
            selectedDishes: modelInstance.getSelectedDishes(),
        });
    }

    render() {
        let selectedDishesList = this.state.localStorage.getItem("selectedDishes") ?
            JSON.parse(this.state.localStorage.getItem("selectedDishes")) :
            modelInstance.getSelectedDishes();
        let selectedDishes = selectedDishesList.map((dish, i) => (
            <div className="col-md-3" key={i}>
                <div>
                    <img className="img-thumbnail" src={dish.image} alt={dish.title}/>
                    <div className="caption" id="captionOverview">
                        <p>{dish.title} {Math.round(dish.pricePerServing)} SEK</p>
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
