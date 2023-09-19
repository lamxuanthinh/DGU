import loadingIcon from "public/Images/loadingSetting.svg";
import Image from "next/image";
import { useEffect } from "react";
import { useAppContext } from "@/Context";
import { IDataSplitVideo } from "@/model/editVideo";
import { useRouter } from "next/router";
import courseApi from "@/apis/course";

const Release = () => {
    const { courseSelected, listDataSplitVideo, fileVideoUpload, fileThumbVideoUpload, setStepSelected } =
        useAppContext();
    const router = useRouter();

    useEffect(() => {
        const handleUploadVideo = async () => {
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
            await courseApi
                .updateCourse(formData)
                .then((res) => {
                    console.log(res);
                    router.push("/");
                })
                .catch((err) => console.log(err));
        };

        if (listDataSplitVideo.length > 0 && fileVideoUpload && fileThumbVideoUpload) {
            handleUploadVideo();
        }

        return () => {
            setStepSelected(0);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Image src={loadingIcon} alt="loading" />
            {/* <div className="bg-[#A1A1A1] w-[300px] h-2.5 rounded relative mt-10">
                <div className="bg-primary w-[10%] h-full rounded absolute"></div>
            </div> */}
        </div>
    );
};
export default Release;
