"use client";
import React from "react";
import Image from "next/image";
import placeholder from "@/placeholder-image.png";
import { useRouter } from "next/router";
import IFoodItem from "@/lib/FoodInterface";
import { useFood } from "@/app/context/FoodContext";
export default function RecipeItem({ FoodItem }: { FoodItem: IFoodItem }) {
  const { setCurrentFoodItem, setEditMode } = useFood();
  const router = useRouter();
  const foodURLID = router.query.id;
  const MAX_SUMMERY_LENGTH = 20;
  const linkClass =
    "group flex xl:flex-col h-max p-2 hover:bg-green-500 rounded-md border border-white shadow-md   my-1   text-center " +
    (foodURLID === FoodItem.id ? "bg-green-500" : "bg-white");

  return (
    <div
      className={linkClass}
      onClick={() => {
        setCurrentFoodItem(FoodItem);
        setEditMode(false);
      }}
    >
      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
        <h5 className="text-xl font-medium text-gray-900 group-hover:underline">
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
              <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500 dark:border-gray-800" />
            )}
          </div>
        ) : (
          <Image
            className="w-14 rounded-md"
            src={placeholder}
            alt="No image"
            width={500}
          />
        )}
      </div>
      <div className="hidden text-ellipsis text-left text-sm text-gray-700 xl:flex">
        {FoodItem.summary && FoodItem.summary?.length > MAX_SUMMERY_LENGTH
          ? FoodItem.summary?.substring(0, 20) + "..."
          : FoodItem.summary}
      </div>
    </div>
  );
}
