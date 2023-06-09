import React from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder-image.png";
import IFoodItem from "../../lib/FoodInterface";
import Link from "next/link";
import { useFood } from "../../context/FoodContext";
import { useRouter } from "next/router";

export default function RecipeItem({ FoodItem }: { FoodItem: IFoodItem }) {
  const { setCurrentFoodItem, setEditMode } = useFood();
  const router = useRouter();
  const foodURLID = router.query.id;
  const MAX_SUMMERY_LENGTH = 20;
  const linkClass =
    "group flex xl:flex-col h-max p-2 hover:bg-green-500 rounded-md border border-white shadow-md dark:border-gray-700 my-1 dark:bg-gray-800 text-center " +
    (foodURLID === FoodItem.id ? "bg-green-500" : "bg-white");

  return (
    <div
      // href={`/Recipes/${FoodItem.id}`}
      className={linkClass}
      onClick={() => {
        setCurrentFoodItem(FoodItem);
        setEditMode(false);
      }}
    >
      <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        <h5 className=" group-hover:underline text-xl font-medium text-gray-900 dark:text-white">
          {FoodItem.name}
        </h5>
        {FoodItem.imageURL ? (
          <div className="relative">
            <Image
              className="h-10 w-10 rounded-full"
              src={FoodItem.imageURL}
              alt="No image"
              width={500}
              height={500}
            />
            {FoodItem.color && (
              <span className="absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800 bg-red-500 -bottom-1 -right-1" />
            )}
          </div>
        ) : (
          <Image
            className=" w-14 rounded-md"
            src={placeholder}
            alt="No image"
            width={500}
          />
        )}
      </div>
      <div className=" hidden xl:flex text-gray-700 text-ellipsis text-sm text-left">
        {FoodItem.summary && FoodItem.summary?.length > MAX_SUMMERY_LENGTH
          ? FoodItem.summary?.substring(0, 20) + "..."
          : FoodItem.summary}
      </div>
    </div>
  );
}
