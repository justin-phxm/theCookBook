import RecipeLayout from "@/app/recipes/components/recipeLayout";
import { FoodProvider } from "@/app/context/FoodContext";

export default async function page({}: { params: Promise<{ id: string }> }) {
  // const id = (await params).id;
  return (
    <FoodProvider>
      <RecipeLayout>id page</RecipeLayout>
    </FoodProvider>
  );
}
