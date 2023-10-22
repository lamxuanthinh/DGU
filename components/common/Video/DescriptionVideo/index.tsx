import { Dispatch, SetStateAction, useState } from "react";
import { FaExternalLinkAlt, FaSwatchbook } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import TextEllipsis from "../../TextEllipsis";

interface IDescriptionVideo {
    title: string;
    caption: string;
    hashtags?: Array<string>;
    setComment: Dispatch<SetStateAction<boolean>>;
}

export default function DescriptionVideo({ title, caption = "", hashtags = [], setComment }: IDescriptionVideo) {
    const [isClose, setClose] = useState(false);
    const MAX_CONTENT_LENGTH = 100;
    const [isSeeMore, setSeeMore] = useState<boolean>(title.length > MAX_CONTENT_LENGTH ? false : true);

    const handleClose = () => {
        setClose(!isClose);
        setSeeMore(false);
    };

    return (
        <div
            className={`descriptionVideo opacity-0 transition duration-500 ease-in-out flex justify-between absolute bottom-[12%] sm:bottom-[10%] left-[2%] min-h-[160px] hover:bg-[#8a8a8a18] rounded-xl`}
            onClick={() => {
                setComment(false);
            }}
        >
            <div
                className={`${
                    isClose ? "hidden" : "w-[260px] sm:w-[420px] my-3 mx-4 max-h-[350px] overflow-auto scrollbar-none"
                }`}
            >
                <div className="flex items-center mb-2 text-[15px] font-bold">
                    <FaSwatchbook className="text-[15px] sm:text-[20px]" />
                    {title.length >= MAX_CONTENT_LENGTH && isSeeMore == false && (
                        <TextEllipsis
                            content={title}
                            className="px-2 text-[15px] sm:text-[20px] font-bold"
                            MAX_CONTENT_LENGTH={MAX_CONTENT_LENGTH}
                            isSeeMore={true}
                            handleOpenSeeMore={() => {
                                setSeeMore(true);
                            }}
                        />
                    )}
                    {title.length >= MAX_CONTENT_LENGTH && isSeeMore == true && (
                        <TextEllipsis
                            content={title}
                            className="px-2 text-[15px] sm:text-[20px] font-bold"
                            isShowFull
                        />
                    )}
                    {title.length < MAX_CONTENT_LENGTH && (
                        <TextEllipsis
                            content={title}
                            className="px-2 text-[15px] sm:text-[20px] font-bold"
                            isShowFull
                        />
                    )}
                </div>
                {title.length >= MAX_CONTENT_LENGTH && isSeeMore == true && (
                    <TextEllipsis
                        content={caption}
                        className="text-[13px]"
                        handleOpenSeeMore={() => {
                            setSeeMore(false);
                        }}
                        isShowFull
                        isHideLess
                    />
                )}
                {title.length < MAX_CONTENT_LENGTH && (
                    <TextEllipsis className="text-[13px]" content={caption} isSeeMore isHideLess />
                )}

                {hashtags.length > 0 && (
                    <div className="flex items-center pb-2">
                        <div className="flex items-center">
                            <div>
                                <FaExternalLinkAlt fontSize={"12px"} />
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
                    </div>
                )}
            </div>
            <div
                className={`${
                    isClose ? "bg-[#515151b1]" : ""
                } rounded-xl flex items-center px-1 hover:cursor-pointer hover:bg-[#9696966f] duration-300`}
                onClick={() => {
                    handleClose();
                }}
            >
                {isClose ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </div>
        </div>
    );
}
