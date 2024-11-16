import AddIngredient from "./AddIngredient";
import IngredientsList from "./IngredientsList";

export default function Ingredients() {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-md bg-white p-2">
      <div className="text-lg font-bold">Ingredients:</div>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <IngredientsList />
        <AddIngredient />
      </div>
    </div>
  );
}
