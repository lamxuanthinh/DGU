import MainLayout from "@/components/layout/MainLayout";
import Upload from "@/Views/Upload";
import { GetStaticProps } from "next";

export default function UploadPage() {
    return <Upload />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
        },
    };
};

UploadPage.Layout = MainLayout;
