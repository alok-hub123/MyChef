import { RxArrowTopRight } from "react-icons/rx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IndianFoodDataset from "../constants/IndianFoodDataset.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//default rercipe if there is no recipe in localstorage
const defaultRecipes = {
  Breakfast: { TranslatedRecipeName: "Ragi Semiya Upma Recipe - Ragi Millet Vermicelli Breakfast", imageUrl: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Monika_Manchanda/Ragi_vermicilli.jpg", Srno: 3 }, 
  Lunch: { TranslatedRecipeName: "Gongura Chicken Curry Recipe - Andhra Style Gongura Chicken", backgroundImage: "https://www.archanaskitchen.com/images/archanaskitchen/Ghongura_Chicken_Curry_Recipe-2_1600.jpg", Srno: 4 },      
  Dinner: { TranslatedRecipeName: "Aar fish soup recipe - Bengali style fish in tomato gravy", backgroundImage: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/donna_george/Aar_Macher_Jhol__Bengali_Style_Fish_In_Spicy_Tomato_Gravy_1600.jpg", Srno: 14 }, 
  Snack: { TranslatedRecipeName: "Spicy Crunchy Masala Idli Recipe", backgroundImage: "https://www.archanaskitchen.com/images/archanaskitchen/Guest_Writers/Jeny_John/Spicy_Crunchy_Masala_Idli_Recipe.jpg", Srno: 9 },          
  "Side Dish": { TranslatedRecipeName: "Masala Karela Recipe", backgroundImage: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Pooja_Thakur/Karela_Masala_Recipe-4_1600.jpg", Srno: 1 },     
};

const TodaySpecial = () => {
  const navigate = useNavigate();
  const [todaySpecialDish, setTodaySpecialDish] = useState({});

  useEffect(() => {
    const storageKey = "todaySpecialDish";
    const lastFetchTimeKey = "lastFetchTime";

    const fetchTodaySpecial = () => {
      const breakfastRecipe = getRandomRecipe("Breakfast");
      const lunchRecipe = getRandomRecipe("Lunch");
      const dinnerRecipe = getRandomRecipe("Dinner");
      const snacksRecipe = getRandomRecipe("Snack");
      const sideDishRecipe = getRandomRecipe("Side Dish");

      const todaySpecialRecipes = {
        Breakfast: breakfastRecipe,
        Lunch: lunchRecipe,
        Dinner: dinnerRecipe,
        Snack: snacksRecipe,
        "Side Dish": sideDishRecipe,
      };

      localStorage.setItem(storageKey, JSON.stringify(todaySpecialRecipes));
      localStorage.setItem(lastFetchTimeKey, new Date().toISOString());
      setTodaySpecialDish(todaySpecialRecipes);
    };

    const getRandomRecipe = (course) => {
      const recipes = IndianFoodDataset.filter((recipe) =>
        recipe.Course.includes(course)
      );
      return recipes[Math.floor(Math.random() * recipes.length)];
    };

    const checkFetchTime = () => {
      const lastFetchTime = localStorage.getItem(lastFetchTimeKey);
      const currentTime = new Date();
      const fourAMToday = new Date();
      fourAMToday.setHours(4, 0, 0, 0); // Set to 4 AM today

      // If lastFetchTime doesn't exist or if it's more than 24 hours since last fetch
      if (!lastFetchTime || currentTime >= fourAMToday) {
        const lastFetchDate = new Date(lastFetchTime);
        const timeSinceLastFetch = currentTime - lastFetchDate;

        // Check if 24 hours (86400000 ms) have passed since the last fetch
        if (timeSinceLastFetch >= 86400000) {
          // Fetch new recipes
          let newRecipes = fetchTodaySpecial();
          let previousRecipes = JSON.parse(localStorage.getItem(storageKey)) || {};

          // Check for duplicates and refetch if necessary
          while (
            Object.keys(previousRecipes).length &&
            Object.keys(newRecipes).length &&
            Object.keys(previousRecipes).every(
              (course) =>
                previousRecipes[course].Srno === newRecipes[course].Srno
            )
          ) {
            newRecipes = fetchTodaySpecial(); // Fetch again until different
          }

          setTodaySpecialDish(newRecipes);
        }
      }

      // If it's the first load and there are no dishes in local storage, show default recipes
      if (!lastFetchTime) {
        localStorage.setItem(storageKey, JSON.stringify(defaultRecipes));
        setTodaySpecialDish(defaultRecipes);
      } else {
        // Load dishes from local storage if they exist
        const storedRecipes = JSON.parse(localStorage.getItem(storageKey));
        setTodaySpecialDish(storedRecipes);
      }
    };

    checkFetchTime();
  }, []);

  const handleRecipeClick = (course) => {
    const recipe = todaySpecialDish[course];
    // Navigate to the recipe page
    if (recipe) {
      navigate("/" + recipe.Srno);
    }
  };

  return (
    <div className="h-[100vh] relative">
      <div className="h-[5%] text-white mx-[6vw] mt-[5vh]">
        <h1 className="text-3xl font-bold">Try This Today</h1>
      </div>
      <img
        src="/Images/tomatoslice.png"
        alt=""
        className="h-[12vh] w-[6vw] l_anim absolute left-0 top-[7vh]"
      />
      <img
        src="/Images/tomatoslice.png"
        alt=""
        className="l_anim h-[10vh] w-[5vw] absolute left-[-1vw] top-[13vh]"
      />
      <img
        src="/Images/cucumber.png"
        alt=""
        className="l_anim h-[14vh] w-[10vw] absolute left-0 bottom-0"
      />

      <img
        src="/Images/juice.png"
        alt=""
        className=" h-[17vh] w-[9vw] r_anim absolute right-0 top-[7vh]"
      />
      <img
        src="/Images/dinner.png"
        alt=""
        className="r_anim h-[20vh] w-[14vw] absolute right-0 bottom-0"
      />

      <div className="h-[90%] flex flex-wrap justify-center items-center">
        {todaySpecialDish &&
          Object.keys(todaySpecialDish).map((course) => (
            <div
              key={course}
              className="relative text-white rounded-xl h-[45vh] w-[25vw] cursor-pointer bg-contain group"
              onClick={() => handleRecipeClick(course)}
            >
              <img
                src="/Images/woodenPlate.png"
                alt=""
                className="woodenPlate h-[45vh] bg-contain bg-center group-hover:opacity-50 transition duration-300"
              />
              <div
                className="h-[65%] w-[55%] absolute top-[55%] left-[44%] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-full"
                style={{ backgroundImage: `url(${todaySpecialDish[course].imageUrl})` }}
              >
                <h1 className="text-2xl group-hover:font-bold">{course}</h1>
                <RxArrowTopRight className="w-[35px] h-[35px] text-white group-hover:text-orange-500 group-hover:rotate-45 duration-100" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodaySpecial;
