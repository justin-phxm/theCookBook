import { Recipe } from "@/lib/types";
import RecipeItem from "./RecipeItem";
import { fakeRecipes } from "@/lib/fakeData/fakeFood";
import AddNewRecipe from "./AddNewRecipe";
import RecipeItemSelect from "./RecipeItemSelect";
export default async function RecipeHolder() {
  const foods = fakeRecipes;

  return (
    <div className="flex h-full max-h-full w-full flex-col gap-2 rounded-lg">
      <div className="flex flex-row items-center justify-between gap-2 py-1.5">
        <h1 className="select-none text-xl font-bold">Recipes</h1>
        <AddNewRecipe />
      </div>
      <ul className="flex w-48 flex-col gap-2 overflow-y-auto">
        {foods.map((recipe: Recipe) => (
          <RecipeItemSelect recipe={recipe} key={recipe.id}>
            <RecipeItem FoodItem={recipe} />
          </RecipeItemSelect>
        ))}
      </ul>
    </div>
  );
}
