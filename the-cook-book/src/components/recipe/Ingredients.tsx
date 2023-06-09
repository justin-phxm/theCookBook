import React, { MouseEventHandler, useId, useState } from "react";
import IFoodItem from "../../lib/FoodInterface";
import { useFood } from "@/context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";

export default function Ingredients() {
  const { currentFoodItem, editMode, setCurrentFoodItem } = useFood();
  const { updateDocument, deleteFoodItem } = DatabaseProvider();
  const id = useId();
  const [ingredientName, setIngredientName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const addIngredientHandler = () => {
    if (!currentFoodItem.ingredients)
      currentFoodItem.ingredients = new Array<string>(
        `${ingredientName} (${amount}), ${note}`
      );
    else {
      currentFoodItem.ingredients?.push(
        `${ingredientName} (${amount}), ${note}`
      );
    }
    setIngredientName("");
    setAmount("");
    setNote("");
    setCurrentFoodItem({ ...currentFoodItem });
    console.log(currentFoodItem);
  };

  const handleIngredientRemove = (
    index: number,
    currentFoodItem: IFoodItem,
    setCurrentFoodItem: React.Dispatch<React.SetStateAction<IFoodItem>>
  ): MouseEventHandler<HTMLLIElement> => {
    if (!editMode) return (event) => event.preventDefault();
    return (event) => {
      event.preventDefault();
      if (currentFoodItem.ingredients) {
        const updatedIngredients = [...currentFoodItem.ingredients];
        updatedIngredients.splice(index, 1);
        setCurrentFoodItem({
          ...currentFoodItem,
          ingredients: updatedIngredients,
        });
      }
    };
  };

  const addIngredientElement = editMode && (
    <div className="flex flex-col gap-2 bg-slate-300 rounded p-2">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="sm:col-span-2 sm:col-start-1">
          <input
            placeholder="Name"
            type="text"
            id={id}
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="sm:col-span-2">
          <input
            placeholder="Amount"
            type="number"
            id={id}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="sm:col-span-2">
          <input
            placeholder="Note"
            type="text"
            id={id}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        onClick={addIngredientHandler}
        className=" font-light bg-slate-400 rounded-full w-full hover:opacity-70"
      >
        Add Ingredient
      </button>
    </div>
  );
  const ingredientClassName =
    "flex flex-row font-normal" +
    (editMode && " cursor-pointer hover:opacity-70");
  return (
    <div className="bg-white rounded-md p-2 overflow-auto h-full max-h-full">
      <div className=" font-bold text-lg text-">Ingredients:</div>
      <ul className="">
        {currentFoodItem.ingredients?.map((ingredient, index) => (
          <li
            className={ingredientClassName}
            key={index}
            onClick={handleIngredientRemove(
              index,
              currentFoodItem,
              setCurrentFoodItem
            )}
          >
            • {ingredient}
          </li>
        ))}
      </ul>
      {addIngredientElement}
    </div>
  );
}
