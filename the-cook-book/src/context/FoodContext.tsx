import React, { useContext, useEffect } from "react";
import FoodInterface from "@/lib/FoodInterface";
import foodData from "../../public/foodData.json" assert { type: "json" };
import { DatabaseProvider } from "@/lib/firestore";
import { useAuth } from "./AuthContext";
interface FoodContextType {
  foods: FoodInterface[];
  loading: boolean;
  error: string | null;
  setFood: any;
  foodItem: FoodInterface;
  setFoodItem: React.Dispatch<React.SetStateAction<FoodInterface>>;
}

const FoodContext = React.createContext<FoodContextType>({} as FoodContextType);

export const useFood = () => {
  return useContext(FoodContext);
};

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [foods, setFood] = React.useState<FoodInterface[]>(foodData);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [foodItem, setFoodItem] = React.useState<FoodInterface>(foods[0]);
  const { readDB } = DatabaseProvider();
  const { currentUser } = useAuth();
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
      value={{ foods, loading, error, setFood, foodItem, setFoodItem }}
    >
      {children}
    </FoodContext.Provider>
  );
};
