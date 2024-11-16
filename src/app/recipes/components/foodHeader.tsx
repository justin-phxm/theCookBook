"use client";
import { useState } from "react";
import { useFood } from "@/app/context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { Recipe } from "@/lib/types";
import RecipeTitle from "./RecipeTitle";
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
      setCurrentFoodItem({} as Recipe);
      setFood(foods.filter((food) => food.id !== currentFoodItem.id));
    }
  };
  return (
    <section className="flex select-none flex-row justify-between">
      <RecipeTitle />
      <div className="flex flex-row gap-4 font-medium">
        <button
          onClick={editSaveHandler}
          className="p-2 transition-all hover:rounded-md hover:bg-slate-300"
        >
          {editMode ? (loading ? "Saving..." : "Save") : "Edit"}
        </button>

        <button
          onClick={deleteFoodHandler}
          className="p-2 transition-all hover:rounded-md hover:bg-slate-300"
        >
          Delete
        </button>
      </div>
    </section>
  );
}
