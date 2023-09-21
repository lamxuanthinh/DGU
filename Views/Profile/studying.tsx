import Image from "next/image";
import Link from "next/link";

import { BiChevronRight } from "react-icons/bi";

import {
    StudyingCourseItem,
    StudyingCourseItemTitle,
    StudyingCourseItemDescription,
} from "@/Views/Profile/ProfileStyled";

import { CourseData } from "@/Views/Profile/constant";

export default function Studying() {
    return (
        <div className="w-full h-[100%]   flex flex-col justify-center items-center  ">
            <div className="w-full m-[10px] h-[100%] flex justify-center items-center overflow-hidden p-[10px]">
                <div className="  w-full  flex flex-col justify-center items-center   ">
                    {CourseData.map(({ title, link, themenails, process }) => (
                        <Link key={title} href={link} className={` w-[92%] `}>
                            <div className="dgu-course-card w-full h-[140px] flex flex-wrap justify-between items-center  rounded-[10px] mb-[10px] overflow-hidden hover:cursor-pointer  ">
                                <StudyingCourseItem className=" flex flex-wrap justify-start items-center   ">
                                    <div className="w-[140px] h-[140px] flex justify-center items-center">
                                        <div className="w-[120px] h-[120px] border-[3px] border-[#828282] overflow-hidden rounded-[10px]  flex justify-center items-center">
                                            {themenails}
                                        </div>
                                    </div>
                                    <div className="w-[250px] ml-[1rem] flex flex-col justify-evenly items-center ">
                                        <StudyingCourseItemTitle>
                                            <p className="text-[16px] font-bold  ">{title}</p>
                                        </StudyingCourseItemTitle>
                                        <StudyingCourseItemDescription>
                                            <p className="text-[12px] font-bold text-[#878787]  ">{title}</p>
                                        </StudyingCourseItemDescription>
                                    </div>
                                    <div className="flex flex-wrap justify-start items-center w-[85px]  m-[2rem] ">
                                        <div className="flex flex-wrap justify-start items-center h-[25px] ">
                                            <Image
                                                src={require("@/public/Images/Profile/Studying/course (1).png")}
                                                style={{
                                                    width: "25px",
                                                    height: "25px",
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                }}
                                                alt="avt"
                                            />
                                            <Image
                                                src={require("@/public/Images/Profile/Studying/course (2).png")}
                                                style={{
                                                    width: "25px",
                                                    height: "25px",
                                                    marginLeft: "-10px",
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                }}
                                                alt="avt"
                                            />
                                            <Image
                                                src={require("@/public/Images/Profile/Studying/course (3).png")}
                                                style={{
                                                    width: "25px",
                                                    height: "25px",
                                                    marginLeft: "-10px",
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                }}
                                                alt="avt"
                                            />
                                            <Image
                                                src={require("@/public/Images/Profile/Studying/course (4).png")}
                                                style={{
                                                    width: "25px",
                                                    height: "25px",
                                                    marginLeft: "-10px",
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                }}
                                                alt="avt"
                                            />
                                            <div className=" ml-[-10px] flex justify-center items-center h-[25px] w-[25px] bg-[#7D7979] text-[8px] text-[#ffffff]   rounded-[50%]  ">
                                                4k+
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center w-[150px] h-[20px] bg-[#f1f1f1] rounded-[20px] ">
                                        <div
                                            className={`flex flex-row justify-end items-center w-[${process}] h-[20px] bg-[#85daff] text-[#448ab3] font-bold text-[15px] rounded-[20px] `}
                                        >
                                            {process}
                                        </div>
                                    </div>
                                </StudyingCourseItem>

                                <div className="w-[60px] h-full flex justify-center items-center">
                                    <BiChevronRight fontSize={"24px"} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
