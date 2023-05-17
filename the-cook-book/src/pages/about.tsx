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
      <FeatureBlock heroImage={aboutImage2}/>
      <FeatureBlock1 heroImage={aboutImage}/>
      <Testimony />
    </Layout>
    </>)
}
