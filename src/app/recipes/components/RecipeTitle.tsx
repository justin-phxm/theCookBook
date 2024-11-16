"use client";
import { useFood } from "@/app/context/FoodContext";

export default function RecipeTitle() {
  const { currentFoodItem, setCurrentFoodItem, editMode } = useFood();
  return (
    <div className="flex w-1/2 gap-2 text-xl font-bold">
      <input
        placeholder={currentFoodItem.name ?? "Food Name"}
        type="text"
        value={currentFoodItem.name}
        disabled={!editMode}
        onChange={(e) =>
          setCurrentFoodItem((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
        maxLength={40}
        className={`w-3/4 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primaryLight ${!editMode && "bg-inherit"}`}
      />
      <input
        placeholder={currentFoodItem.servings + " Servings"}
        type="number"
        value={currentFoodItem.servings}
        disabled={!editMode}
        onChange={(e) => {
          setCurrentFoodItem((prev) => {
            return {
              ...prev,
              servings: parseInt(e.target.value),
            };
          });
        }}
        max={127}
        min={0}
        className={`flex w-1/4 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primaryLight ${!editMode && "bg-inherit"}`}
      />
    </div>
  );
}
