"use client";
import Image from "next/image";
import { useFood } from "@/app/context/FoodContext";

import placeholder from "@/placeholder-image.png";
export default function RecipeImage() {
  const { currentFoodItem, editMode, setCurrentFoodItem } = useFood();

  const removeImageHandler = () => {
    setCurrentFoodItem((prevFoodItem) => {
      return {
        ...prevFoodItem,
        image: "",
        imageURL: "",
      };
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCurrentFoodItem((prevFoodItem) => {
      return {
        ...prevFoodItem,
        imageURL: URL.createObjectURL(file),
      };
    });
  };

  if (!editMode || currentFoodItem.imageURL) {
    return (
      <>
        <div className={`flex size-full flex-1 ${editMode && "relative"}`}>
          <Image
            alt="No image"
            src={currentFoodItem.imageURL || placeholder}
            fill
            className={`rounded-lg ${editMode ? "object-contain" : "object-cover"}`}
          />
        </div>
        {editMode && (
          <button
            className="rounded bg-red-300/70 p-2 font-bold capitalize transition-all hover:opacity-80"
            onClick={removeImageHandler}
          >
            Remove Image
          </button>
        )}
      </>
    );
  }
  return (
    <div className="flex flex-col gap-2 text-center">
      <div className="items flex items-center justify-center gap-2">
        <label
          htmlFor="file-upload"
          className="cursor-pointer rounded-md bg-white p-2 font-semibold text-primary ring-primary transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primaryLight"
        >
          Upload a file
          <input
            className="sr-only"
            type="file"
            id="file-upload"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            onChange={handleImageChange}
          />
        </label>
        or drag and drop
      </div>
      <p>PNG, JPG, JPEG, WEBP up to 10MB</p>
    </div>
  );
}
