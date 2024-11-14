import { AuthProvider } from "@/app/context/AuthContext";
import "./globals.css";
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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
