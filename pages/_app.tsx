import { EmptyLayout, GlobalStyled } from "@/components";
import { AppPropsWithLayout } from "@/model";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <GlobalStyled />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
