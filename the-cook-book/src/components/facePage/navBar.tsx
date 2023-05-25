import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();
  const pathName = router.pathname;
  console.log(pathName);
  return (
    <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-500 dark:text-white">
          TheCookBook
        </span>
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        onClick={() => {
          if (isCollapsed) {
            setIsCollapsed(false);
          } else {
            setIsCollapsed(true);
          }
          console.log(isCollapsed);
        }}
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={
          !isCollapsed
            ? "hidden w-full md:block md:w-auto"
            : "w-full md:block md:w-auto"
        }
        id="navbar-default"
      >
        <ul
          className="font-medium flex flex-col p-4 md:p-0 mt-4 border 
      border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-inherit 
      dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <Link
              href="/"
              className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-green-500 ${
                pathName === "/" ? "text-green-500" : "text-black"
              }`}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-green-500 ${
                pathName === "/about" ? "text-green-500" : "text-black"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-green-500 ${
                pathName === "/contact" ? "text-green-500" : "text-black"
              }`}
            >
              Contact
            </Link>
          </li>
          <>
            <li>
              <Link
                href="/login"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login/Signup
              </Link>
            </li>
            <li>
              <Link
                href="/Recipes"
                className="block p-3 md:py-0 text-gray-900  rounded-full bg-green-300 hover:bg-green-400 md:hover:bg-green-400 md:border-0 md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {currentUser ? "Open App" : "Try Demo"}
              </Link>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
}
