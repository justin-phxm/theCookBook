import React, { useId, useState } from "react";
import IFoodItem from "../../lib/FoodInterface";
import { useFood } from "@/context/FoodContext";

export default function Instructions() {
  const { currentFoodItem, editMode, setCurrentFoodItem } = useFood();
  const id = useId();
  const [instruction, setInstruction] = useState<string>("");
  const addInstructionHandler = () => {
    if (!currentFoodItem.instructions) {
      currentFoodItem.instructions = new Array<string>(instruction);
    } else {
      currentFoodItem.instructions?.push(instruction);
    }
    setInstruction("");
    setCurrentFoodItem({ ...currentFoodItem });
    console.log(currentFoodItem);
  };
  const addInstructionElement = editMode && (
    <div className="flex flex-col gap-2 bg-slate-300 rounded p-2">
      <div className="sm:col-span-2">
        <input
          placeholder="Instruction"
          type="text"
          id={id}
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <button
        className=" font-light bg-slate-400 rounded-full w-full hover:opacity-70"
        onClick={addInstructionHandler}
      >
        Add Instruction
      </button>
    </div>
  );
  return (
    <div className="bg-white rounded-md h-full p-2 max-w-3xl">
      <div className=" font-bold text-lg text-">Instructions:</div>
      <ol className=" list-decimal font-normal max-h-[45rem]  overflow-y-auto list-inside ">
        {currentFoodItem.instructions?.map((instruction, index) => (
          <li className="py-0.5" key={index}>
            {instruction}
          </li>
        ))}
        {addInstructionElement}
      </ol>
    </div>
  );
}
