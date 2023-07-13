import React, { Dispatch, SetStateAction, useState, useEffect, useRef, memo } from 'react'
import { useAppContext } from '@/Context'
import { AiOutlinePauseCircle, AiOutlinePlayCircle, AiOutlineSound, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai"
import { VscMute } from "react-icons/vsc"
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
type TDataSplit = {
     id: number,
     width: number,
     start: number,
     end: number,
     startTime: number,
     endTime: number
}
interface IProgressbarProps {
     dataSplit: Array<TDataSplit>,
     valuePointer: number,
     setValuePointer: Dispatch<SetStateAction<number>>,
     widthProgress: number,
     setWidthProgress: Dispatch<SetStateAction<number>>,
     duration: number,
     isPlaying: boolean,
     setIsPlaying: Dispatch<SetStateAction<boolean>>,
     valueCounter: number,
     setValueCounter: Dispatch<SetStateAction<number>>,

     onProgressBarClick: (dataItem: TDataSplit, valuePositionCursor: number) => void,
     valueVolume: {
          pre: string,
          current: string,
     },
     setValueVolume: Dispatch<SetStateAction<{
          pre: string,
          current: string,
     }>>,
     setMoveVideo: Dispatch<SetStateAction<number>>,
     currentTime: number,
}
const VALUE_BORDER_PROGRESS = 0;
const VALUE_WIDTH_POINTER = 2;
const VALUE_SPACING_PROGRESS = 8;
const VALUE_PADDING_PROGRESS = 16;
const VALUE_TIME_SKIP_VIDEO = 30;

function Progressbar({ dataSplit, valuePointer, setValuePointer, widthProgress, setWidthProgress, duration, isPlaying, setIsPlaying, valueCounter, onProgressBarClick, valueVolume, setValueVolume, currentTime, setMoveVideo, setValueCounter }: IProgressbarProps) {
     const { dataEditVideo, dataImage } = useAppContext();

     const progressRef = useRef<HTMLDivElement>(null);
     const [valuePointerMove, setValuePointerMove] = useState<number>(0);
     const [isShouldBlurPointer, setIsShouldBlurPointer] = useState<boolean>();
     const [isBlurPointer, setIsBlurPointer] = useState<boolean>();
     const [timeValue, setTimeValue] = useState<string>();
     const [timeValueVirtual, setTimeValueVirtual] = useState<string>();
     const [indexActiveProgress, setIndexActiveProgress] = useState<number>(-1);
     const [isMute, setIsMute] = useState<boolean>(false);

     useEffect(() => {
          if (progressRef.current) {
               const widthProgress = progressRef.current.offsetWidth - VALUE_PADDING_PROGRESS * 2;
               setWidthProgress(widthProgress)
          }
     }, [progressRef.current?.offsetWidth])

     const onCalcValuePointerSkip = () => {
          const valuePercentTimeSkip = VALUE_TIME_SKIP_VIDEO / duration;
          const valuePointerSkip = valuePercentTimeSkip * widthProgress;
          return valuePointerSkip;
     }


     const handleSkipBackVideo = () => {
          const valuePointerSkip = onCalcValuePointerSkip();

          if ((currentTime - VALUE_TIME_SKIP_VIDEO) < 0) {
               setMoveVideo(0);
               setValueCounter(0);
               setValuePointer(0);
          } else {
               setValuePointer((pre) => pre - valuePointerSkip)
               setMoveVideo(currentTime - VALUE_TIME_SKIP_VIDEO);
          }
     }

     const handleSkipForwardVideo = () => {
          const valuePointerSkip = onCalcValuePointerSkip();
          if ((currentTime + VALUE_TIME_SKIP_VIDEO) > duration) {
               setMoveVideo(duration);
               setIsPlaying(false)
               setValuePointer(widthProgress);
          } else {
               setValuePointer((pre) => pre + valuePointerSkip)
               setMoveVideo(currentTime + VALUE_TIME_SKIP_VIDEO)
          }

     }

     const handleToggleVolume = () => {
          if (valueVolume.current !== "0") {
               const newValueVolume = {
                    current: "0",
                    pre: valueVolume.current
               }
               setIsMute(true);
               setValueVolume(newValueVolume)
          } else {
               setIsMute(false);
               const newValueVolume = {
                    ...valueVolume,
                    current: valueVolume.pre
               }
               setValueVolume(newValueVolume)
          }
     }

     const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
          event.stopPropagation();
          const currentValueVolume = event.target.value;
          if (currentValueVolume !== "0") {
               setIsMute(false);
          } else {
               setIsMute(true);
          }
          const newValueVolume = {
               ...valueVolume,
               current: currentValueVolume
          }
          setValueVolume(newValueVolume)
     }


     const calcTimeRun = (currentTime: number) => {
          const hours = Math.floor(currentTime / 60);
          const minutes = Math.floor(currentTime % 60);
          const formattedHours = hours.toString().padStart(2, '0');
          const formattedMinutes = minutes.toString().padStart(2, '0');
          return `${formattedHours}:${formattedMinutes}`;
     };

     const calcPositionPointer = (event: React.MouseEvent<HTMLDivElement>) => {
          let value = 0;
          const vertical = window.scrollY
          if (progressRef.current) {
               value = event.pageX - progressRef.current.getBoundingClientRect().left + progressRef.current.scrollLeft - VALUE_BORDER_PROGRESS - VALUE_PADDING_PROGRESS;
          }
          return value;
     }
     const handlePlayVideo = () => {
          setIsPlaying(!isPlaying);
     }

     // edit
     const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>, dataItem: TDataSplit) => {
          const valuePositionCursor = calcPositionPointer(event);
          onProgressBarClick(dataItem, valuePositionCursor);
          setIsShouldBlurPointer(false);
          setIsBlurPointer(false);
          setIndexActiveProgress(dataItem.id);
     }
     const onCalcValuePointerInnerProgress = (valuePointer: number, valueStart: number) => {
          let valuePointerProgress = valuePointer - valueStart
          return valuePointerProgress
     }
     const handleProgressBarMove = (event: React.MouseEvent<HTMLDivElement>, itemSlipt: TDataSplit) => {

          const indexCurrentProgress = dataSplit.findIndex((itemSplit) => itemSplit.id === itemSlipt.id);
          let startNewElement = 0;
          for (let index = 0; index < indexCurrentProgress; index++) {
               startNewElement = startNewElement + dataSplit[index].width * widthProgress / 100
          }
          startNewElement = startNewElement + indexCurrentProgress * VALUE_SPACING_PROGRESS;

          const valuePointerBlurMove = calcPositionPointer(event);

          const valuePointerInner = onCalcValuePointerInnerProgress(valuePointerBlurMove, startNewElement)
          const widthInnerCurrentProgress = itemSlipt.width * widthProgress / 100 - VALUE_BORDER_PROGRESS * 2;

          const totalTimeProgress = itemSlipt.endTime - itemSlipt.startTime;
          const valuePercentTime = valuePointerInner / widthInnerCurrentProgress * 100;
          const separateTime = itemSlipt.startTime + valuePercentTime * totalTimeProgress / 100;
          if (valuePointerBlurMove === valuePointer) {
               setIsBlurPointer(false);
          } else {
               const timeBlur = calcTimeRun(separateTime);
               setTimeValueVirtual(timeBlur)
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
     return (
          <div className="flex flex-col gap-2 h-[200px] bg-[#121212] text-white flex-shrink-0 ">
               <div className="h-[30%] text-4xl flex justify-between items-center gap-x-4 px-8">
                    <div className='w-[260px]'></div>
                    <div className='flex gap-x-3'>
                         <button onClick={handleSkipBackVideo}>
                              <BiSkipPrevious></BiSkipPrevious>
                         </button>
                         <button onClick={handlePlayVideo}>
                              {isPlaying ? <AiOutlinePauseCircle></AiOutlinePauseCircle> : <AiOutlinePlayCircle ></AiOutlinePlayCircle>}
                         </button>
                         <button onClick={handleSkipForwardVideo}>
                              <BiSkipNext></BiSkipNext>
                         </button>
                    </div>
                    <div className='text-[25px] flex items-center gap-x-2'>
                         <button className='mr-4 relative group' onClick={handleToggleVolume}>
                              <span className='bg-transparent w-[30px] h-[30px] absolute top-[-20px] left-[-2px]'></span>
                              <input type="range" className="input-vertical absolute top-[-135px] left-[-8px] dark:bg-gray-700 bg-gray-200 cursor-pointer hidden w-3 group-hover:block z-50"
                                   onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                                        event.stopPropagation();
                                   }}
                                   value={valueVolume.current}
                                   onChange={handleChangeVolume} defaultValue={100} ></input>
                              {isMute ? <VscMute></VscMute> :  <AiOutlineSound></AiOutlineSound>}
                         </button>
                         <button> <AiOutlineZoomOut></AiOutlineZoomOut></button>
                         <input type="range" className='cursor-pointer ' defaultValue={100}></input>
                         <button><AiOutlineZoomIn></AiOutlineZoomIn></button>
                    </div>
               </div>
               <div className='w-full h-[1px] bg-[rgba(48,47,47,0.8)] opacity-80'></div>
               {/* wrap rule in here */}
               {dataEditVideo && <div ref={progressRef} className="h-3/4 relative flex gap-2  px-4 pt-9 overflow-x-scroll overflow-y-hidden scroll-thin">
                    {dataSplit.map((itemSlipt) => {
                         return <div key={itemSlipt.id} style={{
                              width: `${itemSlipt.width}%`, backgroundImage: `url("${dataImage}")`,
                              backgroundSize: "auto 100%",
                         }}
                              className="h-3/4 rounded-[10px] relative flex-shrink-0  bg-repeat-x opacity-80" >
                              <div className={`w-full h-full relative cursor-pointer rounded-[4px] z-[50] hover:outline outline-1 outline-[#e0bc4e] overflow-hidden`} style={{
                                   outlineStyle
                                        : `${indexActiveProgress === itemSlipt.id ? "solid" : ""}`
                              }}
                                   onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => handleProgressBarMove(event, itemSlipt)}
                                   onMouseLeave={handleLeaveProgress}
                                   onMouseEnter={handleEnterProgress}
                                   onClick={(event: React.MouseEvent<HTMLDivElement>) => handleProgressBarClick(event, itemSlipt)}
                              >
                                   {indexActiveProgress === itemSlipt.id && <>
                                        <span className="absolute w-[8px] h-full bg-[#e0bc4e] left-[0px]">
                                             <span className="absolute h-[40%] w-[3px] bg-[#000] top-1/2 translate-y-[-50%] left-[2px] opacity-60 rounded-sm"></span>
                                        </span>
                                        <span className="absolute w-[8px] h-full bg-[#e0bc4e] right-0">
                                             <span className="absolute h-[40%] w-[3px] bg-[#000] top-1/2 translate-y-[-50%] left-[2px] opacity-60 rounded-sm"></span>
                                        </span>
                                   </>}
                              </div>
                         </div>
                    })}

                    <div className={`absolute top-[10px] bottom-0 z-50 cursor-pointer`} style={{ transform: `translateX(${valuePointer + valueCounter}px)` }}>
                         <span className="absolute top-[-20px] text-[#ccc]">
                              {timeValue}
                         </span>
                         <div className="triangle absolute left-[-9px] ">
                         </div>
                         <div style={{ width: `${VALUE_WIDTH_POINTER}px` }} className="h-[140px] bg-white absolute top-2 left-[0px]">
                         </div>
                    </div>
                    {isBlurPointer &&
                         <div style={{ left: valuePointerMove + "px" }} className={`absolute top-[10px] bottom-0 z-50 translate-x-[-2px] cursor-pointer pointer-events-none`}>
                              <div className="absolute top-[10px] left-[16px] w-[0.2rem] h-[140px] bg-[#9b9b9b] opacity-50">
                              </div>
                              <div className="absolute left-[-2px] top-[-15px] opacity-50 select-none">
                                   {timeValueVirtual}
                              </div>
                         </div>
                    }
               </div>}
          </div >
     )
}

export default memo(Progressbar);