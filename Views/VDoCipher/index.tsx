import Video from "@/components/common/Video/DRMVideo";
import { useState } from "react";

export default function VDoCipher({ data }: any) {
    const [dataVideo] = useState(data.metaData);

    const VideoSection = ({ data }: any) => {

        return (
            <div className="snap-start flex-shrink-0 mb-3 w-full h-full text-[#fff] overflow-hidden">
                <div className="mb-4 relative h-full">
                    <Video data={data} />
                </div>
            </div>
        );
    };

    return (
        <div className="snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
            {dataVideo &&
                dataVideo.map((item: any) => {
                    return <VideoSection key={item.video_id} data={item} />;
                })}
        </div>
    );
}
