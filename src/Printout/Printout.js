import React, { Component } from "react";
import "./Printout.css";
import TopBar from "../TopBar/TopBar";
import modelInstance from "../data/DinnerModel";

class Printout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="Printout">
                <div className="container">
                    <TopBar model={modelInstance} routePath="/dishOverview"/>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Printout;
