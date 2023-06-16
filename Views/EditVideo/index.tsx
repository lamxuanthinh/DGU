import { useState } from "react";
import ffmpeg from "@ffmpeg/ffmpeg";
import Navbar from "./Navbar";
import Video from "./Video";
import Toolbar from "./Toolbar";

export default function EditVideo() {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const [outputVideo, setOutputVideo] = useState<string>("");

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
    <>
      <div className="flex">
        <h3>Input Source Video:</h3>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        <h3>Input Sound Video:</h3>
        <input type="file" accept="audio/*" onChange={handleAudioChange} />
        <button onClick={handleEditVideo}>Export Video</button>
      </div>
      <Navbar />
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
      <div>
        <h1>Continue coding here</h1>
        <Navbar />
        <Video />
        <Toolbar />
      </div>
    </>
  );
}
