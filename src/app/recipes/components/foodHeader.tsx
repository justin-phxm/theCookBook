"use client";
import { useFood } from "@/app/context/FoodContext";
import RecipeTitle from "./RecipeTitle";
import DeleteRecipe from "./DeleteRecipe";
import EditRecipeButton from "./EditRecipeButton";
import SaveRecipeButton from "./SaveRecipeButton";
export default function FoodHeader() {
  const { editMode } = useFood();
  return (
    <section className="flex select-none flex-row justify-between">
      <RecipeTitle />
      <div className="flex flex-row gap-4 font-medium">
        {!editMode ? <EditRecipeButton /> : <SaveRecipeButton />}
        <DeleteRecipe />
      </div>
    </section>
  );
}
