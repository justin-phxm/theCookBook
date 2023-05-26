import React, { useId, useState } from "react";
import { useFood } from "@/context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";

export default function FoodHeader() {
  const { currentFoodItem, setCurrentFoodItem, editMode, setEditMode } =
    useFood();
  const { addFoodItem } = DatabaseProvider();
  const id = useId();
  const editSaveHandler = () => {
    if (editMode) {
      addFoodItem(currentFoodItem);
      console.log(currentFoodItem);
    }
    setEditMode(!editMode);
  };

  const myHeader = !editMode ? (
    <h2>
      {currentFoodItem.name ? currentFoodItem.name : "New Recipe"}
      {currentFoodItem.servings &&
        " - " + currentFoodItem.servings + " servings"}
    </h2>
  ) : (
    <h2 className="flex flex-row">
      <input
        placeholder={currentFoodItem.name ? currentFoodItem.name : "Food Name"}
        type="text"
        id={id}
        value={currentFoodItem.name}
        onChange={(e) =>
          setCurrentFoodItem((prevFoodItem) => {
            // console.log(prevFoodItem);
            return { ...prevFoodItem, name: e.target.value };
          })
        }
        className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        placeholder={
          currentFoodItem.servings
            ? currentFoodItem.servings + " Servings"
            : "Servings"
        }
        type="number"
        id={id}
        value={currentFoodItem.servings}
        onChange={(e) => {
          setCurrentFoodItem({
            ...currentFoodItem,
            servings: parseInt(e.target.value),
          });
        }}
        className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </h2>
  );
  return (
    <section className="flex flex-row justify-between">
      <h1 className=" font-bold select-none text-xl">{myHeader}</h1>
      <div className="flex flex-row">
        <button
          onClick={editSaveHandler}
          className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer select-none"
        >
          {editMode ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => console.log(currentFoodItem)}
          className="px-2 z-10 font-medium hover:bg-slate-300 hover:rounded-md cursor-pointer select-none"
        >
          Delete
        </button>
      </div>
    </section>
  );
}
