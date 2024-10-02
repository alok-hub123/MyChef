import React from 'react'
import { useState } from 'react';
import { FaHome, FaUtensils, FaListAlt, FaVideo, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

export default function Dashboard() {

  const [selected, setSelected] = useState('profile');

  const handleIconClick = (icon) => {
    setSelected(icon);
  };

  const icons = [
    { name: 'Profile', icon: <FaUser />, id: 'profile', path: '/dashboard' },
    { name: 'Saved Recipe', icon: <FaHeart />, id: 'favourite', path: '/dashboard/favourite' },
  ];

  return (
    <div>
      <nav className="sticky top-0 z-10 w-full px-3 py-2 font-['Neue Montreal'] flex justify-between items-center text-white backdrop-blur" >
        <div className='bg-cover'>
          <img src="/Images/logo.png" alt="logo" className='logo w-30 h-10 ' />
        </div>
        <div className="text-3xl">
          <CgProfile />
        </div>
      </nav>
      <Outlet />   
      <div className="flex flex-col items-center justify-center">
        <div className="fixed bottom-[3vh] flex space-x-6 bg-white rounded-xl">
          {icons.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Link to={item.path}>
                <div
                  onClick={() => handleIconClick(item.id)}
                  className={`py-2 px-3 z-10 cursor-pointer text-2xl transition duration-300 ${selected === item.id ? 'text-orange-500' : 'text-gray-500'}`}
                >
                  {item.icon}
                </div>
              </Link>
              {selected === item.id && (
                <div className="w-12 h-2 bg-orange-400 rounded-t-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
