import NormalVideo from "@/components/common/Video/NormalVideo";

export default function Home({ data }: any) {
    const VideoSection = ({ data }: any) => {
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
