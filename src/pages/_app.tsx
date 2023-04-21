import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Lexend } from "next/font/google";
const lexend = Lexend({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${lexend.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
