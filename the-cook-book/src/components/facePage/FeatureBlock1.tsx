import CreateRecipe from "./createRecipe";
import Image from "next/image";

export default function FeatureBlock({
  heroImage,
  heroTitle,
  heroDescription,
  heroSubheader,
  hideButton,
}: {
  heroImage: string;
  heroTitle?: string;
  heroDescription?: string;
  heroSubheader?: string;
  hideButton?: boolean;
}) {
  return (
    <div className="flex  items-center">
      <div className="hidden md:w-1/2 md:flex md:justify-start pr-6">
        <Image src={heroImage} alt="" width={600} />
      </div>
      <div className="flex flex-col text-center md:text-left justify-center items-center md:items-start md:w-1/2">
        <h6 className="text-2xl">{heroSubheader}</h6>
        <h1 className="text-5xl font-bold py-3">{heroTitle}</h1>
        <h2 className="text-2xl py-3">{heroDescription}</h2>
        {!hideButton ? <CreateRecipe /> : ""}
      </div>
    </div>
  );
}
