import { QueryNotification } from "@/model";
import { useRouter } from "next/router";

export default function Notification() {
    const router = useRouter();
    const { emailSent } = router.query as QueryNotification;
    return <div>Email Sent${emailSent}</div>;
}
