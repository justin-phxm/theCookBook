import { Recipe } from "@/lib/types";
import RecipeItem from "./RecipeItem";
import { fakeRecipes } from "@/lib/fakeData/fakeFood";
import AddNewNote from "./AddNewNote";
export default async function RecipeHolder() {
  const foods = fakeRecipes;

  return (
    <div className="flex h-full max-h-full w-full flex-col rounded-lg">
      <div className="flex flex-row items-center justify-between gap-2">
        <h1 className="select-none text-xl font-bold">Recipes</h1>
        <AddNewNote />
      </div>
      <ul className="flex w-48 flex-col gap-2 overflow-y-auto">
        {foods.map((AFoodItem: Recipe) => (
          <li key={AFoodItem.id}>
            <RecipeItem FoodItem={AFoodItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
