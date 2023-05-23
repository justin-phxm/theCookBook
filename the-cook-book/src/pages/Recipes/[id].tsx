import RecipeLayout from "@/components/recipe/recipeLayout";
import { getAllFoodIds, getPostData } from "@/lib/food";
import FoodInterface from "@/lib/FoodInterface";
import Head from "next/head";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const foodItem = getPostData(params.id);
  return {
    props: {
      foodItem,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllFoodIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Food({ foodItem }: { foodItem: FoodInterface }) {
  return (
    <RecipeLayout>
      <Head>
        <title>{foodItem.name}</title>
      </Head>
    </RecipeLayout>
  );
}
