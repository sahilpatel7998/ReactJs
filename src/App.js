import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState();
  const [name2, setName2] = useState();


  const InputEvent = (event) => {
    // console.log("clicked");
    // console.log(event.target.value)
    // if()
    setName(event.target.value)
  }

const afterClick = ( ) => {
  // const [name2, setName2] = useState();

setName2(name)

}
  return (
    <>
      <div className="text">
        {/* <h1 className="text2">Hello {name}</h1> */}
        <h1 className="text2">Hello {name2}</h1>

        <input
          type="text"
          placeholder="Enter your name"
          onChange={InputEvent}
          value= {name}
        />
        <button id="btn" onClick = {afterClick}>Click here!</button>
      </div>
    </>
  )
}

export default App;