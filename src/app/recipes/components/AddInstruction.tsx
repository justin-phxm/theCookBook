"use client";

import { useFood } from "@/app/context/FoodContext";
import { useState } from "react";
const initialInstruction = "{ Instruction }";
export default function AddInstruction() {
  const [newInstruction, setNewInstruction] = useState(initialInstruction);
  const { currentFoodItem, editMode, setCurrentFoodItem } = useFood();
  const addInstructionHandler = () => {
    const updatedInstructions = [
      ...(currentFoodItem.instructions ?? []),
      newInstruction,
    ];
    setCurrentFoodItem({
      ...currentFoodItem,
      instructions: updatedInstructions,
    });
    setNewInstruction(initialInstruction);
  };
  if (!editMode) return null;
  return (
    <div className="flex flex-col gap-2 rounded bg-slate-300 p-2 2xl:flex-row">
      <input
        placeholder="Instruction"
        type="text"
        value={newInstruction}
        onChange={(e) => setNewInstruction(e.target.value)}
        className="w-full rounded-md border-0 py-1.5 capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary"
      />
      <button
        className="w-fit whitespace-nowrap rounded-md border-none bg-primaryLight px-4 py-1.5 capitalize shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary"
        onClick={addInstructionHandler}
      >
        Add Instruction
      </button>
    </div>
  );
}
