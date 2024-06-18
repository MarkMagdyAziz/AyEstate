import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Sora } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const sora = Sora({
  weight: ['400', '700']
   ,subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={sora.className} {...pageProps} />;
}
