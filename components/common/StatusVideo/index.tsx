import { useState, useEffect, useRef } from "react";
import { useElementOnScreen } from "@/utils/useElementOnScreen";
import useVdocipher from "@/hooks/use-vdocipher";
import { IoIosArrowDown } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import InformVideo from "./InformVideo";
import ReactVideo from "./ReactVideo";

export default function VideoStatusUsingAPI({ data }: any) {
  const [status, setStatus] = useState("NA");
  const [statusModal, setStatusModal] = useState("NA");
  const [player, setPlayer] = useState<any>(null);
  const [playerModal, setPlayerModal] = useState<any>(null);
  const { loadVideo, isAPIReady } = useVdocipher();
  const [videoTag, setVideoTag] = useState(null);
  const [videoTagModal, setVideoTagModal] = useState(null);
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef(null);
  const videoModalRef = useRef(null);

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

    //-------------Modal---------------------//
    const container_modal: any = videoModalRef.current;
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
    if (!videoTag) {
      setPlayer(null);
      setPlayerModal(null);
      return;
    }
    //------------list Video home---------------//
    const player = new (window as any).VdoPlayer(videoTag);
    (window as any).player = player;
    setPlayer(player);
    player.video.addEventListener("play", () => setStatus("Playing"));
    player.video.addEventListener("pause", () => setStatus("Paused"));
    player.video.addEventListener("timeupdate", () => {
      setCurrentTime(player.video.currentTime);
    });
    (window as any).player = player;

    //-------------Modal---------------------//
    const playerModal = new (window as any).VdoPlayer(videoTagModal);
    (window as any).playerModal = playerModal;
    setPlayerModal(playerModal);
    playerModal.video.addEventListener("play", () => setStatusModal("Playing"));
    playerModal.video.addEventListener("pause", () => setStatusModal("Paused"));
    playerModal.video.addEventListener("timeupdate", () => {
      setCurrentTime(playerModal.video.currentTime);
    });
    (window as any).playerModal = playerModal;
  }, [isAPIReady, videoTag]);

  //-------------Handle Home Scroll---------------------//
  useEffect(() => {
    if (isVisibile && player && status != "NA") {
      player.video.play();
      setStatus("Playing");
    } else if (!isVisibile && player && status != "NA") {
      player.video.pause();
      setStatus("Paused");
    }
  }, [isVisibile]);

  //-------------Handle modal open---------------------//
  useEffect(() => {
    if (openModalVideo && playerModal) {
      playerModal.video.play();
      setStatus("Playing");
      player.video.pause();
      setStatus("Paused");
    } else if (!openModalVideo && player) {
      playerModal.video.pause();
      setStatus("Paused");
      player.video.play();
      setStatus("Playing");
    }
  }, [openModalVideo]);

  //----------------Modal-----------------------//
  const handleOpenModal = () => {
    setOpenModalVideo(!openModalVideo);
    window.history.pushState(null, "", `video/${data.video_id}`);
    playerModal.video.currentTime = currentTime;
  };

  const handleCloseModal = () => {
    setOpenModalVideo(false);
    window.history.back();
    player.video.currentTime = currentTime;
  };

  return (
    <div ref={videoRef} className="w-full h-full">
      {status != "NA" && (
        <div
          onClick={handleOpenModal}
          className="absolute top-0 w-[100%] h-[91%] hover:cursor-pointer"
        ></div>
      )}
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
      {status == "NA" && (
        <footer>
          <div className="absolute left-[40%] top-[93%] h-[35px] flex justify-center">
            <div>
              <p>Scroll down to see more</p>
              <div className="flex justify-center">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </footer>
      )}

      <div
        className={`fixed top-0 right-0 left-0 bottom-0 ${
          openModalVideo ? "flex" : "hidden"
        } items-center justify-center bg-black`}
      >
        <div className="h-full w-full relative" ref={videoModalRef}>
          <div
            className="p-3 absolute top-5 right-5 bg-[#a8a8a8] hover:cursor-pointer"
            onClick={handleCloseModal}
          >
            <CgClose fontSize={24} />
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
        </div>
      </div>
    </div>
  );
}
