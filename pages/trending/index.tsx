import Trending from "@/Views/Trending";
import MainLayout from "@/components/layout/MainLayout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TrendingPage = () => {
    return <Trending />;
};

TrendingPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "vi", ["layout"])),
        },
    };
};

export default TrendingPage;
