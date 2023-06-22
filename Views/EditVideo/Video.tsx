import React, { Dispatch, SetStateAction, useRef, useEffect, SyntheticEvent, useState } from 'react'
interface IVideoProps {
  currentTime: number,
  setCurrentTime: Dispatch<SetStateAction<number>>,
  isPlaying: boolean,
  setIsPlaying: Dispatch<SetStateAction<boolean>>,
  moveVideo: number
  setDuration: Dispatch<SetStateAction<number>>,
  duration: number
}

export default function Video({ setCurrentTime, isPlaying, moveVideo, duration, setDuration }: IVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const valueTime = moveVideo * duration / 100;
    if (videoRef.current) {
      videoRef.current.currentTime = valueTime;
    }
  }, [moveVideo]);

  useEffect(() => {
    if (videoRef.current) {
      const video = document.createElement('video');
      video.src = videoRef.current.src
      video.preload = 'metadata';
      video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);
        const duration = video.duration;
        setDuration(duration)
      }
    }
  }, [])

  return (
    <div className="flex flex-1 justify-center bg-[#1F1F1F] rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        onTimeUpdate={(event) => {
          setCurrentTime(event.currentTarget.currentTime)
        }}
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SAKGwKC/music-notes-loop-background_ea9oxnoye__294811f495ec6530c480f0e48a37e6c9__P720.mp4?type=preview&origin=VIDEOBLOCKS&timestamp_ms=1687291346741&publicKey=2lokuPIv3fAKGDKliUAiyHgdBftPlUJJXmQIeeI4MNa58ZQpXYMoH4pj1NB37cRu&organizationId=103593&apiVersion=2.0&stockItemId=1418412&resolution=720p&endUserId=a94a8fe5ccb19ba61c4c0873d391e987982fbbd3&projectId=test&searchId=caf11cee-d34c-4cc7-9975-20c90f8cbea4&searchPageId=c3730f2c-6d9a-47a6-90b2-8d5f9c717ab8"
        controls
        className="h-full"
      >
      </video>
    </div>
  )
}
