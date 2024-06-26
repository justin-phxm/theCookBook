import Image from "next/image";
import placeholder from "../../../public/placeholder-image.png";
import { useFood } from "../../context/FoodContext";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import FoodHeader from "./foodHeader";
import { useEffect } from "react";
import AIRecipeDisplay, { Recipe } from "./AIRecipeDisplay";

export default function CookingArea() {
  const {
    currentFoodItem,
    editMode,
    setCurrentFoodItem,
    selectedImage,
    setSelectedImage,
    foods,
  } = useFood();

  const removeImageHandler = () => {
    setSelectedImage(null);
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
    setSelectedImage(file || null);
    setCurrentFoodItem((prevFoodItem) => {
      return {
        ...prevFoodItem,
        image: "foodImages/" + currentFoodItem.id,
      };
    });
  };
  const viewImage = currentFoodItem.image && (
    <Image
      className=" rounded-lg group-hover:opacity-75 object-cover"
      src={currentFoodItem.imageURL || placeholder}
      alt="No image"
      fill={true}
    />
  );

  useEffect(() => {
    setSelectedImage(null);
    console.log(currentFoodItem);
    console.log({ foods });
  }, [currentFoodItem.id]);
  const { AIRecipe } = useFood();
  const recipe = AIRecipe;
  return (
    <div className="bg-slate-200 h-full max-h-full p-4 rounded-lg flex flex-col">
      {currentFoodItem.id ? (
        <>
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
                        <button onClick={removeImageHandler}>
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
                                onChange={handleImageChange}
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
                  <>{viewImage}</>
                )}
              </div>
            </div>
            <section className="h-full max-h-full w-1/2">
              <Instructions />
            </section>
          </div>
        </>
      ) : (
        <>
          <div className=" text-center font-bold text-2xl">
            Select a recipe or use AI to view recipe
          </div>
          <AIRecipeDisplay recipe={recipe} />
        </>
      )}
    </div>
  );
}
