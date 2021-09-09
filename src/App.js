import React, { useState } from "react";



const App = () => {

  const state = useState();            //useState == Array [ undefined, dispatchAction() ]
  // console.log(state);

  const [count, setCount] = useState(5)

  // let count = 1;

  const getCount = () => {
    setCount(count + 1);
    // console.log("clicked" + " " + count++);
  }

  return (
    <>
    <div className ="number">
      <h1>{count}</h1>
      <br></br>
      <button id = "btn" onClick={getCount}>Click Here!</button>
      </div>
    </>
  )
}

export default App;