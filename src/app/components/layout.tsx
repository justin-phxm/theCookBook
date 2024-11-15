import Circle from "@/components/circularDecoration";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "theCookBook",
  description: "Save all your recipes with theCookBook",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center overflow-hidden py-4">
        <Circle />
        <div className="relative flex w-5/6 max-w-screen-2xl flex-1 flex-col pt-24">
          <div className="flex h-full flex-1 flex-col">{children}</div>
          <Footer />
        </div>
        <NavBar />
      </main>
    </>
  );
}
