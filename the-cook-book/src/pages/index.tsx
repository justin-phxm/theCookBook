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
      <Footer />
    </main>
  )
}
