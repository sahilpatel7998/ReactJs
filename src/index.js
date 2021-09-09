import React from 'react';
import ReactDOM  from 'react-dom';
import { CSSProperties } from 'react';
import App from './App';
import './index.css';
import Time from './time';
import Event from "./event"

ReactDOM.render(
  <>
  <App />
  {/* <div> */}
  <Time />
  {/* </div> */}
  <Event />
  </>,
  document.getElementById('root')
)