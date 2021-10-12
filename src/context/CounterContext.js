import React from 'react'
import { createContext, useState } from 'react'

export const CounterContext = createContext();

const CounterContextProvider = (props)=>{

    const [count,setCount] = useState(0);

    const setIncreaseNumber= () =>{
        setCount(count+1);
    }

    const setDecreaseNumber= () =>{
        setCount(count-1);
    }

    const value = { count, setIncreaseNumber, setDecreaseNumber}

    return(
        <>
        <CounterContext.Provider value= {value}>
            {props.children}
        </CounterContext.Provider>
        </>
    )
}
export default CounterContextProvider;