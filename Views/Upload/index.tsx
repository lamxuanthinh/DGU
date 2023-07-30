import React, { useRef, useState } from "react";
import { useRouter } from 'next/router'
import Modal from "../../components/common/Modal";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAppContext } from "@/Context";

export default function Upload() {
    const { setSrcVideoEdit, setThumbVideoEdit, setIsLoading } = useAppContext();
    const { push } = useRouter();
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFileSelect(videoFile: File): boolean {
        const file = videoFile;
        const fileName = file.name;
        const fileExtension: string = fileName.split('.').pop()!.toLocaleLowerCase();
        const allowedExtensions: string[] = ['mp4', 'avi', 'mov'];
        if (allowedExtensions.includes(fileExtension)) {
            return true;
        }
        else {
            return false;
        }
    }

    const onOk = () => {
        setIsLoading(true);
        if (canvasRef.current) {
            let ctx = canvasRef.current.getContext("2d");
            if (ctx && videoRef.current) {
                ctx.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight);
                setThumbVideoEdit(canvasRef.current.toDataURL())
            }
        }
        push("/editvideo");
        setIsLoading(false);
    }

    const onCancel = () => {
        setIsModal(false)
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (inputRef.current) {
            inputRef.current.files = event.dataTransfer.files;
            if (inputRef.current.files.length > 0) {
                if (handleFileSelect(inputRef.current.files[0]) === true) {
                    setIsModal(true);
                    const blob = new Blob([files[0]], { type: 'image/png' })
                    const url = URL.createObjectURL(blob);
                    setSrcVideoEdit(url);
                }
                else {
                    alert('This is not video file.');
                    inputRef.current.value = '';
                }
            } else {
                console.log('Không có file được chọn');
            }
        }
    };

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files != null) {
            if (handleFileSelect(files[0]) === true) {
                const blob = new Blob([files[0]], { type: 'image/png' })
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
                sessionStorage.setItem("srcVideoEdit", url);
                setIsModal(true);
            }
            else {
                alert('This is not video file.');
                event.target.value = '';
            }
        }
    };

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    return (
        <>
            <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
                <div className="w-[80%] h-[100%] flex flex-col ">
                    <div className="w-[100%] h-[100px]  flex justify-start items-center">
                        <p className="font-bold text-[25px]">Upload your file below</p>
                    </div>
                    <div className="w-[100%] h-[90%] flex justify-center items-center">
                        <div
                            className={`w-[100%] h-[90%] border-dashed border-2 border-black flex justify-center items-center drag-drop-area 
                            ${isDragging ? 'dragging' : ''}
                            `}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="w-[50%] h-[90%]  flex flex-col justify-center items-center ">
                                <div className="w-[100%] h-1/3 flex flex-col justify-center items-center">
                                    <FaCloudUploadAlt className="h-full w-full flex items-center justify-center " size={100} />
                                </div>
                                <div className="w-[100%] h-1/3 my-[10px] flex flex-col justify-center items-center">
                                    <div className="w-[100%] h-[60px] my-[10px]  flex justify-center items-end">
                                        <p className="font-bold  text-2xl ">
                                            Drag your file here
                                        </p>
                                    </div>
                                    <div className="w-[100%] h-[60px] my-[10px]  flex justify-center items-start">
                                        <p className="font-bold  text-2xl ">
                                            Or
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[100%] h-1/3 my-[10px]  flex justify-center items-center">
                                    <input className="hidden" type="file" accept="video/*" ref={inputRef} onChange={handleInputChange} />
                                    <div onClick={handleButtonClick} className="w-[180px] h-[70px] border-2 border-solid boder-[#000000] flex justify-center items-center cursor-pointer">
                                        <p className="font-bold text-[25px]">Browser</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModal &&
                <Modal
                    title="Do you want to go to the video editing step?"
                    onOk={onOk}
                    onCancel={onCancel}
                />
            }
            <canvas ref={canvasRef} className="fixed z-[-10] opacity-0" />
            <video ref={videoRef} className="fixed z-[-10] opacity-0" />
        </>
    )
}
