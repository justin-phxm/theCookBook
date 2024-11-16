"use client";
import { useFood } from "@/app/context/FoodContext";

export default function IngredientsList() {
  const { currentFoodItem, editMode, setCurrentFoodItem } = useFood();
  return (
    <div className="relative flex flex-1">
      <ul className="absolute inset-0 overflow-auto">
        {currentFoodItem.ingredients?.map((ingredient, index) => (
          <li
            className={`flex flex-row font-normal ${editMode && "cursor-pointer hover:opacity-70"}`}
            key={index}
            onClick={() => {
              const updatedIngredients = [
                ...(currentFoodItem.ingredients ?? []),
              ];
              updatedIngredients.splice(index, 1);
              setCurrentFoodItem({
                ...currentFoodItem,
                ingredients: updatedIngredients,
              });
            }}
          >
            • {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
