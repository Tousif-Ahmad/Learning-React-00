import React, { useState } from 'react'
import  './App.css'
import Navbar from './Navbar'

const App = () => {

  const [count, setCount] = useState(0);
  // console.log(arr);
    
  // let count = 0;
  function increment(){
    // count++;
    // console.log(count);
    setCount(count+1)
  }
  return (
    <>
      <div>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
    </>
  )
}

export default App