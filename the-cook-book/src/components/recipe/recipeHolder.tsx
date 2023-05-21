import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import IFoodItem from "../FoodInterface";
import RecipeItem from "./RecipeItem";

export default function recipeHolder({
  foodItemArray,
  setFoodItem,
}: {
  foodItemArray: IFoodItem[];
  setFoodItem: React.Dispatch<React.SetStateAction<IFoodItem>>;
}) {
  return (
    <div className="bg-slate-200 h-full max-h-full w-full p-4 rounded-lg flex flex-col">
      <div className="flex flex-row justify-between">
        <h1 className=" font-bold select-none text-xl">Recipes</h1>
        <AiOutlinePlus className="text-2xl z-10 font-semibold hover:bg-slate-300 hover:rounded-md cursor-pointer" />
      </div>
      <ul className=" flex flex-col overflow-y-auto">
        {foodItemArray.map((FoodItem: IFoodItem) => (
          <li key={FoodItem.id}>
            <RecipeItem FoodItem={FoodItem} setFoodItem={setFoodItem} />
            <RecipeItem FoodItem={FoodItem} setFoodItem={setFoodItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
