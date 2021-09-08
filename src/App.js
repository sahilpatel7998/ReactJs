import React from 'react';
import add, { sub, mul, div } from './cal';



function App() {
  return (
    <>
      <div>
        <h1> the total of two no. is - {add(20, 30)} </h1>
        <h1> the substraction of two no is - {sub(20, 30)}</h1>
        <h1> the mul of two no is - {mul(20, 30)}</h1>
        <h1> the division of two no is - {div(20, 30)}</h1>
      </div>
    </>
  )
}
export default App;