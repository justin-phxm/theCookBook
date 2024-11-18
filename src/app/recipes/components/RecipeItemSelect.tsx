"use client";

import { Recipe } from "@/lib/types";
import { usePathname } from "next/navigation";

export default function RecipeItemSelect({
  children,
  recipe,
}: {
  children: React.ReactNode;
  recipe: Recipe;
}) {
  const pathname = usePathname().split("/")[2];
  return (
    <li
      className={`rounded-md ${pathname === recipe.id ? "bg-primaryLight" : "bg-white"}`}
    >
      {children}
    </li>
  );
}
