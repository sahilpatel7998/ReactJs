import React, { useState } from "react";

export  const Main = () => {

    const [num, setName] = useState(0);
    
const increment = ( ) => {

    if (num < 10){
    setName (num +1)
    }
    else {
        alert("Warning your number limit is reached")
    }
}

const decrement = () => {

    if(num > 0){
    setName(num -1)
    }
    else{
        alert("The number limit reached")
    }
}
    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <h1 className = "text_number"> {num} </h1>
                <div className = "btn_div">
                    <button id = "btn" onClick = {increment}> Increment </button>
                    <button id = "btn" onClick = {decrement}> Decrement </button>
                </div>
           </div>
        </div>
        </>
    )
}