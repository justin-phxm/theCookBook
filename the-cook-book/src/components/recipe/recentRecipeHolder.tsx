import React from 'react'
import MyFoodItem from './FoodItem'
import Link from 'next/link'
import IFoodItem from '../FoodInterface'

export default function recentRecipeHolder(
  {foodItemArray, setFoodItem}: 
  {foodItemArray: IFoodItem[], setFoodItem: React.Dispatch<React.SetStateAction<IFoodItem>>}
  ) {
  return (
    <div className="h-full rounded-lg flex flex-col">
        <Link className='font-bold hover:underline text-xl'
        href="#">
          Recent Recipes
        </Link>
        <div className=" overflow-x-auto overflow-y-hidden flex flex-row h-fit">
            {foodItemArray.map((FoodItem:{name?:string, image?:string, id?:string}) => (
              <MyFoodItem FoodItem={FoodItem} key={FoodItem.id} setFoodItem={setFoodItem}/>
            ))}
        </div>
    </div>
  )
}
