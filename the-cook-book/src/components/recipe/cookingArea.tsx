import React from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder-image.png";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import { useFood } from "../../context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";
// Center area of the recipe page
const imageLoader = ({
  src,
  width,
  quality,
}: {
  src?: string;
  width?: number;
  quality?: number;
}) => {
  return `https://themealdb.com/${src}?w=${width}&q=${quality || 1}`;
};

export default function CookingArea() {
  const { currentFoodItem } = useFood();
  const { addFoodItem } = DatabaseProvider();
  return (
    <div className="bg-slate-200 h-full max-h-full p-4 rounded-lg flex flex-col">
      <section className="flex flex-row justify-between">
        <h1 className=" font-bold select-none text-xl">
          {currentFoodItem.name ? currentFoodItem.name : "New Recipe"}
          {currentFoodItem.servings
            ? " - " + currentFoodItem.servings + " servings"
            : ""}
        </h1>
        <div className="flex flex-row">
          <button
            onClick={() => {
              addFoodItem(currentFoodItem);
              console.log(currentFoodItem);
            }}
            className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer"
          >
            Save
          </button>
          <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer">
            Edit
          </button>
        </div>
      </section>
      <div className="flex flex-row gap-2 h-[48rem] max-h-max">
        <div className="flex flex-col gap-2 w-1/2">
          <Ingredients />
          <div className="w-full h-full relative">
            {currentFoodItem.image ? (
              <Image
                className=" rounded-lg group-hover:opacity-75 object-cover"
                loader={imageLoader}
                src={currentFoodItem.image}
                alt="No image"
                // width={400}
                // height={400}
                fill={true}
              />
            ) : (
              <Image
                className="rounded-md shadow-lg opacity-75"
                src={placeholder}
                alt="No image"
                fill={true}
              />
            )}
          </div>
        </div>
        <section className="h-full max-h-full w-1/2">
          <Instructions />
        </section>
      </div>
    </div>
  );
}
