import Video from "@/components/common/Video/DRMVideo";
import { IDRMVideoShortPayload } from "@/model/video";

interface IVDoCipherProps {
    data: Array<IDRMVideoShortPayload>;
}

type TVDoCipherProps = {
    data: IDRMVideoShortPayload;
};

export default function VDoCipher({ data }: IVDoCipherProps) {
    const VideoSection = ({ data }: TVDoCipherProps) => {
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
            {data &&
                data.map((item: any) => {
                    return <VideoSection key={item.video_id} data={item} />;
                })}
        </div>
    );
}
