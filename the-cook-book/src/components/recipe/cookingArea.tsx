import React, { useEffect, useState } from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder-image.png";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import { useFood } from "../../context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";
import FoodHeader from "./foodHeader";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
  const {
    currentFoodItem,
    editMode,
    setEditMode,
    setCurrentFoodItem,
    selectedImage,
    setSelectedImage,
  } = useFood();
  // const { updateDocument } = DatabaseProvider();
  // const editSaveHandler = () => {
  //   if (editMode) {
  //     updateDocument(currentFoodItem);
  //     console.log(currentFoodItem);
  //     //Compress image and upload to Database
  //   }
  //   setEditMode(!editMode);
  // };
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const newImageElement = currentFoodItem.image ? (
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
  );
  useEffect(() => {
    console.log(currentFoodItem);
    setSelectedImage(null);
  }, [currentFoodItem.id]);

  return (
    <div className="bg-slate-200 h-full max-h-full p-4 rounded-lg flex flex-col">
      <FoodHeader />
      <div className="flex flex-row gap-2 h-[48rem] max-h-max">
        <div className="flex flex-col gap-2 w-1/2">
          <Ingredients />
          <div className="w-full h-full relative">
            {editMode ? (
              <div className="col-span-full">
                {selectedImage ? (
                  <div>
                    <Image
                      alt="not found"
                      width={250}
                      height={250}
                      src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <div
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg, image/webp"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              setSelectedImage(file || null);
                              setCurrentFoodItem((prevFoodItem) => {
                                return {
                                  ...prevFoodItem,
                                  image: "foodImages/" + currentFoodItem.id,
                                };
                              });
                            }}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>
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
