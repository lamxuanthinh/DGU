import { FaExternalLinkAlt, FaSwatchbook } from "react-icons/fa";

interface IInformVideo {
  title: string;
  caption: string;
  hashtags: Array<string>;
}

export default function InformVideo({
  title,
  caption,
  hashtags,
}: IInformVideo) {
  return (
    <div className="absolute bottom-[10%] left-[4%] w-[413px]">
      <div className="flex items-center">
        <FaSwatchbook fontSize={"15px"} />
        <h2 className="px-2 text-[24px] font-bold">{title}</h2>
      </div>
      <div>
        <p className="text-[14px] font-medium pb-2">{caption}</p>
      </div>
      <div className="flex items-center pb-2">
        <p className="text-[15px] font-semibold pr-2">Chi tiết khóa học:</p>
        <div className="flex items-center">
          <FaExternalLinkAlt fontSize={"12px"} />
          <p className="px-2 text-[15px] font-semibold">{title}</p>
        </div>
      </div>
      <div className="flex">
        {hashtags.map((item: any, index: any) => {
          return (
            <p key={index} className="font-bold text-[15px]">
              #{item.name}
              {`${hashtags.length - 1 == index ? "." : ","}`}
            </p>
          );
        })}
      </div>
    </div>
  );
}
