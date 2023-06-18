import Image from "next/image";
import { useState } from "react";
import VideoStatusUsingAPI from "@/components/common/StatusVideo";

export default function Home({ data }: any) {
  const [dataVideo, setDataVideo] = useState(data.metaData);

  const VideoSection = ({ data }: any) => {
    return (
      <div className="snap-start flex-shrink-0 mb-3 w-full h-full text-[#fff]">
        <div className="mb-4 relative h-full">
          <VideoStatusUsingAPI data={data} />
        </div>
      </div>
    );
  };

  return (
    <div className="snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
      {dataVideo &&
        dataVideo.map((item: any, index: number) => {
          return <VideoSection key={item.video_id} data={item} />;
        })}
    </div>
  );
}
