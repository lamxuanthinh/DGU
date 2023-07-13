import React, { Dispatch, SetStateAction, useRef, useEffect, memo } from 'react'
import { useAppContext } from '@/Context';
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai"
interface IVideoProps {
  isPlaying: boolean,
  moveVideo: number
  setDuration: Dispatch<SetStateAction<number>>,
  setCurrentTime: Dispatch<SetStateAction<number>>,
  valueVolume: {
    pre: string,
    current: string,
  },
  setValueVolume: Dispatch<SetStateAction<{
    pre: string,
    current: string,
  }>>,
  isStartVideo: boolean,
  duration: number,
}
function Video({ isPlaying, moveVideo, duration, setDuration, setCurrentTime, valueVolume, isStartVideo }: IVideoProps) {

  const { dataEditVideo } = useAppContext();
  const videoRef = useRef<HTMLVideoElement>(null);
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
    if (isStartVideo && videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }, [isStartVideo]);

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
          src={dataEditVideo}

          className="h-full w-full"
        >
        </video>
      </div>

    </div>
  )
}
export default memo(Video)