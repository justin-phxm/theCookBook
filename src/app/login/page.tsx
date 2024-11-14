import Login from "@/app/components/Login";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Login/Register",
  description: "Save all your recipes with theCookBook",
};
export default function login() {
  return (
    <div className="bg-gradient-to-r from-[#A7E4AF] to-[#F3E699] h-screen flex justify-center items-center">
      <div className="w-1/2 bg-white rounded-xl p-12">
        <Link
          className="text-lg font-bold hover:opacity-50 flex justify-center"
          href="/"
        >
          TheCookBook
        </Link>
        <Login />
      </div>
    </div>
  );
}
