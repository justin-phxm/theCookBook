// import React from 'react'
import RecipeLayout from '../components/recipe/recipeLayout'
import RecipeHolder from '@/components/recipe/recipeHolder'
import CookingArea from '@/components/recipe/cookingArea'
import RecipeDetails from '@/components/recipe/recipeDetails'
import RecentRecipeHolder from '@/components/recipe/recentRecipeHolder'
import {v4 as uuidv4} from 'uuid'
import IFoodItem from '@/components/FoodInterface'
import { useState } from 'react'

export default function Recipes() {
  const foodItemArray:IFoodItem[] = 
  [{name:"Lasagna", id:uuidv4(), 
  summary:"Chicken soup is a warm and comforting soup made by simmering chicken, vegetables, and herbs in a flavorful broth.", 
  color:"bg-red-500",
  ingredients:[  "Lasagna noodles (12-16 noodles)",  "Ground beef (1 pound)",
  "Tomato sauce (24-28 ounces)",  "Ricotta cheese (2 cups)",  "Shredded mozzarella cheese (2 cups)",  "Grated Parmesan cheese (1/2 cup)",  "Egg (1)",  "Garlic cloves (2), minced",  "Olive oil (2 tablespoons)",  "Dried basil (1 teaspoon)",  "Dried oregano (1 teaspoon)",  "Salt and pepper, to taste"],
  instructions:[  "Preheat the oven to 375°F (190°C).",  "Cook the lasagna noodles in a large pot of salted boiling water until al dente, according to the package instructions. Drain and rinse with cold water to stop the cooking process.",  "In a large skillet, heat the olive oil over medium heat. Add the minced garlic and sauté for 1-2 minutes, until fragrant.",  "Add the ground beef to the skillet and cook until browned, breaking it up into small pieces with a wooden spoon.",  "Add the tomato sauce, dried basil, dried oregano, salt, and pepper to the skillet, and stir to combine. Let the mixture simmer for 10-15 minutes, until the sauce has thickened.",  "In a medium bowl, mix together the ricotta cheese, grated Parmesan cheese, and egg until well combined.",  "To assemble the lasagna, spread a thin layer of the meat sauce on the bottom of a 9x13 inch baking dish. Arrange a layer of cooked lasagna noodles on top of the sauce, followed by a layer of the ricotta cheese mixture, and a layer of shredded mozzarella cheese. Repeat the layers until all the ingredients are used up, making sure to end with a layer of shredded mozzarella cheese on top.",  "Cover the baking dish with foil and bake in the preheated oven for 25 minutes.",  "Remove the foil and bake for an additional 25-30 minutes, until the cheese is melted and bubbly and the lasagna is heated through.",  "Let the lasagna cool for 10-15 minutes before slicing and serving."]
  },
  {name:"Steak", id:uuidv4()},
  {name:"Chicken Soup", image:"images/media/meals/1529446352.jpg", id:uuidv4(),
  summary:"Chicken good."},
  {name:"Chicken Soup", image:"images/media/meals/1529446352.jpg", id:uuidv4()},]
  const [foodItem, setFoodItem] = useState(foodItemArray[0])

  return (
    <RecipeLayout>
      <div className="h-full pb-2">
        <div className="grid grid-cols-12 gap-2 h-3/4 pb-2">
          <div className="col-span-2 h-full">
            <RecipeHolder foodItemArray={foodItemArray} />
          </div>
          <div className="col-span-7">
            <CookingArea foodItem={foodItem}/>
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
