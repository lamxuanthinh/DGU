import NormalVideo from "@/components/common/Video/NormalVideo";
import { IShortVideoPayload } from "@/model/video";

interface IHomeProps {
    data: Array<IShortVideoPayload>;
}

type TNormalVideoProps = {
    data: IShortVideoPayload;
};

export default function Home({ data }: IHomeProps) {

    const VideoSection = ({ data }: TNormalVideoProps) => {
        return (
            <div className="snap-start flex-shrink-0 mb-3 w-full h-full text-[#fff] overflow-hidden">
                <div className="mb-4 relative h-full">
                    <NormalVideo data={data} />
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
