import React from 'react';

export default class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Jaguar",
            model: "Jaguar XE",
            color: this.props.colour,
            year: 1922
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <p>
                    {this.state.color}
                    {this.state.model}
                    {this.state.year}.
                </p>
            </div>
        );
    }
}
