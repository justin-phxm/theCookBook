import Image from 'next/image'
import NavBar from '../components/navBar'
import CreateRecipe from '../components/createRecipe'
import Testimony from '../components/testimony'
import Footer from '../components/footer'
import CallToAction from '../components/callToAction'
export default function Home() {
  return (
    <main className='min-h-screen bg-[#F4FFF1]'>
      <NavBar />
      <CreateRecipe />
      <Testimony />
      <CallToAction />
      <Footer />
    </main>
  )
}
