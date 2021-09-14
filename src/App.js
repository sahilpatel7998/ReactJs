import React, { useState } from "react";

const App = () => {

    const [fullName, setFullName] = useState({
      fname : '',
      lname : '',
      email : '',
      phone : ''
    });


    const onSubmit = (event) => {

        event.preventDefault();
        alert('Form submitted')
        // setFullName(name);
        // setnewLastName(lastName)
    }

    const InputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        const { value, name} = event.target;

        // const value = event.target.value;
        // const name = event.target.name;

        setFullName((preVAlue) => {

          return {
            ...preVAlue,
            [name] : value
          }

          // if (name === "fName"){
          //   return {
          //     fname : value,
          //     lname : preVAlue.lname,
          //     email : preVAlue.email,
          //     phone : preVAlue.phone
          //   };
          // }else if (name=== "lName"){
          //   return{
          //     fname : preVAlue.fname,
          //     lname : value,
          //     email : preVAlue.email,
          //     phone : preVAlue.phone
              
          //   };
          // }else if (name=== "email"){
          //   return{
          //     fname : preVAlue.fname,
          //     lname : preVAlue.lname,
          //     email : value,
          //     phone : preVAlue.phone
          //   };
          // }else if (name=== "phone"){
          //   return{
          //     fname : preVAlue.fname,
          //     lname : preVAlue.lname,
          //     email : preVAlue.email,
          //     phone : value
          //   };
          // }
        })
        // console.log(event.target.placeholder);
        // setName(event.target.value);
        // setnewLastName()
    };

    // const InputEventTwo = (event) => {
    //     setLastName(event.target.value)
    // }

    return (
        <>
            <div >
                <form onSubmit={onSubmit}>
                    <div className="text">
                        <h1 className="text2">Hello {fullName.fname} {fullName.lname}</h1>
                        <p>{fullName.email}</p>
                        <p>{fullName.phone}</p>
                        
                        <input
                            type="text"
                            placeholder="Enter your First name"
                            // name="fName"
                            name="fname"
                            onChange={InputEvent}
                            value={fullName.fname}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Last name"
                            // name="lName"                            
                            name="lname"                            
                            onChange={InputEvent}
                            value={fullName.lname}
                        />
                        <input
                            type="email"
                            placeholder="Enter your email adress"
                            name="email"                            
                            onChange={InputEvent}
                            value={fullName.email}
                            autoComplete = "off"
                        />
                        <input
                            type="number"
                            placeholder="Enter your contact number"
                            name="phone"                            
                            onChange={InputEvent}
                            value={fullName.phone}
                        />
                        <br />
                        <button id="btn" type='submit' >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default App;
