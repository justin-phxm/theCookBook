import Image from 'next/image'
import NavBar from '../components/navBar'
import CreateRecipe from '../components/createRecipe'
import Testimony from '../components/testimony'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className={`min-h-screen`}>
      <NavBar />
      <CreateRecipe />
      <Testimony />
      <Footer />
    </main>
  )
}
