import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Modal from "../../components/common/Modal";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAppContext } from "@/Context";
import ModalSelectCourse from "@/components/common/ModalSelectCourse";
import Button from "@/components/common/Button";

export default function Upload() {
    const {
        setSrcVideoEdit,
        setThumbVideoEdit,
        setIsLoading,
        isRenderSelectCourse,
        setRenderSelectCourse,
        setFileVideoUpload,
        setFileThumbVideoUpload,
        setStepSelected,
    } = useAppContext();
    const { push } = useRouter();
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isCloseModal, setIsCloseModal] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    function handleFileSelect(videoFile: File): boolean {
        const file = videoFile;
        const fileName = file.name;
        const fileExtension: string = fileName.split(".").pop()!.toLocaleLowerCase();
        const allowedExtensions: string[] = ["mp4", "avi", "mov"];
        if (allowedExtensions.includes(fileExtension)) {
            return true;
        } else {
            return false;
        }
    }

    const onOk = async () => {
        setIsLoading(true);
        await push("/editvideo");
        setIsLoading(false);
    };

    const onOpenCloseModal = () => {
        setIsCloseModal(false);
        setRenderSelectCourse(false);
    };

    const onCancel = () => {
        setIsModal(false);
    };

    const handleCancelCloseModal = () => {
        setIsCloseModal(false);
    };

    const handleGetInfoFileVideo = async (files: FileList) => {
        const blob = new Blob([files[0]], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");

        video.src = URL.createObjectURL(blob);
        video.muted = true;
        video.onloadedmetadata = () => {
            if (video) {
                video.currentTime = video.duration / 2;
            }
        };
        await video.play();
        await video.pause();

        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        const ctx = canvas.getContext("2d");

        if (ctx) {
            ctx.drawImage(video, 0, 0);
            const thumbnail = canvas.toDataURL("image/png");
            setThumbVideoEdit(thumbnail);
            canvas.toBlob((blob) => {
                if (blob) {
                    const file = new File([blob], "image.jpg", { type: blob.type });
                    setFileThumbVideoUpload(file);
                }
            }, "image/jpeg");
        }

        setSrcVideoEdit(url);
        setFileVideoUpload(files[0]);
        setStepSelected(0);
        setRenderSelectCourse(!isRenderSelectCourse);
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files !== null) {
            if (handleFileSelect(files[0])) {
                handleGetInfoFileVideo(files);
            } else {
                alert("This is not video file.");
            }
        }
    };

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files !== null) {
            if (handleFileSelect(files[0])) {
                handleGetInfoFileVideo(files);
            } else {
                alert("This is not video file.");
                event.target.value = "";
            }
        }
    };

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    useEffect(() => {
        if (isRenderSelectCourse) {
            const handleBeforeUnload = (event: any) => {
                event.preventDefault();
                event.returnValue = "";
            };

            window.addEventListener("beforeunload", handleBeforeUnload);

            return () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }
    }, [isRenderSelectCourse]);

    return (
        <>
            <div className="px-36 py-14 w-full h-full flex flex-col">
                <h1 className="text-[25px] font-bold mb-11">Upload your file bellow</h1>
                <div
                    onDrop={handleDrop}
                    className="relative flex flex-col items-center gap-y-5 w-full border border-black border-dashed dark:border-white h-full pt-[70px] pb-20"
                >
                    <div className="w-[140px]">
                        <FaCloudUploadAlt className="w-full h-full flex items-center justify-center opacity-60" />
                    </div>
                    <h2 className="text-2xl font-bold">Drag your file here</h2>
                    <h2 className="text-2xl font-bold">Or</h2>
                    <input
                        className="hidden"
                        type="file"
                        accept="video/*"
                        ref={inputRef}
                        onChange={handleInputChange}
                    />
                    <Button
                        onClick={handleButtonClick}
                        className="border-2 border-solid border-black dark:border-white w-[180px] h-[70px] text-[25px] font-bold"
                    >
                        Browser
                    </Button>
                </div>
            </div>
            {isModal && <Modal title="Do you want to go to the video editing step?" onOk={onOk} onCancel={onCancel} />}
            {isCloseModal && (
                <Modal
                    title="Do you want to reload, changes you made may not be saved.?"
                    onOk={onOpenCloseModal}
                    onCancel={handleCancelCloseModal}
                />
            )}

            {isRenderSelectCourse && (
                <ModalSelectCourse
                    setRenderSelectCourse={setRenderSelectCourse}
                    setConfirmEditModal={setIsModal}
                    setIsCloseModal={setIsCloseModal}
                />
            )}
        </>
    );
}
