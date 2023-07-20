import React, { Dispatch, SetStateAction, useRef, useEffect, memo, useState } from 'react'
import { IValueVolumeVideo } from '@/model/EditVideo';
import { useAppContext } from '@/Context';

interface IVideoProps {
  isPlaying: boolean,
  moveVideo: number
  setDuration: Dispatch<SetStateAction<number>>,
  setCurrentTime: Dispatch<SetStateAction<number>>,
  valueVolume: IValueVolumeVideo,
}

function Video({ isPlaying, moveVideo, setDuration, valueVolume, setCurrentTime }: IVideoProps) {
  const [srcVideo, setSrcVideo] = useState<string>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const srcVideoEdit = sessionStorage.getItem("srcVideoEdit") || "";
    setSrcVideo(srcVideoEdit);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = moveVideo;
    }
  }, [moveVideo]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = parseInt(valueVolume.current) / 100;
    }
  }, [valueVolume]);

  const handleGetDuration = (event: React.ChangeEvent<HTMLVideoElement>) => {
    const duration = event.currentTarget.duration;
    setDuration(duration)
  }

  const handleUpdateTime = (event: React.ChangeEvent<HTMLVideoElement>) => {
    const timeUpdate = event.currentTarget.currentTime;
    setCurrentTime(timeUpdate)
  }

  return (
    <div className="flex flex-1 items-center justify-center h-full gap-y-5 rounded-[5px] bg-[#121212] py-2">
      <div className='rounded-[10px] h-full w-full overflow-hidden max-w-[1000px]'>
        <video
          onTimeUpdate={handleUpdateTime}
          onLoadedMetadata={handleGetDuration}
          ref={videoRef}
          src={srcVideo}
          controls
          className="h-full w-full"
        >
        </video>
      </div>
    </div>
  )
}
export default memo(Video)