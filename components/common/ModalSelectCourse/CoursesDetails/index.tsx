import { ICourseDetails } from "@/model/course";
import { DetailCourseItem } from "@/Views/Profile/ProfileStyled";
import { useState } from "react";

interface ICourseDetailsProps {
    data: ICourseDetails;
}

export default function CoursesDetails({ data }: ICourseDetailsProps) {
    const [showFullCaption, setShowFullCaption] = useState(false);

    const MAX_CAPTION_LENGTH = 60;
    const truncatedCaption =
        data.title1.length > MAX_CAPTION_LENGTH ? data.title1.slice(0, MAX_CAPTION_LENGTH) + "...  " : data.title1;

    const handleSeeMoreClick = () => {
        setShowFullCaption(true);
    };

    return (
        <DetailCourseItem className="mx-2 mb-4 grid grid-cols-4">
            <div className="col-span-1">{data.image}</div>
            <div className="col-span-3 px-2">
                <h1 className="font-semibold">
                    {" "}
                    {showFullCaption ? (
                        data.title1
                    ) : (
                        <>
                            {truncatedCaption}
                            {data.title1.length > MAX_CAPTION_LENGTH && (
                                <span onClick={handleSeeMoreClick} className="text-[13px] font-semibold cursor-pointer">
                                    See More
                                </span>
                            )}
                        </>
                    )}
                </h1>
                <p className="text-[12px] font-semibold">{data.title2}</p>
            </div>
        </DetailCourseItem>
    );
}
