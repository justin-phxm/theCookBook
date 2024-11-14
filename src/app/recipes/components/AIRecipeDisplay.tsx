type Ingredient = {
  quantity?: string;
  name?: string;
  description?: string;
};
type Instruction = {
  step?: number;
  description?: string;
};
type Tip = {
  tip?: string;
  description?: string;
};
export type Recipe = {
  name?: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tips: Tip[];
};

export default function AIRecipeDisplay({ recipe }: { recipe: Recipe }) {
  return (
    <>
      <div className="select-none text-xl font-bold">{recipe.name}</div>
      <div className="text-sm font-normal italic">{recipe.description}</div>
      <div className="select-none text-lg font-bold">Ingredients:</div>
      <ul className="">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <div className="flex w-full flex-row justify-between gap-4">
              <p className="w-1/4">{ingredient.quantity}</p>
              <p className="w-1/4 truncate">{ingredient.name}</p>
              <p className="w-1/2 truncate">
                {ingredient.description && ` - ${ingredient.description}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="select-none text-lg font-bold">Instructions:</div>
      <ol className="">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>
            {index + 1}. {instruction.description}
          </li>
        ))}
      </ol>
      <div className="select-none text-lg font-bold">Tips:</div>
      <ul className="">
        {recipe.tips.map((tip, index) => (
          <li key={index}>
            - {tip.tip} {tip.description}
          </li>
        ))}
      </ul>
    </>
  );
}
