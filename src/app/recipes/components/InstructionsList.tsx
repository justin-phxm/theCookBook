"use client";

import { useFood } from "@/app/context/FoodContext";

export default function InstructionsList() {
  const { currentFoodItem, editMode, setCurrentFoodItem } = useFood();
  return (
    <div className="relative flex flex-1">
      <ol className="absolute inset-0 list-inside list-decimal overflow-auto">
        {currentFoodItem.instructions?.map((instruction, index) => (
          <li
            className={` ${editMode && "cursor-pointer hover:opacity-70"}`}
            onClick={() => {
              if (!editMode) return;
              const updatedInstructions = [
                ...(currentFoodItem.instructions ?? []),
              ];
              updatedInstructions.splice(index, 1);
              setCurrentFoodItem({
                ...currentFoodItem,
                instructions: updatedInstructions,
              });
            }}
            key={index}
          >
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}
