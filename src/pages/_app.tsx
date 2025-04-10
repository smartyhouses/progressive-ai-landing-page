import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} ${openSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
