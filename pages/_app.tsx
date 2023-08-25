import { EmptyLayout, GlobalStyled } from "../components";
import { AppPropsWithLayout } from "../model";
import AOSInitializer from "../components/AOSInitializer";
import { AppProvider } from "@/Context";
import "@/styles/globals.css";
import "@/styles/common/override.css";
import "@/styles/common/animation.css";
import "@/styles/common/comments.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;

    return (
        <AppProvider>
            <Layout>
                <GlobalStyled />
                <AOSInitializer />
                <Component {...pageProps} />
            </Layout>
        </AppProvider>
    );
}

export default MyApp;
