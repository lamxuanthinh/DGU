import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { EmptyLayout } from "../components";
import { AppPropsWithLayout } from "../model";
import AOSInitializer from "../components/AOSInitializer";
import { AppProvider } from "@/Context";
import "@/styles/globals.css";
import "@/styles/common/override.css";
import "@/styles/common/animation.css";
import "@/styles/common/comments.css";
import "@/styles/common/shadow.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;

    return (
        <SessionProvider session={pageProps.session}>
            <AppProvider>
                <ThemeProvider attribute="class">
                    <Layout>
                        <AOSInitializer />
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </AppProvider>
        </SessionProvider>
    );
}

export default appWithTranslation(MyApp);
