import CallToAction from "./components/callToAction";
import FeatureBlock from "@/app/components/FeatureBlock";
import FeatureBlock1 from "@/app/components/FeatureBlock1";
import HeroImage0 from "@/11.png";
import HeroImage1 from "@/9.png";
import HeroImage2 from "@/12.png";
import { Metadata } from "next";
import Testimonies from "./components/Testimonies";

export const metadata: Metadata = {
  title: "theCookBook",
  description: "Save all your recipes with theCookBook",
};
export default function page() {
  return (
    <div className="flex flex-col gap-12">
      <FeatureBlock
        heroImage={HeroImage0}
        heroTitle="Recreate and Relive Culinary Experiences"
        heroDescription="The ultimate recipe book to create and save all your favorite dishes."
      />
      <FeatureBlock1
        heroImage={HeroImage1}
        heroTitle="Explore new recipes and cuisine"
        heroDescription="AI generated recipes and recommendations catered towards your recent meals."
      />
      <FeatureBlock
        heroImage={HeroImage2}
        heroTitle="Take your recipes with you anywhere"
        heroDescription="Access your recipes on any device, anywhere, anytime."
      />
      <Testimonies />
      <CallToAction
        callToActionHeaderSm="ARE YOU READY?"
        callToActionHeader="Be A Part Of The Next Big Thing"
      />
    </div>
  );
}
