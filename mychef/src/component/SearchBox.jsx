import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function SearchBox() {

  //gsap animation
  useGSAP(() => {
    gsap.from(".treeAnim", {
      y:450,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".searchBox",
        start: "top 40%",
        end: "bottom 80%",
        scrub: true
      }
    })
  }, []);
 
  useGSAP(() => {
    gsap.from(".right_anim", {
      x:300,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".searchBox",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true
      }
    })
  }, []);

  useGSAP(() => {
    gsap.from(".carrot_anim", {
      x:500,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".carrot_anim",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true
      }
    })
  }, []);
 

//search box logic
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // You can add your logic to handle the search here
  };

  return (
    <>
      <div className=' h-[6vh] w-full bg-black mt-[1vh] '><h1 className='text-white text-2xl text-center w-full'>||  Search Your Desire  ||</h1></div>
      <div className='searchBox h-[70vh] w-full relative overflow-hidden'>
        <form onSubmit={handleSubmit} className="w-[50vw] flex items-center justify-center max-w-md mx-auto relative">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full px-4 py-2 text-lg text-gray-700 bg-white  rounded-3xl focus:outline-none absolute top-[33vh]"
          />
          <CiSearch className='text-2xl absolute right-[1vw] top-[34vh] cursor-pointer'/>
        </form>
        <img src="/Images/carrotanim.png" alt="" className='carrot_anim h-[20vh] w-[5vw] absolute left-[29vw] top-[21vh]'/>
        <img src="/Images/tomatotree.png" alt="" className='treeAnim h-[45vh] w-[10vw] absolute left-0 bottom-[1vh]'/>
        <img src="/Images/r_spoon.png" alt="" className='right_anim h-[23vh] w-[15vw] absolute right-0'/>
        <img src="/Images/tadka.png" alt="" className='right_anim h-[19vh] w-[13vw] absolute right-0 bottom-0'/>
      </div>
      <div className=' h-[1vh] w-full bg-black '></div>

    </>
  );
}

export default SearchBox;
