import React from 'react'
import videoBg from '../assets/videoBg.mp4'

export default function VideoIntro() {
  return (
    <div className="h-[100vh] w-full relative" >
      <div className=' h-[1vh] w-full bg-black absolute top-0 '></div>
      <img src="/Images/microwave.png" alt="" className='h-[98vh] w-[80%]' />
      <video src={videoBg} autoPlay loop muted className='h-[98vh] w-full object-cover absolute top-[1vh]'></video>
      <div className=' h-[1vh] w-full bg-black absolute bottom-0'></div>
    </div>
  )
}
