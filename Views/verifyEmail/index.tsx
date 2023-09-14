import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { auth } from "@/apis/auth";
import { QueryVerifyEmail } from "@/model";
import verifySuccessfulImage from "@/public/Images/Verify/verify_successful.png";
import verifyErrorImage from "@/public/Images/Verify/verify_error.png";
import VerifyAuth from "@/components/common/VerifyAuth";

export default function VerifyEmail() {
    const [statusVerify, setStatusVerify] = useState<boolean>(true);
    const router: NextRouter = useRouter();
    const { email, token } = router.query as QueryVerifyEmail;

    useEffect(() => {
        const handleVerifyEmail = async () => {
            try {
                const payload = { email };
                const { message } = await auth.verifyEmail(payload, token);
                if (message === "Invalid Token") setStatusVerify(false);
                if (message === "ErrorData") setStatusVerify(false);
            } catch (e) {
                console.log(e);
            }
        };
        if (email && token) {
            handleVerifyEmail();
        }
    }, [email, token]);

    return (
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
    );
}
