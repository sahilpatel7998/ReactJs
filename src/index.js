import React from "react";
import ReactDOM from "react-dom"
import { App } from "./App";
import Hooks from "./hooks";
import "./index.css"
import UseEffects from "./useEffect";

ReactDOM.render (
  <>
  <App/>
  <UseEffects/>
  <Hooks/>
  </>, 
  document.getElementById('root')
)