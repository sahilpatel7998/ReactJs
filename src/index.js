import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

// import name from './App';
// import any , { favshow, fName, lName}from './App' // you can give ANY NAME TO IMPORT default component

// import * as anything from "./App"

// import App from './App.jsx';


// ReactDOM.render(
//   <>
//   <ol>
//     <li>{any}</li>
//     <li>{anything.default}</li>

//     <li>{favshow}</li>
//     <li>{anything.favshow}</li>

//     {/* <li>{any}</li> */}
//     {/* <li></li> */}

//     <li>{fName()}</li>
//     <li>{anything.fName()}</li>
//   </ol>
// <div>
//   {lName()}
//   <br/>
//   {anything.lName()}

// </div>
//   </>,
//    document.getElementById('root')
// )
//==========================================


// ReactDOM.render(
//   <App name="John" />
//   , document.getElementById('app')
// );

// ReactDOM.render(<App/>
//   , document.getElementById('app'));  



let currentDate = new Date(2021, 9, 6, 7)
currentDate = currentDate.getSeconds()

let greetings = ''
const heading = {
  // color: 'red'
}

if (currentDate >= 1 && currentDate < 15) {
  greetings = 'Good Morning'
  heading.color = 'red'
} else if (currentDate >= 16 && currentDate < 30) {
  greetings = 'Good Afternoon'
  heading.color = 'green'
} else if (currentDate >= 31 && currentDate < 45) {
  greetings = 'Good Evening'
  heading.color = 'yellow'
} else {
  greetings = 'Good Night'
  heading.color = 'blue'
}

ReactDOM.render(
  <>
    <div>
      <h1>
        hello there, <span style={heading}>{greetings}</span>
      </h1>
    </div>
  </>,
  document.getElementById('root')
)