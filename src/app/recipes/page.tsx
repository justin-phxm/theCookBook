import { Metadata } from "next";
import CookingArea from "./components/cookingArea";
import FoodHeader from "./components/foodHeader";
import { FoodProvider } from "../context/FoodContext";
import Card from "./components/Card";
import RecipeHolder from "./components/recipeHolder";
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
    <FoodProvider>
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
