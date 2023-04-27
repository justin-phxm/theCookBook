import styles from '@/styles/navBar.module.css'
export default function NavBar() {
  return (
  <div className="text-2xl">
    <button className="hover:text-green-500 font-bold float-left">TheCookBook</button>
    <div className="float-right">
      <button className="hover:text-green-500 pr-4">About</button>
      <button className="hover:text-green-500 pr-4">Contact</button>
      <button className="hover:text-green-500 pr-4">Sign Up</button>
      <button className="hover:text-green-500">Login</button>
    </div>
  </div>
  )
}
