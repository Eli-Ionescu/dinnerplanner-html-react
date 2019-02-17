import React, { Component } from "react";
import "./DishDetails.css";

class DishDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // status: "LOADING"
        };
    }

    render() {
        return <div className="DishDetails"> Dish details</div>;
    }
}

export default DishDetails;
