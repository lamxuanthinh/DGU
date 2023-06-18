import { EmptyLayout, GlobalStyled } from "../components";
import { AppPropsWithLayout } from "../model";
import "@/styles/globals.css";
import "@/styles/Common/ConfigPlayerVdocipher.css";
import AOSInitializer from "../components/AOSInitializer";

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
