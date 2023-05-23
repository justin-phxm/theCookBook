import React, { useContext } from "react";
import FoodInterface from "@/lib/FoodInterface";
import foodData from "../../public/foodData.json" assert { type: "json" };
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
  return (
    <FoodContext.Provider
      value={{ foods, loading, error, setFood, foodItem, setFoodItem }}
    >
      {children}
    </FoodContext.Provider>
  );
};
