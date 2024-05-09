import Layout from "../../components/facePage/layout";
import Image from "next/image";
import aboutImage from "@/12.png";
export const metadata = {
  title: "Contact",
  description: "Contact TheCookBook",
};
export default function Page() {
  return (
    <>
      <Layout>
        <div className="text-3xl font-bold">Contact</div>
        <Image src={aboutImage} alt="" width={1000} />
      </Layout>
    </>
  );
}