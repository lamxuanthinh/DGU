import { useState, useEffect, useRef } from "react";
import { useElementOnScreen } from "@/utils/useElementOnScreen";
import useVdocipher from "@/hooks/use-vdocipher";
import { IoIosArrowDown } from "react-icons/io";
import InformVideo from "./InformVideo";
import ReactVideo from "./ReactVideo";
import ModalVideo from "./ModalVideo";
import ControlsVideo from "./ControlsVideo";

interface IVideoStatusUsingAPI {
  data: any;
}

export default function VideoStatusUsingAPI({ data }: IVideoStatusUsingAPI) {
  const [status, setStatus] = useState("NA");
  const [statusModal, setStatusModal] = useState("NA");
  const [player, setPlayer] = useState<any>(null);
  const [playerModal, setPlayerModal] = useState<any>(null);
  const [videoTag, setVideoTag] = useState(null);
  const [videoTagModal, setVideoTagModal] = useState(null);
  const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoModalLength, setVideoModalLength] = useState(0);
  const { loadVideo, isAPIReady } = useVdocipher();
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    //------------list Video home---------------//
    const container: any = videoRef.current;
    const iframe = container.querySelector("iframe");
    const isIframeExist = iframe !== null;
    if (!isIframeExist) {
      const video: any = loadVideo({
        pathVideo: data.pathVideo,
        configuration: { loop: true },
        container: container,
      });
      setVideoTag(video);
    }

    //------------Modal---------------//
    const container_modal: any = modalVideoRef.current;
    if (container_modal) {
      const iframe_modal = container_modal.querySelector("iframe");
      const isIframeExist_modal = iframe_modal !== null;
      if (!isIframeExist_modal) {
        const videoModal: any = loadVideo({
          pathVideo: data.pathVideo,
          configuration: { loop: true },
          container: container_modal,
        });
        setVideoTagModal(videoModal);
      }
    }
  }, []);

  useEffect(() => {
    if (!isAPIReady) return;

    //------------list Video home---------------//
    if (!videoTag) {
      setPlayer(null);
      setPlayerModal(null);
      return;
    }
    const player = new (window as any).VdoPlayer(videoTag);
    (window as any).player = player;
    setPlayer(player);

    player.video.addEventListener("play", () => setStatus("Playing"));
    player.video.addEventListener("pause", () => setStatus("Paused"));

    (window as any).player = player;

    //-------------Modal---------------------//
    if (!videoTagModal) {
      setPlayer(null);
      setPlayerModal(null);
      return;
    }
    const playerModal = new (window as any).VdoPlayer(videoTagModal);
    (window as any).playerModal = playerModal;
    setPlayerModal(playerModal);

    playerModal.video.addEventListener("loadeddata", () => {
      setVideoModalLength(playerModal.video.duration);
    });
    playerModal.video.addEventListener("timeupdate", () => {
      setCurrentTime(playerModal.video.currentTime);
    });

    (window as any).playerModal = playerModal;
  }, [isAPIReady, videoTag]);

  //-------------function handle statusVideo------------//

  const handlePlayByPlayerModal = () => {
    if (playerModal) {
      playerModal.video.play();
      setStatusModal("Playing");
    }
  };

  const handlePauseByPlayerModal = () => {
    if (playerModal) {
      playerModal.video.pause();
      setStatusModal("Paused");
    }
  };

  const handlePlayByPlayer = () => {
    if (player) {
      player.video.play();
      setStatus("Playing");
    }
  };

  const handlePauseByPlayer = () => {
    if (player) {
      player.video.pause();
      setStatus("Paused");
    }
  };

  const setTimePlayerModal = (value: any) => {
    playerModal.video.currentTime = value;
  };

  const handleOpenModal = () => {
    setOpenModalVideo(!isOpenModalVideo);
    const currentPathname = window.location.pathname;
    if (!currentPathname.includes("video/")) {
      window.history.pushState(null, "", `video/${data.video_id}`);
    }
    playerModal.video.currentTime = currentTime;
  };

  const handleCloseModal = () => {
    setOpenModalVideo(false);
    if (window.history.length > 2) {
      window.history.back();
    }
    player.video.currentTime = currentTime;
  };

  //-------------Handle Home Scroll---------------------//
  useEffect(() => {
    if (isVisibile && status != "NA") {
      handlePlayByPlayer();
    } else if (!isVisibile && status != "NA") {
      handlePauseByPlayer();
    }
  }, [isVisibile]);

  //-------------Handle modal open---------------------//
  useEffect(() => {
    if (isOpenModalVideo) {
      handlePlayByPlayerModal();
      handlePauseByPlayer();
    } else if (!isOpenModalVideo) {
      handlePauseByPlayerModal();
      handlePlayByPlayer();
    }
  }, [isOpenModalVideo]);

  return (
    <div ref={videoRef} className="w-full h-full video-list">
      {status != "NA" && (
        <div
          onClick={handleOpenModal}
          className="absolute top-0 w-[100%] h-[100%] hover:cursor-pointer"
        ></div>
      )}

      {/* <ControlsVideo
        statusVideo={status}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        totalTime={videoModalLength}
        handlePlayByPlayer={handlePlayByPlayerModal}
        handlePauseByPlayer={handlePauseByPlayerModal}
        setTimePlayerModal={setTimePlayerModal}
      /> */}
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

      <ModalVideo
        isOpenModalVideo={isOpenModalVideo}
        modalVideoRef={modalVideoRef}
        handleCloseModal={handleCloseModal}
        data={data}
        statusModal={statusModal}
        handlePlayByPlayerModal={handlePlayByPlayerModal}
        handlePauseByPlayerModal={handlePauseByPlayerModal}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        totalTimeVideo={videoModalLength}
        setTimePlayerModal={setTimePlayerModal}
      />
    </div>
  );
}
