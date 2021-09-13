import React, { useState } from "react";
import Form from "../form";

const BasicForm = () => {

    const [email, setEmail] = useState();

    const [password, setPassword] = useState();

    const [allEntry, setAllentry] = useState();

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password };

        setAllentry([...allEntry, newEntry]);

        console.log(allEntry);
    }

    return (

        <>
            <form action="" onSubmit={submitForm}>

                <div>
                    <label htmlFor="email"> Email </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        // type="text"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Login</button>

            </form>

            <div>
                {
                    allEntry.map((currentElement) => {
                        return (
                            <div className="showDatastyle">
                            <p>{currentElement.email}</p>
                            <p>{currentElement.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BasicForm;