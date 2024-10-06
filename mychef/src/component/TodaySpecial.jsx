import { RxArrowTopRight } from "react-icons/rx";
import { todaySpecial } from "../constants/todaySpecial.jsx";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IndianFoodDataset from '../constants/IndianFoodDataset.json'
import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TodaySpecial = () => {

  const navigate = useNavigate();

  const [todaySpecialDish, setTodaySpecialDish] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date().getHours());

  useEffect(() => {
    const storageKey = `todaySpecialDish-${currentTime < 4 ? 'before4am' : 'after4am'}`;
    const storedTodaySpecial = localStorage.getItem(storageKey);

    if (storedTodaySpecial) {
      setTodaySpecialDish(JSON.parse(storedTodaySpecial));
    } else {
      const fetchTodaySpecial = () => {
        const breakfastRecipe = IndianFoodDataset.find((recipe) => recipe.Course.includes('Breakfast'));
        const lunchRecipe = IndianFoodDataset.find((recipe) => recipe.Course.includes('Lunch'));
        const dinnerRecipe = IndianFoodDataset.find((recipe) => recipe.Course.includes('Dinner'));
        const snacksRecipe = IndianFoodDataset.find((recipe) => recipe.Course.includes('Snack'));
        const sideDishRecipe = IndianFoodDataset.find((recipe) => recipe.Course.includes('Side Dish'));

        const todaySpecialRecipes = {
          Breakfast: breakfastRecipe,
          Lunch: lunchRecipe,
          Dinner: dinnerRecipe,
          Snack: snacksRecipe,
          'Side Dish': sideDishRecipe,
        };

        localStorage.setItem(storageKey, JSON.stringify(todaySpecialRecipes));
        setTodaySpecialDish(todaySpecialRecipes);
      };

      fetchTodaySpecial();
    }
  }, [currentTime]);

  const handleRecipeClick = (course) => {
    const recipe = todaySpecialDish[course];
    // Navigate to the recipe page
    navigate('/'+recipe.Srno);
  };

  // useGSAP(() => {
  //   gsap.from(".l_anim", {
  //     x: -160,
  //     duration: 2,
  //     ease: 'power2.inOut',
  //     scrollTrigger: {
  //       trigger: ".l_anim",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: true,
  //       markers: true
  //     }
  //   })
  // }, []);

  // useGSAP(() => {
  //   gsap.from(".r_anim", {
  //     x: 200,
  //     duration: 2,
  //     ease: 'power2.inOut',
  //     scrollTrigger: {
  //       trigger: ".r_anim",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       scrub: true
  //     }
  //   })
  // }, []);



  return (
    <div className="h-[100vh] relative">
      <div className="h-[5%] text-white mx-[6vw] mt-[5vh]">
        <h1 className="text-3xl font-bold">Try This Today</h1>
      </div>
      <img src="/Images/tomatoslice.png" alt="" className="h-[12vh] w-[6vw] l_anim absolute left-0 top-[7vh]" />
      <img src="/Images/tomatoslice.png" alt="" className="l_anim h-[10vh] w-[5vw] absolute left-[-1vw] top-[13vh]" />
      <img src="/Images/cucumber.png" alt="" className="l_anim h-[14vh] w-[10vw] absolute left-0 bottom-0" />

      <img src="/Images/juice.png" alt="" className=" h-[17vh] w-[9vw] r_anim absolute right-0 top-[7vh]" />
      <img src="/Images/dinner.png" alt="" className="r_anim h-[20vh] w-[14vw] absolute right-0 bottom-0" />

      <div className="h-[90%] flex flex-wrap justify-center items-center">
        {todaySpecial.map((item) => (
          <div key={item.title} className="relative text-white rounded-xl h-[45vh] w-[25vw] cursor-pointer bg-contain group" onClick={() => handleRecipeClick(item.title)}>
            <img src="/Images/woodenPlate.png" alt="" className="woodenPlate h-[45vh]  bg-contain bg-center group-hover:opacity-50 transition duration-300" />
            <div className="h-[60%] w-[60%] absolute  top-[54%] left-[43%]  -translate-x-1/2 -translate-y-1/2  bg-contain bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
              <h1 className="text-2xl group-hover:font-bold">{item.title} </h1>
              <RxArrowTopRight className="w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TodaySpecial;