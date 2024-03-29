import { Dispatch, SetStateAction } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";

interface IControlsVideo {
    controlData: any;
    totalTime: number;
    statusVideo: string;
    currentTime: number;
    modalVideoRef: React.RefObject<HTMLVideoElement>;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    setComment: Dispatch<SetStateAction<boolean>>;
    handlePlayByPlayer: () => void;
    handlePauseByPlayer: () => void;
    isOpenModalVideo: boolean;
    handleCloseModal?: () => void;
    handleOpenModal?: () => void;
}

export default function ControlsNormalVideo({
    controlData,
    totalTime,
    statusVideo,
    currentTime,
    setCurrentTime,
    setComment,
    handlePlayByPlayer,
    handlePauseByPlayer,
    modalVideoRef,
    isOpenModalVideo,
    handleCloseModal,
    handleOpenModal,
}: IControlsVideo) {
    const currentTimeByPercent = (currentTime / totalTime) * 100;

    const calcPercentProgress = (event: React.MouseEvent<HTMLDivElement>) => {
        const progressBarElement = event.currentTarget;
        const widthProgressBar = progressBarElement.offsetWidth;
        const clickPositionX = event.clientX - progressBarElement.getBoundingClientRect().left;
        const positionFlowPercent = (clickPositionX / widthProgressBar) * 100;
        return positionFlowPercent;
    };

    const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const time = (calcPercentProgress(event) / 100) * totalTime;
        setCurrentTime(time);
        setTimePlayerModal(time);
    };

    const setTimePlayerModal = (value: any) => {
        if (modalVideoRef.current && isFinite(value)) {
            modalVideoRef.current.currentTime = value;
        }
    };

    return (
        <div
            className="control_bar translate-y-[70%] transition duration-500 ease-in-out w-full absolute bottom-0"
            onClick={() => {
                setComment(false);
            }}
        >
            <div className="px-4">
                <div className="py-2 hover:cursor-pointer" onClick={(e) => handleProgressBarClick(e)}>
                    <div className="relative bg-opacity-50 flex items-center justify-between">
                        {Array.isArray(controlData) ? (
                            controlData.map((item: any) => {
                                const breakPointToPercent = (item.point / totalTime) * 100;
                                const breakEndPointToPercent = ((item.point + item.duration) / totalTime) * 100;

                                const percentItemDuration = breakEndPointToPercent - breakPointToPercent;
                                const CalcPercentWidthOfControlItemToColor = () => {
                                    if (breakEndPointToPercent < currentTimeByPercent) {
                                        return 100;
                                    } else if (breakPointToPercent > currentTimeByPercent) {
                                        return 0;
                                    } else {
                                        return (
                                            ((currentTimeByPercent - breakPointToPercent) / percentItemDuration) * 100
                                        );
                                    }
                                };
                                const value = CalcPercentWidthOfControlItemToColor();
                                return (
                                    <div
                                        key={item._id}
                                        className="flex-1 h-1 overflow-hidden"
                                        style={{
                                            flexBasis: `${(item.duration / totalTime) * 100}%`,
                                        }}
                                    >
                                        <div className="h-full flex">
                                            <div className="ml-[5px] w-full h-full bg-white rounded-xl relative">
                                                <div
                                                    style={{
                                                        width: value + "%",
                                                    }}
                                                    className="absolute h-full bg-[#a9def9] rounded-xl"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="h-1 w-full">
                                <div
                                    style={{
                                        width: currentTimeByPercent + "%",
                                    }}
                                    className="absolute h-full bg-[#a9def9]"
                                ></div>
                                <div className="h-full w-full bg-white rounded-xl"></div>
                            </div>
                        )}

                        <div
                            style={{
                                left: currentTimeByPercent + "%",
                            }}
                            className="absolute bg-[#fff] h-[10px] w-[10px] rounded-full hover:cursor-pointer translate-x-[-50%]"
                        ></div>
                    </div>
                </div>
            </div>
            <div className="px-5 h-[50px] box-border flex justify-between items-center text-white">
                <div
                    className="p-2 hover:cursor-pointer"
                    onClick={() => {
                        if (statusVideo === "Playing") {
                            handlePauseByPlayer();
                        } else if (statusVideo === "Paused") {
                            handlePlayByPlayer();
                        }
                    }}
                >
                    {statusVideo === "Playing" ? <FaPause /> : <FaPlay />}
                </div>
                {isOpenModalVideo && handleCloseModal && (
                    <div className="p-2 hover:cursor-pointer" onClick={handleCloseModal}>
                        <MdFullscreen className="text-[25px] hover:text-[#a9def9]" />
                    </div>
                )}
                {!isOpenModalVideo && handleOpenModal && (
                    <div className="p-2 hover:cursor-pointer" onClick={handleOpenModal}>
                        <MdFullscreen className="text-[25px] hover:text-[#a9def9]" />
                    </div>
                )}
            </div>
        </div>
    );
}
