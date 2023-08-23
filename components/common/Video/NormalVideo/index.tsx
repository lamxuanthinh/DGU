import { useAppContext } from "@/Context";
import { IVideoShortPayload } from "@/model/video";
import { useElementOnScreen } from "@/utils/useElementOnScreen";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Comments from "../../Comments/Comments";
import ActionVideo from "../ActionVideo";
import ControlsVideo from "../ControlsVideo";
import DescriptionVideo from "../DescriptionVideo";
import ModalNormalVideo from "../ModalNormalVideo";
import ModalVideo from "../ModalVideo";

interface INormalVideo {
    data: IVideoShortPayload;
}

export default function NormalVideo({ data }: INormalVideo) {
    const { isProcessPlayVideo, setProcessPlayVideo } = useAppContext();
    const [comment, setComment] = useState(false);
    const [status, setStatus] = useState("NA");
    const [statusModal, setStatusModal] = useState("NA");
    const [currentTime, setCurrentTime] = useState(0);
    const [isOpenModalVideo, setOpenModalVideo] = useState(false);
    const dataFullVideo = data.fullVideoInfo;
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const modalVideoRef = React.useRef<HTMLVideoElement>(null);
    const [currentTimeModal, setCurrentTimeModal] = useState(0);

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
        if (modalVideoRef.current) {
            modalVideoRef.current.play();
            setStatusModal("Playing");
        }
    };

    const handlePauseModal = () => {
        if (modalVideoRef.current) {
            modalVideoRef.current.pause();
            setStatusModal("Paused");
            setComment(false);
        }
    };

    const setTimePlayer = (value: any) => {
        if (videoRef && videoRef.current) {
            videoRef.current.currentTime = value;
        }
    };

    const setTimePlayerModal = (value: any) => {
        if (modalVideoRef.current) {
            modalVideoRef.current.currentTime = value;
        }
    };

    const handleCloseModal = () => {
        setOpenModalVideo(false);
        // if (window.history.length > 2) {
        //     window.history.back();
        // }
        setTimePlayer(currentTime - data.break_point);
    };

    const handleOpenModal = () => {
        setOpenModalVideo(!isOpenModalVideo);
        // const currentPathname = window.location.pathname;
        // if (!currentPathname.includes("video/")) {
        //     window.history.pushState(null, "", `video/${data.video_id}`);
        // }
        setTimePlayerModal(currentTime + data.break_point);
    };

    useEffect(() => {
        if (isVisibile) {
            handlePlay();
        } else if (!isVisibile) {
            handlePause();
        }
    }, [isVisibile]);

    return (
        <div className="w-full h-full select-none">
            <div className="video_container">
                <video ref={videoRef} controls={false} onTimeUpdate={handleTimeUpdate}>
                    <source src={data.pathVideo} type="video/mp4" />
                </video>

                {status !== "NA" && (
                    <div
                        onClick={handleOpenModal}
                        className="absolute top-0 w-[100%] h-[100%] hover:cursor-pointer"
                    ></div>
                )}

                <Comments isComment={comment} setComment={setComment} currentUserId="1" />

                <DescriptionVideo
                    setComment={setComment}
                    key={data.video_id}
                    title={data.title}
                    caption={data.caption}
                    hashtags={data.hashtags}
                />

                <ControlsVideo
                    setComment={setComment}
                    dataVideo={data}
                    totalTime={data.duration}
                    statusVideo={status}
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    handlePlayByPlayer={handlePlay}
                    handlePauseByPlayer={handlePause}
                    setTimePlayerModal={setTimePlayer}
                    isOpenModalVideo={isOpenModalVideo}
                    handleCloseModal={handleCloseModal}
                    handleOpenModal={handleOpenModal}
                />

                <ActionVideo
                    comment={comment}
                    setComment={setComment}
                    pathAvatar={data.author.pathAvatar}
                    heartCount={100}
                    commentCount={93}
                    shareCount={57}
                />

                {isProcessPlayVideo === "NA" && (
                    <div
                        onClick={() => {
                            handleStart();
                        }}
                        className="absolute top-0 w-[100%] h-[100%] hover:cursor-pointer flex justify-center items-center"
                    >
                        <div className="w-[85px] h-[85px] bg-[#00000029] hover:bg-[#0db7d5] rounded-[50%] flex items-center justify-center ">
                            <FaPlay className="w-[37px] h-[45px] ml-1" />
                        </div>
                    </div>
                )}
            </div>

            {/* <ModalNormalVideo
                dataVideo={dataFullVideo}
                modalVideoRef={modalVideoRef}
                statusModal={status}
                handlePlayByPlayerModal={handlePlayModal}
                handlePauseByPlayerModal={handlePauseModal}
                currentTime={currentTimeModal}
                setCurrentTime={setCurrentTimeModal}
                setTimePlayerModal={setTimePlayerModal}
                isOpenModalVideo={isOpenModalVideo}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
            /> */}
        </div>
    );
}
