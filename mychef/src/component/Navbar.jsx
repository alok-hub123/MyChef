import React, { useState, useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { BsSun, BsMoon } from "react-icons/bs";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {

  return (
    <nav className="fixed z-[999] w-full px-20 py-5 font-['Neue Montreal'] flex justify-between items-center text-white">
      <div className='bg-cover'>
        <img src="./Images/logo.png" alt="logo" className='logo w-30 h-16 '/>
      </div>
      <div className="links flex gap-10 ">
        {["Home", "Recipe", "Generator", "Kitchen Essentail", "About Us"].map((item, index) => (
          <a key={index} className="text-md">{item}</a>
        ))}
        <div className='profile text-3xl'>
        <CgProfile />
      </div>
      </div>
    </nav>
  );
}

export default Navbar;