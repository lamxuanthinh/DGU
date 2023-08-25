import Image from "next/image";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import { CourseCardInfo } from "@/Views/Profile/ProfileStyled";
import { useEffect, useState } from "react";
import profile from "@/apis/profile";
import TextEllipsis from "@/components/common/TextEllipsis";

export default function MyCourse() {
    const [myCourseData, setMyCourseData] = useState<any>(null);

    useEffect(() => {
        const fetchMyCourseApi = async () => {
            const userId = localStorage.getItem("userId");
            const myCourse = (userId && (await profile.getAllMyCourse(userId))) || undefined;
            setMyCourseData(myCourse.metaData.courseList);
        };

        fetchMyCourseApi();
    }, []);

    return (
        <div className="w-[100%] h-[100%]   flex flex-col overflow-hidden p-[10px] ">
            <div className="w-full m-[10px] h-[100%] flex justify-center items-center">
                <div className="w-full xl:max-w-[1700px] zero:max-w-[400px] md:max-w-[900px] 3xl:max-w-[1900px]    mx-auto grid  md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 px-[20px]  ">
                    {myCourseData &&
                        myCourseData.map((item: any) => {
                            return (
                                <Link key={item._id} href={`/profile/detail/${item._id}`}>
                                    <div className=" dgu-course-card h-[340px] flex flex-col rounded-[10px] mx-[5px] my-[10px] overflow-hidden hover:cursor-pointer  ">
                                        <div className="w-full h-[180px] flex justify-center items-center relative">
                                            <Image
                                                width={100}
                                                height={100}
                                                src={`${item.thumbnail}`}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="logo"
                                            />

                                            <div className="w-full bottom-0 left-0 absolute">
                                                <div className="flex flex-wrap  my-[0.5rem]  gap-y-2 sm:gap-y-0">
                                                    <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex justify-start items-center h-[25px] rounded-[20px] ">
                                                        <p className="text-[10px] font-bold p-2 ">10 Lesson</p>
                                                    </div>
                                                    <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex justify-start items-center h-[25px] rounded-[20px] ">
                                                        <p className="text-[10px] font-bold p-2 ">2h 10m</p>
                                                    </div>
                                                    <div className="bg-[#f3f3f3e7] ml-[0.5rem] flex flex-wrap justify-evenly items-center w-[100px] h-[25px] rounded-[20px] ">
                                                        <BiCommentDetail
                                                            fontSize={"10px"}
                                                            style={{ marginTop: "0.1rem" }}
                                                        />
                                                        <p className="text-[10px] font-bold ">10 comments</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-[160px] flex justify-center items-center">
                                            <CourseCardInfo className=" flex flex-col justify-evenly items-center ">
                                                <TextEllipsis
                                                    content={item.description}
                                                    styleContent={{ maxHeight: "48px", textSize: "16px" }}
                                                />
                                                <div className="w-full h-[25px] flex flex-wrap justify-start ">
                                                    <div className="bg-[#fcf8bae6] flex justify-start items-center h-[25px] rounded-[20px] ">
                                                        <p className="text-[10px] font-bold p-2 ">Beginner</p>
                                                    </div>

                                                    <div className="flex flex-wrap justify-start items-center h-[25px] ml-[1rem] ">
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
                                                <div className="w-full h-[25px]  flex flex-wrap justify-evenly items-center ">
                                                    <div className="flex flex-wrap justify-evenly items-center">
                                                        {item.price === "0" ? (
                                                            <span className="text-black font-semibold">Free</span>
                                                        ) : (
                                                            <>
                                                                <p className="text-[12px] text-[#000000] font-semibold">
                                                                    $75.99
                                                                </p>
                                                                <p className="text-[10px] text-[#8B8B8B] font-semibold">
                                                                    /lifetime
                                                                </p>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="bg-[#000000] flex justify-start items-center h-[25px] rounded-[20px] ">
                                                        <p className="text-[10px] text-[#ffffff] font-bold p-2 ">
                                                            Joinclass now
                                                        </p>
                                                    </div>
                                                </div>
                                            </CourseCardInfo>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
