import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LuAlarmClock } from "react-icons/lu";
import { GiNoodles } from 'react-icons/gi';
import { FaCarrot } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { FaGlobe } from 'react-icons/fa';
import IndianFoodDataset from '../constants/IndianFoodDataset.json';

const RecipeDetail = () => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    for (let i = 0; i < IndianFoodDataset.length; i++) {
      if (IndianFoodDataset[i].Srno === recipeId) {
        setRecipeInfo(IndianFoodDataset[i]);
        break;
      }
    }
  }, [recipeId]);

  return (
    <>
      {
        !recipeInfo ? <h1>Loading...</h1> :
          <div className='bg-white h-max w-full p-10'>
            <div className='flex gap-[5vw]'>
              <div><img src={recipeInfo.imageUrl} alt="" className='h-[60vh] w-[40vw] rounded-xl shadow' /></div>
              <div className='flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>{recipeInfo.TranslatedRecipeName}</h1>
                <div className='flex gap-[10vw] mt-6'>
                  <div className='text-center'>
                    <div className='flex gap-5'>
                      <LuAlarmClock className='text-2xl font-bold' />
                      <h3 className='font-bold '>Cooking Time</h3>
                    </div>
                    <span>{recipeInfo.TotalTimeInMins + "Mins"}</span>
                  </div>
                  <div className='text-center'>
                    <div className='flex gap-5'>
                      <GiNoodles className='text-2xl font-bold ' />
                      <h3 className='font-bold '>Serving</h3>
                    </div>
                    <span>{recipeInfo.Servings}</span>
                  </div>
                </div>
                <div className='flex gap-[10vw]'>
                  <div className='text-center'>
                    <div className='flex gap-5'>
                      <FaCarrot className='text-2xl font-bold ' />
                      <h3 className='font-bold '>Diet</h3>
                    </div>
                    <span className='ml-11'>{recipeInfo.Diet}</span>
                  </div>
                  <div className='text-center'>
                    <div className='flex gap-5'>
                      <GiMeal className='text-2xl font-bold ' />
                      <h3 className='font-bold '>Course</h3>
                    </div>
                    <span className='ml-11'>{recipeInfo.Course}</span>
                  </div>
                </div>
                <div className=''>
                  <div className='flex gap-5'>
                    <FaGlobe className='text-2xl font-bold ' />
                    <h3 className='font-bold '>Cusine</h3>
                  </div>
                  <span className='ml-11'>{recipeInfo.Cuisine}</span>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default RecipeDetail;