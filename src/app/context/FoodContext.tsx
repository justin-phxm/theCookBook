"use client";
import React, { useContext, useEffect } from "react";
import { Recipe as RecipeType } from "@/lib/types";
import { DatabaseProvider } from "@/lib/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { Recipe } from "@/app/recipes/components/AIRecipeDisplay";
import { fakeRecipes } from "@/lib/fakeData/fakeFood";
interface FoodContextType {
  foods: RecipeType[];
  loading: boolean;
  error: string | null;
  setFood: React.Dispatch<React.SetStateAction<RecipeType[]>>;
  currentFoodItem: RecipeType;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentFoodItem: React.Dispatch<React.SetStateAction<RecipeType>>;
  selectedImage: File | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
  AIRecipe: Recipe;
  setAIRecipe: React.Dispatch<React.SetStateAction<Recipe>>;
}

const FoodContext = React.createContext<FoodContextType>({} as FoodContextType);

export const useFood = () => {
  return useContext(FoodContext);
};

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [foods, setFood] = React.useState<RecipeType[]>(fakeRecipes);
  const [loading] = React.useState<boolean>(true);
  const [error] = React.useState<string | null>(null);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [currentFoodItem, setCurrentFoodItem] = React.useState<RecipeType>(
    {} as RecipeType,
  );
  const [AIRecipe, setAIRecipe] = React.useState<Recipe>({
    name: "",
    description: "",
    ingredients: [],
    instructions: [],
    tips: [],
  });
  const storage = getStorage();

  const { readDB } = DatabaseProvider();

  useEffect(() => {
    readDB().then((data) => {
      data.map((food) => {
        if (food.image) {
          getDownloadURL(ref(storage, food.image)).then((url) => {
            food.imageURL = url;
            setFood(data);
          });
        }
      });
    });
  }, [editMode]);

  return (
    <FoodContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        foods,
        loading,
        error,
        setFood,
        currentFoodItem,
        setCurrentFoodItem,
        editMode,
        setEditMode,
        AIRecipe,
        setAIRecipe,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
