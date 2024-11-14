import CreateRecipe from "./createRecipe";
import Image, { StaticImageData } from "next/image";

export default function FeatureBlock({
  heroImage,
  heroTitle,
  heroDescription,
  heroSubheader,
  hideButton,
}: {
  heroImage: StaticImageData;
  heroTitle?: string;
  heroDescription?: string;
  heroSubheader?: string;
  hideButton?: boolean;
}) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left">
        <h6 className="text-2xl">{heroSubheader}</h6>
        <h1 className="py-3 text-5xl font-bold">{heroTitle}</h1>
        <h2 className="py-3 text-2xl">{heroDescription}</h2>
        {!hideButton ? <CreateRecipe /> : ""}
      </div>
      <div className="hidden md:flex md:w-1/2 md:justify-end">
        <Image src={heroImage} alt="" width={600} placeholder="blur" />
      </div>
    </div>
  );
}
