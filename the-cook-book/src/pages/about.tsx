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
      <CallToAction />
      <FeatureBlock />
      <FeatureBlock1 />
      <Testimony />
      <Image src={aboutImage} alt="" width={500}/>
      <Image src={aboutImage2} alt="" width={500}/>

    </Layout>
    </>)
}
