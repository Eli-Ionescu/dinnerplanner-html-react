import modelInstance from "../data/DinnerModel";
import React, { Component } from "react";
import "./DetailsIngredients.css"

class DetailsIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING"
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
                    nrPeople: modelInstance.getNumberOfGuests()
                });
            })
            .catch(() => {
                this.setState({
                    status: "ERROR"
                });
            });
    }

    createIngredientsList () {
        let tableBody = this.state.dish.extendedIngredients.map(ingredient =>
            (<tr>
                <td> {ingredient.amount * this.state.nrPeople} {ingredient.unit} </td>
                <td>{ingredient.name}</td>
            </tr>));

        return (<div>
                <h3> Ingredients for {this.state.nrPeople} people</h3>
                <table className = "table" >
                    <tbody>
                    {tableBody}
                    </tbody>
                </table>
                <button className="button-add-to-menu" id="buttonAddToMenu">Add to menu</button>
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