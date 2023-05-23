import React, { useContext } from "react";
import FoodInterface from "@/lib/FoodInterface";
import foodData from "../../public/foodData.json" assert { type: "json" };
interface FoodContextType {
  foods: FoodInterface[];
  loading: boolean;
  error: string | null;
  setFood: any;
}

const FoodContext = React.createContext<FoodContextType>({} as FoodContextType);

export const useFood = () => {
  return useContext(FoodContext);
};

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [foods, setFood] = React.useState<FoodInterface[]>(foodData);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  return (
    <FoodContext.Provider value={{ foods, loading, error, setFood }}>
      {children}
    </FoodContext.Provider>
  );
};
