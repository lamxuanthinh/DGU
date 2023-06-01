import { EmptyLayout, GlobalStyled } from "../components";
import { AppPropsWithLayout } from "../model";
import "@/styles/globals.css";
import AOSInitializer from "../components/AOSInitializer";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <GlobalStyled />
      <AOSInitializer />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
