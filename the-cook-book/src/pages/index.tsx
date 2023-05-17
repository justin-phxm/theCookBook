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
import HeroImage0 from '../../public/11.svg'
import HeroImage1 from '../../public/9.svg'
import HeroImage2 from '../../public/12.svg'

export default function Home() {
  return (<>    
    <Layout>
      <Head>
        <title>TheCookBook</title>
      </Head>
      <div className="pb-24">
        <FeatureBlock 
          heroImage={HeroImage0} 
          heroTitle="Recreate and Relive Culinary Experiences"
          heroDescription="The ultimate recipe book to create and save all your favorite dishes."/>
        <FeatureBlock1 heroImage={HeroImage1}/>
        <FeatureBlock heroImage={HeroImage2} 
          heroTitle="Recreate and Relive Culinary Experiences"
          heroDescription="The ultimate recipe book to create and save all your favorite dishes."/>
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
      <CallToAction callToActionHeaderSm='ARE YOU READY?'
       callToActionHeader="Be A Part Of The Next Big Thing"/>
    </Layout>
    </>)
}
