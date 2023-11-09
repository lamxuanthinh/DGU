import Trending from "@/Views/Trending";
import MainLayout from "@/components/layout/MainLayout";
import { GetStaticProps } from "next";

const TrendingPage = () => {
    return <Trending />;
};

TrendingPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
        },
    };
};

export default TrendingPage;
