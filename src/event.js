import React, { useState } from "react";

const Event = () => {

    const purple = "#CCCCFF";
    const [bg, setBg] = useState(purple);

    const firstButton = "CLICK HERE!"
    const [buttonName, changeBtn] = useState(firstButton)


    const bgChange = () => {
        // console.log("clicked");
        let newbg = "#808B96 ";
        let newButton = "Double-tap"
        setBg(newbg);
        changeBtn(newButton);

    };

    const bgchangeAgain = ( ) => {
        setBg(purple);
        changeBtn("hello")
    }

    return (
        <>
            <div className="event" style={{ backgroundColor: bg }}>
                <h1>HELLO THERE!!</h1>
                <button id="btn3" onClick={bgChange} onDoubleClick={bgchangeAgain}>{buttonName}</button>
            </div>
        </>
    )
}

export default Event;