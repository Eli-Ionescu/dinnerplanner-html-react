import modelInstance from "../data/DinnerModel";
import React, { Component } from "react";
import "./DetailsIngredients.css"

class DetailsIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING",
            numberOfGuests: this.props.model.getNumberOfGuests(),
            localStorage: window.localStorage
        };
        this.id = props.dishId;
    }

    componentDidMount() {
        modelInstance
            .getDish(this.props.dishId)
            .then(dish => {
                this.setState({
                    status: "LOADED",
                    dish: dish,
                    numberOfGuests: modelInstance.getNumberOfGuests()
                });
            })
            .catch(() => {
                this.setState({
                    status: "ERROR"
                });
            });
        this.props.model.addObserver(this);
    }

    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }

    update() {
        this.setState({
            numberOfGuests: this.props.model.getNumberOfGuests()
        });
    }

    createIngredientsList () {

        let tableBody = this.state.dish.extendedIngredients.map(ingredient =>
            (<tr>
                <td>{ingredient.amount * this.state.localStorage.getItem("numberOfGuests")} {ingredient.unit}</td>
                <td>{ingredient.name}</td>
            </tr>));


        return (<div>
                <h3> Ingredients for {this.state.localStorage.getItem("numberOfGuests")} people</h3>
                <table className = "table" >
                    <tbody>
                    {tableBody}
                    </tbody>
                </table>
                <p align="right">Total: {Math.round(this.state.dish.pricePerServing * this.state.localStorage.getItem("numberOfGuests"))} SEK </p>
            </div>
        );
    }

    render() {
        let ingredientsTable = null;
        switch (this.state.status) {
            case "LOADING":
                ingredientsTable = <em>Loading...</em>;
                break;
            case "LOADED":
                ingredientsTable = this.createIngredientsList();
                break;
            default:
                ingredientsTable = <b>Failed to load data, please try again</b>;
                break;
        }
        return <div className="DetailsIngredients">{ingredientsTable}</div>;
    }
}

export default DetailsIngredients;