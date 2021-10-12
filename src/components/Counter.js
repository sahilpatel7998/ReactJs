import React, { useState, useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {

    const {count, setIncreaseNumber, setDecreaseNumber} =useContext(CounterContext)

    return (
        <div>
            <h3>Counter Number</h3>
            <p>count is : {count}</p>
            <button onClick = {setIncreaseNumber}>Increase</button>
            <button onClick = {setDecreaseNumber}>Decrease</button>
        </div>
    )
}

export default Counter;
