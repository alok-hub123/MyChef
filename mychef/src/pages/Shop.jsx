import React from 'react'
import { useState } from 'react';
import { FaUtensils, FaCarrot, FaAppleAlt } from 'react-icons/fa';
import { GiWheat, GiHotSpices } from "react-icons/gi";
import { products } from '../constants/praduct';


function Shop() {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(
    product =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white h-screen">
      <div className="flex flex-wrap  h-full">
        {/* Sidebar */}
        <div className="w-1/5 xl:w-1/6 bg-gray-100 p-4 text-xl">
          <h2 className="text-2xl font-bold mb-4">Shop</h2>
          <ul className='space-y-5'>
            <li
              className={`cursor-pointer flex  items-center  ${selectedCategory === 'All' ? 'text-orange-400' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Products
            </li>
            <li
              className={`cursor-pointer flex  items-center gap-2 ${selectedCategory === 'Kitchen Essentials' ? 'text-orange-400' : ''}`}
              onClick={() => setSelectedCategory('Kitchen Essentials')}
            >
              <FaUtensils /> Kitchen Essentials
            </li>
            <li
              className={`cursor-pointer flex  items-center gap-2 ${selectedCategory === 'Cereals' ? 'text-orange-400' : ''}`}
              onClick={() => setSelectedCategory('Cereals')}
            >
              <GiWheat /> Cereals
            </li>
            <li
              className={`cursor-pointer flex  items-center gap-2  ${selectedCategory === 'Spices' ? 'text-orange-400' : ''}`}
              onClick={() => setSelectedCategory('Spices')}
            >
              <GiHotSpices /> Spices
            </li>
            <li
              className={`cursor-pointer flex  items-center gap-2  ${selectedCategory === 'Vegetables' ? 'text-orange-400' : ''}`}
              onClick={() => setSelectedCategory('Vegetables')}
            >
              <FaCarrot /> Vegetables
            </li>
            <li
              className={`cursor-pointer flex  items-center gap-2  ${selectedCategory === 'Fruits' ? 'text-orange-400' : ''}`}
              onClick={() => setSelectedCategory('Fruits')}
            >
              <FaAppleAlt /> Fruits
            </li>
            {/* Add more categories */}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-4/5 xl:w-5/6 p-4">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded w-full focus:outline-none focus:border-orange-400"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Product Grid */}
          <div className='h-[90vh] overflow-y-scroll'>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map(item => (
                <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="border p-4 rounded shadow-sm hover:shadow-lg ">
                    <img src={item.image} alt={item.name} className="w-full h-[20vh] object-contain mb-2" />
                    <div className='flex flex-col items-center gap-y-2'>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <span className="text-white bg-orange-400 rounded-lg p-1">
                        Buy Now
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
