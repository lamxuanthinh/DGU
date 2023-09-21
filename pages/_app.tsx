import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { EmptyLayout, GlobalStyled } from "../components";
import { AppPropsWithLayout } from "../model";
import AOSInitializer from "../components/AOSInitializer";
import { AppProvider } from "@/Context";
import "@/styles/globals.css";
import "@/styles/common/override.css";
import "@/styles/common/animation.css";
import "@/styles/common/comments.css";
import "@/styles/common/shadow.css";


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;

    return (
        <SessionProvider session={pageProps.session}>
            <AppProvider>
            <ThemeProvider attribute="class">
                <Layout>
                    <GlobalStyled />
                    <AOSInitializer />
                    <Component {...pageProps} />
                </Layout>
              </AppProvider>
            </ThemeProvider>
          </AppProvider>
       </SessionProvider>
    );
}

export default MyApp;
