// import { QueryNotification } from "@/model";
// import { useRouter } from "next/router";
import VerifyAuth from "@/components/common/VerifyAuth";
import notificationImage from "@/public/Images/Verify/notification.png";

export default function Notification() {
    // const router = useRouter();
    // const { emailSent } = router.query as QueryNotification;

    return (
        <VerifyAuth
            heading="Verify your email"
            description="Almost there! We've sent a verification email to t****@***.com You need to verify your email address to log into our Vebsite."
            srcImage={notificationImage}
        />
    );
}
