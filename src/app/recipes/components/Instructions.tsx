import React, { MouseEventHandler, useId, useState } from "react";
import IFoodItem from "../../../lib/FoodInterface";
import { useFood } from "@/app/context/FoodContext";

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
  };
  const handleInstructionRemove = (
    index: number,
    currentFoodItem: IFoodItem,
    setCurrentFoodItem: React.Dispatch<React.SetStateAction<IFoodItem>>,
  ): MouseEventHandler<HTMLLIElement> => {
    if (!editMode) return (event) => event.preventDefault();
    return (event) => {
      event.preventDefault();
      if (currentFoodItem.instructions) {
        const updatedInstructions = [...currentFoodItem.instructions];
        updatedInstructions.splice(index, 1);
        setCurrentFoodItem({
          ...currentFoodItem,
          instructions: updatedInstructions,
        });
      }
    };
  };
  const addInstructionElement = editMode && (
    <div className="flex flex-col gap-2 rounded bg-slate-300 p-2">
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
        className="w-full rounded-full bg-slate-400 font-light hover:opacity-70"
        onClick={addInstructionHandler}
      >
        Add Instruction
      </button>
    </div>
  );
  return (
    <div className="h-full max-w-3xl rounded-md bg-white p-2">
      <div className="text- text-lg font-bold">Instructions:</div>
      <ol className="max-h-[45rem] list-inside list-decimal overflow-y-auto font-normal">
        {currentFoodItem.instructions?.map((instruction, index) => (
          <li
            className={`py-0.5 ${
              editMode && "cursor-pointer hover:opacity-70"
            }`}
            onClick={handleInstructionRemove(
              index,
              currentFoodItem,
              setCurrentFoodItem,
            )}
            key={index}
          >
            {instruction}
          </li>
        ))}
        {addInstructionElement}
      </ol>
    </div>
  );
}
