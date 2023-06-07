import React, { useContext, useEffect } from "react";
import FoodInterface from "@/lib/FoodInterface";
// import foodData from "../../public/foodData.json" assert { type: "json" };
import { DatabaseProvider } from "@/lib/firestore";
import { useAuth } from "./AuthContext";
interface FoodContextType {
  foods: FoodInterface[];
  loading: boolean;
  error: string | null;
  setFood: any;
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
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [foods, setFood] = React.useState<FoodInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [currentFoodItem, setCurrentFoodItem] = React.useState<FoodInterface>(
    {}
  );
  const { readDB } = DatabaseProvider();
  const { currentUser } = useAuth();
  // useEffect(() => {
  //   setEditMode(false);
  // }, [currentFoodItem]);

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      readDB().then((data) => setFood(data));
    } else {
      console.log("No user");
    }
  }, []);

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
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
