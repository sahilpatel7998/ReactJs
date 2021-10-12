import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import Component2 from './Component2'

const Component1 = () => {

    const {count} = useContext(CounterContext);

    return (
        <div style= {{backgroundColor:"aliceblue"}}>
            <p> Count: {count}</p>
            <Component2/>
        </div>
    )
}

export default Component1
