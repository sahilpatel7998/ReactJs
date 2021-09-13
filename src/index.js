import React from 'react';
import RactDOM from 'react-dom';
import App from './App';
import Form from './form';
import "./index.css"
import BasicForm from './components/basicform';

RactDOM.render(
  <>
  <App />
  <Form />
  <hr />
  {/* <BasicForm /> */}
  </>,
  document.getElementById('root')
)


