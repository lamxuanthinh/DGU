import { IVideoShortPayload } from "@/model/video";
import { useElementOnScreen } from "@/utils/useElementOnScreen";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Comments from "../../Comments/Comments";
import ActionVideo from "../ActionVideo";
import ControlsVideo from "../ControlsVideo";
import DescriptionVideo from "../DescriptionVideo";

interface INormalVideo {
    data: IVideoShortPayload;
}

export default function NormalVideo({ data }: INormalVideo) {
    const [comment, setComment] = useState(false);
    const [statusModal, setStatusModal] = useState("NA");
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isOpenModalVideo, setOpenModalVideo] = useState(false);

    console.log(statusModal, ":", currentTime);

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

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
        setStatusModal("Playing");
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setStatusModal("Paused");
    };

    const setTimePlayer = (value: any) => {
        if (videoRef && videoRef.current) {
            videoRef.current.currentTime = value;
        }
    };

    const handleCloseModal = () => {
        // setOpenModalVideo(false);
        // if (window.history.length > 2) {
        //     window.history.back();
        // }
        // setTimePlayer(currentTime - data.break_point);
    };

    const handleOpenModal = () => {
        // setOpenModalVideo(!isOpenModalVideo);
        // const currentPathname = window.location.pathname;
        // if (!currentPathname.includes("video/")) {
        //     window.history.pushState(null, "", `video/${data.video_id}`);
        // }
        // setTimePlayerModal(currentTime + data.break_point);
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
                    statusVideo={statusModal}
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
            </div>
        </div>
    );
}
