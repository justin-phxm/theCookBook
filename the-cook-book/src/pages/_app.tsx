import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const outfit = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <main className={outfit.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </AuthProvider>
  );
}
