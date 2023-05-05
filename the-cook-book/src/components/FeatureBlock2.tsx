import CreateRecipe from './atoms/createRecipe'
import Image from 'next/image'
import HeroImage0 from '../../public/12.svg'
export default function FeatureBlock() {
  return (
    <div className="flex  items-center">
        <div className="flex flex-col text-center md:text-left justify-center items-center md:items-start md:w-1/2">
            <h1 className="text-5xl font-bold py-3">
                Recreate and Relive Culinary Experiences
            </h1>
            <h2 className="text-2xl py-3" >
                The ultimate recipe book to create and 
                save all your favorite dishes. 
            </h2>
            <CreateRecipe/>
        </div>
        <div className="hidden md:w-1/2 md:flex md:justify-end">
            <Image src={HeroImage0} alt="" width={600}/>
        </div>
    </div>
  )
}
