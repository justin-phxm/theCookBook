import RecipeLayout from '@/components/recipe/recipeLayout'
import RecipeHolder from '@/components/recipe/recipeHolder'
import CookingArea from '@/components/recipe/cookingArea'
import RecipeDetails from '@/components/recipe/recipeDetails'
import RecentRecipeHolder from '@/components/recipe/recentRecipeHolder'
import { getAllFoodIds, getPostData } from '@/lib/food';
import FoodInterface from '@/components/FoodInterface';
import Head from 'next/head';

export async function getStaticProps({ params } : {params: {id: string}}) {
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
          <div className="h-full">
            <div className="grid grid-cols-12 gap-2 h-3/4 pb-2">
              <div className="col-span-2 h-full">
                {/* <RecipeHolder foodItemArray={foodItemArray} /> */}
              </div>
              <div className="col-span-7">
                <CookingArea foodItem={foodItem}/>
              </div>
              <div className="col-span-3">
                <RecipeDetails />
              </div>
            </div>
            <div className=" h-1/4">
              {/* <RecentRecipeHolder foodItemArray={foodItemArray} /> */}
            </div>
          </div>
        </RecipeLayout>
      )
  }