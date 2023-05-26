import React from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder-image.png";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import { useFood } from "../../context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";
import { useRouter } from "next/router";
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
  const { currentFoodItem, editMode, setEditMode } = useFood();
  const { addFoodItem } = DatabaseProvider();
  const editSaveHandler = () => {
    if (editMode) {
      addFoodItem(currentFoodItem);
      console.log(currentFoodItem);
    }
    setEditMode(!editMode);
  };
  const newImageElement = editMode ? (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Cover photo
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  ) : (
    <Image
      className="rounded-md shadow-lg opacity-75"
      src={placeholder}
      alt="No image"
      fill={true}
    />
  );

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
            onClick={editSaveHandler}
            className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer select-none"
          >
            {editMode ? "Save" : "Edit"}
          </button>
          <button className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer select-none">
            Delete
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
              <>{newImageElement}</>
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
