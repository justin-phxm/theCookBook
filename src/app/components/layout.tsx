import Circle from "./circularDecoration";
import NavBar from "./navBar";
import Footer from "./footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "theCookBook",
  description: "Save all your recipes with theCookBook",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4FFF1]">
      <div className="m-auto flex w-5/6 flex-1 flex-col">
        {/* <Circle /> */}
        <NavBar />
        <div className="flex h-full flex-1 flex-col">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
