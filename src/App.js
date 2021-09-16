import React, { useEffect, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// import AddIcon from '@material-ui/icons/Add';




export const App = () => {

    const [num, setName] = useState(0);

    //  useEffect  ((e) => {
    //      if(e){
    //     alert("limit reached")
    //      }else{
    //         alert()
    //      }
    // })

    useEffect (() => {
        setName(num + 1)
    },[num <= 100 && num] )

    const increment = () => {

        if (num < 10) {
            setName(num + 1)
        }
        else {
            alert("Warning your number limit is reached.")
        }
    }

    const decrement = () => {

        if (num > 0) {
            setName(num - 1)
        }
        else {
            alert("The number limit reached.")
        }
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="text_number"> {num} </h1>
                    <div className="btn_div">

                    {/* <Tooltip title="Delete"> */}

                        <Button id="btn" onClick={increment}> <AddIcon /></Button>      

                        <Button id="btn" onClick={decrement}> <MinimizeIcon/> </Button>
                    </div>
                </div>
            </div>
        </>
    )
}