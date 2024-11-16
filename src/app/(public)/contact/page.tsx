import aboutImage from "@/12.png";
import FeatureBlock from "@/app/(public)/components/FeatureBlock";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with theCookBook",
};
export default function contact() {
  return (
    <FeatureBlock
      heroImage={aboutImage}
      hideButton={true}
      heroTitle="Contact Us"
      heroDescription="We would love to hear from you! If you have any questions, comments, or feedback, please feel free to reach out to us."
    />
  );
}
