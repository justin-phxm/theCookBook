"use client";
import { useFood } from "@/app/context/FoodContext";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import IFoodItem from "../../../lib/FoodInterface";
import RecipeItem from "./RecipeItem";

export default function RecipeHolder() {
  const { foods, setFood, setEditMode, setCurrentFoodItem } = useFood();
  const handleNewNote = () => {
    setEditMode(false);
    const newFoodItem: IFoodItem = {
      id: uuidv4(),
      name: "New Recipe",
      summary: "Your new recipe",
      ingredients: [],
      instructions: [],
      color: "red",
    };
    setFood([...foods, newFoodItem]);
    setCurrentFoodItem(newFoodItem);
    setEditMode(true);
  };

  return (
    <div className="bg-slate-200 h-full max-h-full w-full p-4 rounded-lg flex flex-col">
      <div className="flex flex-row justify-between">
        <h1 className=" font-bold select-none text-xl">Recipes</h1>
        <AiOutlinePlus
          className="text-2xl z-10 font-semibold hover:bg-slate-300 hover:rounded-md cursor-pointer"
          onClick={handleNewNote}
        />
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
