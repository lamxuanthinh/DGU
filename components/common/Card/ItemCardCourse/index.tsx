import { IMyCourseData } from "@/model/course";
import Button from "../../Button";
import Image from "next/image";
import imageNotFound from "@/public/Images/CreateCourse/image_not_found.png";
import avt1 from "@/public/Images/Profile/Infomation/avt_quan_su.jpg";
import avt2 from "@/public/Images/Profile/Infomation/boy_thanh_lich.png";
import avt3 from "@/public/Images/Profile/Infomation/boy_thoi_trang.png";
import avt4 from "@/public/Images/Profile/Infomation/cool_green.jpg";

interface IItemCardCourseProps {
    dataCard: IMyCourseData;
    className?: string;
}

export function ItemCardCourse({ dataCard, className }: IItemCardCourseProps) {
    const { thumbnail, title, level, price, author } = dataCard;
    return (
        <div className={`cursor-pointer hover:scale-105 transition-transform duration-500 ${className}`}>
            <div className="flex flex-col shadow-lg rounded-[5px] h-full">
                <div className="h-[50%] relative">
                    <Image
                        width={400}
                        height={400}
                        src={thumbnail || imageNotFound}
                        alt="course image"
                        className="w-full h-full xl:h-[200px] object-cover"
                    />
                    <div className="flex absolute gap-x-1 bottom-[10px] left-3">
                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                            0 Lesson
                        </span>
                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                            0 Time
                        </span>
                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                            0 Comments
                        </span>
                    </div>
                </div>
                <div className="px-3 py-4">
                    <h3 className="text-base font-semibold mb-8">{title}</h3>
                    <div className="flex mb-[25px]">
                        <span className="mr-7">{level}</span>
                        <ul className="flex items-center">
                            {[avt1, avt2, avt3, avt4].map((item, index) => (
                                <li key={index} style={{ transform: `translateX(-${index * 12}px)` }}>
                                    <Image
                                        width={50}
                                        height={50}
                                        className="w-[30px] h-[30px] rounded-[50%]"
                                        src={item}
                                        alt="image avatar"
                                    ></Image>
                                </li>
                            ))}
                            <li className="translate-x-[-40px]">
                                <span className="p-2 text-center text-xs text-white rounded-[50%] bg-[#7D7979]">
                                    +5
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <span className="text-sm font-semibold">{price}</span>
                            <span className="mx-2">/</span>
                            <span className="text-[#888888] font-semibold text-xs">lifetime</span>
                        </div>
                        <Button>{author}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
