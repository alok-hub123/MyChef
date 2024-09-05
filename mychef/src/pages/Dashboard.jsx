import React from 'react'
import { useState } from 'react';
import { FaHome, FaUtensils, FaListAlt, FaVideo, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Home from './Home';
import { CgProfile } from "react-icons/cg";

export default function Dashboard() {

  const [selected, setSelected] = useState('home');

  const handleIconClick = (icon) => {
    setSelected(icon);
  };

  const icons = [
    { name: 'Home', icon: <FaHome />, id: 'home', path: '/dashboard' },
    { name: 'Recipe', icon: <FaUtensils />, id: 'recipe', path: '/dashboard/recipe' },
    { name: 'Recipe Generator', icon: <FaListAlt />, id: 'recipe-generator', path: '/dashboard/generator' },
    { name: 'Tutorial', icon: <FaVideo />, id: 'tutorial', path: '/dashboard/tutorial' },
    { name: 'Saved Recipe', icon: <FaHeart />, id: 'favourite', path: '/dashboard/favourite' },
    { name: 'Profile', icon: <FaUser />, id: 'profile', path: '/dashboard/profile' },
    { name: 'Shop', icon: <FaShoppingCart />, id: 'shop', path: '/dashboard/shop' },
  ];

  return (
    <div>
      <nav className="sticky top-1 z-[1000] w-full px-20 mb-[2vh] font-['Neue Montreal'] flex justify-between items-center text-white" >
        <div className='bg-cover'>
          <img src="./Images/logo.png" alt="logo" className='logo w-30 h-16 ' />
        </div>
        <div className="text-2xl">
          <CgProfile />
        </div>
      </nav>
      <Outlet />   
      <div className="flex flex-col items-center justify-center">
        <div className="fixed bottom-10 flex space-x-6 bg-white rounded-xl">
          {icons.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Link to={item.path}>
                <div
                  onClick={() => handleIconClick(item.id)}
                  className={`p-4 cursor-pointer text-2xl transition duration-300 ${selected === item.id ? 'text-orange-500' : 'text-gray-500'}`}
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
