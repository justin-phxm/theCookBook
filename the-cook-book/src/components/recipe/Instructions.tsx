import React from 'react'
import IFoodItem from '../FoodInterface'

export default function Instructions({foodItem}: {foodItem: IFoodItem}) {
  return (
    <div className="bg-white rounded-md h-full max-h-full p-2 max-w-3xl">
        <div className=" font-bold text-lg text-">
            Instructions:
        </div>
        <ol className=" ml-6 list-decimal font-normal resize h-full max-h-full  overflow-y-auto list-inside ">
            {foodItem.instructions?.map((instruction, index) => (
                <li key={index}>
                    {instruction}
                    {instruction}
                </li>
                
            ))}
        </ol>
    </div>
  )
}
