import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignIn from "Views/SignIn";
import { GetStaticProps } from "next";

export default function SignInPage() {
    return <SignIn />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "vi", ["auth"])),
        },
    };
};
