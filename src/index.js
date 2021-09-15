import React from "react";
import ReactDOM  from "react-dom";
import { Main } from "./App";
import Hook from "./hookobject";
import Effect from "./useeffect"
import Css from "./index.css"


ReactDOM.render(
  <>
  <Hook />
  <Effect />
  <Main />
  </>,
  document.getElementById('root')
)