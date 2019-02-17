import modelInstance from "../data/DinnerModel";
import React, { Component } from "react";
import Link from "react-router-dom/es/Link";

class DetailsInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING",
        };
    }

    componentDidMount() {
        modelInstance
            .getDish(this.props.dishId)
            .then(dish => {
                this.setState({
                    status: "LOADED",
                    dish: dish,
                    id:  this.props.dishId
                });
            })
            .catch(() => {
                this.setState({
                    status: "ERROR",
                });
            });
    }

    render() {
        let dishDetails = null;
        switch (this.state.status) {
            case "LOADING":
                dishDetails = <em>Loading...</em>;
                break;
            case "LOADED":
                dishDetails = (
                    <div>
                        <h3 id="dishNameID">{this.state.dish.title}</h3>
                        <div id="imageDetails">
                            <img id="imageDetailsId" className="img-thumbnail" src={this.state.dish.image}
                                 alt={this.state.dish.title}/>
                        </div>
                        <p id="dishDescription">{this.state.dish.instructions}</p>
                    </div>);
                break;
            default:
                dishDetails = <b>Failed to load data, please try again</b>;
                break;
        }
        return <div className="DetailsInfo">{dishDetails}</div>;
    }
}

export default DetailsInfo;