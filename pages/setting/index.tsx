import Setting from "@/Views/Setting";
import MainLayout from "@/components/layout/MainLayout";
import { GetStaticProps } from "next";

function SettingPage() {
    return <Setting />;
}

SettingPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
        },
    };
};

export default SettingPage;
