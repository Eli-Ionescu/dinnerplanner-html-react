import React, { Component } from "react";
import "./DinnerOverview.css";
import {Link} from "react-router-dom";
import DinnerListOverview from "../DinnerListOverview/DinnerListOverview";

class DinnerOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests()
        };
    }

    // this methods is called by React lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to setup model observer
    componentDidMount() {
        this.props.model.addObserver(this);
    }

    // this is called when component is removed from the DOM
    // good place to remove observer
    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }

    // in our update function we modify the state which will
    // cause the component to re-render
    update() {
        this.setState({
            numberOfGuests: this.props.model.getNumberOfGuests()
        });
    }

    render() {
        return (
            <div className="DishOverview">
                <div className="container">
                    <div className="row">
                        <h3 className="text-left col-md-6" id="numberPeopleOverview">
                            My Dinner: {this.state.numberOfGuests} people
                        </h3>
                        <div className="text-right col-md-6">
                            <Link to="/search">
                                <button className="button button-back" type="button" id="buttonGoBackEditDinner">Go back and
                                    edit dinner
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <DinnerListOverview/>
                    </div>
                </div>
                <hr/>
                <div className="text-center">
                    <Link to="/printFullRecipe">
                        <button id="buttonFullRecipe" className="button"> Print full recipe</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default DinnerOverview;
