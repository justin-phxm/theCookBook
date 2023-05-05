import Head from 'next/head';
import Circle from '../circularDecoration';
import NavBar from '../recipe/recipeNavBar';

export const siteTitle = 'theCookBook';
export default function Layout({children} : {children: React.ReactNode}) {
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
        <div className=" w-11/12 m-auto">
            <Circle />
            <NavBar />
            {children}
            hi
        </div>
        </main>
    </div>
  );
}