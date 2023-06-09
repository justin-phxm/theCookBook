import React, { useState, useContext } from "react";
import FoodInterface from "@/lib/FoodInterface";
import { DatabaseProvider } from "@/lib/firestore";
import useSWR from "swr";
interface FoodContextType {
  foods: FoodInterface[];
  // loading: boolean;
  error: string | null;
  // setFood: any;
  currentFoodItem: FoodInterface;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentFoodItem: React.Dispatch<React.SetStateAction<FoodInterface>>;
  selectedImage: File | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const FoodContext = React.createContext<FoodContextType>({} as FoodContextType);

export const useFood = () => {
  return useContext(FoodContext);
};

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [currentFoodItem, setCurrentFoodItem] = React.useState<FoodInterface>(
    {}
  );
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { readDB } = DatabaseProvider();
  const fetcher = async () => {
    return readDB();
  };
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) {
    return <div>failed to load, an error has occured</div>;
  }
  if (!data) {
    return <div>loading... Please login if error persists</div>;
  }
  const foods = data;
  return (
    <FoodContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        foods,
        // loading,
        error,
        // setFood,
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
