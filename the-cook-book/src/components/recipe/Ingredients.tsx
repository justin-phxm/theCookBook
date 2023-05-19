import React from 'react'
import IFoodItem from '../FoodInterface'

export default function Ingredients({foodItem}: {foodItem: IFoodItem}) {
    return (
    <div className="bg-white rounded-md p-2 overflow-auto">
        <div className=" font-bold text-lg text-">
            Ingredients:
        </div>
        <ul className="">
            {foodItem.ingredients?.map((ingredient, index) => (
                <li className="flex flex-row font-normal" key={index}>
                    • {ingredient}
                </li>
            ))}
        </ul>
    </div>
  )
}
