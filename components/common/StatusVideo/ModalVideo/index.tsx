import { IVideoPayload } from "@/model/video";
import { MutableRefObject, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import ControlsVideo from "../ControlsVideo";
import InformVideo from "../InformVideo";
import ReactVideo from "../ReactVideo";

interface IModalVideo {
  isOpenModalVideo: boolean;
  modalVideoRef: MutableRefObject<null>;
  handleCloseModal: () => void;
  data: IVideoPayload;
  statusModal: string;
  handlePlayByPlayerModal: () => void;
  handlePauseByPlayerModal: () => void;
  currentTime: any;
  setCurrentTime: any;
  totalTimeVideo: any;
  setTimePlayerModal: (value: any) => void;
}

export default function ModalVideo({
  isOpenModalVideo,
  modalVideoRef,
  handleCloseModal,
  data,
  statusModal,
  handlePlayByPlayerModal,
  handlePauseByPlayerModal,
  currentTime,
  setCurrentTime,
  totalTimeVideo,
  setTimePlayerModal,
}: IModalVideo) {
  // useEffect(() => {
  //   function handleKeyPress(event: any) {
  //     if (event.key === " ") {
  //       if (statusModal == "Playing") {
  //         handlePauseByPlayerModal();
  //       } else if (statusModal == "Paused") {
  //         handlePlayByPlayerModal();
  //       }
  //     }
  //   }
  //   window.addEventListener("keydown", handleKeyPress);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);
  return (
    <div
      className={`videoModal_container fixed top-0 right-0 left-0 bottom-0 ${
        isOpenModalVideo ? "flex" : "hidden"
      } items-center justify-center bg-black`}
    >
      <div className="h-full w-full relative" ref={modalVideoRef}>
        <div
          className="closeButton opacity-0 transition duration-500 ease-in-out p-[10px] rounded-[50%] absolute top-5 left-5 bg-[#92929280] hover:cursor-pointer hover:bg-[#b7b7b7]"
          onClick={handleCloseModal}
        >
          <CgClose fontSize={20} />
        </div>

        <InformVideo
          key={data.video_id}
          title={data.title}
          caption={data.caption}
          hashtags={data.hashtags}
        />
        <ReactVideo
          pathAvatar={data.author.pathAvatar}
          heartCount={100}
          commentCount={93}
          shareCount={57}
        />

        <ControlsVideo
          statusVideo={statusModal}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          totalTime={totalTimeVideo}
          handlePlayByPlayer={handlePlayByPlayerModal}
          handlePauseByPlayer={handlePauseByPlayerModal}
          setTimePlayerModal={setTimePlayerModal}
        />
      </div>
    </div>
  );
}
