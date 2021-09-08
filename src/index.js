import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './user';
import Student from "./student"
import Car from './data';

ReactDOM.render(
  <>
    <App />
    <hr />
    <User name="John" id="11"></User>
    <hr />
    <Student rollno="101" gender="male" />
    <hr />
    <Car colour = "red"/>
  </>
  ,
  document.getElementById('root')

)