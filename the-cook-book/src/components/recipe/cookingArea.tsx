import React from 'react'
import Image from 'next/image'
import placeholder from "../../../public/placeholder-image.png"
import IFoodItem from '../FoodInterface'
import Ingredients from './Ingredients'
import Instructions from './Instructions'

const imageLoader = ({ src, width, quality }:{src?:string, width?:number, quality?:number}) => {
    return `https://themealdb.com/${src}?w=${width}&q=${quality || 1}`;
  };

export default function cookingArea({foodItem}: {foodItem: IFoodItem}) {
  return (
    <div className=" bg-[#BCE3B2] w-full h-full p-3 rounded-lg">
        <div className="bg-slate-200 h-full p-4 rounded-lg">
            <div className="flex flex-row justify-between">
                <h1 className=' font-bold select-none text-xl'>
                    {foodItem.name? foodItem.name : "New Recipe"}
                </h1>
                <div className="flex flex-row">
                    <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer">
                        Save
                    </button >
                    <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer">
                        Edit
                    </button>
                </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/2">
                    <Ingredients foodItem={foodItem} />
                    {foodItem.image ? 
                        <Image className="rounded-md p-3 group-hover:opacity-75"
                            loader={imageLoader}
                            src={foodItem.image}
                            alt="No image"
                            width={400}
                            height={400}
                        />
                    :
                        <Image className="rounded-md shadow-lg opacity-75"
                            src={placeholder}
                            alt="No image"
                            width={500}
                        />  
                    }
                </div>
                <div className="w-1/2">
                    <Instructions foodItem={foodItem} />
                </div>
            </div>    
        </div>
    </div>
  )
}
