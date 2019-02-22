import React, { Component } from "react";
import {Link} from "react-router-dom";

class TopBar extends Component {
    routePath;
    constructor(props) {
        super(props);
        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests(),
            routePath: this.props.routePath
        };
    }

    componentDidMount() {
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

    render() {
        return (
            <div className="TopBar">
                <div className="row">
                    <h3 className="text-left col-md-6" id="numberPeopleOverview">
                        My Dinner: {this.state.numberOfGuests} people
                    </h3>
                    <div className="text-right col-md-6">
                        <Link to={this.state.routePath}>
                            <button className="button button-back" type="button" id="buttonGoBackEditDinner">Go back and
                                edit dinner
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;
