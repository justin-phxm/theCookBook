import RecipeLayout from "../components/recipe/recipeLayout";
import FoodInterface from "@/lib/FoodInterface";
import Head from "next/head";
import { getSortedRecipeData } from "@/lib/food";
import { FoodProvider } from "@/context/FoodContext";
import { DatabaseProvider } from "@/lib/firestore";

export async function getStaticProps() {
  const foodData = getSortedRecipeData();
  return {
    props: {
      foodData,
    },
  };
}

export default function Recipes({ foodData }: { foodData: FoodInterface[] }) {
  const { readDB } = DatabaseProvider();
  const myDB = async () => await readDB();
  myDB().then((data) => console.log(data));

  return (
    <FoodProvider>
      <RecipeLayout>
        <Head>
          <title>Recipes</title>
        </Head>
      </RecipeLayout>
    </FoodProvider>
  );
}
