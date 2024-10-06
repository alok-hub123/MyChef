import React, { useState, useEffect } from 'react'
import { BsChevronDown } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { GiNoodles } from 'react-icons/gi';
import { FaCarrot } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { FaGlobe } from 'react-icons/fa';
import IndianFoodDataset from '../constants/IndianFoodDataset.json';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

  const navigate = useNavigate();

  // Call fetchData when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  //logic for filteration
  const [cookTime, setCookTime] = useState('');
  const [serving, setServing] = useState('');
  const [diet, setDiet] = useState([]);
  const [course, setCourse] = useState([]);
  const [cuisine, setCuisine] = useState([]);

  const handleCookTimeChange = (e) => {
    setCookTime(e.target.value);
  };

  const handleServingChange = (e) => {
    setServing(e.target.value);
  };

  const handleDietChange = (e) => {
    if (e.target.checked) {
      setDiet([...diet, e.target.value]);
    } else {
      setDiet(diet.filter((item) => item !== e.target.value));
    }
  };

  const handleCourseChange = (e) => {
    if (e.target.checked) {
      setCourse([...course, e.target.value]);
    } else {
      setCourse(course.filter((item) => item !== e.target.value));
    }
  };

  const handleCuisineChange = (e) => {
    if (e.target.checked) {
      setCuisine([...cuisine, e.target.value]);
    } else {
      setCuisine(cuisine.filter((item) => item !== e.target.value));
    }
  };

  const handleClear = () => {
    setClearChecked(true);
    setCookTime('');
    setServing('');
    setDiet([]);
    setCourse([]);
    setCuisine([]);
    setFilteredItems(firstTwentyItems);
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
  };

  const handleApply = () => {
    const filtered = IndianFoodDataset.filter((item) => {
      let isValid = true;
  
      if (cookTime && !isValidCookTime(item, cookTime)) {
        isValid = false;
      }
  
      if (serving && !isValidServing(item, serving)) {
        isValid = false;
      }
  
      if (diet.length > 0 && !isValidDiet(item, diet)) {
        isValid = false;
      }
  
      if (course.length > 0 && !isValidCourse(item, course)) {
        isValid = false;
      }
  
      if (cuisine.length > 0 && !isValidCuisine(item, cuisine)) {
        isValid = false;
      }
  
      return isValid;
    });
  
    setFilteredItems(filtered.slice(0, 20));
  };
  
  // Helper functions for validation
  const isValidCookTime = (item, cookTime) => {
    if (cookTime === '10-20') {
      return item.TotalTimeInMins >= 10 && item.TotalTimeInMins <= 20;
    } else if (cookTime === '20-30') {
      return item.TotalTimeInMins >= 20 && item.TotalTimeInMins <= 30;
    } else if (cookTime === '30-40') {
      return item.TotalTimeInMins >= 30 && item.TotalTimeInMins <= 40;
    } else if (cookTime === '40-50') {
      return item.TotalTimeInMins >= 40 && item.TotalTimeInMins <= 50;
    } else if (cookTime === '50-60') {
      return item.TotalTimeInMins >= 50 && item.TotalTimeInMins <= 60;
    } else if (cookTime === '60+') {
      return item.TotalTimeInMins > 60;
    }
    return true;
  };
  
  const isValidServing = (item, serving) => {
    if (serving === '1') {
      return item.Servings === 1;
    } else if (serving === '2') {
      return item.Servings === 2;
    } else if (serving === '3') {
      return item.Servings === 3;
    } else if (serving === '4') {
      return item.Servings === 4;
    } else if (serving === '5') {
      return item.Servings === 5;
    } else if (serving === '6') {
      return item.Servings === 6;
    } else if (serving === '6+') {
      return item.Servings > 6;
    }
    return true;
  };
  
  const isValidDiet = (item, diet) => {
    return diet.includes(item.Diet.toLowerCase());
  };
  
  const isValidCourse = (item, course) => {
    return course.includes(item.Course.toLowerCase());
  };
  
  const isValidCuisine = (item, cuisine) => {
    return cuisine.includes(item.Cuisine.toLowerCase());
  };

  //logic for homepage search box
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const searchQueryHome = params.get('query');

  //search logic for current(recipe page) search box
  const [query, setQuery] = useState(searchQueryHome || '');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (searchQueryHome) {
      const filtered = IndianFoodDataset.filter((item) => {
        return (
          item.TranslatedRecipeName.toLowerCase().includes(searchQueryHome) ||
          item.Diet.toLowerCase().includes(searchQueryHome) ||
          item.Course.toLowerCase().includes(searchQueryHome) ||
          item.Cuisine.toLowerCase().includes(searchQueryHome)
        );
      });
      setFilteredItems(filtered.slice(0, 20));
    } else {
      setFilteredItems(firstTwentyItems);
    }
  }, [searchQueryHome]);

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
    const filtered = IndianFoodDataset.filter((item) => {
      return (
        item.TranslatedRecipeName.toLowerCase().includes(query) ||
        item.Diet.toLowerCase().includes(query) ||
        item.Course.toLowerCase().includes(query) ||
        item.Cuisine.toLowerCase().includes(query)
      );
    });
    setFilteredItems(filtered<=20 ? filtered : filtered.slice(0, 20));
  };


  //Logic for dropdown of filter elements
  const [isCookingOpen, setIsCookingOpen] = useState(false);
  const [isServingOpen, setIsServingOpen] = useState(false);
  const [isDietOpen, setIsDietOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isCusineOpen, setIsCusineOpen] = useState(false);

  const cookingDropdown = () => {
    setIsCookingOpen(!isCookingOpen);
  };

  const servingDropdown = () => {
    setIsServingOpen(!isServingOpen);
  };

  const dietDropdown = () => {
    setIsDietOpen(!isDietOpen);
  };

  const courseDropdown = () => {
    setIsCourseOpen(!isCourseOpen);
  };

  const cusineDropdown = () => {
    setIsCusineOpen(!isCusineOpen);
  };


  return (
    <div className='w-full bg-zinc-600 text-white flex '>
      <div className='h-max w-[20%] border-r-2'>

        <input type="text"
          placeholder='Search'
          className='h-[5vh] w-[80%] m-[3vh] text-black p-2 rounded-xl focus:outline-none focus:ring focus:ring-orange-400'
          value={query}
          onChange={handleSearch}
        />

        <div className='mx-[1vw] my-[2vh]' >
          <button className='flex gap-[5vw] w-full' onClick={cookingDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <LuAlarmClock className='text-2xl' />
              <span>Cook Time</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCookingOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCookingOpen ? 'block' : 'hidden'}`}  onClick={handleCookTimeChange}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter='cook-time' >
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
                <input type="radio" name="cook-time" value="60+" aria-label="1 or more hours" className='appearance-none h-[1px] w-[1px] m-[-1px]'/>
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
          <div className={`transition-all duration-300 mt-3 ${isServingOpen ? 'block' : 'hidden'}`} onClick={handleServingChange} >
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="calories">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 1 </div>
                <input type="radio" name="serving" value="1" aria-label="serving 1" className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 2 </div>
                <input type="radio" name="serving" value="2" aria-label="serving 2" className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 3 </div>
                <input type="radio" name="serving" value="3" aria-label="serving 3" className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 4 </div>
                <input type="radio" name="serving" value="4" aria-label="serving 4" className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 5 </div>
                <input type="radio" name="serving" value="5" aria-label="serving 5" className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'> Serving 6 </div>
                <input type="radio" name="serving" value="6" aria-label="serving 6" className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
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
          <div className={`transition-all duration-300 mt-3 ${isDietOpen ? 'block' : 'hidden'}`} onClick={handleDietChange} >
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
          <div className={`transition-all duration-300 mt-3 ${isCourseOpen ? 'block' : 'hidden'}`} onClick={handleCourseChange} >
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="courseType">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Breakfast</div>
                <input type="checkbox" name="Breakfast" value="breakfast" aria-label='Breakfast' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Lunch</div>
                <input type="checkbox" name="Lunch" value="lunch" aria-label='Lunch' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Dinner</div>
                <input type="checkbox" name="Dinner" value="dinner" aria-label='Dinner' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Snacks</div>
                <input type="checkbox" name="Snacks" value="snacks" aria-label='Snacks' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Dessert</div>
                <input type="checkbox" name="Dessert" value="dessert" aria-label='Dessert' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Main Course</div>
                <input type="checkbox" name="Main Course" value="main-course" aria-label='Main Course' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Appetizer</div>
                <input type="checkbox" name="Appetizer" value="appetizer" aria-label='Appetizer' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
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
          <div className={`transition-all duration-300 mt-3 ${isCusineOpen ? 'block' : 'hidden'}`} onClick={handleCuisineChange} >
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="cuisine">
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Indian</div>
                <input type="checkbox" name="Indian" value="indian" aria-label='Indian' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
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
                <input type="checkbox" name="Maharashtrian" value="maharashtrian" aria-label='Maharashtrian' className='appearance-none h-[1px] w-[1px] m-[-1px]'  />
              </label>
              <label className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                <div className='px-2'>Punjabi</div>
                <input type="checkbox" name="Punjabi" value="punjabi" aria-label='Punjabi' className='appearance-none h-[1px] w-[1px] m-[-1px]' />
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-evenly mb-[2vh]'>
          <button data-filter-clear className=' text-black rounded-md px-2 py-1 bg-white hover:bg-zinc-300 active:bg-zinc-400 focus:outline-none focus:ring focus:ring-zinc-400' onClick={handleClear}>Clear</button>
          <button data-filter-toggler data-filter-submit className='px-2 py-1 rounded-md bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300' onClick={handleApply}>Apply</button>
        </div>

      </div>

      <div className='h-[100vh] w-[80%] mb-5 flex flex-wrap gap-10 items-center justify-center overflow-y-scroll'>
        {
          (!filteredItems) ? <h1>Not Found</h1> : filteredItems.map(
            (item) => (
              <div key={item.Srno} className='recipe mt-5 text-black'>
                <div className='relative w-[16vw] h-[45vh] flex '>
                  <img src="../Images/bread1.png" alt="dish" className='w-full h-full  ' />
                  <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-2'>
                    <img src={item.imageUrl} alt="" className='h-[40%] w-[55%] rounded-xl' />
                    <h1 className='text-lg font-bold w-[15vw] h-max text-center truncate '>{item.TranslatedRecipeName}</h1>  {/*truncate is used to hide the content that excceds the given width and put ...*/}
                    <div className='flex flex-wrap gap-2'>
                      <GiMeal className='text-xl' />
                      <span className='truncate w-12'>{item.Diet}</span>
                      <LuAlarmClock className='text-xl' />
                      <span>{item.TotalTimeInMins + "mins"}</span>
                    </div>
                    <button className='border-none outline-none p-2 bg-orange-400 hover:bg-orange-500 rounded-lg' onClick={() => { navigate(`/${item.Srno}`) }}>View Recipe</button>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}
