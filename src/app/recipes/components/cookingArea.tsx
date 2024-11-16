// import { useFood } from "../../context/FoodContext";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import RecipeImage from "./RecipeImage";

export default function CookingArea() {
  // const { currentFoodItem, AIRecipe } = useFood();
  // if (!currentFoodItem.id) {
  //   return (
  //     <>
  //       <div className="text-center text-2xl font-bold">
  //         Select a recipe or use AI to view recipe
  //       </div>
  //       <AIRecipeDisplay recipe={AIRecipe} />
  //     </>
  //   );
  // }
  return (
    <div className="flex flex-1 flex-row gap-2">
      <div className="flex w-1/2 flex-col gap-2">
        <Ingredients />
        <div className="relative flex min-h-64 flex-col items-center justify-around gap-4 rounded-lg border border-dashed border-gray-900/25 py-8 text-sm text-gray-600">
          <RecipeImage />
        </div>
      </div>
      <div className="flex w-1/2 flex-1">
        <Instructions />
      </div>
    </div>
  );
}
