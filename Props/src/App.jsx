import React from "react";
import Card from "./Components/Card";
const App = () => {
  return (
    <>
      <div className="flex gap-3 mt-3 flex-wrap">
        <Card name="Sam" age={21}/>
        <Card name="Uffexx"/>
        <Card name="Tousif"/>
        <Card name="Amna"/>
      </div>
    </>
  );
};

export default App;
