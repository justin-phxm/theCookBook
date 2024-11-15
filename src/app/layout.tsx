import { AuthProvider } from "@/app/context/AuthContext";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import Layout from "@/app/components/layout";
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
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
