import Video from "@/components/common/Video";
import { IVideoShortPayload } from "@/model/video";

interface IDetailsVideo {
    data: IVideoShortPayload;
}

export default function DetailsVideo({ data }: IDetailsVideo) {
    return (
        <div className="snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
            <div className="relative h-full text-white">
                <Video data={data} />
            </div>
        </div>
    );
}
