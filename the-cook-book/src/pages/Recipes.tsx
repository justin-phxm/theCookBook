// import React from 'react'
import RecipeLayout from '../components/recipe/recipeLayout'
import RecipeHolder from '@/components/recipe/recipeHolder'
import CookingArea from '@/components/recipe/cookingArea'
import RecipeDetails from '@/components/recipe/recipeDetails'
import RecentRecipeHolder from '@/components/recipe/recentRecipeHolder'
import {v4 as uuidv4} from 'uuid'
import IFoodItem from '@/components/FoodInterface'

export default function Recipes() {
  const foodItemArray:IFoodItem[] = 
  [{name:"Chicken Soup", image:"images/media/meals/1529446352.jpg", id:uuidv4(), 
  summary:"Chicken soup is a warm and comforting soup made by simmering chicken, vegetables, and herbs in a flavorful broth.", color:"bg-red-500"},
  {name:"Steak", id:uuidv4()},
  {name:"Chicken Soup", image:"images/media/meals/1529446352.jpg", id:uuidv4(),
  summary:"Chicken good."},
  {name:"Chicken Soup", image:"images/media/meals/1529446352.jpg", id:uuidv4()},]

  return (
    <RecipeLayout>
      <div className="h-full pb-2">
        <div className="grid grid-cols-12 gap-2 h-3/4 pb-2">
          <div className="col-span-2 h-full">
            <RecipeHolder foodItemArray={foodItemArray} />
          </div>
          <div className="col-span-7">
            <CookingArea />
          </div>
          <div className="col-span-3">
            <RecipeDetails />
          </div>
        </div>
        <div className=" h-1/4">
          <RecentRecipeHolder foodItemArray={foodItemArray} />
        </div>
      </div>
    </RecipeLayout>
  )
}
