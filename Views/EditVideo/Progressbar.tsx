import React, { Dispatch, SetStateAction, useState, useEffect, useRef, } from 'react'
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai"
interface IProgressbarProps {
     currentTime: number,
     setCurrentTime: Dispatch<SetStateAction<number>>,
     duration: number,
     isPlaying: boolean,
     setIsPlaying: Dispatch<SetStateAction<boolean>>,
     setMoveVideo: Dispatch<SetStateAction<number>>
}
type TDataSplit = {
     id: number,
     width: number,
     start: number,
     end: number
}
const VALUE_BORDER_PROGRESS = 6;

export default function Progressbar({ currentTime, duration, isPlaying, setIsPlaying, setMoveVideo }: IProgressbarProps) {
     const progressRef = useRef<HTMLDivElement>(null);
     const [valuePointer, setValuePointer] = useState<number>(0);
     const [valuePointerMove, setValuePointerMove] = useState<number>(0);
     const [isShouldBlurPointer, setIsShouldBlurPointer] = useState<boolean>();
     const [isBlurPointer, setIsBlurPointer] = useState<boolean>();
     const [timeValue, setTimeValue] = useState<string>();
     const [timeValueVirtual, setTimeValueVirtual] = useState<string>();
     const [widthProgress, setWidthProgress] = useState<number>(0);
     const [dataSplit, setDataSplit] = useState<Array<TDataSplit>>([{
          id: 1,
          width: 100,
          start: 0,
          end: 100,
     }]);
     const [currentProgress, setCurrentProgress] = useState<TDataSplit>(dataSplit[0]);


     useEffect(() => {
          if (progressRef.current) {
               const widthProgress = progressRef.current.offsetWidth - VALUE_BORDER_PROGRESS * 2;
               setWidthProgress(widthProgress)
          }
     }, [progressRef.current?.offsetWidth])

     useEffect(() => {
          let currentPx = currentTime * widthProgress / duration
          const valueEndProgressPx = (currentProgress?.end * (widthProgress + (VALUE_BORDER_PROGRESS * 2)) / 100) - 15;
          if (currentPx === valueEndProgressPx || currentPx > valueEndProgressPx) {
               // console.log(valueEndProgressPx);
               // const index = dataSplit.findIndex((itemSlipt) => itemSlipt.id === currentProgress.id)
               // setCurrentProgress(dataSplit[index + 1]);
               setValuePointer(valueEndProgressPx);
               setIsPlaying(false);
          } else {
               setValuePointer(currentPx);
          }
          setTimeValue(formatTime(currentTime));
     }, [currentTime]);

     const formatTime = (time: number) => {
          const hours = Math.floor(time / 60);
          const minutes = Math.floor(time % 60);
          const formattedHours = hours.toString().padStart(2, '0');
          const formattedMinutes = minutes.toString().padStart(2, '0');
          return `${formattedHours}:${formattedMinutes}`;
     };

     const calcPositionPointer = (event: React.MouseEvent<HTMLDivElement>) => {
          let value = 0;
          if (progressRef.current) {
               value = event.clientX - progressRef.current.getBoundingClientRect().left
          }
          return value;
     }

     const handlePlayVideo = () => {
          setIsPlaying(!isPlaying);
     }

     const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>, dataItem: TDataSplit) => {
          if (isPlaying) {
               setIsPlaying(false);
          }
          const valuePositionCursor = calcPositionPointer(event) - VALUE_BORDER_PROGRESS;
          const timeMoveVideo = valuePositionCursor / widthProgress * 100;
          setMoveVideo(timeMoveVideo);
          setValuePointer(valuePositionCursor);
          setIsShouldBlurPointer(false);
          setIsBlurPointer(false);
          setCurrentProgress(dataItem);
     }

     const handleProgressBarMove = (event: React.MouseEvent<HTMLDivElement>) => {
          const valuePointerBlurMove = calcPositionPointer(event);
          if (valuePointerBlurMove === valuePointer) {
               setIsBlurPointer(false);
          } else {
               const currentTimeBlur = (valuePointerBlurMove / (widthProgress + VALUE_BORDER_PROGRESS) * 100) * duration / 100;
               setTimeValueVirtual(formatTime(currentTimeBlur))
               setIsBlurPointer(true);
               setValuePointerMove(valuePointerBlurMove);
          }
     }

     const handleLeaveProgress = () => {
          setIsShouldBlurPointer(true);
          setIsBlurPointer(false)
     }

     const handleEnterProgress = () => {
          if (isShouldBlurPointer) {
               setIsBlurPointer(true)
          }
     }

     const handleSplit = () => {
          const index = dataSplit.findIndex((itemSlipt) => itemSlipt.id === currentProgress.id)
          const valuePositionSplit = (valuePointer + VALUE_BORDER_PROGRESS) / (widthProgress + (VALUE_BORDER_PROGRESS * 2)) * 100;
          const widthNewEle = currentProgress.width - (valuePositionSplit - currentProgress.start);
          const startNewEle = valuePositionSplit;
          const endNewEle = currentProgress.end;
          const newEle: TDataSplit = {
               id: dataSplit.length + 1,
               width: widthNewEle,
               start: startNewEle,
               end: endNewEle,
          }
          dataSplit[index].width = valuePositionSplit - currentProgress.start;
          dataSplit[index].start = currentProgress.start;
          dataSplit[index].end = valuePositionSplit;
          setDataSplit((prevData) => {
               const newData = [...prevData];
               newData.splice(index + 1, 0, newEle);
               return newData;
          });
          setValuePointer(valuePointer + VALUE_BORDER_PROGRESS);
     }

     return (
          <div className="flex items-center gap-4 h-[76px] bg-[#1F1F1F] rounded-xl px-5 py-4 text-white flex-shrink-0" >
               <button className="text-4xl cursor-pointer outline-none" onClick={handlePlayVideo}>
                    {isPlaying ? <AiOutlinePauseCircle></AiOutlinePauseCircle> : <AiOutlinePlayCircle ></AiOutlinePlayCircle>}
               </button>
               <div ref={progressRef} className="h-full flex-1 flex relative">
                    {dataSplit.map((itemSlipt) => {
                         return <div key={itemSlipt.id} style={{ width: `${itemSlipt.width}%` }} className="h-full border-x-[6px] border-y-[5px] border-[#5D82E2] rounded-[10px] relative">
                              <div className="w-full h-full relative bg-[#3D3D3D] cursor-pointer rounded-[4px] z-50"
                                   onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
                                        handleProgressBarMove(event)
                                   }
                                   }
                                   onMouseLeave={handleLeaveProgress}
                                   onMouseEnter={handleEnterProgress}
                                   onClick={(event: React.MouseEvent<HTMLDivElement>) => handleProgressBarClick(event, itemSlipt)}
                              >
                                   <span className="absolute w-[1.5px] h-4/5 bg-[#3D3D3D] left-[-4px] top-1"></span>
                                   <span className="absolute w-[1.5px] h-4/5 bg-[#3D3D3D] right-[-4px] top-1"></span>
                              </div>
                         </div>
                    })}
                    <div className={`absolute top-[-10px] bottom-0 z-50 cursor-pointer flex flex-col items-center mx-[-2px]`} style={{ left: `${valuePointer}px` }}>
                         <span className="absolute top-[-20px] text-[#ccc]">
                              {timeValue}
                         </span>
                         <div className="triangle">
                         </div>
                         <div className="w-[0.2rem] h-[46px] bg-white">
                         </div>
                    </div>
                    {isBlurPointer &&
                         <div style={{ left: valuePointerMove + "px" }} className={`absolute top-[-10px] bottom-0 z-50 translate-x-[-8px] cursor-pointer pointer-events-none`}>
                              <div className="absolute bottom-[0] left-[8px] w-[0.2rem] h-[44px] bg-[#9b9b9b] opacity-50">
                              </div>
                              <div className="absolute left-[-10px] top-[-15px] opacity-50 select-none">
                                   {timeValueVirtual}
                              </div>
                         </div>
                    }
               </div>
          </div >
     )
}
