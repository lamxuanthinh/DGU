import { useState, useEffect, useRef } from "react";
import { useElementOnScreen } from "@/utils/useElementOnScreen";
import useVdocipher from "@/hooks/use-vdocipher";
import InformVideo from "./InformVideo";
import ReactVideo from "./ReactVideo";
import ModalVideo from "./ModalVideo";
import ControlsVideo from "./ControlsVideo";
import { IVideoShortPayload } from "@/model/video";

interface IVideoStatusUsingAPI {
  data: IVideoShortPayload;
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
  const [currentTimeModal, setCurrentTimeModal] = useState(0);
  const { loadVideo, isAPIReady } = useVdocipher();
  const dataFullVideo = data.fullVideoInfo;
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
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

    const container_modal: any = modalVideoRef.current;
    if (container_modal) {
      const iframe_modal = container_modal.querySelector("iframe");
      const isIframeExist_modal = iframe_modal !== null;
      if (!isIframeExist_modal) {
        const videoModal: any = loadVideo({
          pathVideo: data.fullVideoInfo.pathVideo,
          configuration: { loop: true },
          container: container_modal,
        });
        setVideoTagModal(videoModal);
      }
    }
  }, [data, loadVideo]);

  useEffect(() => {
    if (!isAPIReady) return;

    if (!videoTag) {
      setPlayer(null);
      setPlayerModal(null);
      return;
    }
    const player = new (window as any).VdoPlayer(videoTag);
    (window as any).player = player;
    setPlayer(player);

    player.video.addEventListener("play", () => setStatus("Playing"));
    player.video.addEventListener("timeupdate", () => {
      setCurrentTime(player.video.currentTime);
    });

    (window as any).player = player;

    if (!videoTagModal) {
      setPlayer(null);
      setPlayerModal(null);
      return;
    }
    const playerModal = new (window as any).VdoPlayer(videoTagModal);
    (window as any).playerModal = playerModal;
    setPlayerModal(playerModal);

    playerModal.video.addEventListener("timeupdate", () => {
      setCurrentTimeModal(playerModal.video.currentTime);
    });

    (window as any).playerModal = playerModal;
  }, [isAPIReady, videoTag, videoTagModal]);

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
    if (player && playerModal.video) {
      playerModal.video.currentTime = value;
    }
  };

  const setTimePlayer = (value: any) => {
    if (player && player.video) {
      player.video.currentTime = value;
    }
  };

  const handleOpenModal = () => {
    setOpenModalVideo(!isOpenModalVideo);
    const currentPathname = window.location.pathname;
    if (!currentPathname.includes("video/")) {
      window.history.pushState(null, "", `video/${data.video_id}`);
    }
    setTimePlayerModal(currentTime + data.break_point);
  };

  const handleCloseModal = () => {
    setOpenModalVideo(false);
    if (window.history.length > 2) {
      window.history.back();
    }
    setTimePlayer(currentTime - data.break_point);
  };

  //------------
  useEffect(() => {
    if (isVisibile) {
      handlePlayByPlayer();
    } else if (!isVisibile) {
      handlePauseByPlayer();
    }
  }, [isVisibile]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isOpenModalVideo) {
      handlePlayByPlayerModal();
      handlePauseByPlayer();
    } else if (!isOpenModalVideo) {
      handlePauseByPlayerModal();
      handlePlayByPlayer();
    }
  }, [isOpenModalVideo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={videoRef} className="videoModal_container w-full h-full">
      {status != "NA" && (
        <div
          onClick={handleOpenModal}
          className="absolute top-0 w-[100%] h-[100%] hover:cursor-pointer"
        ></div>
      )}

      <ControlsVideo
        dataVideo={data}
        totalTime={data.duration}
        statusVideo={status}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        handlePlayByPlayer={handlePlayByPlayer}
        handlePauseByPlayer={handlePauseByPlayer}
        setTimePlayerModal={setTimePlayer}
        isOpenModalVideo={isOpenModalVideo}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />

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
        dataVideo={dataFullVideo}
        modalVideoRef={modalVideoRef}
        statusModal={statusModal}
        handlePlayByPlayerModal={handlePlayByPlayerModal}
        handlePauseByPlayerModal={handlePauseByPlayerModal}
        currentTime={currentTimeModal}
        setCurrentTime={setCurrentTimeModal}
        setTimePlayerModal={setTimePlayerModal}
        isOpenModalVideo={isOpenModalVideo}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}
