import React from "react";
import dynamic from "next/dynamic";

const Profile = dynamic((): any => import("@/Views/Test/profile"), {
    ssr: false,
});

export default function ProfilePage() {
    return (
        <div>
            <Profile />
        </div>
    );
}
