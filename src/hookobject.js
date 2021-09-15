import React, { useState } from "react";

const Hook = () => {

    const [name, setname] = useState({
        firstName: '',
        lastName: ''
    })

    //    const Inputdata = (e) => {
    //         setname(e.target.value);
    //     }

    return (
        <>
            <div>
                <form>
                    <input type="text"
                        placeholder="enter your first name"
                        value={name.firstName}
                        onChange={e => { setname({...name,firstName: e.target.value }) }} />

                    <input type="text"
                        placeholder="enter your last name"
                        value={name.lastName}
                        onChange={e => { setname({ ...name,lastName: e.target.value }) }} />
                </form>

                <h1 className="text2">  {name.firstName} </h1>
                <h1 className="text2">  {name.lastName } </h1>
                <p className="text2"> {JSON.stringify(name)} </p>
            </div>
        </>
    )

}



export default Hook;