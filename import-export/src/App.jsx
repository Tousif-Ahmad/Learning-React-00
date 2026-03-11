import React from 'react'
import './App.css'
// import Navbar, {Card} from './Navbar.jsx'
import reactLogo from './assets/react.svg'
import data from './data.json'
import { useState } from 'react'
const App = () => {
  console.log(data);
  return (
    <>
    <h1>App</h1>
    <img src={reactLogo} alt="" />
    {/* <Navbar/>
    <Card/> */}

    
    </>
  )
}

// 

export default App