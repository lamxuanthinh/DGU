import { useAppContext } from "@/Context";
import { IShortVideoPayload } from "@/model/video";
import { useElementOnScreen } from "@/utils/useElementOnScreen";
import React from "react";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Comments from "@/components/common/Comments/Comments";
import ActionVideo from "../ActionVideo";
import ControlsNormalVideo from "../ControlsNormalVideo";
import DescriptionVideo from "../DescriptionVideo";
import ModalNormalVideo from "../ModalNormalVideo";

interface INormalVideo {
    data: IShortVideoPayload;
}

export default function NormalVideo({ data }: INormalVideo) {
    const { isProcessPlayVideo, setProcessPlayVideo } = useAppContext();
    const [status, setStatus] = useState("NA");
    const [statusModal, setStatusModal] = useState("NA");
    const [comment, setComment] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [isOpenModalVideo, setOpenModalVideo] = useState(false);
    const dataFullVideo = data.fullVideoInfo;
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const modalVideoRef = React.useRef<HTMLVideoElement>(null);

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    const isVisibile = useElementOnScreen(options, videoRef);

    const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const videoElement = event.currentTarget;
        setCurrentTime(videoElement.currentTime);
    };

    const handleStart = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setStatus("Playing");
            setProcessPlayVideo("exist");
        }
    };

    const handlePlay = () => {
        if (isProcessPlayVideo !== "NA" && videoRef.current) {
            videoRef.current.play();
            setStatus("Playing");
        }
    };

    const handlePause = () => {
        if (isProcessPlayVideo !== "NA" && videoRef.current) {
            videoRef.current.pause();
            setStatus("Paused");
        }
    };

    const handlePlayModal = () => {
        if (isProcessPlayVideo !== "NA" && modalVideoRef.current) {
            modalVideoRef.current.play();
            setStatusModal("Playing");
        }
    };

    const handlePauseModal = () => {
        if (isProcessPlayVideo !== "NA" && modalVideoRef.current) {
            modalVideoRef.current.pause();
            setStatusModal("Paused");
            setComment(false);
        }
    };

    const handleOpenModal = () => {
        setOpenModalVideo(!isOpenModalVideo);

        const currentPathname = window.location.pathname;
        if (!currentPathname.includes("video/")) {
            window.history.pushState(null, "", `video/${dataFullVideo._id}`);
        }
    };

    useEffect(() => {
        if (isVisibile) {
            handlePlay();
        } else if (!isVisibile) {
            handlePause();
        }
    }, [isVisibile]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (isOpenModalVideo) {
            handlePlayModal();
            handlePause();
        } else if (!isOpenModalVideo) {
            handlePauseModal();
            handlePlay();
        }
    }, [isOpenModalVideo]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="w-full h-full select-none lg:bg-black">
            <div className="video_container">
                <video
                    className="absolute left-0 top-0 h-full w-full lg:object-cover bg-black"
                    ref={videoRef}
                    controls={false}
                    loop
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src={data.video} type="video/mp4" />
                </video>

                {status !== "NA" && (
                    <div
                        onClick={handleOpenModal}
                        className="absolute top-0 w-[100%] h-[100%] hover:cursor-pointer"
                    ></div>
                )}

                <div
                    onClick={() => {
                        if (status == "Playing") {
                            handlePause();
                        } else if (status == "Paused") {
                            handlePlay();
                        }
                    }}
                    onDoubleClick={handleOpenModal}
                    className={`absolute top-0 w-[100%] h-[100%] sm:hidden`}
                ></div>

                <DescriptionVideo
                    setComment={setComment}
                    key={data._id}
                    title={data.title}
                    caption={data.description}
                />

                <ControlsNormalVideo
                    modalVideoRef={videoRef}
                    setComment={setComment}
                    controlData={data.controlData}
                    totalTime={videoRef.current ? videoRef.current.duration : 0}
                    statusVideo={status}
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    handlePlayByPlayer={handlePlay}
                    handlePauseByPlayer={handlePause}
                    isOpenModalVideo={isOpenModalVideo}
                    handleOpenModal={handleOpenModal}
                />

                <ActionVideo
                    comment={comment}
                    setComment={setComment}
                    pathAvatar={data.thumbnail}
                    heartCount={100}
                    commentCount={93}
                    shareCount={57}
                />

                <Comments isComment={comment} setComment={setComment} currentUserId="1" />

                {isProcessPlayVideo === "NA" && (
                    <div
                        onClick={handleStart}
                        className="absolute top-0 w-[100%] h-[100%] hover:cursor-pointer flex justify-center items-center"
                    >
                        <div className="w-[85px] h-[85px] bg-[#00000029] hover:bg-[#0db7d5] rounded-[50%] flex items-center justify-center ">
                            <FaPlay className="w-[37px] h-[45px] ml-1" />
                        </div>
                    </div>
                )}
            </div>

            {isOpenModalVideo && (
                <ModalNormalVideo
                    data={data}
                    videoRef={videoRef}
                    modalVideoRef={modalVideoRef}
                    statusModal={statusModal}
                    handlePlayByPlayerModal={handlePlayModal}
                    handlePauseByPlayerModal={handlePauseModal}
                    isOpenModalVideo={isOpenModalVideo}
                    setOpenModalVideo={setOpenModalVideo}
                />
            )}
        </div>
    );
}
