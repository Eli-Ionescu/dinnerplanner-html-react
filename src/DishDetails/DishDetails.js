import React, { Component } from "react";
import "./DishDetails.css";
import modelInstance from "../data/DinnerModel";
import Sidebar from "../Sidebar/Sidebar";
import DishSearch from "../DishSearch/DishSearch";
import Dishes from "../Dishes/Dishes";
import Link from "react-router-dom/es/Link";

class DishDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING"
        };
        this.id = props.match.params.id;
    }

    componentDidMount() {
        modelInstance
            .getDish(this.id)
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
                    <td scope="row"> {ingredient.amount * this.state.nrPeople} {ingredient.unit} </td>
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
        let dishDetails = null;
        let ingredientsTable = null;
        switch (this.state.status) {
            case "LOADING":
                dishDetails = <em>Loading...</em>;
                ingredientsTable = <em>Loading...</em>;
                break;
            case "LOADED":
                dishDetails = (
                    <div>
                        <h3 id="dishNameID">{this.state.dish.title}</h3>
                        <div id="imageDetails">
                            <img id="imageDetailsId" className="img-thumbnail" src={this.state.dish.image} alt={this.state.dish.title}/>
                        </div>
                        <p id="dishDescription">{this.state.dish.instructions}</p>
                        <Link to="/search">
                            <button className="button" id="buttonBackToSearch">Back to search</button>
                        </Link>
                    </div>);
                ingredientsTable = this.createIngredientsList();
                break;
            default:
                dishDetails = <b>Failed to load data, please try again</b>;
                ingredientsTable = <b>Failed to load data, please try again</b>;
                break;
        }
        return (
            <div className="DishDetails">
                <div className="container">
                    <div className="row">
                        {/* We pass the model as property to the Sidebar component */}
                        <div className="col-md-3">
                            <Sidebar model={this.props.model} />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6">{dishDetails}</div>
                                <div className="col-md-6">{ingredientsTable}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetails;
