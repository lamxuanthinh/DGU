import loadingIcon from "public/Images/loadingSetting.svg";
import Image from "next/image";
import { useEffect } from "react";
import { useAppContext } from "@/Context";
import { IDataSplitVideo } from "@/model/editVideo";
import { useRouter } from "next/router";
import courseApi from "@/apis/course";
import { configAuth } from "@/apis/configAuth";
import { useSession } from "next-auth/react";

const Release = () => {
    const { courseSelected, listDataSplitVideo, fileVideoUpload, fileThumbVideoUpload, setRenderSelectCourse } =
        useAppContext();
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        const handleUploadVideo = async () => {
            const formData = new FormData();
            if (courseSelected) {
                if (courseSelected?._id) {
                    formData.append("course", courseSelected?._id);
                }
                if (courseSelected.title) {
                    formData.append("title", courseSelected?.title);
                }
                if (courseSelected.description) {
                    formData.append("description", courseSelected?.description);
                }
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
            if (session) {
                await courseApi
                    .updateCourse(formData, configAuth(session))
                    .then((res) => {
                        console.log(res);
                        router.push("/");
                        setRenderSelectCourse(false);
                    })
                    .catch((err) => console.log(err));
            }
        };

        if (listDataSplitVideo.length > 0 && fileVideoUpload && fileThumbVideoUpload) {
            handleUploadVideo();
        }
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
