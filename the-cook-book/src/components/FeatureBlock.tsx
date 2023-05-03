import CreateRecipe from './atoms/createRecipe'

export default function FeatureBlock() {
  return (
    <div>
        <div className=" w-1/2">
            <h1 className="text-5xl font-bold py-3">
                Recreate and Relive Culinary Experiences
            </h1>
            <h2 className="text-2xl w-5/6 py-3" >
                The ultimate recipe book to create and 
                save all your favorite dishes. 
            </h2>
            <CreateRecipe/>
        </div>
    </div>
  )
}
