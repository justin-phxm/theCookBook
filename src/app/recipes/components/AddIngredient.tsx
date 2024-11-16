"use client";

import { useFood } from "@/app/context/FoodContext";
import { useState } from "react";
const initialIngredient = {
  ingredient: "{ Ingredient }",
  amount: " { Amount }",
  note: " { Note }",
};
export default function AddIngredient() {
  const { currentFoodItem, setCurrentFoodItem, editMode } = useFood();
  const [newIngredient, setNewIngredient] = useState(initialIngredient);
  const addIngredientHandler = () => {
    const currentIngredient = `${newIngredient.ingredient} (${newIngredient.amount}), ${newIngredient.note}`;
    const updatedIngredients = [
      ...(currentFoodItem.ingredients ?? []),
      currentIngredient,
    ];
    setCurrentFoodItem({ ...currentFoodItem, ingredients: updatedIngredients });
    setNewIngredient(initialIngredient);
  };
  if (!editMode) return null;
  return (
    <div className="flex flex-col gap-2 rounded bg-slate-300 p-2 2xl:flex-row">
      {Object.keys(initialIngredient).map((key) => (
        <input
          key={key}
          placeholder={key}
          type="text"
          maxLength={50}
          value={newIngredient[key as keyof typeof initialIngredient]}
          onChange={(e) =>
            setNewIngredient({ ...newIngredient, [key]: e.target.value })
          }
          className="w-full rounded-md border-0 py-1.5 capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
        />
      ))}
      <button
        onClick={addIngredientHandler}
        className="w-full whitespace-nowrap rounded-md border-none bg-primaryLight px-4 py-1.5 capitalize shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary"
      >
        Add Ingredient
      </button>
    </div>
  );
}
