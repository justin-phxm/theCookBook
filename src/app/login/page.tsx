import Login from "@/app/components/Login";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Login/Register",
  description: "Save all your recipes with theCookBook",
};
export default function login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-[#A7E4AF] to-[#F3E699]">
      <div className="w-1/2 rounded-xl bg-white p-12">
        <Link
          className="flex justify-center text-lg font-bold hover:opacity-50"
          href="/"
        >
          TheCookBook
        </Link>
        <Login />
      </div>
    </div>
  );
}
