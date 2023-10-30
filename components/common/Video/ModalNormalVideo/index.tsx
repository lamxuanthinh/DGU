import { IShortVideoPayload } from "@/model/video";
import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Comments from "../../Comments/Comments";
import ActionVideo from "../ActionVideo";
import ControlsNormalVideo from "../ControlsNormalVideo";
import DescriptionVideo from "../DescriptionVideo";

interface IModalNormalVideo {
    data: IShortVideoPayload;
    videoRef: React.RefObject<HTMLVideoElement>;
    modalVideoRef: React.RefObject<HTMLVideoElement>;
    statusModal: string;
    handlePlayByPlayerModal: () => void;
    handlePauseByPlayerModal: () => void;
    isOpenModalVideo: boolean;
    setOpenModalVideo: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalNormalVideo({
    data,
    modalVideoRef,
    statusModal,
    handlePlayByPlayerModal,
    handlePauseByPlayerModal,
    isOpenModalVideo,
    setOpenModalVideo,
    videoRef,
}: IModalNormalVideo) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeoutRef: any = useRef<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const videoElement = event.currentTarget;
        setCurrentTime(videoElement.currentTime);
    };

    const setTimePlayer = (value: any) => {
        if (videoRef.current && isFinite(value)) {
            videoRef.current.currentTime = value;
        }
    };

    const setTimePlayerModal = (value: any) => {
        const timeUpdate = Math.round(value * 100) / 100 + data.controlData.point;

        if (modalVideoRef.current && isFinite(value)) {
            modalVideoRef.current.currentTime = timeUpdate;
        }
    };

    const handleCloseModal = () => {
        setOpenModalVideo(false);

        const currentPathname = window.location.pathname;
        let newPath = currentPathname.replace(`video/${data.fullVideoInfo._id}`, "");

        if (currentPathname.includes("video/")) {
            window.history.pushState(null, "", newPath);
            const timeUpdate = Math.round(currentTime * 100) / 100 - data.controlData.point;

            setTimePlayer(timeUpdate);
        }
    };

    useEffect(() => {
        videoRef && videoRef.current && setTimePlayerModal(videoRef.current.currentTime);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space") {
                event.preventDefault();

                if (statusModal == "Playing") {
                    handlePauseByPlayerModal();
                } else if (statusModal == "Paused") {
                    handlePlayByPlayerModal();
                }
            }

            if (event.key === "Escape") {
                event.preventDefault();
                handleCloseModal();
            }
        };

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
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("keydown", handleKeyDown);
            clearTimeout(hoverTimeoutRef.current);
        };
    }, [handleCloseModal]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            className={`fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-black ${
                isHovered ? "video_container" : ""
            }`}
        >
            {data && data.fullVideoInfo && (
                <div className="h-full w-full relative">
                    <video
                        className="h-full w-full"
                        ref={modalVideoRef}
                        controls={false}
                        loop
                        onTimeUpdate={handleTimeUpdate}
                    >
                        <source src={data.fullVideoInfo.video} type="video/mp4" />
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

                    <DescriptionVideo
                        setComment={setComment}
                        key={data.fullVideoInfo._id}
                        title={data.fullVideoInfo.title}
                        caption={data.fullVideoInfo.description}
                    />

                    <ActionVideo
                        comment={comment}
                        setComment={setComment}
                        pathAvatar={data.fullVideoInfo.thumbnail}
                        heartCount={100}
                        commentCount={93}
                        shareCount={57}
                    />

                    <ControlsNormalVideo
                        modalVideoRef={modalVideoRef}
                        setComment={setComment}
                        controlData={data.fullVideoInfo.controlData}
                        totalTime={modalVideoRef.current ? modalVideoRef.current.duration : 0}
                        statusVideo={statusModal}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        handlePlayByPlayer={handlePlayByPlayerModal}
                        handlePauseByPlayer={handlePauseByPlayerModal}
                        isOpenModalVideo={isOpenModalVideo}
                        handleCloseModal={handleCloseModal}
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
            )}
        </div>
    );
}
