import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="sticky top-1 z-[1000] w-full px-20 mb-[2vh] font-['Neue Montreal'] flex justify-between items-center text-white" >
      <div className='bg-cover'>
        <img src="./Images/logo.png" alt="logo" className='logo w-30 h-16 ' />
      </div>
      <div className="links flex gap-10 ">
        <div className="text-md links flex gap-10">
          <Link to='/'>Home</Link>
          <Link to='/recipe'>Recipe</Link>
          <Link to='/generator'>Generator</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/shop'>Shop</Link>
        </div>
        <Link to='/login'><span className='bg-orange-400 py-1 px-2 rounded-md '>Log In</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;