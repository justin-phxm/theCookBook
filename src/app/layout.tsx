import { AuthProvider } from "@/app/context/AuthContext";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import Circle from "@/app/components/Circle";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
const outfit = Outfit({ subsets: ["latin"] });
export const metadata = {
  title: "theCookBook",
  description: "Save all your recipes with theCookBook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className="flex min-h-screen flex-col items-center overflow-hidden py-4">
          <Circle />
          <AuthProvider>
            <div className="relative flex w-5/6 max-w-screen-2xl flex-1 flex-col pt-24">
              <div className="flex h-full flex-1 flex-col">{children}</div>
              <Footer />
            </div>
            <NavBar />
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
