import React from 'react'

const Footer = ( {icon, content} ) => {
  return (
    <div className='flex justify-center items-center gap-1'>
        <p>{icon}</p>
        <p>{content}</p>
    </div>
  )
}

export default Footer