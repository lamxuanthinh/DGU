import { useState } from "react";

interface ITextEllipsis {
    content: string;
    styleContent: {
        maxHeight: string;
        textSize: string;
    };
}

export default function TextEllipsis({ content, styleContent }: ITextEllipsis) {
    const MAX_CAPTION_LENGTH = 50;
    const truncatedCaption =
        content && content.length > MAX_CAPTION_LENGTH ? content.slice(0, MAX_CAPTION_LENGTH) + "...  " : content;

    const [showFullCaption, setShowFullCaption] = useState(false);

    const handleSeeMoreClick = () => {
        setShowFullCaption(true);
    };

    return (
        <div className="w-full flex justify-start items-center">
            <p
                className={`max-h-[${styleContent.maxHeight}] overflow-hidden text-[${styleContent.textSize}] font-bold break-all`}
            >
                {showFullCaption ? (
                    content
                ) : (
                    <>
                        {truncatedCaption}
                        {content && content.length > MAX_CAPTION_LENGTH && (
                            <span onClick={handleSeeMoreClick} className="font-bold cursor-pointer">
                                See More
                            </span>
                        )}
                    </>
                )}
            </p>
        </div>
    );
}
