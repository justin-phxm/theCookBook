import { Metadata } from "next";
import { FoodProvider } from "../context/FoodContext";
import CookingArea from "./components/cookingArea";
import Card from "./components/Card";
import FoodHeader from "./components/foodHeader";

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
      <Card className="flex-1">
        <FoodHeader />
        <CookingArea />
      </Card>
    </FoodProvider>
  );
}
