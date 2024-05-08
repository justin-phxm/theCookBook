import Head from "next/head";
import Testimony from "@/components/facePage/testimony";
import CallToAction from "../components/facePage/callToAction";
import FeatureBlock from "@/components/facePage/FeatureBlock";
import FeatureBlock1 from "@/components/facePage/FeatureBlock1";
import Layout from "@/components/facePage/layout";
import HeroImage0 from "../../public/11.png";
import HeroImage1 from "../../public/9.png";
import HeroImage2 from "../../public/12.png";
import testimony0 from "../../public/testimonyImages/testimonyImage.png";
import testimony1 from "../../public/testimonyImages/Screen Shot 2022-05-09 at 10.28.png";
import testimony2 from "../../public/testimonyImages/Screen Shot 2022-05-09 at 10.28 (1).png";
import TestimonyInterface from "../lib/TestimonyInterface";

export default function Home() {
  const testimonies: TestimonyInterface[] = [
    {
      name: "Olivia Cole",
      image: testimony0,
      testimonyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      name: "Evan White",
      image: testimony1,
      testimonyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      name: "Jessica Page",
      image: testimony2,
      testimonyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
  ];
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
            heroTitle="Take your recipes with you anywhere"
            heroDescription="Access your recipes on any device, anywhere, anytime."
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
            {testimonies.map((testimony: TestimonyInterface) => (
              <Testimony
                key={testimony.name}
                testimonyImage={testimony.image}
                testimonyName={testimony.name}
                testimonyText={testimony.testimonyText}
              />
            ))}
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
