import { user } from "@/apis/user";
import { useEffect, useState } from "react";
import { ProfileUser } from "@/model";

export default function Profile() {
    const [profile, setProfile] = useState<ProfileUser>();

    useEffect(() => {
        const getProfile = async () => {
            try {
                const {
                    metaData: { profile },
                }: any = await user.profile();
                setProfile(profile);
            } catch (error) {
                console.error("Error fetching profile:");
            }
        };
        getProfile();
    }, []);

    return (
        <>
            <h2>Profile testing</h2>
            <div>{profile?._id}</div>
            <div>{profile?.email}</div>
            <div>{profile?.name}</div>
            <div>{profile?.roles}</div>
            <div></div>
        </>
    );
}
