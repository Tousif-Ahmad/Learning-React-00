import React from "react";
import "./App.css";
import { useState } from "react";
import Buttons from "./Components/Buttons";
const App = () => {

  const [count, setCount] = useState(0)

  function increment(){
      setCount(count + 1)
  }
  function decrement(){
      setCount(count - 1)
  }
  function reset(){
      setCount(0)
  }
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p>Count : {count}</p>

        <div className="btns">
          <Buttons text="Increment" func={increment}/>
          <Buttons text="Decrement" func={decrement}/>
          <Buttons text="Reset" func={reset}/>
          {/* <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button> */}
        </div>
      </div>
    </>
  );
};

export default App;
