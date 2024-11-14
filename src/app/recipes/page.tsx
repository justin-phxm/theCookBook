import RecipeLayout from "./components/recipeLayout";
import { FoodProvider } from "@/app/context/FoodContext";

export default function page() {
  return (
    <FoodProvider>
      <RecipeLayout>test</RecipeLayout>
    </FoodProvider>
  );
}
