import switchImage from "@/public/Images/switch.png";
import Image from "next/image";
import Button from "../../Button";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { BsFileEarmarkLock } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { useRouter } from "next/router";
import { useAppContext } from "@/Context";

const TypeVideo = () => {
    const { setStepSelected } = useAppContext();

    const router = useRouter();
    const [isPublic, setIsPublic] = useState<boolean>(true);

    const handleClickPrivate = () => {
        setIsPublic(false);
    };

    const handleClickPublic = () => {
        setIsPublic(true);
    };

    const handleNext = () => {
        if (isPublic) {
            setStepSelected(4);
        } else {
            router.push("/pricingplans");
        }
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
                <h1 className="text-[26px] font-bold my-6">Do you want choose type video upload ?</h1>
                <div className="mb-8">
                    <Image src={switchImage} alt="switch image" />
                </div>
                <p className="max-w-[680px] text-center mb-16 text-[#7A7A7A]/[.6] dark:text-white/[.8]">
                    Unlock the versatility of video uploads with our two distinct options: Public and Private. With the
                    Public option, users can freely share their videos, fostering a sense of community and
                    collaboration. Meanwhile, the Private option offers an added layer of security, ensuring that only
                    authorized individuals have access to your valuable content.
                </p>
                <div
                    className={`flex justify-between px-6 py-2 border-[3px] border-solid w-[512px] mb-5 cursor-pointer rounded ${
                        isPublic
                            ? "border-[#3983AC] text-black dark:text-white dark:border-white"
                            : "border-[#CCCCCC] text-[#C5C5C5]"
                    }`}
                    onClick={handleClickPublic}
                >
                    <div className="flex items-center">
                        <AiOutlineGlobal className="w-[26px] h-[26px]" />
                        <h2 className="ml-2 text-[28px] font-semibold">Public</h2>
                    </div>
                    <div className="flex items-center">
                        <span className="text-[#616161]/[.62] font-bold text-[15px] mr-2 hover:text-black dark:text-white/[.9]">
                            Action needed
                        </span>
                        <Button className="text-[28px]">
                            <IoMdAddCircle />
                        </Button>
                    </div>
                </div>
                <div
                    className={`px-6 py-2 border-[3px] border-solid w-[512px] cursor-pointer rounded ${
                        isPublic
                            ? "border-[#CCCCCC] dark:border-[#CCCCCC]/[.58] text-[#C5C5C5]"
                            : "border-[#3983AC] text-black dark:border-white dark:text-white"
                    }`}
                    onClick={handleClickPrivate}
                >
                    <div className="flex items-center">
                        <BsFileEarmarkLock className="w-[26px] h-[26px]" />
                        <h2 className="ml-2 text-[28px] font-semibold ">Private</h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <Button
                    onClick={handleNext}
                    className="text-[#3983AC] bg-[#7FCFFC]/[.3] font-bold p-2 min-w-[100px] dark:text-white dark:bg-primary rounded-sm py-2.5"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default TypeVideo;
