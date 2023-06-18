import { useState } from "react";
import { FaExternalLinkAlt, FaSwatchbook } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
  const [isClose, setClose] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const MAX_CAPTION_LENGTH = 150;
  const truncatedCaption =
    caption.length > MAX_CAPTION_LENGTH
      ? caption.slice(0, MAX_CAPTION_LENGTH) + "...  "
      : caption;

  const handleSeeMoreClick = () => {
    setShowFullCaption(true);
  };

  const handleClick = () => {
    setClose(!isClose);
  };

  return (
    <div
      className={`flex justify-between absolute bottom-[10%] left-[2%] min-h-[160px] hover:bg-[#8a8a8a18] rounded-xl`}
    >
      <div className={`${isClose ? "hidden" : "w-[420px] py-3 px-4"}`}>
        <div className="flex items-center">
          <FaSwatchbook fontSize={"15px"} />
          <h2 className="px-2 text-[24px] font-bold">{title}</h2>
        </div>
        <div>
          <p className="text-[14px] font-medium pb-2">
            {showFullCaption ? (
              caption
            ) : (
              <>
                {truncatedCaption}
                {caption.length > MAX_CAPTION_LENGTH && (
                  <span
                    onClick={handleSeeMoreClick}
                    className="font-bold cursor-pointer"
                  >
                    See More
                  </span>
                )}
              </>
            )}
          </p>
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
      <div
        className={`${
          isClose ? "bg-[#515151b1]" : ""
        } rounded-xl flex items-center px-1 hover:cursor-pointer hover:bg-[#9696966f] duration-300`}
        onClick={handleClick}
      >
        {isClose ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </div>
    </div>
  );
}
