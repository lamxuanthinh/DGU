import { useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";

interface IControlsVideo {
  statusVideo: string;
  currentTime: any;
  setCurrentTime: any;
  totalTime: any;
  handlePlayByPlayer: () => void;
  handlePauseByPlayer: () => void;
  setTimePlayerModal: (value: any) => void;
}

export default function ControlsVideo({
  statusVideo,
  currentTime,
  setCurrentTime,
  totalTime,
  handlePlayByPlayer,
  handlePauseByPlayer,
  setTimePlayerModal,
}: IControlsVideo) {
  const progressBarRef: any = useRef(null);

  const splitPoints = {
    inFormVideoParent: {
      lengthVideo: 193,
    },
    inFormVideoChild: [
      {
        length: 70,
        splitPoint: 70,
      },
      {
        length: 30,
        splitPoint: 100,
      },
      {
        length: 43,
        splitPoint: 143,
      },
      {
        length: 50,
        splitPoint: 193,
      },
    ],
  };

  const calcPercentProgress = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBarElement = event.currentTarget;
    const widthProgressBar = progressBarElement.offsetWidth;
    const clickPositionX =
      event.clientX - progressBarElement.getBoundingClientRect().left;
    const positionFlowPercent = (clickPositionX / widthProgressBar) * 100;
    return positionFlowPercent;
  };

  const calcPxProgress = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBarElement = event.currentTarget;
    const widthProgressBar = progressBarElement.offsetWidth;
    const positionFlowPx =
      (calcPercentProgress(event) * widthProgressBar) / 100;

    return positionFlowPx;
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const time = (calcPercentProgress(event) / 100) * totalTime;
    setCurrentTime(time);
    setTimePlayerModal(time);
  };

  return (
    <div className="control_bar translate-y-[70%] transition duration-500 ease-in-out w-full absolute bottom-0">
      <div className="py-1 px-4">
        <div
          className="hover:cursor-pointer"
          ref={progressBarRef}
          onClick={(e) => handleProgressBarClick(e)}
        >
          <div className="relative bg-opacity-50 flex items-center justify-between">
            <div
              style={{
                width: (currentTime / totalTime) * 100 + "%",
              }}
              className="absolute h-full bg-[#a9def9]"
            ></div>
            <div
              style={{
                left: (currentTime / totalTime) * 100 + "%",
              }}
              className="absolute bg-[#fff] h-[10px] w-[10px] rounded-full hover:cursor-pointer translate-x-[-50%]"
            ></div>

            {splitPoints.inFormVideoChild.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 h-1 overflow-hidden"
                  style={{
                    flexBasis: `${
                      (item.length /
                        splitPoints.inFormVideoParent.lengthVideo) *
                      100
                    }%`,
                  }}
                >
                  <div className="h-full flex">
                    <div
                      style={{
                        width: `calc(100% - 5px)`,
                      }}
                      className="h-full bg-white rounded-xl"
                    ></div>
                    <div className="w-[5px] h-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-5 h-[50px] box-border flex justify-between items-center text-white">
        <div
          className="p-2 hover:cursor-pointer"
          onClick={() => {
            if (statusVideo == "Playing") {
              handlePauseByPlayer();
            } else if (statusVideo == "Paused") {
              handlePlayByPlayer();
            }
          }}
        >
          {statusVideo == "Playing" ? <FaPause /> : <FaPlay />}
        </div>
        <div className="p-2 hover:cursor-pointer">
          <MdFullscreen className="text-[25px] hover:text-[#a9def9]" />
        </div>
      </div>
    </div>
  );
}
