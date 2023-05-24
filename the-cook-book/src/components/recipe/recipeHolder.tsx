import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import IFoodItem from "../../lib/FoodInterface";
import RecipeItem from "./RecipeItem";
import { DatabaseProvider } from "@/lib/firestore";
import { useFood } from "@/context/FoodContext";

export default function RecipeHolder() {
  const { foods, foodItem } = useFood();
  return (
    <div className="bg-slate-200 h-full max-h-full w-full p-4 rounded-lg flex flex-col">
      <div className="flex flex-row justify-between">
        <h1 className=" font-bold select-none text-xl">Recipes</h1>
        <AiOutlinePlus className="text-2xl z-10 font-semibold hover:bg-slate-300 hover:rounded-md cursor-pointer" />
      </div>
      {/* Hardcoded 47REM */}
      <ul className=" flex flex-col overflow-y-auto h-[47rem] ">
        {foods.map((AFoodItem: IFoodItem) => (
          <li key={AFoodItem.id}>
            <RecipeItem FoodItem={AFoodItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
