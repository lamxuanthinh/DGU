import { EmptyLayout, GlobalStyled } from "../components";
import { AppPropsWithLayout } from "../model";
import AOSInitializer from "../components/AOSInitializer";
import { AppProvider } from "@/Context";
import "@/styles/globals.css";
import "@/styles/common/override.css";
import "@/styles/common/animation.css";
import "@/styles/common/comments.css";
import "@/styles/common/shadow.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;

    return (
        <AppProvider>
            <ThemeProvider attribute="class">
                <Layout>
                    <GlobalStyled />
                    <AOSInitializer />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </AppProvider>
    );
}

export default MyApp;
