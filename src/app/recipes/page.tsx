import { Metadata } from "next";
import { FoodProvider } from "../context/FoodContext";
import RecipeHolder from "./components/recipeHolder";
import CookingArea from "./components/cookingArea";
import RecipeDetails from "./components/recipeDetails";
import Card from "./components/Card";

export const metadata: Metadata = {
  title: "theCookBook",
  description: "Save all your recipes with theCookBook",
  openGraph: {
    type: "website",
    url: "https://thecookbook.vercel.app/",
    title: "theCookBook",
    description: "Save all your recipes with theCookBook",
    images: [
      {
        url: "https://thecookbook.vercel.app/og-image.jpg",
        alt: "theCookBook",
      },
    ],
  },
};
export default function page() {
  return (
    <div className="flex h-full justify-between gap-2">
      <FoodProvider>
        <Card>
          <RecipeHolder />
        </Card>
        <Card className="flex flex-1">
          <CookingArea />
        </Card>
        <Card>
          <RecipeDetails />
        </Card>
      </FoodProvider>
    </div>
  );
}
