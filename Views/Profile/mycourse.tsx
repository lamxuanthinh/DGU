import Image from "next/image";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import { CourseCardInfo } from "@/Views/Profile/ProfileStyled";
import { useEffect, useState } from "react";
import profile from "@/apis/profile";
import TextEllipsis from "@/components/common/TextEllipsis";
import { FaLock } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function MyCourse() {
    const [myCourseData, setMyCourseData] = useState<any>(null);
    const { data: session } = useSession() || {};

    useEffect(() => {
        const userId = session?.user._id;
        if (userId) {
            const fetchMyCourseApi = async () => {
                const { metaData }: any = (await profile.getAllMyCourse(userId)) || {};
                setMyCourseData(metaData.courseList);
            };
            fetchMyCourseApi();
        }
    }, [session]);

    return (
        <div className="w-[100%] h-[100%] flex flex-col overflow-hidden p-[10px] ">
            <div className="w-full m-[10px] h-[100%] flex justify-center items-center">
                <div className="w-full xl:max-w-[1700px] zero:max-w-[400px] md:max-w-[900px] 3xl:max-w-[1900px]    mx-auto grid  md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 px-[20px]  ">
                    {myCourseData &&
                        myCourseData
                            .slice()
                            .reverse()
                            .map((item: any) => {
                                return (
                                    <Link key={item._id} href={`/profile/detail/${item._id}`}>
                                        <div className=" dgu-course-card flex flex-col rounded-[10px] mx-[5px] my-[10px] overflow-hidden hover:cursor-pointer  ">
                                            <div className=" w-full h-[180px] flex justify-center items-center relative">
                                                <Image
                                                    width={360}
                                                    height={360}
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

                                            <div className="w-full h-[130px] flex justify-center items-center">
                                                <CourseCardInfo className="flex flex-col justify-evenly items-center">
                                                    <TextEllipsis
                                                        content={item.title}
                                                        styleContent={{ maxHeight: "48px", textSize: "16px" }}
                                                    />
                                                    <div className="w-full flex justify-between">
                                                        {item.price === "0" ? (
                                                            <div className="flex justify-start items-center h-[25px]">
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
                                                        ) : (
                                                            <div className="bg-[#fcf8bae6] flex justify-start items-center h-[25px] rounded-[10px] p-3">
                                                                <FaLock fontSize={10} />
                                                                <p className="text-[10px] font-bold p-2 ">Private</p>
                                                            </div>
                                                        )}

                                                        <div className="bg-[#000000] flex justify-start items-center h-[25px] rounded-[20px] ">
                                                            <p className="text-[10px] text-[#ffffff] font-bold p-3 ">
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
