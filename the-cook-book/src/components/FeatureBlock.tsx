import CreateRecipe from './atoms/createRecipe'
import Image from 'next/image'
import HeroImage0 from '../../public/11.svg'

export default function FeatureBlock(
    {heroImage, heroTitle, heroDescription} : 
    {heroImage: string, heroTitle?: string, heroDescription?: string},
    ) {
  return (
    <div className="flex  items-center">
        <div className="flex flex-col text-center md:text-left justify-center items-center md:items-start md:w-1/2">
            <h1 className="text-5xl font-bold py-3">
                {heroTitle}
            </h1>
            <h2 className="text-2xl py-3" >
                {heroDescription}
            </h2>
            <CreateRecipe/>
        </div>
        <div className="hidden md:w-1/2 md:flex md:justify-end">
            <Image src={heroImage} alt="" width={600}/>
        </div>
    </div>
  )
}
