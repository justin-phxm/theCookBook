"use client";
import { useFood } from "@/app/context/FoodContext";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
export default function AddNewRecipe() {
  const { setEditMode } = useFood();

  return (
    <Link
      onClick={() => {
        setEditMode(true);
      }}
      href={"/recipes/"}
      className="hover:rounded-md hover:bg-slate-300"
    >
      <AiOutlinePlus size={24} />
    </Link>
  );
}
