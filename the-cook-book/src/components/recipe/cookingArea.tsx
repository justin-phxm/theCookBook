import React from 'react'
import Image from 'next/image'
import placeholder from "../../../public/placeholder-image.png"
import IFoodItem from '../FoodInterface'
import Ingredients from './Ingredients'
import Instructions from './Instructions'

// Center area of the recipe page
const imageLoader = ({ src, width, quality }:{src?:string, width?:number, quality?:number}) => {
    return `https://themealdb.com/${src}?w=${width}&q=${quality || 1}`;
  };

export default function cookingArea({foodItem}: {foodItem: IFoodItem}) {
    return (
    <div className="bg-slate-200 h-max p-4 rounded-lg">
        <section className="flex flex-row justify-between">
            <h1 className=' font-bold select-none text-xl'>
                {foodItem.name? foodItem.name: "New Recipe"}
                {foodItem.servings? " - " + foodItem.servings + " servings": ""}
            </h1>
            <div className="flex flex-row">
                <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer">
                    Save
                </button >
                <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer">
                    Edit
                </button>
            </div>
        </section>
        <div className="flex flex-row gap-2">
            <div className="flex flex-col">
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
            <div className="">
                <Instructions foodItem={foodItem} />
            </div>
        </div>    
    </div>
  )
}
