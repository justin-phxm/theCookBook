// import React from 'react'
import RecipeLayout from '../components/recipe/recipeLayout'
import RecipeHolder from '@/components/recipe/recipeHolder'
import CookingArea from '@/components/recipe/cookingArea'
import RecipeDetails from '@/components/recipe/recipeDetails'
import RecentRecipeHolder from '@/components/recipe/recentRecipeHolder'

export default function Recipes() {
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
          <RecentRecipeHolder />
        </div>
      </div>
    </RecipeLayout>
  )
}
