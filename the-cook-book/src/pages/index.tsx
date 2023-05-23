import Head from "next/head";
import Testimony from "@/components/facePage/testimony";
import CallToAction from "../components/facePage/callToAction";
import FeatureBlock from "@/components/facePage/FeatureBlock";
import FeatureBlock1 from "@/components/facePage/FeatureBlock1";
import Layout from "@/components/facePage/layout";
import HeroImage0 from "../../public/11.svg";
import HeroImage1 from "../../public/9.svg";
import HeroImage2 from "../../public/12.svg";
import testimony0 from "../../public/testimonyImage.png";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>TheCookBook</title>
        </Head>
        <div className="pb-24">
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
            heroTitle="Recreate and Relive Culinary Experiences"
            heroDescription="The ultimate recipe book to create and save all your favorite dishes."
          />
        </div>
        <div className="pb-4">
          <h1 className=" text-center text-2xl font-bold text-[#2BB644]">
            TESTIMONIALS
          </h1>
          <h1 className="pb-32 text-center text-[2.5rem] font-bold text-black">
            Read What Others Have To Say
          </h1>
          <div className="flex flex-row place-content-center">
            <Testimony
              testimonyImage={testimony0}
              testimonyName="Olivia Cole"
              testimonyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
            />
            <Testimony />
            <Testimony />
          </div>
        </div>
        <CallToAction
          callToActionHeaderSm="ARE YOU READY?"
          callToActionHeader="Be A Part Of The Next Big Thing"
        />
      </Layout>
    </>
  );
}
