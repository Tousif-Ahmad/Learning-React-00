import React from 'react'
const Card = ({name}) => {
  // console.log(props);
  return (
   <>
        <div className='p-8 rounded-3xl bg-red-200 w-36 h-28'>{name}</div>
   </>
    
  )
}

export default Card