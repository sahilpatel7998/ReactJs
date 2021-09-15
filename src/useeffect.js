import React, { useEffect, useState } from "react";

const Effect = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);


    useEffect(() => {
        alert("clicked")
    }, [num])
    return (
        <>
            <div>
                <button id = "btn" onClick={() => {
                    setNum(num + 1)
                }}>click {num}
                </button>
                <br />
                <button id = "btn" onClick={() => {
                    setNums(nums + 1)
                }}>click {nums}
                </button>

            </div>
        </>
    )
}

export default Effect;