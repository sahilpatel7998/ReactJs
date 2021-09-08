import { render } from '@testing-library/react';
import react from 'react';
import { Component } from 'react/cjs/react.production.min';
// import { Component } from 'react';

// export default class Student extends Component {

//     state = {
//         name: "jayesh",
//         rollno: this.props.rollno,
//         Gen: this.props.gender
//     }

//     render() {
//         return(
//             <>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.rollno}</h1>
//                 <h1>{this.state.Gen}</h1>
//             </>
//         )

//     }
// }

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "jayesh",
            rollno: this.props.rollno,
            Gen: this.props.gender
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h1>{this.state.rollno}</h1>
                <h1>{this.state.Gen}</h1>
            </>
        )

    }
}

