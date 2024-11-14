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
    <div className="flex h-full max-h-full w-full flex-col rounded-lg bg-slate-200 p-4">
      <div className="flex flex-row justify-between">
        <h1 className="select-none text-xl font-bold">Recipes</h1>
        <AiOutlinePlus
          className="z-10 cursor-pointer text-2xl font-semibold hover:rounded-md hover:bg-slate-300"
          onClick={handleNewNote}
        />
      </div>
      {/* Hardcoded 47REM */}
      <ul className="flex h-[47rem] flex-col overflow-y-auto">
        {foods.map((AFoodItem: IFoodItem) => (
          <li key={AFoodItem.id}>
            <RecipeItem FoodItem={AFoodItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
