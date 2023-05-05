import Head from 'next/head'
import NavBar from '../components/navBar'
import Testimony from '../components/testimony'
import Footer from '../components/footer'
import CallToAction from '../components/callToAction'
import FeatureBlock from '../components/FeatureBlock'
import FeatureBlock1 from '../components/FeatureBlock1'
import FeatureBlock2 from '../components/FeatureBlock2'
import Circle from '../components/circularDecoration'
import Layout from '../components/layout'

export default function Home() {
  return (<>    
    <Layout>
      <Head>
        <title>TheCookBook</title>
      </Head>
      <div className="pb-24">
      <FeatureBlock />
      <FeatureBlock1 />
      <FeatureBlock2 />
      </div>
      <div className="pb-4">
        <h1 className=" text-center text-2xl font-bold text-[#2BB644]" >TESTIMONIALS</h1>
        <h1 className="pb-32 text-center text-[2.5rem] font-bold text-black">Read What Others Have To Say</h1>
        <div className="flex flex-row place-content-center">
          <Testimony />
          <Testimony />
          <Testimony />
        </div>
      </div>
      <CallToAction />
    </Layout>
    </>)
}
