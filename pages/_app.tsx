import { EmptyLayout, GlobalStyled } from "../components";
import { AppPropsWithLayout } from "../model";
import "@/styles/globals.css";
import AOSInitializer from "../components/AOSInitializer";
import { useEffect, useMemo, useState } from "react";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  console.log(3);

  return (
    <Layout>
      <GlobalStyled />
      <AOSInitializer />
      <Component {...pageProps} />
    </Layout>
  );
}

export const useElementOnScreen = (options: any, targetRef: any) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

export default MyApp;
