import { AuthProvider } from "@/app/context/AuthContext";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
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
        <main className="flex min-h-screen w-full flex-col items-center overflow-hidden">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
