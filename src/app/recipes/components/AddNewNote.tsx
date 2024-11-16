"use client";
// import { Recipe } from "@/lib/types";
import { AiOutlinePlus } from "react-icons/ai";
// import { v4 } from "uuid";
export default function AddNewNote() {
  const handleNewNote = () => {
    // const newFoodItem: Recipe = {
    //   id: v4(),
    //   name: "New Recipe",
    //   summary: "Your new recipe",
    //   ingredients: [],
    //   instructions: [],
    //   color: "red",
    // };
    // create new food item...
  };
  return (
    <button
      onClick={handleNewNote}
      className="hover:rounded-md hover:bg-slate-300"
    >
      <AiOutlinePlus size={24} />
    </button>
  );
}
