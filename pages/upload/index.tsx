import MainLayout from "@/components/layout/MainLayout";
import Upload from "@/Views/Upload";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function UploadPage() {
    return <Upload />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "vi", ["home"])),
        },
    };
};

UploadPage.Layout = MainLayout;
