import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Component2 = () => {

    const { setIncreaseNumber } = useContext(CounterContext);

    return (
        <div style={{ backgroundColor: "azure" }}>
            <button onClick ={setIncreaseNumber}>Increase</button>
        </div>
    )
}

export default Component2
