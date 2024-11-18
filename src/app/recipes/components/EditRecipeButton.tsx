"use client";

import { useFood } from "@/app/context/FoodContext";

export default function EditRecipeButton() {
  const { editMode, setEditMode } = useFood();
  const editHandler = async () => {
    setEditMode(!editMode);
  };
  return (
    <button
      onClick={editHandler}
      className="p-2 transition-all hover:rounded-md hover:bg-slate-300"
    >
      Edit
    </button>
  );
}
