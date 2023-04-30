import Image from 'next/image'
import NavBar from '../components/navBar'
import CreateRecipe from '../components/createRecipe'
export default function Home() {
  return (
    <main className={`min-h-screen`}>
      <NavBar />
      <CreateRecipe />
    </main>
  )
}
