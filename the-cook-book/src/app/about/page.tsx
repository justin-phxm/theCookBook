import Head from "next/head";
import Layout from "@/components/facePage/layout";
import aboutImage from "@/5.png";
import aboutImage2 from "@/8.png";
import CallToAction from "../../components/facePage/callToAction";
import FeatureBlock from "@/components/facePage/FeatureBlock";
import FeatureBlock1 from "@/components/facePage/FeatureBlock1";
import Testimony from "@/components/facePage/testimony";
import TestimonyImage from "@/testimonyImages/IMG-0209.jpg";

export default function Page() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <CallToAction
          callToActionHeaderSm="ABOUT US"
          callToActionHeader="TheCookBook Changes The Food Industry"
          callToActionMessage="The ultimate online cooking application for all your recipe needs."
        />
        <FeatureBlock
          heroImage={aboutImage2}
          heroSubheader="Our Story"
          hideButton={true}
          heroTitle="Our first recipe started on paper..."
          heroDescription="Cooking has evolved in the 21st century. Food is abundant and there are so many options to choose from. We saw that the old fashioned paper recipes needed to evolve as well. Whether you are a novice or a professional, cooking has never been made easier."
        />
        <FeatureBlock1
          heroImage={aboutImage}
          heroSubheader="Our Mission"
          heroTitle="Simple, User-Friendly, and Appetizing"
          heroDescription="Our mission is simple: to provide you with a user-friendly platform that allows you to store your favorite recipes, discover new dishes, and unleash your creativity in the kitchen."
          hideButton={true}
        />
        <div className="flex text-lg justify-center pt-20">Our Team</div>
        <div className="flex flex-row place-content-center w-full pt-20">
          <Testimony
            testimonyImage={TestimonyImage}
            testimonyName="Justin Pham"
            testimonySubtitle="FULL-STACK DEVELOPER"
            testimonyText="Learning how to properly cook has truly been a life-changing experience for me. Before, I was someone who would often resort to takeout or pre-packaged meals because I thought cooking was too time-consuming and complicated. But with more time on my hands and the inspiration to try something new, I decided to give cooking a chance.

        At first, I was intimidated by the idea of preparing my own meals, but I quickly realized that cooking can be incredibly rewarding. Not only was I able to create delicious and healthy meals, but I also found it to be a stress-relieving activity that allowed me to unwind after a long day.
        
        As the summer went on, I found myself becoming more and more adventurous in the kitchen. I started trying new recipes, experimenting with different ingredients, and even creating my own dishes. I felt a sense of pride and accomplishment every time I created a new dish, and I loved sharing my creations with my friends and family.
        
        Cooking has also had a positive impact on my health and overall well-being. By preparing my own meals, I was able to control what I was putting into my body, making sure that I was fueling myself with wholesome and nutritious ingredients. I also found that the act of cooking itself was a form of self-care, allowing me to take time for myself and focus on my mental and physical health.
        
        Overall, I can say without a doubt that cooking this summer has changed my life for the better. It has taught me a new skill, given me a creative outlet, and improved my health and well-being. I'm excited to continue my culinary journey and see where it takes me next!"
          />
        </div>
        <div className="mt-16 text-center mx-auto max-w-md">
          <span className="text-lg">
            Try theCookBook for free, and explore all the tools and services you
            need to discover your next meal.
          </span>
          <a
            href="#"
            className="mt-2 block w-full rounded-md bg-[#53AD3C] py-2 text-center text-sm font-semibold text-white hover:bg-[#A7E4AF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#53AD3C]"
          >
            START NOW FOR FREE
          </a>
        </div>
      </Layout>
    </>
  );
}
