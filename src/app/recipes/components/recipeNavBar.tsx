"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="mx-auto flex select-none flex-wrap items-center justify-between p-4">
      <Link href="#" className="flex items-center">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-green-500">
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
        }}
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
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
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-inherit md:p-0">
          {currentUser ? (
            <>
              {" "}
              <li>
                <Link
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 md:bg-transparent md:p-0 md:text-green-700"
                  aria-current="page"
                >
                  <FaUserAlt />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-green-500"
                >
                  <HiCollection />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-green-500"
                >
                  <HiMagnifyingGlass />
                </Link>{" "}
              </li>
              <li>
                <button
                  onClick={logoutHandler}
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-green-500"
                >
                  {currentUser.email} (Sign Out)
                </button>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <p className="block font-light text-gray-900">(DemoMode)</p>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-green-500"
                >
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
