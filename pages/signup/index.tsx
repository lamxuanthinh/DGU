import SignUp from "@/Views/SignUp";
import { GetStaticProps } from "next";

export default function SignUpPage() {
    return <SignUp />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
        },
    };
};
