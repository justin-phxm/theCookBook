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
      <main className="relative flex min-h-screen flex-col overflow-hidden">
        <Circle />
        <div className="relative m-auto flex w-5/6 max-w-screen-2xl flex-1 flex-col">
          <NavBar />
          <div className="flex h-full flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
}
