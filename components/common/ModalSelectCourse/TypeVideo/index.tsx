import switchImage from "@/public/Images/switch.png";
import Image from "next/image";
import Button from "../../Button";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { BsFileEarmarkLock } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { useRouter } from "next/router";
import { useAppContext } from "@/Context";
import { IDataSplitVideo } from "@/model/editVideo";
import courseApi from "@/apis/course";

const TypeVideo = () => {
    const { courseSelected, listDataSplitVideo, fileVideoUpload, fileThumbVideoUpload, setIsLoading } =
        useAppContext();

    const router = useRouter();
    const [isPublic, setIsPublic] = useState<boolean>(true);

    const handleClickPrivate = () => {
        setIsPublic(false);
        router.push("/pricing-plan");
    };

    const handleClickPublic = async () => {
        const formData = new FormData();
        if (courseSelected) {
            formData.append("course", courseSelected?._id);
            formData.append("title", courseSelected?.title);
            formData.append("description", courseSelected?.description);
        }
        listDataSplitVideo.map((item: IDataSplitVideo) => {
            formData.append("shortTimeLine", `${item.startTime}:${item.endTime}`);
        });
        listDataSplitVideo.map((item: IDataSplitVideo) => {
            formData.append("shortTitle", item.name);
        });
        listDataSplitVideo.map((item: IDataSplitVideo) => {
            formData.append("shortDescription", item.description);
        });
        listDataSplitVideo.map((item: IDataSplitVideo) => {
            if (item.thumbImageFile) {
                formData.append("shortThumbnail", item.thumbImageFile);
            }
        });
        if (fileThumbVideoUpload) {
            formData.append("thumbnail", fileThumbVideoUpload);
        }
        if (fileVideoUpload) {
            formData.append("video", fileVideoUpload);
        }
        setIsPublic(true);
        setIsLoading(true);
        await courseApi
            .updateCourse(formData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        setIsLoading(false);
        // router.push("/");
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">Do you want choose type video upload ?</h1>
            <div className="mb-8">
                <Image src={switchImage} alt="switch image" />
            </div>
            <p className="max-w-[680px] text-center mb-16 text-[#7A7A7A]/[.6]">
                Unlock the versatility of video uploads with our two distinct options: Public and Private. With the
                Public option, users can freely share their videos, fostering a sense of community and collaboration.
                Meanwhile, the Private option offers an added layer of security, ensuring that only authorized
                individuals have access to your valuable content.
            </p>
            <div
                className={`flex justify-between px-6 py-2 border-[3px] border-solid w-[512px] mb-5 cursor-pointer ${
                    isPublic ? "border-[#3983AC] text-black" : "border-[#CCCCCC] text-[#C5C5C5]"
                }`}
                onClick={handleClickPublic}
            >
                <div className="flex items-center">
                    <AiOutlineGlobal className="w-[26px] h-[26px]" />
                    <h2 className="ml-2 text-[28px] font-semibold">Public</h2>
                </div>
                <div className="flex items-center">
                    <span className="text-[#616161]/[.62] font-bold text-[15px] mr-2 hover:text-black">
                        Action needed
                    </span>
                    <Button className="text-[28px]">
                        <IoMdAddCircle />
                    </Button>
                </div>
            </div>
            <div
                className={`px-6 py-2 border-[3px] border-solid w-[512px] cursor-pointer ${
                    isPublic ? "border-[#CCCCCC] text-[#C5C5C5]" : "border-[#3983AC] text-black"
                }`}
                onClick={handleClickPrivate}
            >
                <div className="flex items-center">
                    <BsFileEarmarkLock className="w-[26px] h-[26px]" />
                    <h2 className="ml-2 text-[28px] font-semibold ">Private</h2>
                </div>
            </div>
        </div>
    );
};

export default TypeVideo;
