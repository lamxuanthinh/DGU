import { IVideoPayload } from "@/model/video";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Comments from "../../Comments/Comments";
import ActionVideo from "../ActionVideo";
import DescriptionVideo from "../DescriptionVideo";

interface IModalNormalVideo {
    dataVideo: IVideoPayload;
    modalVideoRef: any;
    statusModal: string;
    handlePlayByPlayerModal: () => void;
    handlePauseByPlayerModal: () => void;
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    setTimePlayerModal: (value: string | number) => void;
    isOpenModalVideo: boolean;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
}

export default function ModalNormalVideo({
    dataVideo,
    modalVideoRef,
    statusModal,
    handlePlayByPlayerModal,
    handlePauseByPlayerModal,
    currentTime,
    setCurrentTime,
    setTimePlayerModal,
    isOpenModalVideo,
    handleCloseModal,
    handleOpenModal,
}: IModalNormalVideo) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeoutRef: any = useRef<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState(false);

    const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const videoElement = event.currentTarget;
        setCurrentTime(videoElement.currentTime);
    };

    return (
        <div
            className={`fixed top-0 right-0 left-0 bottom-0 ${
                isOpenModalVideo ? "flex" : "hidden"
            } items-center justify-center bg-black ${isHovered ? "video_container" : ""}`}
        >
            <div className="h-full w-full relative">
                <video ref={modalVideoRef} controls={false} loop onTimeUpdate={handleTimeUpdate}>
                    <source src={dataVideo.video} type="video/mp4" />
                </video>
                <div
                    onClick={() => {
                        if (statusModal == "Playing") {
                            handlePauseByPlayerModal();
                        } else if (statusModal == "Paused") {
                            handlePlayByPlayerModal();
                        }
                        setComment(false);
                    }}
                    className={`absolute top-0 w-[100%] h-[100%]`}
                ></div>

                <div
                    className="closeButton opacity-0 transition duration-500 ease-in-out p-[10px] rounded-[50%] absolute top-5 left-5 bg-[#92929280] hover:cursor-pointer hover:bg-[#b7b7b7]"
                    onClick={() => {
                        setComment(false);
                        handleCloseModal();
                    }}
                >
                    <CgClose fontSize={20} />
                </div>
            </div>
        </div>
    );
}
