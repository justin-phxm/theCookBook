import React from "react";
import IFoodItem from "../../lib/FoodInterface";
import { useFood } from "@/context/FoodContext";

export default function Ingredients() {
  const { currentFoodItem, editMode } = useFood();
  const addIngredientElement = editMode && (
    <div className="flex flex-col gap-2 bg-slate-300 rounded p-2">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="sm:col-span-2 sm:col-start-1">
          <input
            placeholder="Name"
            type="text"
            name="Ingredient Name"
            id="Ingredient Name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="sm:col-span-2">
          <input
            placeholder="Amount"
            type="number"
            name="amount"
            id="amount"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="sm:col-span-2">
          <input
            placeholder="Note"
            type="text"
            name="note"
            id="note"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button className=" font-light bg-slate-400 rounded-full w-full hover:opacity-70">
        Add Ingredient
      </button>
    </div>
  );
  return (
    <div className="bg-white rounded-md p-2 overflow-auto h-full max-h-full">
      <div className=" font-bold text-lg text-">Ingredients:</div>
      <ul className="">
        {currentFoodItem.ingredients?.map((ingredient, index) => (
          <li className="flex flex-row font-normal" key={index}>
            • {ingredient}
          </li>
        ))}
      </ul>
      {addIngredientElement}
    </div>
  );
}
