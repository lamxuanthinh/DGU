import { useEffect, useState } from "react";
import { useRouter, NextRouter } from "next/router";
import { auth } from "@/apis/auth";
import { QueryVerifyEmail, DataResponse } from "@/model";

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
            {statusVerify ? <div>Verify Email Success</div> : <div>Verify Email Failure</div>}
            <div>VerifyEmail !!!</div>
        </>
    );
}
