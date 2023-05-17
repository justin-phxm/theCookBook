import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import aboutImage from '../../public/5.svg'
import aboutImage2 from '../../public/8.svg'
import CallToAction from '../components/callToAction'
import FeatureBlock from '@/components/FeatureBlock'
import FeatureBlock1 from '@/components/FeatureBlock1'
import Testimony from '@/components/testimony'

export default function about() {
  return (<>
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <CallToAction callToActionHeaderSm='ABOUT US' 
      callToActionHeader="TheCookBook Changes The Food Industry"
      callToActionMessage="The ultimate online cooking application for all your recipe needs."/>
      <FeatureBlock heroImage={aboutImage2}
      heroSubheader="Our Story"
        heroTitle="Our first recipe started on paper..."
      heroDescription="Cooking has evolved in the 21st century. Food is abundant and there are so many options to choose from. We saw that the old fashioned paper recipes needed to evolve as well. Whether you are a novice or a professional, cooking has never been made easier."/>
      <FeatureBlock1 heroImage={aboutImage}
      heroSubheader="Our Mission"
        heroTitle="Simple, User-Friendly, and Appetizing"
      heroDescription="Our mission is simple: to provide you with a user-friendly platform that allows you to store your favorite recipes, discover new dishes, and unleash your creativity in the kitchen."
      />
      <Testimony />
    </Layout>
    </>)
}
