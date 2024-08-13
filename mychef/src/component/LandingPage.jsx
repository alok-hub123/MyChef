import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function LandingPage() {

  // useGSAP(() => {
  //   gsap.from(".text-styling", {
  //     x: -500,
  //     opacity: 0,
  //     duration: 3,
  //     delay: 0.3,
  //     stagger: 0.5,
  //     ease: 1
  //   })
  // }, []);

  // useGSAP(() => {
  //   gsap.from(".foodplate", {
  //     opacity: 0,
  //     duration: 2,
  //     delay: 4,
  //     ease: 1
  //   })
  // }, []);

  return (
    <div className='relative'>

      <img src="/Images/l_spoon.png" alt="" className="spoon h-[30vh] w-[25vw] absolute top-[7vh] left-[-5vw]" />
      <img src="/Images/spoon.png" alt="" className='h-[37vh] absolute right-[36%] top-[33vh]' />
      <img src="/Images/fork.png" alt="" className='h-[35vh] absolute right-[37%] top-[33vh]' />
      <img src="/Images/tomato.png" alt="" className='absolute right-0 top-[13vh] h-[20vh] '/>
      <img src="/Images/onionslice.png" alt="" className='absolute right-[2vw] top-[25vh] h-[10vh] '/>
      <img src="/Images/garlicleaf.png" alt="" className='absolute left-0 top-[75vh] h-[20vh] '/>

      <div className='w-full h-[100vh] pl-1 flex justify-between items-center'>
        <div className='text-structure ml-40 overflow-hidden w-[30vw]'> {/*md,sm and xs is for responsiveness remeber if you want cahnge in device change the value here first*/}
          <div className='masker'>
            {["Discover", "Cook", "and Share", "Delicious Recipies"].map((item, index) => (
              <h1 key={index} className='text-styling uppercase text-5xl text-white font-semibold leading-none tracking-tighter md:text-5xl sm:text-3xl xs:text-2xl'>{item}</h1>
            ))}
          </div>
        </div>
        <div className=' mt-20 mr-10 w-[40vw]'>
          <img src="./Images/FoodPlate.jpg" alt="dish" className='foodplate w-[30vw] h-[65vh] text-white' />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;