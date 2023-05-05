// import React from 'react'
import RecipeLayout from '../components/recipe/recipeLayout'
import RecipeHolder from '@/components/recipe/recipeHolder'
import CookingArea from '@/components/recipe/cookingArea'

export default function Recipes() {
  return (
    <RecipeLayout>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <RecipeHolder />
        </div>
        <div className="col-span-7">
          <CookingArea />
        </div>
        <div className="col-span-3">
          Recipe Details
        </div>
      </div>
    </RecipeLayout>
  )
}
