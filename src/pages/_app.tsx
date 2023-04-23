import { EmptyLayout } from "@/components/layouts";
import "@/styles/globals.scss";
import { AppPropsWithLayout } from "@/types";
import { Lexend } from "next/font/google";
const lexend = Lexend({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <div className={`${lexend.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
