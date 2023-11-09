import { useEffect, useState } from "react";
import { useAppContext } from "@/Context";
import { IDataSplitVideo } from "@/model/editVideo";
import { useRouter } from "next/router";
import courseApi from "@/apis/course";
import { configAuth } from "@/apis/configAuth";
import { useSession } from "next-auth/react";
import imageError from "public/Images/image-error.png";
import ImageCustom from "@/components/common/ImageCustom";
import Loading from "@/components/common/Loading";
import { useTranslations } from "next-intl";

const Release = () => {
    const t = useTranslations("upload");
    const { courseSelected, listDataSplitVideo, fileVideoUpload, fileThumbVideoUpload, setRenderSelectCourse } =
        useAppContext();
    const router = useRouter();
    const { data: session } = useSession();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
                setIsLoading(true);
                await courseApi
                    .updateCourse(formData, configAuth(session))
                    .then(async (res) => {
                        if (res.code === 201) {
                            await router.push("/");
                            setRenderSelectCourse(false);
                            setIsLoading(false);
                        } else {
                            setIsError(true);
                            setIsLoading(false);
                        }
                    })
                    .catch((err) => console.log("Error during upload video:", err));
            }
        };

        if (listDataSplitVideo.length > 0 && fileVideoUpload && fileThumbVideoUpload) {
            handleUploadVideo();
        }
    }, []);

    return (
        <>
            {isError && (
                <div className="h-full flex flex-col justify-center items-center relative">
                    <div className="">
                        <ImageCustom className="w-[300px] h-[300px]" src={imageError} alt="image error" />
                    </div>
                    <h2 className="text-center text-red-500 text-3xl mt-5">{t("release.error")}</h2>
                </div>
            )}
            {isLoading && <Loading isFullOpacity />}
        </>
    );
};
export default Release;

