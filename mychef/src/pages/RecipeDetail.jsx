import React from 'react'

const RecipeDetail = ({item}) => {
    return (
        <div>
          <h2>{item.RecipeName}</h2>
          <p>{item.Description}</p>
            <div>{item.Ingredients}</div>
          <p>Cooking Time: {item.TotalTimeInMins} minutes</p>
          {/* ... */}
        </div>
    )
}

export default RecipeDetail
