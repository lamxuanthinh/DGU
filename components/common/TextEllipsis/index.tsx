import { useState } from "react";

interface ITextEllipsis {
    content: string;
    className: string;
    characterLength?: number;
    isSeeMore?: boolean;
    isHideLess?: boolean;
    isShowFull?: boolean;
    isThreeDots?: boolean;
    handleExternalFunctions?: () => void;
}

export default function TextEllipsis({
    content,
    className,
    characterLength = 50,
    handleExternalFunctions,
    isThreeDots = false,
    isSeeMore = false,
    isHideLess = false,
    isShowFull = false,
}: ITextEllipsis) {
    const truncatedContent =
        content && content.length > characterLength ? content.slice(0, characterLength) + "...  " : content;

    const [showFullContent, setShowFullContent] = useState(isShowFull);

    const handleSeeMore = () => {
        setShowFullContent(true);
        handleExternalFunctions && handleExternalFunctions();
    };

    const handleHideLess = () => {
        setShowFullContent(false);
        handleExternalFunctions && handleExternalFunctions();
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
                        {content && content.length > characterLength && (
                            <span
                                onClick={() => {
                                    handleSeeMore();
                                }}
                                className="font-bold cursor-pointer underline"
                            >
                                see more
                            </span>
                        )}
                    </>
                )}
                {!showFullContent && isThreeDots && <>{truncatedContent}</>}
            </p>
        </div>
    );
}
