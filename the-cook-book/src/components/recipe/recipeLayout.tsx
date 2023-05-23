import Head from "next/head";
import Circle from "../facePage/circularDecoration";
import NavBar from "../recipe/recipeNavBar";
import RecipeHolder from "./recipeHolder";
import CookingArea from "./cookingArea";
import RecipeDetails from "./recipeDetails";
// import RecentRecipeHolder from "./recentRecipeHolder";
import { useFood } from "@/context/FoodContext";

export const siteTitle = "theCookBook";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { foodItem, setFoodItem } = useFood();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Save all your recipes with theCookBook"
        />
        {/* wtf is this below */}
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
          {/* <div className=" h-1/4 bg-[#BCE3B2] rounded-lg p-2"> */}
          {/* <RecentRecipeHolder foodItemArray={foodData} setFoodItem={setFoodItem} /> */}
          {/* </div> */}
          {children}
        </div>
      </main>
    </>
  );
}
