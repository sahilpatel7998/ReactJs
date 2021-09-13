import React, { useState } from "react";

const Form = () => {

    const [name, setName] = useState("");

    const [lastName, setLastName] = useState("");

    const [fullName, setFullName] = useState();

    const [newLastName, setnewLastName] = useState();


    const onSubmit = (event) => {

        event.preventDefault();
        setFullName(name);
        setnewLastName(lastName)
    }

    const InputEvent = (event) => {

        console.log(event.target.value);
        setName(event.target.value);
        // setnewLastName()
    };

    const InputEventTwo = (event) => {
        setLastName(event.target.value)
    }

    return (
        <>
            <div className="text">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1 className="text2">Hello {fullName} {newLastName}</h1>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            onChange={InputEvent}
                            value={name}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Last name"
                            onChange={InputEventTwo}
                            value={lastName}
                        />
                        <br />
                        <button id="btn" type='submit' >Click here!</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;
