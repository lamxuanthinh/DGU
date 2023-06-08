import { useState, useEffect, useRef } from "react";
import { useElementOnScreen } from "@/pages/_app";
import useVdocipher from "@/hooks/use-vdocipher";

export default function VideoStatusUsingAPI({ data }) {
  const [status, setStatus] = useState("Ready");
  const [player, setPlayer] = useState(null);
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
    const container = videoRef.current;
    const iframe = container.querySelector("iframe");
    const isIframeExist = iframe !== null;
    if (!isIframeExist) {
      const video = loadVideo({
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
    const player = new window.VdoPlayer(videoTag);
    window.player = player;
    setPlayer(player);
    player.video.addEventListener("play", () => setStatus("Playing"));
    player.video.addEventListener("pause", () => setStatus("Paused"));
    player.video.addEventListener("canplay", () => setStatus("Ready"));
    window.player = player;
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
