import { CourseCardInfo } from "@/Views/Profile/ProfileStyled";
import Image from "next/image";

interface IPreviewCourse {
    lessonDataInput: {
        title: string;
        themenails: JSX.Element;
        author: string;
        price: number | string;
    };
}

export default function PreviewLesson({ lessonDataInput }: IPreviewCourse) {
    return (
        <div className="w-full dgu-course-card bg-white h-[340px] flex flex-col rounded-[10px] mx-[5px] my-[10px] overflow-hidden hover:cursor-pointer">
            <div className="w-full h-[180px] flex justify-center items-center relative">
                {lessonDataInput.themenails}
            </div>

            <div className="w-full h-[160px] flex justify-center items-center">
                <CourseCardInfo className=" flex flex-col justify-around items-center">
                    <div className="w-full h-[60px]  flex flex-wrap justify-start items-center py-3">
                        <p className="text-[16px] font-bold">{lessonDataInput.title}</p>
                    </div>

                    <div className="w-full flex flex-wrap justify-start items-center">
                        <Image
                            src={require("@/public/Images/CreateCourse/user_not_found.png")}
                            style={{
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%",
                                marginRight: "10px",
                            }}
                            alt="avt"
                        />
                        <p className="text-[16px] font-bold text-[#4e4e4e]">{lessonDataInput.author}</p>
                    </div>

                    <div className="w-full h-[25px]  flex justify-between items-center text-[14px] text-[#8B8B8B] font-semibold">
                        <div className="flex flex-wrap justify-evenly items-center">
                            <p>0 views</p>
                        </div>
                        <div className="flex flex-wrap justify-evenly items-center">
                            <p>1 months ago</p>
                        </div>
                    </div>
                </CourseCardInfo>
            </div>
        </div>
    );
}
