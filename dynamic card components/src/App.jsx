import React from 'react'
import Card from './Components/Card'
import userProfile from './assets/profile_user.jpg'
const App = () => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-wrap gap-2.5 bg-gray-400 p-3.5'>
      
      <Card name={"Tousif Ahmad"} imgUrl={"https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"} profession={"Web Developer"}/>

      <Card name={"Hamza"} imgUrl={userProfile} profession={"Graphic Designer"}/>
      <Card name={"Uffexx"} imgUrl={"https://media.licdn.com/dms/image/v2/D4E03AQGk9lvRc0QCqg/profile-displayphoto-shrink_200_200/B4EZba1jzEGkAg-/0/1747428200811?e=2147483647&v=beta&t=WPdK6x0kLfpItTcN4hvmb7nbtMn6QNJP2LUJNR2xWT8"} profession={"Video Editor"}/>
      <Card name={"Asif"} imgUrl={userProfile} profession={"Network Administrator"}/>
      <Card name={"Izhan"} imgUrl={userProfile} profession={"Social Media manager"}/>
      <Card name={"Amna"} imgUrl={userProfile} profession={"Influencer"}/>
    </div>
  )
}

export default App