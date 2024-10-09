import React, { useState, useEffect, useCallback } from 'react'
import { BsChevronDown } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { GiNoodles } from 'react-icons/gi';
import { FaCarrot } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { FaGlobe } from 'react-icons/fa';
import IndianFoodDataset from '../constants/IndianFoodDataset.json';
import { useNavigate, useLocation } from 'react-router-dom';

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

  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

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
    setCookTime('');
    setServing('');
    setDiet([]);
    setCourse([]);
    setCuisine([]);
    setFilteredItems(firstTwentyItems);
    setQuery('');
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);

    // Clear the URL parameters
    navigate({
      search: '',
    });
  };

  const handleApply = () => {
    // Gather all filter states into query params
    const queryParams = new URLSearchParams();

    if (cookTime) queryParams.set('cookTime', cookTime);
    if (serving) queryParams.set('serving', serving);
    if (diet.length > 0) queryParams.set('diet', diet.join(','));
    if (course.length > 0) queryParams.set('course', course.join(','));
    if (cuisine.length > 0) queryParams.set('cuisine', cuisine.join(','));

    // Navigate with the new query parameters
    navigate({
      search: queryParams.toString()
    });

    // Filter the items based on the applied filters
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

  //retrieve the filter parameters from the URL and reapply them to ensure the filtered items remain consistent.
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const savedCookTime = params.get('cookTime') || '';
    const savedServing = params.get('serving') || '';
    const savedDiet = params.get('diet') ? params.get('diet').split(',') : [];
    const savedCourse = params.get('course') ? params.get('course').split(',') : [];
    const savedCuisine = params.get('cuisine') ? params.get('cuisine').split(',') : [];

    setCookTime(savedCookTime);
    setServing(savedServing);
    setDiet(savedDiet);
    setCourse(savedCourse);
    setCuisine(savedCuisine);

    // Filter the items based on URL parameters
    const filtered = IndianFoodDataset.filter((item) => {
      let isValid = true;

      if (savedCookTime && !isValidCookTime(item, savedCookTime)) {
        isValid = false;
      }

      if (savedServing && !isValidServing(item, savedServing)) {
        isValid = false;
      }

      if (savedDiet.length > 0 && !isValidDiet(item, savedDiet)) {
        isValid = false;
      }

      if (savedCourse.length > 0 && !isValidCourse(item, savedCourse)) {
        isValid = false;
      }

      if (savedCuisine.length > 0 && !isValidCuisine(item, savedCuisine)) {
        isValid = false;
      }

      return isValid;
    });

    setFilteredItems(filtered.slice(0, 20));
  }, [location.search]);

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
      return item.Servings === '1';
    } else if (serving === '2') {
      return item.Servings === '2';
    } else if (serving === '3') {
      return item.Servings === '3';
    } else if (serving === '4') {
      return item.Servings === '4';
    } else if (serving === '5') {
      return item.Servings === '5';
    } else if (serving === '6') {
      return item.Servings === '6';
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


  const params = new URLSearchParams(location.search);
  const searchQueryHome = params.get('query');

  //search logic for current(recipe page) search box
  const [query, setQuery] = useState(searchQueryHome || '');
  
  useEffect(() => {
    if (searchQueryHome) {
      const filtered = IndianFoodDataset.filter((item) => {
        return (
          item.TranslatedRecipeName.toLowerCase().includes(searchQueryHome) ||
          item.Diet.toLowerCase().includes(searchQueryHome) ||
          item.Course.toLowerCase().includes(searchQueryHome) ||
          item.Cuisine.toLowerCase().includes(searchQueryHome) ||
          item.Servings.toLowerCase().includes(searchQueryHome) ||
          item.TotalTimeInMins.toLowerCase().includes(searchQueryHome)
        );
      });
      setFilteredItems(filtered.slice(0, 20));
    } else {
      setFilteredItems(firstTwentyItems);
    }
  }, [searchQueryHome]);

  //logic for trecipe page search box
  const handleSearch = (e) => {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);

    // Update the URL query parameter with `useNavigate` beacause the data should not rerender
    navigate({
      search: `?query=${newQuery}`
    });

    const filtered = IndianFoodDataset.filter((item) => {
      return (
        item.TranslatedRecipeName.toLowerCase().includes(newQuery) ||
        item.Diet.toLowerCase().includes(newQuery) ||
        item.Course.toLowerCase().includes(newQuery) ||
        item.Cuisine.toLowerCase().includes(newQuery) ||
        item.Servings.toLowerCase().includes(newQuery) ||
        item.TotalTimeInMins.toLowerCase().includes(newQuery)
      );
    });
    setFilteredItems(filtered.slice(0, 20));
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
    <div className='w-full bg-zinc-800 text-white flex '>
      <div className='h-max w-[20%] border-r-2'>

        <input type="text"
          placeholder='Search'
          className='h-[5vh] w-[80%] m-[3vh] text-black p-2 rounded-xl focus:outline-none focus:ring focus:ring-orange-400'
          value={query}
          onChange={handleSearch}
        />

        <div className='mx-[1vw] my-[2vh]'>
          <button className='flex gap-[5vw] w-full' onClick={cookingDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <LuAlarmClock className='text-2xl' />
              <span>Cook Time</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCookingOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCookingOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter='cook-time'>
              {['10-20', '20-30', '30-40', '40-50', '50-60', '60+'].map((time) => (
                <label key={time} className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                  <div className='px-2'>
                    {time === '60+' ? '> 1 hour' : `${time.split('-').join(' - ')} minutes`}
                  </div>
                  <input
                    type="radio"
                    name="cook-time"
                    value={time}
                    checked={cookTime === time} // Check if this time matches the current state
                    onChange={handleCookTimeChange}
                    className='appearance-none h-[1px] w-[1px] m-[-1px]'
                    aria-label={`${time === '60+' ? '1 or more hours' : `${time.split('-').join(' to ')} minutes`}`}
                  />
                </label>
              ))}
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
              {['1', '2', '3', '4', '5', '6', '6+'].map((servings) => (
                <label key={servings} className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                  <div className='px-2'>
                    {servings === '6+' ? 'Serving > 6' : `Serving ${servings}`}
                  </div>
                  <input
                    type="radio"
                    name="serving"
                    value={servings}
                    checked={serving === servings} // Check if this serving matches the current state
                    onChange={handleServingChange}
                    className='appearance-none h-[1px] w-[1px] m-[-1px]'
                    aria-label={`serving ${serving === '6+' ? '6 or more' : serving}`}
                  />
                </label>
              ))}
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
              {[
                { label: 'Diabetic Friendly', value: 'diabetic friendly' },
                { label: 'Vegetarian', value: 'vegetarian' },
                { label: 'Non Vegetarian', value: 'non vegetarian' },
                { label: 'High Protein Vegetarian', value: 'high protein vegetarian' },
                { label: 'High Protein Non Vegetarian', value: 'high protein non vegetarian' },
                { label: 'Eggetarian', value: 'eggetarian' },
                { label: 'No Onion No Garlic (Sattvic)', value: 'no onion no garlic (sattvic)' },
                { label: 'Gluten Free', value: 'gluten free' },
                { label: 'Vegan', value: 'vegan' },
                { label: 'Sugar Free Diet', value: 'sugar free diet' },
              ].map(({ label, value }) => (
                <label key={value} className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                  <div className='px-2'>{label}</div>
                  <input
                    type="checkbox"
                    name={label}
                    value={value}
                    checked={diet.includes(value)} // Check if the current value is in the diet state
                    onChange={handleDietChange} // Handle change
                    className='appearance-none h-[1px] w-[1px] m-[-1px]'
                    aria-label={label}
                  />
                </label>
              ))}
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
              {[
                { label: 'Breakfast', value: 'indian breakfast' },
                { label: 'Lunch', value: 'lunch' },
                { label: 'Dinner', value: 'dinner' },
                { label: 'Snacks', value: 'snack' },
                { label: 'Dessert', value: 'dessert' },
                { label: 'Main Course', value: 'main course' },
                { label: 'Appetizer', value: 'appetizer' },
              ].map(({ label, value }) => (
                <label key={value} className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                  <div className='px-2'>{label}</div>
                  <input
                    type="checkbox"
                    name={label}
                    value={value}
                    checked={course.includes(value)} // Check if the current value is in the course state
                    onChange={handleCourseChange} // Handle change
                    className='appearance-none h-[1px] w-[1px] m-[-1px]'
                    aria-label={label}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-[1vw] my-[2vw]'>
          <button className='flex gap-[5vw] w-full' onClick={cusineDropdown}>
            <div className='flex gap-[1vw] w-[10vw]'>
              <FaGlobe className='text-2xl' />
              <span>Cuisine</span>
            </div>
            <BsChevronDown className={`transform transition-transform duration-300 ${isCusineOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 mt-3 ${isCusineOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-wrap gap-3 ml-[3vw]' data-filter="cuisine">
              {[
                { label: 'Indian', value: 'indian' },
                { label: 'South Indian', value: 'south indian recipes' },
                { label: 'North Indian', value: 'north indian recipes' },
                { label: 'Gujarati', value: 'gujarati recipes' },
                { label: 'Rajasthani', value: 'rajasthani' },
                { label: 'Hyderabadi', value: 'hyderabadi' },
                { label: 'Bengali', value: 'bengali recipes' },
                { label: 'Maharashtrian', value: 'maharashtrian recipes' },
                { label: 'Punjabi', value: 'punjabi' },
              ].map(({ label, value }) => (
                <label key={value} className='bg-zinc-500 rounded-md flex items-center cursor-pointer has-[:checked]:bg-orange-400'>
                  <div className='px-2'>{label}</div>
                  <input
                    type="checkbox"
                    name={label}
                    value={value}
                    checked={cuisine.includes(value)} // Check if the current value is in the cuisine state
                    onChange={handleCuisineChange} // Handle change
                    className='appearance-none h-[1px] w-[1px] m-[-1px]'
                    aria-label={label}
                  />
                </label>
              ))}
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
