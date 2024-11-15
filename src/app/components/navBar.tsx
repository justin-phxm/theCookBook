"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";
interface NavLinks {
  link: string;
  text: string;
}
const navLinks: NavLinks[] = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/contact", text: "Contact" },
  { link: "/login", text: "Login/Signup" },
];
export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currentUser } = useAuth();
  const pathName = usePathname();

  return (
    <div className="fixed flex w-11/12 flex-wrap items-center justify-between rounded-xl bg-primaryLight bg-opacity-20 p-4 drop-shadow-lg backdrop-blur-lg">
      <Link href="/" className="text-2xl font-semibold text-green-500">
        TheCookBook
      </Link>
      <button
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
      >
        <Hamburger />
      </button>
      <div className={`w-full md:block md:w-auto ${!isCollapsed && "hidden"}`}>
        <ul className="flex flex-col gap-4 rounded-lg bg-gray-50 p-4 font-medium md:flex-row md:bg-inherit md:p-0">
          {navLinks.map((navLink) => (
            <li key={navLink.link}>
              <Link
                href={navLink.link}
                className={`px-2 ${
                  pathName === navLink.link ? "text-green-500" : "text-black"
                }`}
              >
                {navLink.text}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/Recipes"
              className="rounded-full bg-primaryLight p-2 transition-all hover:bg-opacity-80"
            >
              {currentUser ? "Open App" : "Try Demo"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
