import React from "react";
import IFoodItem from "../../lib/FoodInterface";

export default function Instructions({ foodItem }: { foodItem: IFoodItem }) {
  return (
    <div className="bg-white rounded-md h-full p-2 max-w-3xl">
      <div className=" font-bold text-lg text-">Instructions:</div>
      <ol className=" list-decimal font-normal max-h-[45rem]  overflow-y-auto list-inside ">
        {foodItem.instructions?.map((instruction, index) => (
          <li className="py-0.5" key={index}>
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}
