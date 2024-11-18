"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_RECIPE, Recipe } from "@/lib/types";
import { fakeRecipes } from "@/lib/fakeData/fakeFood";
interface FoodContextType {
  foods: Recipe[];
  setFood: Dispatch<SetStateAction<Recipe[]>>;
  currentFoodItem: Recipe;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  setCurrentFoodItem: Dispatch<SetStateAction<Recipe>>;
  selectedImage: File | null;
  setSelectedImage: Dispatch<SetStateAction<File | null>>;
}

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

export const useFood = () => useContext(FoodContext);

export const FoodProvider = ({
  children,
  recipeID,
}: {
  children: React.ReactNode;
  recipeID?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [foods, setFood] = useState<Recipe[]>(fakeRecipes);
  const [currentFoodItem, setCurrentFoodItem] = useState(DEFAULT_RECIPE);
  const [editMode, setEditMode] = useState<boolean>(false);
  useEffect(() => {
    let existingRecipe;
    if (recipeID) {
      existingRecipe = foods.find((food) => food.id === recipeID);
    }
    setEditMode(!!!existingRecipe);
    setCurrentFoodItem(existingRecipe ?? DEFAULT_RECIPE);
  }, [foods, recipeID]);

  return (
    <FoodContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        foods,
        setFood,
        currentFoodItem,
        setCurrentFoodItem,
        editMode,
        setEditMode,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
