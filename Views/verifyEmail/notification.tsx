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

    const description = `We've sent a verification email to ${emailSent}. You need to verify your email address to log into our Vebsite.`;

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
