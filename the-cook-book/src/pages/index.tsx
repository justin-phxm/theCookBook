import Image from 'next/image'
import NavBar from '../components/navBar'
import Testimony from '../components/testimony'
import Footer from '../components/footer'
import CallToAction from '../components/callToAction'
import FeatureBlock from '../components/FeatureBlock'
import Circle from '../components/circularDecoration'

export default function Home() {
  return (
    <main className='min-h-screen bg-[#F4FFF1]'>
      <Circle />
      <NavBar />
      <FeatureBlock />
      <Testimony />
      <CallToAction />
      <Footer />
    </main>
  )
}
