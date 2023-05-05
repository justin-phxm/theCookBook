import CreateRecipe from './atoms/createRecipe'
import Image from 'next/image'
import HeroImage0 from '../../public/9.svg'
export default function FeatureBlock() {
  return (
    <div className="flex  items-center">
        <div className="hidden md:w-1/2 md:flex md:justify-start pr-6">
            <Image src={HeroImage0} alt="" width={600}/>
        </div>
        <div className="flex flex-col text-center md:text-left justify-center items-center md:items-start md:w-1/2">
            <h1 className="text-5xl font-bold py-3">
            Explore new recipes and cuisine
            </h1>
            <h2 className="text-2xl py-3" >
            AI generated recipes and recommendations 
            catered towards your recent meals.
            </h2>
            <CreateRecipe/>
        </div>
    </div>
  )
}
