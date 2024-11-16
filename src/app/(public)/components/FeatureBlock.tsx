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
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4 text-center text-2xl md:w-1/2 md:items-start md:text-left">
        <h6>{heroSubheader}</h6>
        <h1 className="text-5xl font-bold">{heroTitle}</h1>
        <h2>{heroDescription}</h2>
        {!hideButton && <CreateRecipe />}
      </div>
      <Image
        className="hidden max-w-screen-sm md:flex md:w-1/2 md:justify-end"
        src={heroImage}
        alt=""
        width={600}
        placeholder="blur"
      />
    </div>
  );
}
