import React from 'react'

const Navbar = (props) => {
    console.log(props);
  return (
    <>
        <div>
            <h1>{props.title}</h1>
            <h1>{props.link}</h1>
            <h1>{props.number}</h1>
        </div>
    </>
  )
}

export default Navbar