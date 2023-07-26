import { useState, useEffect, useRef } from "react";
// import ffmpeg from "@ffmpeg/ffmpeg";
import { useAppContext } from "@/Context";
import Modal from "../Modal";
import Loading from "@/components/common/Loading";
import Navbar from "./Navbar";
import Video from "./Video";
import Toolbar from "./Toolbar";
import Progressbar from "./Progressbar";
import MenuSuccess from "@/components/common/ModalSuccess";
import { IDataSplitVideo, IValueVolumeVideo, IListDataSplitVideo } from "@/model/editVideo";

import { VALUE_SPACING_PROGRESS, VALUE_WIDTH_POINTER } from "./constants";

export default function EditVideo() {
  const { isLoading, setIsLoading } = useAppContext();

  const runCursorRef = useRef<number | null>(null);
  const startTimestampRef = useRef<number | null>(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [moveVideo, setMoveVideo] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [valuePointer, setValuePointer] = useState<number>(0);
  const [valueCounterPointer, setValueCounterPointer] = useState<number>(0);
  const [currentWidthProgress, setCurrentWidthProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [dataSplit, setDataSplit] = useState<IListDataSplitVideo>([{
    id: 1,
    width: 100,
    startTime: 0,
    endTime: duration,
  }]);
  const [currentProgress, setCurrentProgress] = useState<IDataSplitVideo>(dataSplit[0]);
  const [valueVolume, setValueVolume] = useState<IValueVolumeVideo>({
    current: "100",
    pre: "0"
  });

  useEffect(() => {
    dataSplit[0].endTime = duration;
    setDataSplit(dataSplit);
  }, [duration]);

  useEffect(() => {
    const currentValuePointer = valueCounterPointer + valuePointer;
    const indexCurrentProgress = onFindIndexCurrentProgress(currentProgress.id);
    let endPointProgress = 0;
    if (dataSplit.length > 1) {
      const startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
      endPointProgress = startPointProgress + currentProgress.width * currentWidthProgress / 100;
    } else {
      endPointProgress = currentWidthProgress;
    }
    if (currentValuePointer >= endPointProgress && endPointProgress !== 0) {
      if (indexCurrentProgress < dataSplit.length - 1) {
        const newPointer = valuePointer + VALUE_SPACING_PROGRESS;
        setValuePointer(newPointer);
        setCurrentProgress(dataSplit[indexCurrentProgress + 1]);
      } else {
        setMoveVideo(duration);
        setValuePointer(endPointProgress);
        setIsPlaying(false);
      }
    }
  }, [valueCounterPointer]);

  useEffect(() => {
    const animationDuration = (duration / (currentWidthProgress)) * 1000;
    const step = (timestamp: number) => {
      if (!startTimestampRef.current) {
        startTimestampRef.current = timestamp;
      }
      const elapsedTime = timestamp - startTimestampRef.current;
      const progress = elapsedTime / animationDuration;
      setValueCounterPointer(progress);
      runCursorRef.current = window.requestAnimationFrame(step);
    };
    if (isPlaying) {
      runCursorRef.current = window.requestAnimationFrame(step);
    } else {
      setValuePointer(valuePointer + valueCounterPointer)
      setValueCounterPointer(0);
    }
    return () => {
      if (runCursorRef.current) {
        window.cancelAnimationFrame(runCursorRef.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      startTimestampRef.current = 0;
    }
  }, [valuePointer]);

  const onFindIndexCurrentProgress = (id: number) => {
    const indexCurrentProgress = dataSplit.findIndex((itemSplit) => itemSplit.id === id);
    return indexCurrentProgress
  }

  const onCalcStartPointProgress = (indexCurrentProgress: number) => {
    let accumulatedWidth = 0;
    for (let index = 0; index < indexCurrentProgress; index++) {
      accumulatedWidth += dataSplit[index].width * currentWidthProgress / 100
    }
    const startPointProgress = accumulatedWidth + indexCurrentProgress * VALUE_SPACING_PROGRESS;
    return startPointProgress;
  }

  const onCalcValuePointerInnerProgress = (valuePointer: number, valueStart: number) => {
    let valuePointerProgress = valuePointer - valueStart
    return valuePointerProgress
  }

  const onCalcWidthProgress = (widthPercentProgress: number) => {
    const widthProgress = widthPercentProgress * currentWidthProgress / 100;
    return widthProgress;
  }

  const onCalcSeparateTime = (startTime: number, endTime: number, positionSplit: number, widthCurrentProgress: number) => {
    const totalTimeProgress = endTime - startTime;
    const valuePercentTime = positionSplit / widthCurrentProgress * 100;
    const separateTime = startTime + valuePercentTime * totalTimeProgress / 100;
    return separateTime;
  }

  const onProgressBarClick = (dataItem: IDataSplitVideo, valuePositionCursor: number) => {
    const indexCurrentProgress = onFindIndexCurrentProgress(dataItem.id);
    let startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
    const positionSplit = onCalcValuePointerInnerProgress(valuePositionCursor, startPointProgress);
    const widthCurrentProgress = onCalcWidthProgress(dataItem.width);

    const separateTime = onCalcSeparateTime(dataItem.startTime, dataItem.endTime, positionSplit, widthCurrentProgress)

    if (isPlaying) {
      setIsPlaying(false);
    }
    setValueCounterPointer(0);
    setMoveVideo(separateTime);
    setValuePointer(valuePositionCursor);
    setCurrentProgress(dataItem);
  }

  const onProgressBarMove = (valuePointerMove: number, itemSlipt: IDataSplitVideo) => {
    const indexCurrentProgress = onFindIndexCurrentProgress(itemSlipt.id);
    const startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
    const positionSplit = onCalcValuePointerInnerProgress(valuePointerMove, startPointProgress);
    const widthCurrentProgress = onCalcWidthProgress(itemSlipt.width);
    const separateTime = onCalcSeparateTime(itemSlipt.startTime, itemSlipt.endTime, positionSplit, widthCurrentProgress);
    return separateTime;
  }

  const handleSplit = () => {
    setIsPlaying(false);
    const indexCurrentProgress = onFindIndexCurrentProgress(currentProgress.id);
    let startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
    let positionSplit = onCalcValuePointerInnerProgress(valuePointer + valueCounterPointer, startPointProgress);
    const widthCurrentProgress = onCalcWidthProgress(currentProgress.width)

    const secondHalfWidthProgress = widthCurrentProgress - positionSplit;
    const secondHalfPercentWidthProgress = secondHalfWidthProgress / currentWidthProgress * 100;
    const firstHalfPercentWidthProgress = (positionSplit) / currentWidthProgress * 100;
    const separateTime = onCalcSeparateTime(currentProgress.startTime, currentProgress.endTime, positionSplit, widthCurrentProgress)

    const secondHalfProgress: IDataSplitVideo = {
      id: dataSplit.length + 1,
      width: secondHalfPercentWidthProgress,
      startTime: separateTime,
      endTime: currentProgress.endTime
    }

    dataSplit[indexCurrentProgress].width = firstHalfPercentWidthProgress;
    dataSplit[indexCurrentProgress].startTime = currentProgress.startTime;
    dataSplit[indexCurrentProgress].endTime = separateTime,
      setDataSplit((prevData) => {
        const newData = [...prevData];
        newData.splice(indexCurrentProgress + 1, 0, secondHalfProgress);
        return newData;
      });
    setValuePointer(valuePointer - VALUE_WIDTH_POINTER)
  }

  const onOkModal = () => {
    setIsModal(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true);
    }, 5000);
  }

  const onCancelModal = () => {
    setIsModal(false)
  }

  const onCancelModalSuccess = () => {
    setIsSuccess(false)
  }

  // const handleEditVideo = async () => {
  //   if (srcVideoEdit) {
  //     const { createFFmpeg, fetchFile } = ffmpeg;
  //     const ffmpegInstance = createFFmpeg({ log: true });
  //     // error
  //     await ffmpegInstance.load();
  //   } else {
  //     console.log("::[P}:: ==> Please Input Video And Audio");
  //   }
  // };

  return (
    <>
      <div className="w-full h-screen bg-[#000] flex flex-col p-[10px]">
        <Navbar setIsModal={setIsModal} />
        <div className="flex flex-grow-[1] gap-[5px] overflow-hidden items-center mb-[5px]">
          <Toolbar handleSplit={handleSplit} />
          <Video
            isPlaying={isPlaying}
            moveVideo={moveVideo}
            setDuration={setDuration}
            setCurrentTime={setCurrentTime}
            valueVolume={valueVolume} />
        </div>
        <Progressbar
          dataSplit={dataSplit}
          valuePointer={valuePointer}
          currentWidthProgress={currentWidthProgress} setCurrentWidthProgress={setCurrentWidthProgress}
          duration={duration}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          valueCounterPointer={valueCounterPointer}
          onProgressBarClick={onProgressBarClick}
          valueVolume={valueVolume}
          setValueVolume={setValueVolume}
          setValuePointer={setValuePointer}
          currentTime={currentTime}
          setMoveVideo={setMoveVideo}
          setValueCounterPointer={setValueCounterPointer} onProgressBarMove={onProgressBarMove} />
      </div>
      {
        isModal &&
        <Modal
          title="Do you want to go to the video editing step?"
          onOk={onOkModal}
          onCancel={onCancelModal} />
      }
      {isLoading && <Loading />}
      {
        isSuccess &&
        <MenuSuccess toHref="/upload" onClick={onCancelModalSuccess} />
      }
    </>
  );
}
