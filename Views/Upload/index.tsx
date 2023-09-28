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

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
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

    const onOk = () => {
        setIsLoading(true);
        if (canvasRef.current) {
            let ctx = canvasRef.current.getContext("2d");
            if (ctx && videoRef.current) {
                ctx.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight);
                setThumbVideoEdit(canvasRef.current.toDataURL());

                canvasRef.current.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], "image.jpg", { type: blob.type });
                        setFileThumbVideoUpload(file);
                    }
                }, "image/jpeg");
            }
        }
        push("/editvideo");
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

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files != null) {
            if (handleFileSelect(files[0]) === true) {
                const blob = new Blob([files[0]], { type: "image/png" });
                const url = URL.createObjectURL(blob);
                if (videoRef.current) {
                    videoRef.current.src = URL.createObjectURL(blob);
                    videoRef.current.load();
                    videoRef.current.onloadeddata = () => {
                        if (canvasRef.current && videoRef.current) {
                            canvasRef.current.width = videoRef.current.videoWidth;
                            canvasRef.current.height = videoRef.current.videoHeight;
                        }
                    };
                }
                setSrcVideoEdit(url);
                setFileVideoUpload(files[0]);
                setStepSelected(0);
                setRenderSelectCourse(!isRenderSelectCourse);
            } else {
                alert("This is not video file.");
            }
        }
    };

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files != null) {
            if (handleFileSelect(files[0]) === true) {
                const blob = new Blob([files[0]], { type: "image/png" });
                const url = URL.createObjectURL(blob);
                if (videoRef.current) {
                    videoRef.current.src = URL.createObjectURL(blob);
                    videoRef.current.load();
                    videoRef.current.onloadeddata = () => {
                        if (canvasRef.current && videoRef.current) {
                            canvasRef.current.width = videoRef.current.videoWidth;
                            canvasRef.current.height = videoRef.current.videoHeight;
                        }
                    };
                }
                setSrcVideoEdit(url);
                setFileVideoUpload(files[0]);
                setStepSelected(0);
                setRenderSelectCourse(!isRenderSelectCourse);
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
                    className="relative flex flex-col items-center gap-y-5 w-full border-2 border-black border-dashed h-full pt-[70px] pb-20"
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
                        className="border-2 border-solid border-black w-[180px] h-[70px] text-[25px] font-bold"
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
            <canvas ref={canvasRef} className="fixed z-[-10] opacity-0" />
            <video ref={videoRef} className="fixed z-[-10] opacity-0" />
        </>
    );
}
