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
    <main className="relative h-screen overflow-hidden bg-[#F4FFF1]">
      <div className="m-auto flex h-screen w-11/12 flex-col pb-2">
        <Circle />
        <div>
          <NavBar />
        </div>
        <div className="z-10 grid h-full grid-cols-12 gap-2 pb-2">
          <section className="hidden rounded-lg bg-[#BCE3B2] p-2 lg:col-span-2 lg:block">
            <RecipeHolder />
          </section>
          <section className="col-span-8 h-full max-h-full rounded-lg bg-[#BCE3B2] p-2 lg:col-span-7">
            <CookingArea />
          </section>
          <section className="col-span-4 overflow-auto rounded-lg bg-[#BCE3B2] p-2 lg:col-span-3">
            <RecipeDetails />
          </section>
        </div>
        {children}
      </div>
    </main>
  );
}
