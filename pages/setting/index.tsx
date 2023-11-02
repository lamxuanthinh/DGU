import Setting from "@/Views/Setting";
import MainLayout from "@/components/layout/MainLayout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function SettingPage() {
    return <Setting />;
}

SettingPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "vi", ["layout"])),
        },
    };
};

export default SettingPage;
