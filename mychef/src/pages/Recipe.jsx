import React, { useState } from 'react'
import { BsChevronDown } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { GiKitchenScale } from 'react-icons/gi';
import { GiNoodles } from 'react-icons/gi';
import { FaCarrot } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { FaGlobe } from 'react-icons/fa';
import IndianFoodDataset from '../constants/IndianFoodDataset.json';
import { useNavigate } from 'react-router-dom';

// const fetchData = async () => {
//   const query = 'indian';
//   const url = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${API_KEY}&from=0&to=20`;
//   const response = await fetch(url);  // Make the API request
//   const data = await response.json();
//   const recipe = data.hits;
//   console.log(recipe);
// };



const fetchTwentyItems = (array) => {
  return array.slice(0, 20); // Fetch the first 20 items
};
const firstTwentyItems = fetchTwentyItems(IndianFoodDataset);


export default function Recipe() {

  const [isCookingOpen, setIsCookingOpen] = useState(false);
  const [isIngredientOpen, setIsIngredientOpen] = useState(false);
  const [isServingOpen, setIsServingOpen] = useState(false);
  const [isDietOpen, setIsDietOpen] = useState(false);
  const [isHealthOpen, setIsHealthOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isDishOpen, setIsDishOpen] = useState(false);
  const [isCusineOpen, setIsCusineOpen] = useState(false);


  // Call fetchData when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const cookingDropdown = () => {
    setIsCookingOpen(!isCookingOpen);
  };

  const ingredientDropdown = () => {
    setIsIngredientOpen(!isIngredientOpen);
  };

  const servingDropdown = () => {
    setIsServingOpen(!isServingOpen);
  };

  const dietDropdown = () => {
    setIsDietOpen(!isDietOpen);
  };

  const healthDropdown = () => {
    setIsHealthOpen(!isHealthOpen);
  };

  const courseDropdown = () => {
    setIsCourseOpen(!isCourseOpen);
  };

  const dishDropdown = () => {
    setIsDishOpen(!isDishOpen);
  };

  const cusineDropdown = () => {
    setIsCusineOpen(!isCusineOpen);
  };

  const navigate = useNavigate();

  return (
    <div className='w-full bg-zinc-600 text-white flex '>
      <div className='h-max w-[20%] border-r-2'>

        <input type="text" placeholder='Search' className='h-[5vh] w-[80%] m-[3vh] text-black p-2 rounded-xl focus:outline-none focus:ring focus:ring-orange-400' />

        <div className='mx-[1vw] my-[2vh]' >
          <button className='flex gap-[5vw] w-full' onClick={cookingDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <LuAlarmClock className='text-2xl' />
              <span>Cooking Time</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCookingOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCookingOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter='cook-time'>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>10 - 20 minutes</div>
                <input type="radio" name="cook-time" value="10-20" aria-label="10 to 20 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>20 - 30 minutes</div>
                <input type="radio" name="cook-time" value="20-30" aria-label="20 to 30 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>30 - 40 minutes</div>
                <input type="radio" name="cook-time" value="30-40" aria-label="30 to 40 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>40 - 50 minutes</div>
                <input type="radio" name="cook-time" value="40-50" aria-label="40 to 50 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>50 - 60 minutes</div>
                <input type="radio" name="cook-time" value="50-60" aria-label="50 to 60 minutes" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&gt; 1 hour</div>
                <input type="radio" name="cook-time" value="60+" aria-label="1 or more hours" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
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
            <BsChevronDown className={`transform transition-transform duration-300 ${isIngredientOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isIngredientOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="ingr">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&lt; 5 Ingredients</div>
                <input type="radio" name="ingr" value="5" aria-label="5 or less Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>5 - 10 Ingredients</div>
                <input type="radio" name="ingr" value="5-10" aria-label="5 to 10 Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>10 - 20 Ingredients</div>
                <input type="radio" name="ingr" value="10-20" aria-label="10 to 20 Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>20 - 30 Ingredients</div>
                <input type="radio" name="ingr" value="20-30" aria-label="20 to 30 Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>&gt; 30 Ingredients</div>
                <input type="radio" name="ingr" value="30+" aria-label="30 or more Ingredients" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={servingDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <GiNoodles className='text-2xl' />
              <span>Serving</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isServingOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isServingOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="calories">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 1 </div>
                <input type="radio" name="serving" value="1" aria-label="serving 1" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 2 </div>
                <input type="radio" name="serving" value="2" aria-label="serving 2" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 3 </div>
                <input type="radio" name="serving" value="3" aria-label="serving 3" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 4 </div>
                <input type="radio" name="serving" value="4" aria-label="serving 4" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 5 </div>
                <input type="radio" name="serving" value="5" aria-label="serving 5" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 6 </div>
                <input type="radio" name="serving" value="6" aria-label="serving 6" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving &gt;6 </div>
                <input type="radio" name="serving" value="6+" aria-label="serving 6 or more" className='appearance-none h-[1px] w-[1px] m-[-1px]' />
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
            <BsChevronDown className={`transform transition-transform duration-300 ${isDietOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isDietOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="diet">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Diabetic Friendly</div>
                <input type="checkbox" name="Diabetic Friendly" value="diabetic-friendly" aria-label='Diabetic Friendly' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Vegetarian</div>
                <input type="checkbox" name="Vegetarian" value="vegetarian" aria-label='Vegetarian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Non Vegeterian</div>
                <input type="checkbox" name="Non Vegeterian" value="non-vegeterian" aria-label='Non Vegeterian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>High Protein Vegetarian</div>
                <input type="checkbox" name="High Protein Vegetarian" value="high-protein-vegeterian" aria-label='High Protein Vegetarian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>High Protein Non Vegetarian</div>
                <input type="checkbox" name="High Protein Non Vegetarian" value="high-protein-non-vegeterian" aria-label='High Protein Non Vegetarian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Eggetarian</div>
                <input type="checkbox" name="Eggetarian" value="eggtarian" aria-label='Eggetarian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>No Onion No Garlic (Sattvic)</div>
                <input type="checkbox" name="No Onion No Garlic (Sattvic)" value="no-onion-no-garlic" aria-label='No Onion No Garlic (Sattvic)' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Gluten Free</div>
                <input type="checkbox" name="Gluten Free" value="gluten-free" aria-label='Gluten Free' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Vegan</div>
                <input type="checkbox" name="Vegan" value="vegan" aria-label='Vegan' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400' >
                <div className='px-2'>Sugar Free Diet</div>
                <input type="checkbox" name="Sugar Free Diet" value="sugar-free-diet" aria-label='Sugar Free Diet' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={courseDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <GiMeal className='text-2xl' />
              <span>Course</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCourseOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCourseOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="courseType">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Breakfast</div>
                <input type="checkbox" name="Breakfast" value="breakfast" aria-label='Breakfast' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Lunch</div>
                <input type="checkbox" name="Lunch" value="lunch" aria-label='Lunch' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Dinner</div>
                <input type="checkbox" name="Dinner" value="dinner" aria-label='Dinner' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Snacks</div>
                <input type="checkbox" name="Snacks" value="snacks" aria-label='Snacks' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Dessert</div>
                <input type="checkbox" name="Dessert" value="dessert" aria-label='Dessert' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Main Course</div>
                <input type="checkbox" name="Main Course" value="main-course" aria-label='Main Course' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Appetizer</div>
                <input type="checkbox" name="Appetizer" value="appetizer" aria-label='Appetizer' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
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
            <BsChevronDown className={`transform transition-transform duration-300 ${isCusineOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCusineOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="cuisine">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Indian</div>
                <input type="checkbox" name="Indian" value="indian" aria-label='Indian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>South Indian</div>
                <input type="checkbox" name="South Indian" value="south-indian" aria-label='South Indian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>North Indian</div>
                <input type="checkbox" name="North Indian" value="north-indian" aria-label='North Indian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Gujrati</div>
                <input type="checkbox" name="Gujrati" value="gujrati" aria-label='Gujrati' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Rajasthani</div>
                <input type="checkbox" name="Rajasthani" value="rajasthani" aria-label='Rajasthani' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Hydrabadi</div>
                <input type="checkbox" name="Hydrabadi" value="hydrabadi" aria-label='Hydrabadi' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Begnali</div>
                <input type="checkbox" name="Begnali" value="begnali" aria-label='Begnali' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Maharashtrian</div>
                <input type="checkbox" name="Maharashtrian" value="maharashtrian" aria-label='Maharashtrian' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Punjabi</div>
                <input type="checkbox" name="Punjabi" value="punjabi" aria-label='Punjabi' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-evenly mb-[2vh]'>
          <button data-filter-clear className=' text-black rounded-md px-2 py-1 bg-white hover:bg-zinc-300 active:bg-zinc-400 focus:outline-none focus:ring focus:ring-zinc-400'>Clear</button>
          <button data-filter-toggler data-filter-submit className='px-2 py-1 rounded-md bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300'>Apply</button>
        </div>

      </div>

      <div className='h-[100vh] w-[80%] flex flex-wrap gap-10 items-center justify-center overflow-y-scroll'>
        {
          (!firstTwentyItems) ? "Not Found" : firstTwentyItems.map(
            (item) => (
              <div key={item.Srno} className='recipe mt-5 text-black' onClick={() => { navigate(`/${item.Srno}`) }}>
                <div className='relative w-[16vw] h-[40vh] flex'>
                  <img src="../Images/bread1.png" alt="dish" className='w-full h-full opacity-70' />
                  <div className='absolute top-0 left-0 w-full h-full p-3 flex flex-col justify-center items-center '>
                    <img src={item.imageUrl} alt="" className='h-[60%] w-[60%] rounded-xl' />
                    <h2 className='text-lg font-bold w-[15vw] text-center'>{item.TranslatedRecipeName}</h2>
                    <div className='flex flex-wrap gap-2'>
                      <GiMeal className='text-xl' />
                      <span>{item.Diet}</span>
                      <LuAlarmClock className='text-xl' />
                      <span>{item.TotalTimeInMins + "mins"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}
