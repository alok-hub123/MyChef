import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [selected, setSelected] = useState();

  return (
    <nav className="sticky top-0 z-50 w-full px-20 font-['Neue Montreal'] flex justify-between items-center shadow text-white backdrop-blur-md" >
      <div className='bg-cover'>
        <img src="./Images/logo.png" alt="logo" className='logo w-30 h-14 ' />
      </div>
      <div className="links flex gap-10 ">
        <div className="text-md links flex gap-10">
          <Link to='/' onClick={()=>setSelected('home')} className={`${selected=='home' ? 'text-orange-400 underline' : 'text-white'}`} >Home</Link>
          <Link to='/recipe' onClick={()=>setSelected('recipe')} className={`${selected=='recipe' ? 'text-orange-400 underline' : 'text-white'}`}>Recipe</Link>
          <Link to='/generator' onClick={()=>setSelected('generator')} className={`${selected=='generator' ? 'text-orange-400 underline' : 'text-white'}`}>Generator</Link>
          <Link to='/tutorial' onClick={()=>setSelected('tutorial')} className={`${selected=='tutorial' ? 'text-orange-400 underline' : 'text-white'}`}>Tutorial</Link>
          <Link to='/shop' onClick={()=>setSelected('shop')} className={`${selected=='shop' ? 'text-orange-400 underline' : 'text-white'}`}>Shop</Link>
          <Link to='/dashboard' onClick={()=>setSelected('dashboard')} className={`${selected=='dashboard underline' ? 'text-orange-400' : 'text-white'}`}>Dashboard</Link>
        </div>
        <Link to='/login'><span className='bg-orange-400 py-1 px-2 rounded-md '>Log In</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;