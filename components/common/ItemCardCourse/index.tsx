import { IDataCardCourse } from "@/model/course";
import Button from "../Button";
import Image from "next/image";

interface IItemCardCourseProps {
    dataCard: IDataCardCourse;
}

function ItemCardCourse({ dataCard }: IItemCardCourseProps) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-3 cursor-pointer">
            <div className="flex flex-col shadow-lg rounded-[5px] h-full 2xl:h-auto">
                <div className="h-[50%] relative">
                    <Image src={dataCard.srcImage} alt="course image" className="w-full h-full"></Image>
                    <div className="flex absolute gap-x-1 bottom-[10px] left-3">
                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                            {dataCard.info[0].lesson} Lesson
                        </span>
                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                            {dataCard.info[1].time} Time
                        </span>
                        <span className="py-2 px-2 2xl:px-3 rounded-[20px] bg-[#f3f3f3] font-semibold text-xs 2xl:text-sm">
                            {dataCard.info[2].comment} Comments
                        </span>
                    </div>
                </div>
                <div className="px-3 py-4">
                    <h3 className="text-base font-semibold mb-8">{dataCard.title}</h3>
                    <div className="flex mb-[25px]">
                        <span className="mr-7">Beginner</span>
                        <ul className="flex items-center">
                            {dataCard.avatar.map((itemAvt, index) => (
                                <li key={index} style={{ transform: `translateX(-${index * 12}px)` }}>
                                    <Image
                                        className="w-[30px] h-[30px] rounded-[50%]"
                                        src={itemAvt}
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
                            <span className="text-sm font-semibold">{dataCard.price}</span>
                            <span className="mx-2">/</span>
                            <span className="text-[#888888] font-semibold text-xs">{dataCard.priceType}</span>
                        </div>
                        <Button>{dataCard.author}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCardCourse;
