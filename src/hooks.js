import React, { useState } from "react";

const Hooks = () => {

    const [fullName, setFullName] = useState({one : '',two : '',three : '',four : ''
    });


    const onSubmit = (event) => {

        event.preventDefault();
        alert('Form submitted')
       
    }

    const InputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        const { value, name} = event.target;


        setFullName((preVAlue) => {

          return {
            ...preVAlue,
            [name] : value
          };
        })
       
    };

   

    return (
        <>
            <div >
                <form onSubmit={onSubmit}>
                    <div className="text">
                        <h1 className="text2">Hello {fullName.one} {fullName.two}</h1>
                        <p>{fullName.three}</p>
                        <p>{fullName.four}</p>
                        
                        <input
                            type="text"
                            placeholder="first"
                            name="one"
                            onChange={InputEvent}
                            value={fullName.one}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Second"
                            // name="lName"                            
                            name="two"                            
                            onChange={InputEvent}
                            value={fullName.two}
                        />
                        <input
                            type="three"
                            placeholder="third"
                            name="three"                            
                            onChange={InputEvent}
                            value={fullName.three}
                            autoComplete = "off"
                        />
                        <input
                            type="number"
                            placeholder="fourth"
                            name="four"                            
                            onChange={InputEvent}
                            value={fullName.four}
                        />
                        <br />
                        <button id="btn" type='submit' >Submit </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Hooks;
