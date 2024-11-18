import FoodHeader from "../components/foodHeader";
import CookingArea from "../components/cookingArea";
import { fakeRecipes } from "@/lib/fakeData/fakeFood";
import { Metadata } from "next";
import { FoodProvider } from "@/app/context/FoodContext";
import Card from "../components/Card";
import RecipeHolder from "../components/recipeHolder";
type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  const recipeName =
    fakeRecipes.find((recipe) => recipe.id === id)?.name ?? "Recipe not found";

  return {
    title: recipeName,
  };
}
export function generateStaticParams() {
  const recipeIDs: { id: string }[] = fakeRecipes.map((recipe) => ({
    id: recipe.id,
  }));
  return recipeIDs;
}
export default async function page({ params }: Props) {
  const id = (await params).id;
  // if (!) {
  //   return (
  //     <div className="flex flex-col items-center justify-center text-3xl">
  //       <h1>Error - Recipe not found.</h1>
  //       <h2>Please choose another recipe.</h2>
  //       <h3>😭😭😭😭😭</h3>
  //     </div>
  //   );
  // }
  return (
    <FoodProvider recipeID={id}>
      <Card>
        <RecipeHolder />
      </Card>
      <Card className="flex-1">
        <FoodHeader />
        <CookingArea />
      </Card>
    </FoodProvider>
  );
}
