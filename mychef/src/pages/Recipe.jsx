import React, { useState } from 'react'
import { BsChevronDown } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { GiKitchenScale } from 'react-icons/gi';
import { GiNoodles } from 'react-icons/gi';
import { FaCarrot } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { FaConciergeBell } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

export default function Recipe() {

  const [isCookingOpen, setIsCookingOpen] = useState(false);
  const [isIngredientOpen, setIsIngredientOpen] = useState(false);
  const [isCaloriesOpen, setIsCaloriesOpen] = useState(false);
  const [isDietOpen, setIsDietOpen] = useState(false);
  const [isHealthOpen, setIsHealthOpen] = useState(false);
  const [isMealOpen, setIsMealOpen] = useState(false);
  const [isDishOpen, setIsDishOpen] = useState(false);
  const [isCusineOpen, setIsCusineOpen] = useState(false);

  const cookingDropdown = () => {
    setIsCookingOpen(!isCookingOpen);
  };

  const ingredientDropdown = () => {
    setIsIngredientOpen(!isIngredientOpen);
  };

  const caloriesDropdown = () => {
    setIsCaloriesOpen(!isCaloriesOpen);
  };

  const dietDropdown = () => {
    setIsDietOpen(!isDietOpen);
  };

  const healthDropdown = () => {
    setIsHealthOpen(!isHealthOpen);
  };

  const mealDropdown = () => {
    setIsMealOpen(!isMealOpen);
  };

  const dishDropdown = () => {
    setIsDishOpen(!isDishOpen);
  };

  const cusineDropdown = () => {
    setIsCusineOpen(!isCusineOpen);
  };



  return (
    <div className='w-full bg-zinc-600 text-white flex '>
      <div className='h-full w-[20%] border-r-2'>

        <input type="text" placeholder='Search' className='h-[5vh] w-[80%] m-[3vh] text-black p-2 rounded-xl focus:outline-none focus:ring focus:ring-zinc-400' />

        <div className='mx-[1vw] my-[2vh]' >
          <button className='flex gap-[5vw] w-full' onClick={cookingDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <LuAlarmClock className='text-2xl' />
              <span>Cooking Time</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCookingOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCookingOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter='cook-time'>
              <label  className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&lt; 5 minutes</div>
                <input type="radio" name="cook-time" value="5" aria-label="5 or less minutes" className='peer appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>5 - 10 minutes</div>
                <input type="radio" name="cook-time" value="5-10" aria-label="5 to 10 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>10 - 20 minutes</div>
                <input type="radio" name="cook-time" value="10-20" aria-label="10 to 20 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>20 - 30 minutes</div>
                <input type="radio" name="cook-time" value="20-30" aria-label="20 to 30 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>30 - 40 minutes</div>
                <input type="radio" name="cook-time" value="30-40" aria-label="30 to 40 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>40 - 50 minutes</div>
                <input type="radio" name="cook-time" value="40-50" aria-label="40 to 50 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>50 - 60 minutes</div>
                <input type="radio" name="cook-time" value="50-60" aria-label="50 to 60 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&lt; 1 hour</div>
                <input type="radio" name="cook-time" value="60+" aria-label="1 or more hours" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={ingredientDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <GiKitchenScale className='text-2xl' />
              <span>Ingredients</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isIngredientOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isIngredientOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="ingr">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&lt; 5 Ingredients</div>
                <input type="radio" name="ingr" value="5" aria-label="5 or less Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>5 - 10 Ingredients</div>
                <input type="radio" name="ingr" value="5-10" aria-label="5 to 10 Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>10 - 20 Ingredients</div>
                <input type="radio" name="ingr" value="10-20" aria-label="10 to 20 Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>20 - 30 Ingredients</div>
                <input type="radio" name="ingr" value="20-30" aria-label="20 to 30 Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&lt; 30 Ingredients</div>
                <input type="radio" name="ingr" value="30+" aria-label="30 or more Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={caloriesDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <GiNoodles className='text-2xl' />
              <span>Calories</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCaloriesOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCaloriesOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="calories">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&lt; 50 Calories</div>
                <input type="radio" name="calories" value="50" aria-label="50 or less Calories" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>50 - 100 Calories</div>
                <input type="radio" name="calories" value="50-100" aria-label="50 to 100 Calories" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>100 - 200 Calories</div>
                <input type="radio" name="calories" value="100-200" aria-label="100 to 200 Calories" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>200 - 300 Calories</div>
                <input type="radio" name="calories" value="200-300" aria-label="200 to 300 Calories" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>300 - 400 Calories</div>
                <input type="radio" name="calories" value="300-400" aria-label="300 to 400 Calories" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>400 - 500 Calories</div>
                <input type="radio" name="calories" value="400-500" aria-label="400 to 500 Calories" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&lt; 500 Calories</div>
                <input type="radio" name="calories" value="500+" aria-label="500 or more Calories" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={dietDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <FaCarrot className='text-2xl' />
              <span>Diet</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isDietOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isDietOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="diet">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Balanced</div>
                <input type="checkbox" name="Balanced" value="balanced" aria-label='Balanced' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>High Fiber</div>
                <input type="checkbox" name="High Fiber" value="high-fiber" aria-label='High Fiber' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>High Protein</div>
                <input type="checkbox" name="High Protein" value="high-protein" aria-label='High Protein' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Low Carb</div>
                <input type="checkbox" name="Low Carb" value="low-carb" aria-label='Low Carb' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Low Fat</div>
                <input type="checkbox" name="Low Fat" value="low-fat" aria-label='Low Fat' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Low Sodium</div>
                <input type="checkbox" name="Low Sodium" value="low-sodium" aria-label='Low Sodium' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={healthDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <FaHeartbeat className='text-2xl' />
              <span>Health</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isHealthOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isHealthOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="health">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Alcohol Cocktail</div>
                <input type="checkbox" name="Alcohol Cocktail" value="alcohol-cocktail" aria-label='Alcohol Cocktail' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Alcohol Free</div>
                <input type="checkbox" name="Alcohol Free" value="alcohol-free" aria-label='Alcohol Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Dairy Free</div>
                <input type="checkbox" name="Dairy Free" value="dairy-free" aria-label='Dairy Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Egg Free</div>
                <input type="checkbox" name="Egg Free" value="egg-free" aria-label='Egg Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Fish Free</div>
                <input type="checkbox" name="Fish Free" value="fish-free" aria-label='Fish Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Gluten Free</div>
                <input type="checkbox" name="Gluten Free" value="gluten-free" aria-label='Gluten Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Immuno Supportive</div>
                <input type="checkbox" name="Immuno Supportive" value="immuno-supportive" aria-label='Immuno Supportive' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Keto</div>
                <input type="checkbox" name="Keto" value="keto" aria-label='Keto' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Kidney Friendly</div>
                <input type="checkbox" name="Kidney Friendly" value="kidney-friendly" aria-label='Kidney Friendly' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Low Potassium</div>
                <input type="checkbox" name="Low Potassium" value="low-potassium" aria-label='Low Potassium' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Low Sugar</div>
                <input type="checkbox" name="Low Sugar" value="low-sugar" aria-label='Low Sugar' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Mustard Free</div>
                <input type="checkbox" name="Mustard Free" value="mustard-free" aria-label='Mustard Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>No Oil Added</div>
                <input type="checkbox" name="No Oil Added" value="no-oil-added" aria-label='No Oil Added' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Peanut Free</div>
                <input type="checkbox" name="Peanut Free" value="peanut-free" aria-label='Peanut Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Red Meat Free</div>
                <input type="checkbox" name="Red Meat Free" value="red-meat-free" aria-label='Red Meat Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Sesame Free</div>
                <input type="checkbox" name="Sesame Free" value="sesame-free" aria-label='Sesame Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Sugar Conscious</div>
                <input type="checkbox" name="Sugar Conscious" value="sugar-conscious" aria-label='Sugar Conscious' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Sulfite Free</div>
                <input type="checkbox" name="Sulfite Free" value="sulfite-free" aria-label='Sulfite Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Vegan</div>
                <input type="checkbox" name="Vegan" value="vegan" aria-label='Vegan' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Vegetarian</div>
                <input type="checkbox" name="Vegetarian" value="vegetarian" aria-label='Vegetarian' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Wheat Free</div>
                <input type="checkbox" name="Wheat Free" value="wheat-free" aria-label='Wheat Free' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={mealDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <GiMeal className='text-2xl' />
              <span>Meal</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isMealOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isMealOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="mealType">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Breakfast</div>
                <input type="checkbox" name="Breakfast" value="breakfast" aria-label='Breakfast' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Lunch</div>
                <input type="checkbox" name="Lunch" value="lunch" aria-label='Lunch' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Dinner</div>
                <input type="checkbox" name="Dinner" value="dinner" aria-label='Dinner' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Snacks</div>
                <input type="checkbox" name="Snacks" value="snacks" aria-label='Snacks' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Teatime</div>
                <input type="checkbox" name="Teatime" value="teatime" aria-label='Teatime' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={dishDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <FaConciergeBell className='text-2xl' />
              <span>Dish</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isDishOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isDishOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="dishType">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Biscuits and Cookies</div>
                <input type="checkbox" name="Biscuits and Cookies" value="biscuits-and-cookies" aria-label='Biscuits and Cookies' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Bread</div>
                <input type="checkbox" name="Bread" value="bread" aria-label='Bread' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Cereals</div>
                <input type="checkbox" name="Cereals" value="cereals" aria-label='Cereals' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Condiments and sauces</div>
                <input type="checkbox" name="Condiments and sauces" value="condiments-and-sauces" aria-label='Condiments and sauces' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Desserts</div>
                <input type="checkbox" name="Desserts" value="desserts" aria-label='Desserts' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Drinks</div>
                <input type="checkbox" name="Drinks" value="drinks" aria-label='Drinks' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Main course</div>
                <input type="checkbox" name="Main course" value="main course" aria-label='Main course' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Cake</div>
                <input type="checkbox" name="Cake" value="cake" aria-label='Cake' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Salad</div>
                <input type="checkbox" name="Salad" value="salad" aria-label='Salad' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Soup</div>
                <input type="checkbox" name="Soup" value="soup" aria-label='Soup' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Starter</div>
                <input type="checkbox" name="Starter" value="starter" aria-label='Starter' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Sweet</div>
                <input type="checkbox" name="Sweet" value="sweet" aria-label='Sweet' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={cusineDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <FaGlobe className='text-2xl' />
              <span>Cusine</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCusineOpen ? 'rotate-180' : ''}`}/>
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCusineOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="cuisine">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Indian</div>
                <input type="checkbox" name="Indian" value="indian" aria-label='Indian' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>South Indian</div>
                <input type="checkbox" name="South Indian" value="south-indian" aria-label='South Indian' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Gujrati</div>
                <input type="checkbox" name="Gujrati" value="gujrati" aria-label='Gujrati' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Rajasthani</div>
                <input type="checkbox" name="Rajasthani" value="rajasthani" aria-label='Rajasthani' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Hydrabadi</div>
                <input type="checkbox" name="Hydrabadi" value="hydrabadi" aria-label='Hydrabadi' className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-evenly mb-[2vh]'>
          <button data-filter-clear className=' text-black rounded-md px-2 py-1 bg-white hover:bg-zinc-300 active:bg-zinc-400 focus:outline-none focus:ring focus:ring-zinc-400'>Clear</button>
          <button data-filter-toggler data-filter-submit className='px-2 py-1 rounded-md bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300'>Apply</button>
        </div>

      </div>

      <div className='h-full w-[80%] bg-yellow-100'></div>
    </div>
  )
}
