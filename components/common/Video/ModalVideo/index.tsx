import { IDRMVideoPayload } from "@/model/video";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import ControlsVideo from "../ControlsVideo";
import DescriptionVideo from "../DescriptionVideo";
import ActionVideo from "../ActionVideo";
import Comments from "@/components/common/Comments/Comments";

interface IModalVideo {
    dataVideo: IDRMVideoPayload;
    modalVideoRef: MutableRefObject<null>;
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

export default function ModalVideo({
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
}: IModalVideo) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeoutRef: any = useRef<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space") {
                event.preventDefault();
            }
            if (event.key === "Escape") {
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            className={`fixed top-0 right-0 left-0 bottom-0 ${
                isOpenModalVideo ? "flex" : "hidden"
            } items-center justify-center bg-black ${isHovered ? "video_container" : ""}`}
        >
            <div className="h-full w-full relative" ref={modalVideoRef}>
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

                <DescriptionVideo
                    setComment={setComment}
                    key={dataVideo.video_id}
                    title={dataVideo.title}
                    caption={dataVideo.caption}
                    hashtags={dataVideo.hashtags}
                />
                <ActionVideo
                    comment={comment}
                    setComment={setComment}
                    pathAvatar={dataVideo.author.pathAvatar}
                    heartCount={100}
                    commentCount={93}
                    shareCount={57}
                />

                <ControlsVideo
                    setComment={setComment}
                    dataVideo={dataVideo.video_id_children}
                    totalTime={dataVideo.duration}
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
                {comment && <Comments isComment={comment} setComment={setComment} currentUserId="1" />}
            </div>
        </div>
    );
}
