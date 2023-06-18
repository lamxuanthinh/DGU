import VideoStatusUsingAPI from "@/components/common/StatusVideo";

interface IDetailsVideo {
  data: any;
}

export default function DetailsVideo({ data }: IDetailsVideo) {
  return (
    <div className="snap-y w-full h-full overflow-auto snap-mandatory scrollbar-none">
      <div className="relative h-full text-white">
        <VideoStatusUsingAPI data={data} />
      </div>
    </div>
  );
}
