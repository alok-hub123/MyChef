import React, { useState } from 'react';
import { GiMeal } from 'react-icons/gi';
import { LuAlarmClock } from "react-icons/lu";
import IndianFoodDataset from '../constants/IndianFoodDataset.json'; 
import { useNavigate } from 'react-router-dom';

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [mealType, setMealType] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const navigate = useNavigate();

  const handleGenerateRecipes = () => {
    const ingredientList = ingredients.split(',').map(item => item.trim().toLowerCase());
  
    // Filter recipes from the dataset based on ingredients, cuisine, and meal type
    const filtered = (ingredients.length>0) ? IndianFoodDataset.filter(recipe => {
      const recipeIngredients = recipe.Ingredients ? recipe.Ingredients.toLowerCase().split(',') : [];
      const hasMatchingIngredients = ingredientList.every(ingredient =>
        recipeIngredients.some(recipeIngredient => recipeIngredient.includes(ingredient))
      )
  
      const matchesCuisine = cuisine ? (recipe.Cuisine && recipe.Cuisine.toLowerCase() === cuisine.toLowerCase()) : true;
      const matchesMealType = mealType ? (recipe.Course && recipe.Course.toLowerCase() === mealType.toLowerCase()) : true;
  
      return hasMatchingIngredients && (matchesCuisine || matchesMealType);
    }) : alert("Please enter valid ingreidients");
  
    // Set the filtered recipes to the state
    setFilteredRecipes(filtered);
  
  };

  return (
    <div className='w-full h-max text-black flex flex-col justify-center items-center bg-zinc-800'>
      {/* Background images and layout */}
      <img src="/Images/l_spoon.png" alt="" className=" h-[35vh] w-[25vw] absolute top-[5vh] left-[-5vw]" />
      <img src="/Images/tomato.png" alt="" className='absolute right-0 top-[10vh] h-[20vh]' />
      <img src="/Images/garlicleaf.png" alt="" className=' h-[20vh] absolute left-0 bottom-[-10vh]' />
      <img src="/Images/onionslice.png" alt="" className='absolute right-0 bottom-[-10vh] h-[10vh]' />

      <div className='flex items-center h-max justify-center p-4 relative'>
        <div className="w-[60vw] h-max rounded-lg shadow-md p-6" style={{backgroundImage:`url("/Images/generaterBg.jpg")`}}>
          <h2 className="text-2xl font-bold  text-black text-center mb-6">Generate Your Recipe</h2>

          {/* Ingredients Input */}
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-black font-bold mb-2">Available Ingredients:</label>
            <input
              type="text"
              id="ingredients"
              required
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., potatoes, tomatoes, basil"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {/* Cuisine Type Selection */}
          <div className="mb-4">
            <label htmlFor="cuisine" className="block text-black font-bold mb-2">Cuisine Type:</label>
            <select
              id="cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="" className='peer'>Select Cuisine</option>
              <option value="Indian">Indian</option>
              <option value="South Indian Recipes">South Indian</option>
              <option value="Gujarati Recipes">Gujrati</option>
              <option value="Hyderabadi">Hyderabadi</option>
              <option value="Bengali Recipes">Bengali </option>
              <option value="Punjabi">Punjabi</option>
              <option value="Rajasthani">Rajasthani</option>
              <option value="North Indian Recipes">North Indian</option>
              <option value="Maharahtrian">Maharashtrian</option>
            </select>
          </div>

          {/* Meal Type Selection */}
          <div className="mb-6">
            <label htmlFor="mealType" className="block text-black font-bold mb-2">Meal Type:</label>
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
          <div className='flex flex-col justify-center items-center'>
            <button
              onClick={handleGenerateRecipes}
              className="w-max bg-orange-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-4"
            >
              Generate Recipe
            </button>
          </div>

          {/* Display filtered recipes */}
          <div className="mt-5 flex gap-5 overflow-x-scroll overflow-hidden border-2 h-max">
            {filteredRecipes ? (
              filteredRecipes.map(
                (item) => (
                  <div key={item.Srno} className='recipe mt-5 text-black'>
                    <div className='relative w-[12vw] h-[35vh] flex '>
                      <img src="../Images/bread1.png" alt="dish" className='w-full h-full  ' />
                      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-2'>
                        <img src={item.imageUrl} alt="" className='h-[30%] w-[55%] rounded-xl' />
                        <h1 className='text-md font-bold w-[10vw] h-max text-center truncate '>{item.TranslatedRecipeName}</h1>  {/*truncate is used to hide the content that excceds the given width and put ...*/}
                        <div className='flex flex-wrap gap-2'>
                          <GiMeal className='text-md' />
                          <span className='truncate w-12 text-sm'>{item.Diet}</span>
                          <LuAlarmClock className='text-md' />
                          <span className='text-sm'>{item.TotalTimeInMins + "mins"}</span>
                        </div>
                        <button className='border-none outline-none p-2 bg-orange-400 hover:bg-orange-500 rounded-lg' onClick={() => { navigate(`/${item.Srno}`) }}>View Recipe</button>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              ingredients && <p className="text-red-500">No recipes found. Try different ingredients or filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
