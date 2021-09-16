import React, { useEffect, useState }  from "react";

const UseEffects = ( ) => {

    const [count, setCount] = useState(1);

    useEffect(() =>{
             console.log("hello world")
             document.title = `${count}`
    }) 

   const handleChange= (() => {
        setCount(count +1) ;
    });

    console.log("first")
    
    return(
        <>
        <h1>hello {count}</h1>
        <button id = 'btn' onClick = {handleChange}>click</button>
        </>
    )
}

export default UseEffects;