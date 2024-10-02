import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = () => {

  const {recipeId} = useParams();

  return (
    <div>
      <h1>This is the detail of recipe {recipeId}</h1>
    </div>
  )

}

export default RecipeDetail
