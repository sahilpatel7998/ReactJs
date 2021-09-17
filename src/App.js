// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import image from "../src/images/user.png"

const App = () => {

  const [inputData, setInputData] = useState("");


  const [items, setItems] = useState([])

  const addItem = () => {

    if (!inputData) {

      alert('The item can not be empty!')

    } else {

      setItems([...items, inputData])
      setInputData('')

    }


    // const addItem = () =>{
    //   setItems([...items, inputData])

  }

  const deleteItem = (id) => {
    console.log(id)

    const updatedItems = items.filter((el, index) => {
      return index !== id;
    });

    setItems(updatedItems)

  }

  const removeAll = () => {
    setItems([]);
  }


  return (
    <>
      <div className="main_div">

        <div className="second_div">

          <figure>
            <img src = {image} className = "user-IMG" alt = "User"/>
            <figcaption> Update your info here!</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Enter your items"
              value={inputData}
              onChange={(e) => { setInputData(e.target.value) }}
            />

            <i className="fa fa-plus add-btn" title="add item" onClick={addItem}></i>
          </div>

          <div className="showItems">

            {
              items.map((el, index) => {
                return (
                  <div className="eachItems" key={index}>
                    <p>{el}</p>
                    <button className="btn" title="delete item" onClick={() => deleteItem(index)}> - </button>
                  </div>
                );
              })
            }


          </div>

          <div className="showItems">
            <button onClick={removeAll}> Remove items</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;

