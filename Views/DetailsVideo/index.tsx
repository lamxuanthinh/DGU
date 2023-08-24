import NormalVideo from "@/components/common/Video/NormalVideo";
import { IShortVideoPayload } from "@/model/video";

interface IDetailsVideo {
    data: IShortVideoPayload;
}

export default function DetailsVideo({ data }: IDetailsVideo) {
    return (
        <div className="snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
            <div className="relative h-full text-white">
                <NormalVideo data={data} />
            </div>
        </div>
    );
}
