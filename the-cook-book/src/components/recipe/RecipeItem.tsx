import React from 'react'
import Image from 'next/image'
import placeholder from "../../../public/placeholder-image.png"
import IFoodItem from '../FoodInterface'
import Link from 'next/link'
const imageLoader = ({ src, width, quality }:{src?:string, width?:number, quality?:number}) => {
    return `https://themealdb.com/${src}?w=${width}&q=${quality || 1}`;
};

export default function RecipeItem(
    {FoodItem, setFoodItem}:
    {FoodItem:IFoodItem, setFoodItem: React.Dispatch<React.SetStateAction<IFoodItem>>}
    ) {
  return (
    <Link
    href={`/Recipes/${FoodItem.id}`} 
    className="group flex xl:flex-col h-max p-2 bg-white rounded-md border border-white shadow-md dark:border-gray-700 my-1 dark:bg-gray-800 text-center"
    onClick={()=>setFoodItem(FoodItem)}
    >
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
            <h5 className=" group-hover:underline text-xl font-medium text-gray-900 dark:text-white">
                {FoodItem.name}
            </h5>
            {FoodItem.image ? 
                <div className="relative">
                    <Image className="h-10 w-10 rounded-full"
                        loader={imageLoader}
                        src={FoodItem.image}
                        alt="No image"
                        width={500}
                        height={500}
                    />
                    {FoodItem.color? 
                    <span className="absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800 bg-red-500 -bottom-1 -right-1" /> 
                    : ""}
                </div>
                : 
                <Image className=" w-14 rounded-md"
                src={placeholder}
                alt="No image"
                width={500}
                />  
            }
        </div>
        <div className=" hidden xl:flex text-gray-700 text-ellipsis text-sm text-left">
            {FoodItem.summary ? 
                (FoodItem.summary.length > 20 ? 
                    (FoodItem.summary?.substring(0, 20) + "...") 
                    : FoodItem.summary)
            : ""}
        </div>
 </Link>
  )
}
