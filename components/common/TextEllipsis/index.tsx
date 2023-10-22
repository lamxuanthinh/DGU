import { useState } from "react";

interface ITextEllipsis {
    content: string;
    className: string;
    MAX_CONTENT_LENGTH?: number;
    isSeeMore?: boolean;
    isHideLess?: boolean;
    isShowFull?: boolean;
    handleOpenSeeMore?: () => void;
}

export default function TextEllipsis({
    content,
    className,
    MAX_CONTENT_LENGTH = 50,
    handleOpenSeeMore,
    isSeeMore = false,
    isHideLess = false,
    isShowFull = false,
}: ITextEllipsis) {
    const truncatedContent =
        content && content.length > MAX_CONTENT_LENGTH ? content.slice(0, MAX_CONTENT_LENGTH) + "...  " : content;

    const [showFullContent, setShowFullContent] = useState(isShowFull);

    const handleSeeMore = () => {
        setShowFullContent(true);
    };

    const handleHideLess = () => {
        setShowFullContent(false);
    };

    return (
        <div className="w-full flex justify-start items-center">
            <p className={`overflow-hidden break-all ${className}`}>
                {showFullContent && content}
                {showFullContent && isHideLess && (
                    <>
                        {content + `. `}
                        <span
                            onClick={() => {
                                handleHideLess();
                                handleOpenSeeMore && handleOpenSeeMore();
                            }}
                            className="font-bold cursor-pointer underline"
                        >
                            Hide less
                        </span>
                    </>
                )}
                {!showFullContent && isSeeMore && (
                    <>
                        {truncatedContent}
                        {content && content.length > MAX_CONTENT_LENGTH && (
                            <span
                                onClick={() => {
                                    handleSeeMore();
                                    handleOpenSeeMore && handleOpenSeeMore();
                                }}
                                className="font-bold cursor-pointer underline"
                            >
                                see more
                            </span>
                        )}
                    </>
                )}
            </p>
        </div>
    );
}
