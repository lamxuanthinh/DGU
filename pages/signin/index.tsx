import SignIn from "Views/SignIn";
import { GetStaticProps } from "next";

export default function SignInPage() {
    return <SignIn />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default,
        },
    };
};
