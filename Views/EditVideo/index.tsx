import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "@/Context";
import Modal from "@/components/common/Modal";
import Navbar from "./Navbar";
import Video from "./Video";
import Toolbar from "./Toolbar";
import Progressbar from "./Progressbar";
import { IDataSplitVideo, IValueVolumeVideo, IListDataSplitVideo, IThumbInfo } from "@/model";

import { VALUE_SPACING_PROGRESS, VALUE_WIDTH_POINTER } from "./constants";

export default function EditVideo() {
    const {
        thumbVideoEdit,
        setRenderSelectCourse,
        setStepSelected,
        setListDataSplitVideo,
        srcVideoEdit,
        fileThumbVideoUpload,
    } = useAppContext();
    const router = useRouter();

    const videoRef = useRef<HTMLVideoElement>(null);
    const runCursorRef = useRef<number | null>(null);
    const startTimestampRef = useRef<number | null>(0);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [moveVideo, setMoveVideo] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [valuePointer, setValuePointer] = useState<number>(0);
    const [valueCounterPointer, setValueCounterPointer] = useState<number>(0);
    const [currentWidthProgress, setCurrentWidthProgress] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isUndo, setIsUndo] = useState<boolean>(false);
    const [isRedo, setIsRedo] = useState<boolean>(false);
    const [srcMp3, setSrcMp3] = useState<Blob | undefined>();
    const [durationMp3, setDurationMp3] = useState<number>(0);
    const [dataSplit, setDataSplit] = useState<IListDataSplitVideo>([
        {
            id: 1,
            width: 100,
            startTime: 0,
            endTime: duration,
            thumbImage: thumbVideoEdit,
            thumbImageFile: fileThumbVideoUpload,
            name: "",
            description: "",
        },
    ]);
    const [currentProgress, setCurrentProgress] = useState<IDataSplitVideo>(dataSplit[0]);
    const [valueVolume, setValueVolume] = useState<IValueVolumeVideo>({
        current: "100",
        pre: "0",
    });
    const [containerDataSplit, setContainerDataSplit] = useState<Array<IListDataSplitVideo>>([
        [
            {
                id: 0,
                width: 100,
                startTime: 0,
                endTime: duration,
                thumbImage: thumbVideoEdit,
                thumbImageFile: fileThumbVideoUpload,
                name: "",
                description: "",
            },
        ],
    ]);
    const [currentIndexProgress, setCurrentIndexProgress] = useState<number>(0);

    useEffect(() => {
        dataSplit[0].endTime = duration;
        setContainerDataSplit((pre) => {
            pre[0][0].endTime = duration;
            return pre;
        });
        setDataSplit(dataSplit);
    }, [duration]);

    useEffect(() => {
        if (!isPlaying) {
            startTimestampRef.current = 0;
        }
    }, [valuePointer]);

    useEffect(() => {
        const currentValuePointer = valueCounterPointer + valuePointer;
        const indexCurrentProgress = onFindIndexCurrentProgress(currentProgress.id);
        let endPointProgress = 0;
        if (dataSplit.length > 1) {
            const startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
            endPointProgress = startPointProgress + (currentProgress.width * currentWidthProgress) / 100;
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
        const animationDuration = (duration / currentWidthProgress) * 1000;
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
            setValuePointer(valuePointer + valueCounterPointer);
            setValueCounterPointer(0);
        }
        return () => {
            if (runCursorRef.current) {
                window.cancelAnimationFrame(runCursorRef.current);
            }
        };
    }, [isPlaying]);

    const onOkModal = () => {
        setRenderSelectCourse(true);
        setStepSelected(2);
        setListDataSplitVideo([...dataSplit]);
        router.push("/upload");
    };

    const onCancelModal = () => {
        setIsModal(false);
    };

    const onUndoProgress = () => {
        if (isUndo) {
            const newIndexProgress = currentIndexProgress - 1;
            setCurrentIndexProgress(newIndexProgress);
            setDataSplit(containerDataSplit[newIndexProgress]);
            setIsRedo(true);
            if (newIndexProgress === 0) {
                setIsUndo(false);
            }
        }
    };

    const onRedoProgress = () => {
        if (isRedo) {
            const newIndexProgress = currentIndexProgress + 1;
            setCurrentIndexProgress(newIndexProgress);
            setDataSplit(containerDataSplit[newIndexProgress]);
            setIsUndo(true);
            if (newIndexProgress === containerDataSplit.length - 1) {
                setIsRedo(false);
            }
        }
    };

    const onFindIndexCurrentProgress = (id: number) => {
        const indexCurrentProgress = dataSplit.findIndex((itemSplit) => itemSplit.id === id);
        return indexCurrentProgress;
    };

    const onCalcStartPointProgress = (indexCurrentProgress: number) => {
        let accumulatedWidth = 0;
        for (let index = 0; index < indexCurrentProgress; index++) {
            accumulatedWidth += (dataSplit[index].width * currentWidthProgress) / 100;
        }
        const startPointProgress = accumulatedWidth + indexCurrentProgress * VALUE_SPACING_PROGRESS;
        return startPointProgress;
    };

    const onCalcValuePointerInnerProgress = (valuePointer: number, valueStart: number) => {
        let valuePointerProgress = valuePointer - valueStart;
        return valuePointerProgress;
    };

    const onCalcWidthProgress = (widthPercentProgress: number) => {
        const widthProgress = (widthPercentProgress * currentWidthProgress) / 100;
        return widthProgress;
    };

    const onCalcSeparateTime = (
        startTime: number,
        endTime: number,
        positionSplit: number,
        widthCurrentProgress: number,
    ) => {
        const totalTimeProgress = endTime - startTime;
        const valuePercentTime = (positionSplit / widthCurrentProgress) * 100;
        const separateTime = startTime + (valuePercentTime * totalTimeProgress) / 100;
        return separateTime;
    };

    const onProgressBarClick = (dataItem: IDataSplitVideo, valuePositionCursor: number) => {
        const indexCurrentProgress = onFindIndexCurrentProgress(dataItem.id);
        let startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
        const positionSplit = onCalcValuePointerInnerProgress(valuePositionCursor, startPointProgress);
        const widthCurrentProgress = onCalcWidthProgress(dataItem.width);

        const separateTime = onCalcSeparateTime(
            dataItem.startTime,
            dataItem.endTime,
            positionSplit,
            widthCurrentProgress,
        );

        if (isPlaying) {
            setIsPlaying(false);
        }
        setValueCounterPointer(0);
        setMoveVideo(separateTime);
        setValuePointer(valuePositionCursor);
        setCurrentProgress(dataItem);
        return separateTime;
    };

    const onProgressBarMove = (valuePointerMove: number, itemSlipt: IDataSplitVideo) => {
        const indexCurrentProgress = onFindIndexCurrentProgress(itemSlipt.id);
        const startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
        const positionSplit = onCalcValuePointerInnerProgress(valuePointerMove, startPointProgress);
        const widthCurrentProgress = onCalcWidthProgress(itemSlipt.width);
        const separateTime = onCalcSeparateTime(
            itemSlipt.startTime,
            itemSlipt.endTime,
            positionSplit,
            widthCurrentProgress,
        );
        return separateTime;
    };

    const createImageFromTime = (time: number) => {
        return new Promise<IThumbInfo>(async (resolve, reject) => {
            if (videoRef.current) {
                videoRef.current.currentTime = time;
                videoRef.current.muted = true;
                await videoRef.current.play();
                await videoRef.current.pause();
            }
            const canvas = document.createElement("canvas");
            canvas.width = 170;
            canvas.height = 100;
            const context = canvas.getContext("2d");

            if (context && videoRef.current) {
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], "image.jpg", { type: blob.type });
                        const result: IThumbInfo = {
                            fileImage: file,
                            urlImage: canvas.toDataURL("image/jpeg"),
                        };
                        resolve(result);
                    } else {
                        reject("Failed to create blob.");
                    }
                }, "image/jpeg");
            } else {
                reject("Canvas context or video reference not available.");
            }
        });
    };

    const handleSplit = async () => {
        const indexCurrentProgress = onFindIndexCurrentProgress(currentProgress.id);
        let startPointProgress = onCalcStartPointProgress(indexCurrentProgress);
        let positionSplit = onCalcValuePointerInnerProgress(valuePointer + valueCounterPointer, startPointProgress);
        const widthCurrentProgress = onCalcWidthProgress(currentProgress.width);
        const secondHalfWidthProgress = widthCurrentProgress - positionSplit;
        const secondHalfPercentWidthProgress = (secondHalfWidthProgress / currentWidthProgress) * 100;
        const firstHalfPercentWidthProgress = (positionSplit / currentWidthProgress) * 100;
        const separateTime = onCalcSeparateTime(
            currentProgress.startTime,
            currentProgress.endTime,
            positionSplit,
            widthCurrentProgress,
        );

        const imageFile: IThumbInfo = await createImageFromTime(separateTime);

        const secondHalfProgress: IDataSplitVideo = {
            id: dataSplit.length + 1,
            width: secondHalfPercentWidthProgress,
            startTime: separateTime,
            endTime: currentProgress.endTime,
            thumbImage: imageFile.urlImage,
            thumbImageFile: imageFile.fileImage,
            name: "",
            description: "",
        };

        const templeDataSplit = JSON.parse(JSON.stringify(dataSplit));
        templeDataSplit[indexCurrentProgress].startTime = currentProgress.startTime;
        templeDataSplit[indexCurrentProgress].endTime = separateTime;
        templeDataSplit[indexCurrentProgress].width = firstHalfPercentWidthProgress;
        templeDataSplit[indexCurrentProgress].thumbImageFile = currentProgress.thumbImageFile;
        templeDataSplit[indexCurrentProgress].thumbImage = currentProgress.thumbImage;

        const newDataSplit = [...templeDataSplit];
        newDataSplit.splice(indexCurrentProgress + 1, 0, secondHalfProgress);

        if (containerDataSplit.length === 1) {
            setIsUndo(true);
        }
        setContainerDataSplit((pre) => {
            return [...pre, newDataSplit];
        });
        setIsPlaying(false);
        setDataSplit(newDataSplit);
        setCurrentIndexProgress((pre) => pre + 1);
        setValuePointer(valuePointer - VALUE_WIDTH_POINTER);
    };

    return (
        <>
            <div className="w-full h-screen bg-[#000] flex flex-col p-[10px]">
                <Navbar
                    setIsModal={setIsModal}
                    onUndo={onUndoProgress}
                    onRedu={onRedoProgress}
                    isUndo={isUndo}
                    isRedo={isRedo}
                />
                <div className="flex flex-grow-[1] gap-[5px] overflow-hidden items-center mb-[5px]">
                    <Toolbar handleSplit={handleSplit} setSrcMp3={setSrcMp3} />
                    <Video
                        isPlaying={isPlaying}
                        moveVideo={moveVideo}
                        setDuration={setDuration}
                        setCurrentTime={setCurrentTime}
                        valueVolume={valueVolume}
                        srcMp3={srcMp3}
                        durationMp3={durationMp3}
                    />
                </div>
                <Progressbar
                    dataSplit={dataSplit}
                    valuePointer={valuePointer}
                    currentWidthProgress={currentWidthProgress}
                    setCurrentWidthProgress={setCurrentWidthProgress}
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
                    setValueCounterPointer={setValueCounterPointer}
                    onProgressBarMove={onProgressBarMove}
                    srcMp3={srcMp3}
                    setDurationMp3={setDurationMp3}
                />
            </div>
            {isModal && <Modal title="Are you want to next step?" onOk={onOkModal} onCancel={onCancelModal} />}
            <video className="hidden" ref={videoRef} src={srcVideoEdit}></video>
        </>
    );
}
