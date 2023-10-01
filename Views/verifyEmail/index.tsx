import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { IQueryVerifyEmail } from "@/model";
import verifySuccessfulImage from "@/public/Images/Verify/verify_successful.png";
import verifyErrorImage from "@/public/Images/Verify/verify_error.png";
import VerifyAuth from "@/components/common/VerifyAuth";
import { signIn } from "next-auth/react";
import Page404 from "../Page404";

export default function VerifyEmail() {
    const router: NextRouter = useRouter();
    const [statusVerify, setStatusVerify] = useState<boolean>(false);
    const { email, token } = (router.query as IQueryVerifyEmail) || {};
    const [isVerify, setIsVerify] = useState<boolean>(false);

    useEffect(() => {
        if (email && token) {
            setIsVerify(true);
            const handleApiVerifyEmail = async () => {
                const { status }: any = await signIn("credentials", { email: email, token: token, redirect: false });
                if (status !== 200) setStatusVerify(false);
                setStatusVerify(true);
            };
            handleApiVerifyEmail();
        }
    }, [email, token]);

    return (
        <>
            {isVerify ? (
                <>
                    {statusVerify ? (
                        <VerifyAuth
                            isVerifySuccess
                            heading="Verify Successful!"
                            description="Verify successful! Thanks for verify your email address. You can access the full features of our website."
                            srcImage={verifySuccessfulImage}
                        />
                    ) : (
                        <VerifyAuth
                            isVerifyError
                            heading="Verify Fail!"
                            description="Verify unsucessful! Your email address invalid or proviously authenticated."
                            srcImage={verifyErrorImage}
                        />
                    )}
                </>
            ) : (
                <Page404 />
            )}
        </>
    );
}
