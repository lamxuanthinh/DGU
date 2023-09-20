import { user } from "@/apis/user";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ProfileUser } from "@/model";

export default function ProfileHeader() {
    const [profile, setProfile] = useState<ProfileUser>();
    useEffect(() => {
        try {
            const fetchProfile = async () => {
                const holdProfile = await user.profile();
                setProfile(holdProfile.metaData.profile);
            };
            fetchProfile();
        } catch (error) {
            console.log("ERROR", error);
        }
    }, []);

    return (
        <div className="mx-[90px] w-full h-[260px] flex items-center">
            <div className="h-[175px] flex mr-[140px]">
                <div className="relative mr-[70px]">
                    <div className="w-[175px] bg-[#727272dd] rounded-[50%] overflow-hidden">
                        {profile && (
                            <Image
                                src={`${profile?.avatar}`}
                                width={100}
                                height={100}
                                className="w-full h-full"
                                alt="avt"
                            />
                        )}
                    </div>
                    <div className="px-4 py-1 text-[15px] text-center bg-[#014F12] text-[#ffffff] font-bold rounded-[60px] absolute bottom-0 right-[-20px]">
                        PRO
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex items-center pb-1 gap-x-5">
                        <p className="text-[35px] font-bold">{profile?.name}</p>
                        <BsFillPatchCheckFill fontSize={20} color="#7FCFFC" />
                    </div>
                    <div className="pb-8">
                        <p className="xl:text-[20px] lg:text-[15px] font-bold ">{profile?.email}</p>
                    </div>
                    <div className="flex items-center text-[18px] gap-x-6">
                        <div className="flex">
                            <p className="font-bold">31K</p>
                            <p className="font-medium mx-[0.5rem]">Followers</p>
                        </div>
                        <div className="flex">
                            <p className="font-bold">18</p>
                            <p className="font-medium mx-[0.5rem]">Courses</p>
                        </div>
                        <div className="flex">
                            <p className="font-bold">12K</p>
                            <p className="font-medium mx-[0.5rem]">Learners</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[175px] flex flex-col justify-end">
                <div className="flex items-center px-4 py-1 bg-[#F6F6F6] border rounded-md">
                    <AiTwotoneEdit fontSize={20} className="mr-4" />
                    <p className="font-bold">Edit profile</p>
                </div>
            </div>
        </div>
    );
}
