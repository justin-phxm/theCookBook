import React from "react";
import IFoodItem from "../../lib/FoodInterface";
import { useFood } from "@/context/FoodContext";

export default function Ingredients() {
  const { currentFoodItem } = useFood();
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
    </div>
  );
}
