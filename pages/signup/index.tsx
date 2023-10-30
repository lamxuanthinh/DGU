import SignUp from "@/Views/SignUp";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SignUpPage() {
    return <SignUp />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "vi", ["auth"])),
        },
    };
};
