import Head from "next/head";
import Layout from "../components/facePage/layout";
import Image from "next/image";
import aboutImage from "../../public/12.svg";

export default function contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <div className="text-3xl font-bold">Contact</div>
        <Image src={aboutImage} alt="" width={1000} />
      </Layout>
    </>
  );
}
