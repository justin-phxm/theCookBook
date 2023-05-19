import React from 'react'
import MyFoodItem from './FoodItem'
import Link from 'next/link'
import IFoodItem from '../FoodInterface'

export default function recentRecipeHolder(
  {foodItemArray, setFoodItem}: 
  {foodItemArray: IFoodItem[], setFoodItem: React.Dispatch<React.SetStateAction<IFoodItem>>}
  ) {
  return (
    <div className=" bg-[#BCE3B2] w-full h-full p-3 rounded-lg">
        <div className="h-full w-full rounded-lg flex flex-col">
            <Link className='font-bold hover:underline text-xl'
            href="#">
              Recent Recipes
            </Link>
            <div className=" overflow-x-auto flex flex-row h-full">
                {foodItemArray.map((FoodItem:{name?:string, image?:string, id?:string}) => (
                    <MyFoodItem FoodItem={FoodItem} key={FoodItem.id} setFoodItem={setFoodItem}/>
                ))}
            </div>
        </div>
    </div>
  )
}
