import React from "react";
import "./App.css";

function Square() {
  return (
    <>
      <div className="square"></div>
      <div className="square"></div>
    </>
  );
}
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Myself Tousif, How are you doing..</p>
      <Square />
      {Square}
    </>
  );
};

export default App;
