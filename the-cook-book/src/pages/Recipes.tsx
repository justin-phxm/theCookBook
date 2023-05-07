// import React from 'react'
import RecipeLayout from '../components/recipe/recipeLayout'
import RecipeHolder from '@/components/recipe/recipeHolder'
import CookingArea from '@/components/recipe/cookingArea'
import RecipeDetails from '@/components/recipe/recipeDetails'
import RecentRecipeHolder from '@/components/recipe/recentRecipeHolder'
import {v4 as uuidv4} from 'uuid'

export default function Recipes() {
  const FoodItem = {"name":"Chicken Soup","image":"https://www.themealdb.com/images/media/meals/1529446352.jpg","id":"52959"}
  console.log(uuidv4())
  return (
    <RecipeLayout>
      <div className="h-full pb-2">
        <div className="grid grid-cols-12 gap-2 h-3/4 pb-2">
          <div className="col-span-2 h-full">
            <RecipeHolder />
          </div>
          <div className="col-span-7">
            <CookingArea />
          </div>
          <div className="col-span-3">
            <RecipeDetails />
          </div>
        </div>
        <div className=" h-1/4">
          <RecentRecipeHolder FoodItem={FoodItem} />
        </div>
      </div>
    </RecipeLayout>
  )
}
