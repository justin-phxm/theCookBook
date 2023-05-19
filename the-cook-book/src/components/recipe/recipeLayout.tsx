import Head from 'next/head';
import Circle from '../circularDecoration';
import NavBar from '../recipe/recipeNavBar';
import RecipeHolder from './recipeHolder';
import CookingArea from './cookingArea';
import RecipeDetails from './recipeDetails';
import RecentRecipeHolder from './recentRecipeHolder';
import foodData from '../../../public/foodData.json' assert {type: "json"}
import { useState } from 'react';
import FoodInterface from '../FoodInterface';

export const siteTitle = 'theCookBook';

export default function Layout({children} : {children: React.ReactNode}) {
  const [foodItem, setFoodItem] = useState<FoodInterface>(foodData[0])
  return (
    <div>
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
                siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main className='min-h-screen bg-[#F4FFF1] overflow-hidden relative'>
          <div className="h-screen w-11/12 m-auto flex flex-col">
              <Circle />
              <div>
                <NavBar />
              </div>
                <div className="h-full">
                  <div className="grid grid-cols-12 gap-2 h-3/4 pb-2">
                    <div className="col-span-2 h-full">
                      <RecipeHolder foodItemArray={foodData} setFoodItem={setFoodItem} />
                    </div>
                    <div className="col-span-7">
                      <CookingArea foodItem={foodItem}/>
                    </div>
                    <div className="col-span-3">
                      <RecipeDetails />
                    </div>
                  </div>
                  <div className=" h-1/4">
                    <RecentRecipeHolder foodItemArray={foodData} setFoodItem={setFoodItem} />
                  </div>
                </div>
              {children}
          </div>
        </main>
    </div>
  );
}