import React from 'react'
import Image from 'next/image'
import placeholder from "../../../public/placeholder-image.png"

const imageLoader = ({ src, width, quality }:{src?:string, width?:number, quality?:number}) => {
  return `https://themealdb.com/${src}?w=${width}&q=${quality || 1}`;
};

export default function FoodItem({FoodItem}:{FoodItem:{name?:string, image?:string, id?:string}}) {

  return (
    <>
      <div className="h-full bg-gray-200 rounded-lg border border-white shadow-md dark:border-gray-700 mx-2 dark:bg-gray-800 flex-col">
        <div className=" h-full justify-center p-2">
          <div className="flex flex-col items-center">
            {FoodItem.image ? 
            // h-24 is a problem
            <Image className="h-24 w-24 rounded-md shadow-lg"
                loader={imageLoader}
                src={FoodItem.image}
                alt="No image"
                width={500}
                height={500}
            />
          :
            <Image className="h-24 w-24 rounded-md shadow-lg"
            src={placeholder}
            alt="No image"
            width={500}
            quality={1}
            />  
        }
            <h5 className="mb-1 mt-3 text-xl font-medium text-gray-900 dark:text-white">
                {FoodItem.name}
            </h5>
        </div>
      </div>
    </div>
    </>)
}
