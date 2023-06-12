import React, { useContext, useEffect } from "react";
import FoodInterface from "@/lib/FoodInterface";
import { DatabaseProvider } from "@/lib/firestore";
import { useAuth } from "./AuthContext";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
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
  const storage = getStorage();

  const { readDB } = DatabaseProvider();
  const { currentUser } = useAuth();
  // useEffect(() => {
  //   setEditMode(false);
  // }, [currentFoodItem]);

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

  // useEffect(
  //   () => {
  //     readDB().then((data) => setFood(data));
  //     setFood((prevFood) => {
  //       return prevFood.map((foodItem) => {
  //         if (foodItem.id === currentFoodItem.id) {
  //           return currentFoodItem;
  //         } else {
  //           return foodItem;
  //         }
  //       });
  //     },
  //   []

  // );

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
