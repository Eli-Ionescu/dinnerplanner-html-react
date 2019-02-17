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
        return (
            <div className="Printout">
                <div className="container">
                    <TopBar model={modelInstance} routePath="/dishOverview"/>
                </div>
                <hr/>

                <div id="dinnerItem" className="row">
                    <div className="col-md-2" id="imageContainer">
                        {/*<img className="img-thumbnail" src="${selectedDishes[i].image}"/>*/}
                    </div>
                    <div className="col-md-4" id="description">
                        {/*<h2>${selectedDishes[i].title}</h2>*/}
                        {/*<p>${selectedDishes[i].instructions}</p>*/}
                    </div>
                    <div className="col-md-6" id="preparation">
                        <h3>Preparation</h3>
                        {/*<p>${selectedDishes[i].instructions}</p>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Printout;
