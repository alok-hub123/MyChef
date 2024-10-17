import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function LandingPage() {

  useGSAP(() => {
    gsap.from(".text-styling", {
      x: -100,
      opacity: 0,
      duration: 2,
      delay: .5,
      stagger: 1,
      ease: 1
    })
  }, []);

  useGSAP(() => {
    gsap.to(".foodplate", {
      y: 607,
      x: -850,
      scale:3/4,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".foodplate",
        start: "top 0%",
        end: "bottom 0%",
        scrub: true
      }
    })
  }, []);

  useGSAP(() => {
    gsap.to(".l_animate", {
      x: -195,
      duration: 2,
      delay: 0.3,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".l_animate",
        start: "top 0%",
        end: "bottom 40%",
        scrub: true
      }
    })
  }, []);

  useGSAP(() => {
    gsap.to(".r_animate", {
      x: 165,
      duration: 2,
      delay: 0.3,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".l_animate",
        start: "top 0%",
        end: "bottom 40%",
        scrub: true
      }
    })
  }, []);

  useGSAP(() => {
    gsap.from(".leaf", {
      x: 400,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".leaf",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      }
    })
  }, []);


  return (
    <div className='overflow-hidden bg-no-repeat bg-contain'>

      <div className='relative'>
        <div className='h-[90vh] absolute top-[-11.4vh] left-[-5vw] l_animate'>
          <img src="/Images/l_spoon.png" alt="" className=" h-[35vh] w-[25vw] " />
        </div>
        <div className='h-[50vh] l_animate absolute left-0 top-[70vh]'>
          <img src="/Images/garlicleaf.png" alt="" className=' h-[20vh] ' />
        </div>
        <div>
          <img src="/Images/spoon.png" alt="" className='h-[37vh] absolute right-[36%] top-[33vh]' />
        </div>
        <div>
          <img src="/Images/fork.png" alt="" className='h-[35vh] absolute right-[37%] top-[33vh]' />
        </div>
        <div>
          <img src="/Images/tomato.png" alt="" className='r_animate absolute right-0 top-0 h-[20vh] ' />
        </div>
        <div>
          <img src="/Images/onionslice.png" alt="" className='r_animate absolute right-[2vw] top-[75vh] h-[10vh] ' />
        </div>

        <div className='w-full h-[90vh] pl-1 flex justify-between items-center'>
          <div className='text-structure ml-40 overflow-hidden w-[30vw]'> {/*md,sm and xs is for responsiveness remeber if you want cahnge in device change the value here first*/}
            <div className='masker'>
              {["Discover", "Cook", "and Share", "Delicious Recipies"].map((item, index) => (
                <h1 key={index} className='text-styling uppercase text-5xl text-white font-semibold leading-none tracking-tighter md:text-5xl sm:text-3xl xs:text-2xl'>{item}</h1>
              ))}
            </div>
          </div>
          <div className=' mt-18 mr-10 w-[40vw]'>
            <img src="./Images/FoodPlate.jpg" alt="dish" className='foodplate w-[30vw] h-[65vh] text-white' />
          </div>
        </div>
      </div>

      <div className='h-[80vh] w-full bg-black flex items-center  rounded-3xl bg-contain  bg-no-repeat' style={{backgroundImage:`url(${'/Images/plateBg.png'})`}}>
        <div className='w-[50vw]'> </div>
        <p className='h-[30vh] w-[25vw] text-white text-2xl leading-[4vh] '>Celebrate the rich diversity of Indian cuisine with our platform,
          where every recipe is a tribute to the love and passion Indians have for their food.
          From timeless classics to modern twists, explore the flavors that define our culture and heritage.
        </p>
        <img src="/Images/leaf.png" alt="" className='w-[25%] h-full  leaf' />
      </div>
    </div>
  );
}

export default LandingPage;