import React from 'react'
import IFoodItem from '../FoodInterface'

export default function Instructions({foodItem}: {foodItem: IFoodItem}) {
  return (
    <div className="bg-white rounded-md h-full p-2">
        <div className=" font-bold text-lg text-">
            Instructions:
        </div>
        <ol className=" ml-6 list-decimal font-normal resize">
            {foodItem.instructions?.map((instruction, index) => (
                <li key={index}>
                    {instruction}
                </li>
            ))}
        </ol>
    </div>
  )
}
