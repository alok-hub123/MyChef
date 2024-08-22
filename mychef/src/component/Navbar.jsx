import React, { useState, useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="sticky top-1 z-[1000] w-full px-20 py-5 font-['Neue Montreal'] flex justify-between items-center text-white">
      <div className='bg-cover'>
        <img src="./Images/logo.png" alt="logo" className='logo w-30 h-16 ' />
      </div>
      <div className="links flex gap-10 ">
        <div className="text-md links flex gap-10">
          <Link to='/'>Home</Link>
          <Link to='/recipe'>Recipe</Link>
          <Link to='/generator'>Generator</Link>
          <Link to='/kitchen_essential'>Kitchen Essential</Link>
          <Link to='/about'>About Us</Link>
        </div>
        <div className='profile text-3xl'>
          <CgProfile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;