import { useState } from "react";
import ffmpeg from "@ffmpeg/ffmpeg";
import Navbar from "./Navbar";
import Video from "./Video";
import Toolbar from "./Toolbar";
import Progressbar from "./Progressbar";

export default function EditVideo() {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const [outputVideo, setOutputVideo] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [moveVideo, setMoveVideo] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedVideo(file);
    }
  };

  const handleAudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedAudio(file);
    }
  };

  const handleEditVideo = async () => {
    if (selectedVideo && selectedAudio) {
      const { createFFmpeg, fetchFile } = ffmpeg;
      const ffmpegInstance = createFFmpeg({ log: true });

      await ffmpegInstance.load();

      ffmpegInstance.FS(
        "writeFile",
        "input.mp4",
        await fetchFile(selectedVideo)
      );

      ffmpegInstance.FS(
        "writeFile",
        "audio.mp3",
        await fetchFile(selectedAudio)
      );

      await ffmpegInstance.run(
        "-i",
        "input.mp4",
        "-ss",
        "00:00:00",
        "-t",
        "60",
        "output.mp4"
      );

      await ffmpegInstance.run(
        "-i",
        "output.mp4",
        "-i",
        "audio.mp3",
        "-c",
        "copy",
        "-map",
        "0:v",
        "-map",
        "1:a",
        "final_output.mp4"
      );

      const data = ffmpegInstance.FS("readFile", "final_output.mp4");
      const videoUrl = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      setOutputVideo(videoUrl);
    } else {
      console.log("::[P}:: ==> Please Input Video And Audio");
    }
  };

  return (
    <div>
      <div className="flex">
        <h3>Input Source Video:</h3>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        <h3>Input Sound Video:</h3>
        <input type="file" accept="audio/*" onChange={handleAudioChange} />
        <button onClick={handleEditVideo}>Export Video</button>
      </div>
      <div>
        <h3>Video Input:</h3>
        {selectedVideo && (
          <video
            controls
            src={URL.createObjectURL(selectedVideo)}
            width={600}
          />
        )}
      </div>
      <div>Control Video</div>
      <div>
        Video Export:{" "}
        {outputVideo && <video controls src={outputVideo} width={600} />}
      </div>
      <div className="w-full h-screen bg-[#121212] p-3 flex flex-col">
        <button className="fixed top-0">Slipt</button>
        <Navbar />
        <div className="flex my-3 flex-grow-[1] gap-3 overflow-hidden">
          <Toolbar />
          <Video currentTime={currentTime} setCurrentTime={setCurrentTime} isPlaying={isPlaying} setIsPlaying={setIsPlaying} moveVideo={moveVideo} setDuration={setDuration} duration={duration} />
        </div>
        <Progressbar currentTime={currentTime} setCurrentTime={setCurrentTime} duration={duration} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setMoveVideo={setMoveVideo}></Progressbar>
      </div>
    </div>
  );
}
