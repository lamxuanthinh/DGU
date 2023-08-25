import { useEffect, useState } from "react";
import Image from "next/image";

import { BsFillEyeFill } from "react-icons/bs";

import { DetailCourseItem } from "@/Views/Profile/ProfileStyled";
import profile from "@/apis/profile";
import { useRouter } from "next/router";
import { ICourseDetail, ILessonDetail } from "@/model/profile";
import Button from "@/components/common/Button";

export default function Details() {
    const router = useRouter();
    const [listLessonDetail, setListLessonDetail] = useState<Array<ILessonDetail>>([]);
    const [course, setCourse] = useState<ICourseDetail>();

    useEffect(() => {
        const handleFechCourseDetail = async () => {
            const idCourse = router.query.courseId;
            if (idCourse) {
                const response = await profile.getCourseDetail(idCourse);
                const listDataVideo = response.metaData.videoPublicList;
                setListLessonDetail(listDataVideo);
                const course = response.metaData.course;
                setCourse(course);
            }
        };
        handleFechCourseDetail();
    }, []);

    const handleCheckTypeVideo = (id: string) => {
        if (course?.price === "0") {
            router.push(`/video/${id}`);
        } else {
            router.push(`/video/private/${id}`);
        }
    };

    return (
        <div className="w-full h-full flex   p-[10px] zero:flex-col zero:justify-start  xl:flex-row xl:justify-center  ">
            <div className="h-full xl:w-[33%]  flex justify-center rounded-[5px] mr-2 bg-gradient-to-b from-[#B0997A] via-[rgba(206, 188, 161, 0.7)] to-[rgba(176, 153, 122, 0)]">
                <div className="w-[99%] p-3 rounded-[5px]">
                    <div className="mb-4">
                        {course && (
                            <Image
                                className="w-full rounded-[5px] "
                                src={course.thumbnail}
                                alt="main1"
                                width={100}
                                height={100}
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="font-bold text-[26px] mb-4">{course?.title}</h1>
                        <div className="flex items-center justify-between pb-4">
                            <h4 className="text-[18px] font-bold">{course?.userId.name}</h4>
                            <div className="flex items-center">
                                <div className=" w-[35px] h-[26px] bg-[#1a3882] rounded-[2px] flex justify-center items-center text-[#ffffff] text-[18px] font-bold  ">
                                    {course?.totalVideo}
                                </div>
                                <p className="text-[13px] px-2 font-bold">video</p>
                            </div>
                            {course?.price === "0" ? (
                                <div className="text-[24px] font-bold text-[#007621]">FREE</div>
                            ) : (
                                <div className="text-[24px] font-bold text-[#007621]">{course?.price} $</div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[13px] pb-1 font-semibold">{course?.description}</p>
                        <div className="font-bold text-[13px] pb-3">
                            #thanhcong, #chodoi, #hoctap, #chodoilieucokipkhong
                        </div>
                        <div className="text-[13px] pb-4 font-semibold">
                            1.008.005 lượt xem • 98.005 lượt đánh giá • 8.005 lượt chia sẻ
                        </div>
                    </div>
                    <div>
                        <div className="w-[50%] rounded-[5px] cursor-pointer flex justify-center items-center bg-[#fff] p-2">
                            <div>
                                <BsFillEyeFill fontSize={20} />
                            </div>
                            <h2 className="px-3 font-semibold">See More All</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl w-[66%]">
                {listLessonDetail.map((item, index) => {
                    return (
                        <Button onClick={() => handleCheckTypeVideo(item._id)} key={index}>
                            <DetailCourseItem className="flex justify-start h-[140px] pb-4">
                                <div className="h-full flex items-center p-3">
                                    <p className="font-bold text-[15px]">{index}</p>
                                </div>
                                <div className="w-[200px]">
                                    {item.thumbnail && (
                                        <Image
                                            width={100}
                                            height={100}
                                            className="w-full h-full"
                                            src={item.thumbnail}
                                            alt="image course"
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col px-2 w-[70%]">
                                    <h1 className="font-bold text-[18px]">{item.title}</h1>
                                    <p className="font-medium text-[16px]">
                                        {course?.userId.name} • {Math.floor(Math.random() * 900) + 100}.
                                        {Math.floor(Math.random() * 900) + 100} views •
                                        {Math.floor(Math.random() * 3) + 1} years
                                    </p>
                                </div>
                            </DetailCourseItem>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}
