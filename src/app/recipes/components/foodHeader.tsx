import React, { useId, useState } from "react";
import { useFood } from "@/app/context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
export default function FoodHeader() {
  const {
    currentFoodItem,
    setCurrentFoodItem,
    editMode,
    setEditMode,
    selectedImage,
    setFood,
    foods,
  } = useFood();
  const { updateDocument, deleteFoodItem } = DatabaseProvider();
  const id = useId();
  const [loading, setLoading] = useState(false);
  const imageAddress = "foodImages/" + currentFoodItem.id;
  const storageRef = ref(storage, imageAddress);
  const editSaveHandler = async () => {
    if (!loading) {
      if (editMode) {
        setLoading(true);
        if (selectedImage) {
          await uploadBytes(storageRef, selectedImage).then(() => {
            updateDocument(currentFoodItem);
          });
        } else {
          updateDocument(currentFoodItem);
        }
      }

      setLoading(false);
      setEditMode(!editMode);
    }
  };
  const deleteFoodHandler = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteFoodItem(currentFoodItem);
      setCurrentFoodItem({});
      setFood(foods.filter((food) => food.id !== currentFoodItem.id));
    }
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
      <div className="select-none text-xl font-bold">{myHeader}</div>
      <div className="flex flex-row">
        <button
          onClick={editSaveHandler}
          className="z-10 cursor-pointer select-none px-2 font-medium hover:rounded-md hover:bg-slate-300"
        >
          {editMode ? (loading ? "saving..." : "save") : "Edit"}
        </button>

        <button
          onClick={deleteFoodHandler}
          className="z-10 cursor-pointer select-none px-2 font-medium hover:rounded-md hover:bg-slate-300"
        >
          Delete
        </button>
      </div>
    </section>
  );
}
