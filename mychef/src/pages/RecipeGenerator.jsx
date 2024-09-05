import React from 'react'
import { useState } from 'react';

export default function RecipeGenerator() {

  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [mealType, setMealType] = useState('');

  const handleGenerateRecipes = () => {
    console.log('Generating recipes with:', { ingredients, cuisine, mealType });
  };

  return (
    <div className='w-full h-[100vh] text-black flex flex-col justify-center items-center bg-zinc-500 '>

      <img src="/Images/l_spoon.png" alt="" className=" h-[35vh] w-[25vw] absolute top-[5vh] left-[-5vw]" />
      <img src="/Images/tomato.png" alt="" className='absolute right-0 top-[10vh] h-[20vh] ' />
      <img src="/Images/garlicleaf.png" alt="" className=' h-[20vh] absolute left-0 bottom-[-10vh]' />
      <img src="/Images/onionslice.png" alt="" className='absolute right-0 bottom-[-10vh] h-[10vh] ' />

      <div className='flex items-center justify-center p-4 relative'>
          <div className='w-[60vw] h-[80vh] rounded-lg opacity-50' style={{backgroundImage:`url("/Images/generaterBg.jpg")`}}></div>
          <div className="w-[60vw] absolute  rounded-lg shadow-md p-6" >
            <h2 className="text-2xl font-bold  text-black text-center mb-6">
              Generate Your Recipe
            </h2>

            {/* Ingredients Input */}
            <div className="mb-4">
              <label htmlFor="ingredients" className="block text-black font-bold mb-2">
                Available Ingredients:
              </label>
              <input
                type="text"
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g., potato, tomatoes, basil"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Cuisine Type Selection */}
            <div className="mb-4">
              <label htmlFor="cuisine" className="block text-black font-bold mb-2">
                Cuisine Type:
              </label>
              <select
                id="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="" className='peer'>Select Cuisine</option>
                <option value="Indian">Indian</option>
                <option value="South Indian">South Indian</option>
                <option value="Gujrati">Gujrati</option>
                <option value="Hydrabadi">Hydrabadi</option>
                <option value="Rajasthani">Rajasthani</option>
                <option value="North Indian">North Indian</option>
                
              </select>
            </div>

            {/* Meal Type Selection */}
            <div className="mb-6">
              <label htmlFor="mealType" className="block text-black font-bold mb-2">
                Meal Type:
              </label>
              <select
                id="mealType"
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Dessert">Dessert</option>
              
              </select>
            </div>

            {/* Generate Recipe Button */}
            <button
              onClick={handleGenerateRecipes}
              className="w-full bg-orange-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-4"
            >
              Generate Recipe
            </button>
          </div>
      </div>
    </div>
  )
}
