import RecipeHolder from "./recipeHolder";
import CookingArea from "./cookingArea";
import RecipeDetails from "./recipeDetails";
import { Metadata } from "next";
import NavBar from "@/app/components/navBar";
import Circle from "@/app/components/circularDecoration";

export const siteTitle = "theCookBook";
export const metaData: Metadata = {
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
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen bg-[#F4FFF1] overflow-hidden relative">
      <div className="h-screen w-11/12 m-auto flex flex-col pb-2">
        <Circle />
        <div>
          <NavBar />
        </div>
        <div className="grid grid-cols-12 gap-2 h-full pb-2 z-10">
          <section className="hidden lg:block lg:col-span-2 bg-[#BCE3B2] rounded-lg p-2 ">
            <RecipeHolder />
          </section>
          <section className="col-span-8 lg:col-span-7 bg-[#BCE3B2] h-full max-h-full rounded-lg p-2">
            <CookingArea />
          </section>
          <section className="col-span-4 lg:col-span-3 bg-[#BCE3B2] rounded-lg p-2 overflow-auto">
            <RecipeDetails />
          </section>
        </div>
        {children}
      </div>
    </main>
  );
}
