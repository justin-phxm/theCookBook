import { AuthProvider } from "@/app/context/AuthContext";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/styles/theme";

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
          <AuthProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
