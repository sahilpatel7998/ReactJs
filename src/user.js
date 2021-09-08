import React from "react";
import { Component } from "react";

// function User(props) {
//     return (
//         <>
//         <h1> hello there, { props.name }</h1>
//         <h2> Id is - {props.id}</h2>
//         </>
//     )
// }

class User extends React.Component {
    render() {
        return (
            <>
                <h1> hello there, {this.props.name}</h1>
                <h2> Id is - {this.props.id}</h2>
            </>
        )
    }
}

export default User;