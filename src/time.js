import React, { useState } from 'react';

const Time = () => {
    const timeS = new Date().toLocaleTimeString();
    const state = useState();

    const [time, setTime] = useState(timeS);  // here "newTime" is initial value , 'time' is current value, "setTime" is updated value means if we update value in current value(setTime) it will be passed in "time"(current value) 


    const getTime = () => {

    const timeS = new Date().toLocaleTimeString();
    setTime(timeS)

    }

    return (
        <>
        <div className = "time">
        <h1> {time}</h1>
        
        <button id = "btn2" onClick = {getTime}>Get Time</button>
        </div>
        </>
    )
}
export default Time;