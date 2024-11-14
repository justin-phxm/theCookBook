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
      <div className=" font-bold select-none text-xl">{recipe.name}</div>
      <div className=" font-normal text-sm italic">{recipe.description}</div>
      <div className=" font-bold select-none text-lg">Ingredients:</div>
      <ul className="">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <div className="flex flex-row gap-4 w-full justify-between ">
              <p className="w-1/4">{ingredient.quantity}</p>
              <p className="w-1/4 truncate">{ingredient.name}</p>
              <p className="w-1/2  truncate">
                {ingredient.description && ` - ${ingredient.description}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className=" font-bold select-none text-lg">Instructions:</div>
      <ol className="">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>
            {index + 1}. {instruction.description}
          </li>
        ))}
      </ol>
      <div className=" font-bold select-none text-lg">Tips:</div>
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
