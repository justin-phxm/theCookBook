"use client";
import React, { useContext, useEffect } from "react";
import FoodInterface from "@/lib/FoodInterface";
import { DatabaseProvider } from "@/lib/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { Recipe } from "@/app/recipes/components/AIRecipeDisplay";
interface FoodContextType {
  foods: FoodInterface[];
  loading: boolean;
  error: string | null;
  setFood: React.Dispatch<React.SetStateAction<FoodInterface[]>>;
  currentFoodItem: FoodInterface;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentFoodItem: React.Dispatch<React.SetStateAction<FoodInterface>>;
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
  const [foods, setFood] = React.useState<FoodInterface[]>([]);
  const [loading] = React.useState<boolean>(true);
  const [error] = React.useState<string | null>(null);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [currentFoodItem, setCurrentFoodItem] = React.useState<FoodInterface>(
    {},
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
