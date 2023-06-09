import React from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder-image.png";
import IFoodItem from "../../../lib/FoodInterface";
import Link from "next/link";
// const imageLoader = ({
//   src,
//   width,
//   quality,
// }: {
//   src?: string;
//   width?: number;
//   quality?: number;
// }) => {
//   return `https://themealdb.com/${src}?w=${width}&q=${quality || 1}`;
// };

export default function FoodItem({
  FoodItem,
  setFoodItem,
}: {
  FoodItem: IFoodItem;
  setFoodItem: React.Dispatch<React.SetStateAction<IFoodItem>>;
}) {
  return (
    <>
      <Link
        href={`/Recipes/${FoodItem.id}`}
        onClick={() => setFoodItem(FoodItem)}
        className="h-full group aspect-square hover:underline w-fit flex flex-col items-center xl:w-56 2xl:w-64 mx-2 bg-gray-200 rounded-lg border justify-center
       border-white shadow-md dark:border-gray-700  dark:bg-gray-800"
      >
        {FoodItem.image ? (
          <Image
            className="h-5/6 rounded-md p-3 group-hover:opacity-75"
            // loader={imageLoader}
            src={FoodItem.image}
            alt="No image"
            width={500}
            height={500}
          />
        ) : (
          <Image
            className="w-1/2 rounded-md shadow-lg opacity-75"
            src={placeholder}
            alt="No image"
            width={500}
          />
        )}
        <h5 className=" text-xl font-medium text-gray-900 dark:text-white">
          {FoodItem.name}
        </h5>
      </Link>
    </>
  );
}
