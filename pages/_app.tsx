import { EmptyLayout, GlobalStyled } from "../components";
import { AppPropsWithLayout } from "../model";
import AOSInitializer from "../components/AOSInitializer";
import "@/styles/globals.css";
import "@/styles/common/override.css";
import "@/styles/common/animation.css";

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
