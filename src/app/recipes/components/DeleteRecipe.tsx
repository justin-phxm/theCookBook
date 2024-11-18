"use client";

import { useFood } from "@/app/context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";
import { DEFAULT_RECIPE } from "@/lib/types";

export default function DeleteRecipe() {
  const { currentFoodItem, setCurrentFoodItem, setFood, foods } = useFood();
  const { deleteFoodItem } = DatabaseProvider();
  const deleteFoodHandler = () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    deleteFoodItem(currentFoodItem);
    setCurrentFoodItem(DEFAULT_RECIPE);
    setFood(foods.filter((food) => food.id !== currentFoodItem.id));
  };
  return (
    <button
      onClick={deleteFoodHandler}
      className="p-2 transition-all hover:rounded-md hover:bg-slate-300"
    >
      Delete
    </button>
  );
}
