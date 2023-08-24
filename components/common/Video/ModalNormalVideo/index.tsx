import { IVideoPayload } from "@/model/video";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Comments from "../../Comments/Comments";
import ActionVideo from "../ActionVideo";
import ControlsNormalVideo from "../ControlsNormalVideo";
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

    useEffect(() => {
        // const handleKeyDown = (event: KeyboardEvent) => {
        //     if (event.code === "Space") {
        //         event.preventDefault();
        //     }
        //     if (event.key === "Escape") {
        //         handleCloseModal();
        //     }
        // };

        const handleMouseMove = () => {
            if (!isHovered) {
                setIsHovered(true);
                clearTimeout(hoverTimeoutRef.current);
                hoverTimeoutRef.current = setTimeout(() => {
                    setIsHovered(false);
                }, 2000);
            }
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            clearTimeout(hoverTimeoutRef.current);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        // document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            // document.removeEventListener("keydown", handleKeyDown);
            clearTimeout(hoverTimeoutRef.current);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            className={`fixed top-0 right-0 left-0 bottom-0 ${
                isOpenModalVideo ? "flex" : "hidden"
            } items-center justify-center bg-black ${isHovered ? "video_container" : ""}`}
        >
            <div className="h-full w-full relative">
                <video
                    className="h-full w-full"
                    ref={modalVideoRef}
                    controls={false}
                    loop
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src={dataVideo.video} type="video/mp4" />
                </video>

                <div
                    onClick={() => {
                        console.log(statusModal);

                        if (statusModal == "Playing") {

                            handlePauseByPlayerModal();
                        } else if (statusModal == "Paused") {
                            console.log(2);

                            handlePlayByPlayerModal();
                        }
                        setComment(false);
                    }}
                    className={`absolute top-0 w-[100%] h-[100%]`}
                ></div>

                <DescriptionVideo
                    setComment={setComment}
                    key={dataVideo._id}
                    title={dataVideo.title}
                    caption={dataVideo.description}
                />

                <ActionVideo
                    comment={comment}
                    setComment={setComment}
                    pathAvatar={dataVideo.thumbnail}
                    heartCount={100}
                    commentCount={93}
                    shareCount={57}
                />

                <ControlsNormalVideo
                    setComment={setComment}
                    controlData={dataVideo.controlData}
                    totalTime={modalVideoRef.current ? modalVideoRef.current.duration : 0}
                    statusVideo={statusModal}
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    handlePlayByPlayer={handlePlayByPlayerModal}
                    handlePauseByPlayer={handlePauseByPlayerModal}
                    setTimePlayerModal={setTimePlayerModal}
                    isOpenModalVideo={isOpenModalVideo}
                    handleCloseModal={handleCloseModal}
                    handleOpenModal={handleOpenModal}
                />

                <div
                    className="closeButton opacity-0 transition duration-500 ease-in-out p-[10px] rounded-[50%] absolute top-5 left-5 bg-[#92929280] hover:cursor-pointer hover:bg-[#b7b7b7]"
                    onClick={() => {
                        setComment(false);
                        handleCloseModal();
                    }}
                >
                    <CgClose fontSize={20} />
                </div>

                {comment && <Comments isComment={comment} setComment={setComment} currentUserId="1" />}
            </div>
        </div>
    );
}
