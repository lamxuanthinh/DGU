import { useState, useEffect, useRef } from "react";
import ffmpeg from "@ffmpeg/ffmpeg";
import Navbar from "./Navbar";
import Video from "./Video";
import Toolbar from "./Toolbar";
import Progressbar from "./Progressbar";
import Modal from "../Modal";
import Loading from "@/components/common/Loading";
import { useAppContext } from "@/Context";
import Link from "next/link";

type TDataSplit = {
  id: number,
  width: number,
  start: number,
  end: number,
  startTime: number,
  endTime: number
}
const VALUE_SPACING_PROGRESS = 8;
const VALUE_BORDER_PROGRESS = 0;
const VALUE_SUB_POINTER = 0;

export default function EditVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [moveVideo, setMoveVideo] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [dataSplit, setDataSplit] = useState<Array<TDataSplit>>([{
    id: 1,
    width: 100,
    start: 0,
    end: 100,
    startTime: 0,
    endTime: duration,
  }]);
  const [currentProgress, setCurrentProgress] = useState<TDataSplit>(dataSplit[0]);
  const [valuePointer, setValuePointer] = useState<number>(0);
  const [valueCounter, setValueCounter] = useState<number>(0);
  const [widthProgress, setWidthProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [valueVolume, setValueVolume] = useState({
    current: "100",
    pre: "0"
  });
  const [isStartVideo, setIsStartVideo] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { dataEditVideo } = useAppContext();

  const runCursorRef = useRef<number | null>(null);
  const startTimestampRef = useRef<number | null>(0);
  useEffect(() => {
    dataSplit[0].endTime = duration;
    setDataSplit(dataSplit);
  }, [duration]);

  useEffect(() => {
    const currentValuePointer = valueCounter + valuePointer;
    let endPointProgress = 0;
    if (dataSplit.length > 1) {
      const indexCurrentProgress = dataSplit.findIndex((itemSplit) => itemSplit.id === currentProgress.id);
      for (let index = 0; index < indexCurrentProgress; index++) {
        endPointProgress = endPointProgress + dataSplit[index].width * widthProgress / 100
      }
      endPointProgress = endPointProgress + indexCurrentProgress * VALUE_SPACING_PROGRESS + currentProgress.width * widthProgress / 100 - VALUE_BORDER_PROGRESS * 2 - VALUE_SUB_POINTER;
    } else {
      endPointProgress = widthProgress - VALUE_BORDER_PROGRESS * 2 - VALUE_SUB_POINTER;
    }

    if (currentValuePointer >= endPointProgress && endPointProgress !== 0) {
      const index = dataSplit.findIndex((itemSlipt) => itemSlipt.id === currentProgress.id);
      if (index < dataSplit.length - 1) {
        setCurrentProgress(dataSplit[index + 1]);
        const newPointer = valuePointer + VALUE_BORDER_PROGRESS * 2 + VALUE_SPACING_PROGRESS;
        setValuePointer(newPointer);
      } else {
        setMoveVideo(duration);
        setValuePointer(endPointProgress);
        setIsPlaying(false);
      }
    }
    if (valueCounter === 0) {
      startTimestampRef.current = 0;
      setIsStartVideo(true);
    } else {
      setIsStartVideo(false)
    }
  }, [valueCounter]);


  useEffect(() => {
    if (!isPlaying) {
      startTimestampRef.current = 0;
    }
  }, [valuePointer]);
  useEffect(() => {
    const animationDuration = (duration / (widthProgress - VALUE_BORDER_PROGRESS * 2 - VALUE_SUB_POINTER)) * 1000;
    const step = (timestamp: number) => {

      if (!startTimestampRef.current) {
        startTimestampRef.current = timestamp;
      }
      const elapsedTime = timestamp - startTimestampRef.current;
      const progress = elapsedTime / animationDuration;
      setValueCounter(progress);
      runCursorRef.current = window.requestAnimationFrame(step);
    };
    if (isPlaying) {
      runCursorRef.current = window.requestAnimationFrame(step);
    } else {
      setValuePointer(valuePointer + valueCounter)
      setValueCounter(0);
    }
    return () => {
      if (runCursorRef.current) {
        window.cancelAnimationFrame(runCursorRef.current);
      }
    };
  }, [isPlaying]);
  // edit

  const onCalcValuePointerInnerProgress = (valuePointer: number, valueStart: number) => {
    let valuePointerProgress = valuePointer - valueStart
    return valuePointerProgress
  }

  const onCalcWidthInnerProgress = () => {
    let widthInnerProgress = 0;
    if (dataSplit.length > 1) {
      widthInnerProgress = currentProgress.width * widthProgress / 100 - VALUE_BORDER_PROGRESS * 2
    } else {
      widthInnerProgress = widthProgress - VALUE_BORDER_PROGRESS * 2;
    }
    return widthInnerProgress
  }
  const onProgressBarClick = (dataItem: TDataSplit, valuePositionCursor: number) => {

    const indexCurrentProgress = dataSplit.findIndex((itemSplit) => itemSplit.id === dataItem.id);
    let startNewElement = 0;
    for (let index = 0; index < indexCurrentProgress; index++) {
      startNewElement = startNewElement + dataSplit[index].width * widthProgress / 100
    }
    startNewElement = startNewElement + indexCurrentProgress * VALUE_SPACING_PROGRESS;
    const valuePointerProgress = onCalcValuePointerInnerProgress(valuePositionCursor, startNewElement);

    const widthCurrentProgress = dataItem.width * widthProgress / 100 - VALUE_BORDER_PROGRESS * 2;

    const totalTimeProgress = dataItem.endTime - dataItem.startTime;
    const valuePercentTime = valuePointerProgress / widthCurrentProgress * 100;

    const separateTime = dataItem.startTime + valuePercentTime * totalTimeProgress / 100;

    if (isPlaying) {
      setIsPlaying(false);
    }

    setValueCounter(0);
    setMoveVideo(separateTime);
    setValuePointer(valuePositionCursor);
    setCurrentProgress(dataItem);
  }

  const handleSplit = () => {
    const indexCurrentProgress = dataSplit.findIndex((itemSplit) => itemSplit.id === currentProgress.id);
    let startNewElement = 0;
    for (let index = 0; index < indexCurrentProgress; index++) {
      startNewElement = startNewElement + dataSplit[index].width * widthProgress / 100
    }
    startNewElement = startNewElement + indexCurrentProgress * VALUE_SPACING_PROGRESS;
    const valuePointerProgress = onCalcValuePointerInnerProgress(valuePointer, startNewElement);
    const widthCurrentProgress = onCalcWidthInnerProgress()
    const widthPxNewElement = widthCurrentProgress - valuePointerProgress + VALUE_BORDER_PROGRESS * 2;
    const widthPercentNewElement = widthPxNewElement / widthProgress * 100;
    const newWidthElement = (valuePointerProgress + VALUE_BORDER_PROGRESS * 2) / widthProgress * 100;

    const endNewElement = startNewElement + currentProgress.width * widthProgress / 100 + VALUE_SPACING_PROGRESS;
    const widthPercenterNewElement = endNewElement / widthProgress * 100;

    const totalTimeProgress = currentProgress.endTime - currentProgress.startTime;
    const valuePercentTime = valuePointerProgress / widthCurrentProgress * 100;
    const separateTime = currentProgress.startTime + valuePercentTime * totalTimeProgress / 100;


    const newElement: TDataSplit = {
      id: dataSplit.length + 1,
      width: widthPercentNewElement,
      start: startNewElement,
      end: widthPercenterNewElement,
      startTime: separateTime,
      endTime: currentProgress.endTime
    }

    dataSplit[indexCurrentProgress].width = newWidthElement;
    dataSplit[indexCurrentProgress].start = currentProgress.start;
    dataSplit[indexCurrentProgress].end = startNewElement / widthProgress * 100 + newWidthElement - VALUE_BORDER_PROGRESS * 2 / widthProgress * 100;
    dataSplit[indexCurrentProgress].startTime = currentProgress.startTime;
    dataSplit[indexCurrentProgress].endTime = separateTime,
      setDataSplit((prevData) => {
        const newData = [...prevData];
        newData.splice(indexCurrentProgress + 1, 0, newElement);
        return newData;
      });
    setValuePointer(valuePointer - 2)
  }

  const onOk = () => {
    setIsModal(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true);
    }, 5000);
  }

  const onCancel = () => {
    setIsModal(false)
  }

  const handleEditVideo = async () => {
    if (dataEditVideo) {
      const { createFFmpeg, fetchFile } = ffmpeg;
      const ffmpegInstance = createFFmpeg({ log: true });
      // error
      await ffmpegInstance.load();
    } else {
      console.log("::[P}:: ==> Please Input Video And Audio");
    }
  };

  return (
    <div>
      <div className="w-full h-screen bg-[#000] flex flex-col p-[10px] ">
        <Navbar setIsModal={setIsModal} />
        <div className="flex flex-grow-[1] gap-[5px] overflow-hidden items-center mb-[5px]">
          <Toolbar onClick={handleSplit} />
          <Video isPlaying={isPlaying} moveVideo={moveVideo} setDuration={setDuration} duration={duration} setCurrentTime={setCurrentTime} valueVolume={valueVolume} setValueVolume={setValueVolume} isStartVideo={isStartVideo} />
        </div>
        <Progressbar dataSplit={dataSplit} valuePointer={valuePointer} widthProgress={widthProgress} setWidthProgress={setWidthProgress} duration={duration} isPlaying={isPlaying} setIsPlaying={setIsPlaying} valueCounter={valueCounter} onProgressBarClick={onProgressBarClick} valueVolume={valueVolume} setValueVolume={setValueVolume} setValuePointer={setValuePointer} currentTime={currentTime} setMoveVideo={setMoveVideo} setValueCounter={setValueCounter} ></Progressbar>
      </div>
      {isModal && <Modal title="Do you want to go to the video editing step?" onOk={onOk} onCancel={onCancel} />}
      {isLoading && <Loading />}
      {isSuccess &&
        <div  className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-black">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button onClick={() => setIsSuccess(false)} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Success</span>
              </div>
              <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully edit video.</p>
              <Link href="/" type="button" className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                Continue
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
