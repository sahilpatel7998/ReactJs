import React, { useState } from 'react'
import ComponentC from './ComponentsC'

const ComponentB = ({name}) => {
    return (
        <div>
            <h3>Component B</h3>
            <p>John : {name}</p>
            <ComponentC name = {name}/>
        </div>
    )
}

export default ComponentB;
