// import React from 'react'
import RecipeLayout from "../components/recipe/recipeLayout";
import RecipeHolder from "@/components/recipe/recipeHolder";
import CookingArea from "@/components/recipe/cookingArea";
import RecipeDetails from "@/components/recipe/recipeDetails";
import RecentRecipeHolder from "@/components/recipe/recentRecipeHolder";
import { v4 as uuidv4 } from "uuid";
import IFoodItem from "@/lib/FoodInterface";
import { useState } from "react";
import Head from "next/head";
import { getSortedRecipeData } from "@/lib/food";
export async function getStaticProps() {
  const foodData = getSortedRecipeData();
  return {
    props: {
      foodData,
    },
  };
}

export default function Recipes({ foodData }: { foodData: IFoodItem[] }) {
  return (
    <RecipeLayout>
      <Head>
        <title>Recipes</title>
      </Head>
    </RecipeLayout>
  );
}
