import { IQueryNotification } from "@/model";
import { useRouter } from "next/router";
import VerifyAuth from "@/components/common/VerifyAuth";
import notificationImage from "@/public/Images/Verify/notification.png";
import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";
import Page404 from "../Page404";

export default function Notification() {
    const router = useRouter();
    const { emailSent } = router.query as IQueryNotification;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timerWait = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => {
            clearTimeout(timerWait);
        };
    }, []);

    const description = `We've sent a verification email to ${
        emailSent && encodeEmail(emailSent)
    }. You need to verify your email address to log into our Vebsite.`;

    function encodeEmail(email: string) {
        const parts = email.split("@");
        if (parts.length !== 2) {
            return email;
        }
        const localPart = parts[0];
        const domainPart = parts[1];
        const encodedLocalPart = localPart[0] + "*".repeat(localPart.length - 2) + localPart.slice(-1);
        const encodedDomainPart = domainPart[0] + "*".repeat(domainPart.length - 2) + domainPart.slice(-1);
        const encodedEmail = encodedLocalPart + "@" + encodedDomainPart;

        return encodedEmail;
    }

    return (
        <>
            {isLoading ? (
                <Loading isIcon={false} />
            ) : (
                <>
                    {emailSent ? (
                        <VerifyAuth
                            heading="Verify your email"
                            description={description}
                            srcImage={notificationImage}
                        />
                    ) : (
                        <Page404 />
                    )}
                </>
            )}
        </>
    );
}
