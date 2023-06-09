import { useState, useEffect, useRef } from "react";
import { useElementOnScreen } from "@/utils/useElementOnScreen";
import useVdocipher from "@/hooks/use-vdocipher";

export default function VideoStatusUsingAPI({ data }: any) {
  const [status, setStatus] = useState("Ready");
  const [player, setPlayer] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const { loadVideo, isAPIReady } = useVdocipher();
  const [videoTag, setVideoTag] = useState(null);

  const videoRef = useRef(null);

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
  }, []);

  useEffect(() => {
    if (!isAPIReady) return;
    if (!videoTag) {
      setPlayer(null);
      return;
    }
    const player = new (window as any).VdoPlayer(videoTag);
    (window as any).player = player;
    setPlayer(player);
    player.video.addEventListener("play", () => setStatus("Playing"));
    player.video.addEventListener("pause", () => setStatus("Paused"));
    player.video.addEventListener("canplay", () => setStatus("Ready"));
    (window as any).player = player;
  }, [isAPIReady, videoTag]);

  useEffect(() => {
    if (isVisibile && player) {
      player.video.play();
      setStatus("Playing");
    } else if (!isVisibile && player) {
      player.video.pause();
      setStatus("Paused");
    }
  }, [isVisibile]);

  return <div ref={videoRef} className="w-[100%] h-[100%]"></div>;
}
