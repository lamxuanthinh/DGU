import { IVideoPayload } from "@/model/video";
import { MutableRefObject, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import ControlsVideo from "../ControlsVideo";
import InformVideo from "../InformVideo";
import ReactVideo from "../ReactVideo";

interface IModalVideo {
  dataVideo: any;
  modalVideoRef: MutableRefObject<null>;
  statusModal: string;
  handlePlayByPlayerModal: () => void;
  handlePauseByPlayerModal: () => void;
  currentTime: any;
  setCurrentTime: any;
  setTimePlayerModal: (value: any) => void;
  isOpenModalVideo: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
}

export default function ModalVideo({
  dataVideo,
  modalVideoRef,
  statusModal,
  handlePlayByPlayerModal,
  handlePauseByPlayerModal,
  currentTime,
  setCurrentTime,
  setTimePlayerModal,
  isOpenModalVideo,
  handleCloseModal,
  handleOpenModal,
}: IModalVideo) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
          key={dataVideo.video_id}
          title={dataVideo.title}
          caption={dataVideo.caption}
          hashtags={dataVideo.hashtags}
        />
        <ReactVideo
          pathAvatar={dataVideo.author.pathAvatar}
          heartCount={100}
          commentCount={93}
          shareCount={57}
        />

        <ControlsVideo
          dataVideo={dataVideo.video_id_children}
          totalTime={dataVideo.duration}
          statusVideo={statusModal}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          handlePlayByPlayer={handlePlayByPlayerModal}
          handlePauseByPlayer={handlePauseByPlayerModal}
          setTimePlayerModal={setTimePlayerModal}
          isOpenModalVideo={isOpenModalVideo}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </div>
  );
}
