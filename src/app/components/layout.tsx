import Circle from "./circularDecoration";
import NavBar from "./navBar";
import Footer from "./footer";
import type { Metadata } from "next";
export const siteTitle = "theCookBook";
export const metadata: Metadata = {
  title: siteTitle,
  description: "Save all your recipes with theCookBook",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4FFF1] overflow-hidden relative">
      <div className=" w-5/6 m-auto">
        <Circle />
        <NavBar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
