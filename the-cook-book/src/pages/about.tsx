import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import aboutImage from '../../public/12.svg'

export default function about() {
  return (<>
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="text-3xl font-bold">About</div>
      <Image src={aboutImage} alt="" width={1000}/>
    </Layout>
    </>)
}
