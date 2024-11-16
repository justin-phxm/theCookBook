import Image from "next/image";
import placeholder from "@/placeholder-image.png";
import type { Recipe } from "@/lib/types";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
export default function RecipeItem({ FoodItem }: { FoodItem: Recipe }) {
  return (
    <Link
      className={
        "group flex flex-col rounded-md border bg-white p-2 shadow-md hover:bg-primary"
      }
      href={"/recipes/" + FoodItem.id}
    >
      <button className="flex w-full items-center justify-between gap-2">
        <h5 className="truncate text-xl group-hover:underline">
          {FoodItem.name}
        </h5>
        <div className="relative aspect-square h-12 rounded-xl border">
          <Image
            src={FoodItem.imageURL ?? placeholder}
            alt="No image"
            fill
            className="rounded-xl object-cover"
          />
          <span
            style={{
              backgroundColor: FoodItem.color,
              borderWidth: FoodItem.color && 1,
            }}
            className={twMerge(
              `absolute -bottom-1 -right-1 size-3.5 rounded-full border-gray-500`,
            )}
          />
        </div>
      </button>
      <div className="line-clamp-2 text-xs">{FoodItem.summary}</div>
    </Link>
  );
}
